import { capitalize } from '../src/capitalize.js';

if (capitalize('hello') !== 'Hello') {
  throw new Error('Кто-то сломал наш тест!');
}

if (capitalize('') !== '') {
  throw new Error('Сегодня вы не сладкая булочка :(');
}

console.log('Поздравляю! Вы - сладкая булочка!');
