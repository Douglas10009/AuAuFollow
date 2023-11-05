// -- 
// Esse arquivo serve para validar os dados
// -- 

const validateFieldNome = (request, response, next) => {
    const {body} = request;

    if (body.nome === undefined) {
        return response.status(400).json({message: 'The field nome is required'});
    }

    if (body.nome === '' || body.nome === ' ') {
        return response.status(400).json({ message: 'The Field nome cannot be empty' });
    }

    // Passar para o próximo
    next();
};

const validateFieldEmail = (request, response, next) => {
    const { body } = request;

    if (body.email === undefined) {
        return response.status(400).json({ message: 'The field email is required' });
    }

    if (body.email === '' || body.email === ' ') {
        return response.status(400).json({ message: 'The Field email cannot be empty' });
    }
    // Passar para o próximo
    next();
};

const validateFieldSenha = (request, response, next) => {
    const { body } = request;

    if (body.senha === undefined) {
        return response.status(400).json({ message: 'The field senha is required' });
    }

    if (body.senha === '' || body.senha === ' ') {
        return response.status(400).json({ message: 'The Field senha cannot be empty' });
    }
    // Passar para o próximo
    next();
};


// Define quais métodos devem ser exportados
module.exports = {
    validateFieldNome,
    validateFieldEmail,
    validateFieldSenha
};