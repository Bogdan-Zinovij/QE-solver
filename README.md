## What is QE-solver?

Quadratic Equation Solver - it is a tool for solving quadratic equations using a terminal. There are several ways to enter data: using a file with coefficients or entering data into the console

## How to assemble a project:

- Copy the repository with a command in a terminal:

```
git clone https://github.com/Bogdan-Zinovij/QE-solver
```

- Install the required components with a command

```
npm i
```

- Run the project with a command

```
// For interactive mode:
node ./src/main
```

OR

```
// For file mode:
node ./src/main {filepath}
```

## Description of the program:

There are two program modes: interactive and file mode.

File mode is started if the user passed the path to the file parameter together with the start command. The input file should consist of three numeric values separated by a space and a newline at the end.
If the user does not pass any parameter with the start command, interactive mode will be started. In interactive mode, the user must enter numeric values of the coefficients.

### Link to revert commit:

https://github.com/Bogdan-Zinovij/QE-solver/commit/ff0c8729533eb4f214de3fa3cea880d320da5bf7
