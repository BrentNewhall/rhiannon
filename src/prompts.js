export const prompts = [
    {
        image: 'screenshot0.png',
        answers: [
            'Needs to close a curly brace',
            'Too many closing curly braces',
            'Bad function definition',
            'Function name misspelled',
        ],
        correctAnswer: 0,
    },
    {
        image: 'screenshot1.png',
        answers: [
            'Needs to close a curly brace',
            'Too many closing curly braces',
            'Needs comma',
            'Should be setState() instead of this.state =',
        ],
        correctAnswer: 2,
    },
];

export default prompts;