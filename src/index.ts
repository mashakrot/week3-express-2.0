import express, {Request, Response, Router} from "express"
import fs from "fs"
import { compile } from "morgan"

const router: Router = Router()

let numbers: string[] = []

// fs.readFile("data/poems.json", "utf8", (err: NodeJS.ErrnoException | null, data: string) => {
//     if (err) {
//         console.error(err)
//         return
//     }
//     try {
//         poems = JSON.parse(data)
//     } catch (error: any) {
//         console.error(`Error parsing JSON: ${error}`)
//     }
// })

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
    let numbers: number[] = req.body


    // if (!Array.isArray(numbers) || !numbers.every(num => typeof num === 'number')) {
    //     return res.status(400).json({ error: 'Invalid input. Please provide an array of numbers.' });
    // }
   
    const sum: number = numbers.reduce((total, num) => total + num, 0);

  // Send back the sum in a JSON object
    res.json({ sum });
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