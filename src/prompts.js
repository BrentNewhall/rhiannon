export const prompts = [
    {
        image: 'screenshot0.png',
        code: "render()\n  return (\n    <div className='App'>\n      Hello, world\n    </div>\n  );\n}",
        answers: [
            'Needs to add a curly brace',
            'Need to close a curly brace',
            'Need to close the div',
            'Function name misspelled',
        ],
        correctAnswer: 0,
    },
    {
        image: 'screenshot1.png',
        code: "employee = {\n  firstName: 'Alan',\n  lastName: 'Davies'\n  phoneNumber: '301-248-9325',\n  birthDate: '1972-03-28'\n}",
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