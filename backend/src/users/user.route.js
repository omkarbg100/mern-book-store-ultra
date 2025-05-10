import express from 'express';
import User from './user.model.js';
import jwt from 'jsonwebtoken';

const userRouter = express.Router();

const JWT_SECRET = process.env.JWT_SECRET_KEY;

userRouter.post("/admin", async (req, res) => {
    const { username, password } = req.body;
    try {
        const admin = await User.findOne({ username });
        if (!admin) {
            return res.status(404).send({ message: "Admin not found!" });
        }

        if (admin.password !== password) {
            return res.status(401).send({ message: "Invalid password!" });
        }

        const token = jwt.sign(
            { id: admin._id, username: admin.username, role: admin.role },
            JWT_SECRET,
            { expiresIn: "1h" }
        );

        return res.status(200).json({
            message: "Authentication successful",
            token,
            user: {
                username: admin.username,
                role: admin.role
            }
        });

    } catch (error) {
        console.error("Failed to login as admin", error);
        return res.status(500).send({ message: "Server error while logging in" });
    }
});

export default userRouter;
