to do api

router.get('/todo', async (req: Request, res: Response) => {
    const todos = await prisma.todo.findMany();
    res.json(todos);
});

router.post('/todo', async (req: Request, res: Response) => {
    const { title } = req.body;
    const todo = await prisma.todo.create({
        data: {
            title
        }
    });
    res.json(todo);
});

router.put('/todo/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const { title, done } = req.body;
    const todo = await prisma.todo.update({
        where: {
            id: parseInt(id)
        },
        data: {
            title,
            done
        }
    });
    res.json(todo);
});

router.delete('/todo/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const todo = await prisma.todo.delete({
        where: {
            id: parseInt(id)
        }
    });
    res.json(todo);
});