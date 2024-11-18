import express, {Request, Response, Router} from "express"
import fs from "fs"
import { compile } from "morgan"

const router: Router = Router()

let numbers: string[] = []

type TUser = {
    name: string;
    email: string;
};

const users: TUser[] = [];


router.use((req, res, next) => {
    express.json()(req, res, next);
});

router.get('/hello', (req: Request, res: Response) => {
    res.json({ msg: "Hello world!" });
});

router.get('/echo/:id', (req: Request, res: Response) => {
    const { id } = req.params;
    res.json({ id });
});


router.post("/sum", (req: Request, res: Response) => {
    // const { numbers } = req.body;
    const numbers: number[] = req.body.numbers
    console.log(numbers)

    // if (!Array.isArray(numbers) || !numbers.every(num => typeof num === 'number')) {
    //     return res.status(400).json({ error: 'Invalid input. Please provide an array of numbers.' });
    // }
   
    const sum: number = numbers.reduce((total, num) => total + num, 0);
    res.json({ sum });
});


router.post("/users", (req: Request, res: Response) => {
    const { name, email } = req.body

    const newUser: TUser = { name, email }

    users.push(newUser)

    res.json({ message: `User ${name} with email ${email} was submitted successfully.` });
});


// router.get("/:id", (req: Request, res: Response) => {
//     let id: number = parseInt(req.params.id)
//     try{
//         res.json(poems[id])
//     } catch (error: any) {
//         console.error(`Error parsing JSON: ${error}`)
//     }
   
// })





export default router