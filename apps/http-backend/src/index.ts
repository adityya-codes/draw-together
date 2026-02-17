import express from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "@repo/backend-common/config";
import { middleware } from "./middleware";
import { CreateUserSchema, SigninSchema, CreateRoomSchema } from "@repo/common/types";
import { prismaClient } from "@repo/db/client";
import bcrypt from "bcrypt";

const app = express()
app.use(express.json())

app.post("/signup", async (req, res) => {
    const parsedData = CreateUserSchema.safeParse(req.body);

    if (!parsedData.success) {
        return res.status(400).json({
            message: "Invalid inputs"
        });
    }

    try {
    
        const existingUser = await prismaClient.user.findUnique({
            where: {
                email: parsedData.data.email
            }
        });

        if (existingUser) {
            return res.status(409).json({
                message: "User already exists"
            });
        }

    
        const hashedPassword = await bcrypt.hash(
            parsedData.data.password,
            10 
        );

        const user = await prismaClient.user.create({
            data: {
                email: parsedData.data.email,
                password: hashedPassword,
                username: parsedData.data.username
            }
        });

    } catch (error) {
        res.status(500).json({
            message: "Something went wrong"
        });
    }
});


app.post("/signin", async (req, res) => {
    const parsedData = SigninSchema.safeParse(req.body);
    if (!parsedData.success) {
        return res.status(400).json({ message: "Invalid inputs" });
    }

    const user = await prismaClient.user.findUnique({
        where: { email: parsedData.data.email }
    });

    if (!user) {
        return res.status(403).json({ message: "Invalid credentials" });
    }

    const passwordValid = await bcrypt.compare(
        parsedData.data.password,
        user.password
    );

    if (!passwordValid) {
        return res.status(403).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
        { userId: user.id },
        JWT_SECRET,
        { expiresIn: "1h" }
    );

    res.json({ token });
});


app.post("/room", middleware, async function (req, res) {
    const parsedData = CreateRoomSchema.safeParse(req.body);
    if (!parsedData.success) {
        res.json({
            message: "Incorrect inputs"
        })
        return;
    }

    try {
        //@ts-ignore
        const userId = req.userId;
        const room = await prismaClient.room.create({
            data: {
                slug: parsedData.data.name,
                adminId: userId
            }
        })
        res.json({
            roomId: room.id
        })


    } catch (e) {
          res.status(411).json({
            message: "room already exists"
          })
    }

})

app.get("/chats/:roomId", async (req, res) => {
    try {
        const roomId = Number(req.params.roomId);
        console.log(req.params.roomId);
        const messages = await prismaClient.chat.findMany({
            where: {
                roomId: roomId
            },
            orderBy: {
                id: "desc"
            },
            take: 50
        });

        res.json({
            messages
        })
    } catch(e) {
        console.log(e);
        res.json({
            messages: []
        })
    }
    
})

app.get("/room/:slug", async (req, res) => {
    const slug = req.params.slug;
    const room = await prismaClient.room.findFirst({
        where: {
            slug
        }
    });

    res.json({
        room
    })
})


app.listen(3001);