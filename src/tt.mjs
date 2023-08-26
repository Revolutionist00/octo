import { input, confirm } from '@inquirer/prompts';

const answers = {
  firstName: await input({ message: "What's your first name?" }),
  allowEmail: await confirm({ message: 'Do you allow us to send you email?' }),
};

console.log(answers.firstName);
