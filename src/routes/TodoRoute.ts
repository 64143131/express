import express, { Request, Response, Router } from 'express';
import { PrismaClient } from "@prisma/client";
 
const router = Router();
const prisma = new PrismaClient();
 
router .get('/todos', async (req: Request, res: Response) => {
    const todos = await prisma.todo.findMany();
    res.send(todos);
});
router .post('/todos', async (req: Request, res: Response) => {
    const { title } = req.body;
    const todo = await prisma.todo.create({
        data: {
            title
           
        }
    });
    res.send(todo);
});

export default router;