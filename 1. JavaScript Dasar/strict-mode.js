function useStrictMode(){
    'use strict'
    const author = {
        firstName: "Yoga "
    };

    // error
    with (author) {
        console.log(author);
    }
};

useStrictMode();