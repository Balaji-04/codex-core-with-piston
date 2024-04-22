# CodeX: Online Code runtime envoirment using PISTON API

CodeX is a simple web application that provides an online code execution environment using the PISTON API. With CodeX, users can submit their code snippets written in various programming languages and receive the output or result of the code execution.

## Features

- **Code Execution**: Submit your code in a variety of programming languages and receive the output.
- **Supported Languages**: CodeX supports multiple programming languages including Python, JavaScript, Java, C++, and more.

## How to Use

1. Install the required packages using
   `npm  install`
2. run the application by using the command
   ` npm run dev`
3. Send a POST request to `/execute` route in the below specified format.

````{
 "lang": "python",
 "typedcode": "print('Hello\\n world!')"
}```
4. The response JSON will look like,
```{
    "status": "success",
    "data": {
        "language": "python",
        "version": "3.10.0",
        "run": {
            "stdout": "Hello\n world!\n",
            "stderr": "",
            "code": 0,
            "signal": null,
            "output": "Hello\n world!\n"
        }
    }
}
````

## About PISTON API

PISTON is an open-source execution engine for various programming languages. It provides a simple API for executing code in a secure sandbox environment. The PISTON API supports a wide range of programming languages and allows developers to easily integrate code execution capabilities into their applications.

## Technologies Used

- Node.js
- **API Integration**: PISTON API

## Contributing

Contributions to CodeX are welcome! If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request on the GitHub repository.

## License

This project is licensed under the MIT License.

## Acknowledgements

- Thanks to the creators of PISTON for providing the powerful code execution API.
