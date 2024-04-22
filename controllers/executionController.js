import piston from 'piston-client';
import parseResponse from '.././utilities/parseResponse.js';

const client = piston();
const runtimes = await client.runtimes();

async function execute(req, res) {
    const lang = req.body.lang,code = req.body.typedcode;
    if (!lang || !code){
        res.status(400).json( parseResponse('error', 'Bad Request') );
    }

    const options = {
        stdin: (req.body.stdin != null)?req.body.stdin:"",
        compile_memory_limit: -1,
        run_memory_limit: -1
    };
    
    const result = await client.execute(lang, code, options);
    res.status(200).json(
        parseResponse('success', result)
    );
}

export default execute;