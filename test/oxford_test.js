var chakram = require('chakram'),
    expect = chakram.expect;

function getOfxordAPI(resource) {
    const baseUrl = 'https://od-api.oxforddictionaries.com/api/v2'
    const app_id = '125f978a';
    const app_key = 'd6309c7c230ea785d4565e5d289dd0a1';

    var response = chakram.get(baseUrl + resource, {
        headers: {
            "Accept": "application/json",
            "app_id": app_id,
            "app_key": app_key
        }
    });
    return response
}

function getWordOrigin(word_id) {
    return getOfxordAPI("/entries/en-gb/" + word_id);
};

function getTranslation(source_lang_translate, target_lang_translate, word_id) {
    const resource = "/translations/" + source_lang_translate + "/" + target_lang_translate + "/" + word_id;
    return getOfxordAPI(resource);
}


describe("Origin of the word API Tests", function () {

    it("origin - Insurance - 200", function () {
        expect(getWordOrigin("Insurance")).to.have.status(200);
        return chakram.wait();
    });


    it("origin - word not found - 404", function () {
        expect(getWordOrigin("NotExistentWord")).to.have.status(404);
        return chakram.wait();
    });


    it("origin - Unknown filter value - 400", function () {
        expect(getWordOrigin("Insurance?lexicalCategory=test")).to.have.status(400);
        return chakram.wait();
    });
});

describe("Translation API Tests", function () {

    it("Test Translation from En to Fr - 200", function () {
        expect(getTranslation('en', 'fr', 'Test')).to.have.status(200);
        return chakram.wait();
    });


    it("Test Translation from En to Fr - 404", function () {
        expect(getTranslation('en', 'fr', 'NotExistentWord')).to.have.status(404);
        return chakram.wait();
    });

    it("Test Translation from En to Fr - 400", function () {
        expect(getTranslation('xx', 'fr', 'Test')).to.have.status(200);
        return chakram.wait();
    });
});
