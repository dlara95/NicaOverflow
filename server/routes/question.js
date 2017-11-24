import express from 'express'
import { log } from 'core-js/library/web/timers';

const app = express.Router()

const question = {
	_id: 1,
	title: '¿Como reutilizo un componente en Android?',
	description: 'Miren esta es mi pregunta',
	createdAt: new Date(),
	icon: 'devicon-android-plain',
	answers: [],
	user: {
		firstName: 'Dayana',
		lastName: 'Lara',
		email: 'dayana@mail.com',
		password: '123456'
	}
}

const questions = new Array(10).fill(question)


// GET	/api/questions
app.get('/', (req, res) => res.status(200).json(questions))


// /api/questions/:id

app.get('/:id', (req, res) => {
	const { id }= req.params
	const q = questions.find(({ _id }) => _id === +id)
	res.status(200).json(q)
})

// POST /api/questions
app.post('/', (req, res) => {
	const question = req.body
	question._id = +new Date()
	question.user = {
		email: 'dayana@mail.com',
		password: '123456',
		firstName: 'Dayana',
		lastName: 'Lara'
	}
	question.createdAt = new Date()
	question.answers = []
	questions.push(question)
	res.status(201).json(question)
})

export default app