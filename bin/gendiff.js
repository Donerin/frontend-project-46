#!/usr/bin/env node
import { Command } from 'commander';
const program = new Command();

const command = () => {
  console.log('Hello, World!');
};


program
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .action(command)
  .option('-f, --format <type>', 'output format', 'stylish')
  .parse(process.argv);