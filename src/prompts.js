export const prompts = [
    {
        code: "render()\n  return (\n    <div className='App'>\n      Hello, world\n    </div>\n  );\n}",
        answers: [
            'Add a curly brace',
            'Remove a curly brace',
            'Close the div',
            'Rename the function',
        ],
        correctAnswer: 0,
    },
    {
        code: "employee = {\n  firstName: 'Alan',\n  lastName: 'Davies'\n  phoneNumber: '301-248-9325',\n  birthDate: '1972-03-28'\n}",
        answers: [
            'Close a curly brace',
            'Remove a curly brace',
            'Add a comma',
            'Change = to =>',
        ],
        correctAnswer: 2,
    },
    {
        code: "employee = {\n  firstName: 'Alan',\n  lastName: 'Davies',\n  phoneNumber: '301-248-9325',\n  birthDate; '1972-03-28'\n}",
        answers: [
            'Remove a curly brace',
            'Change ; to :',
            'Add a comma',
            'Change = to =>',
        ],
        correctAnswer: 1,
    },
];

export default prompts;