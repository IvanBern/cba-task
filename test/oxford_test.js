const chakram = require('chakram');

const { expect } = chakram;

function getOfxordAPI(resource) {
  const baseUrl = 'https://od-api.oxforddictionaries.com/api/v2';
  const appID = '125f978a';
  const appKey = 'd6309c7c230ea785d4565e5d289dd0a1';

  const response = chakram.get(baseUrl + resource, {
    headers: {
      Accept: 'application/json',
      app_id: appID,
      app_key: appKey,
    },
  });
  return response;
}

function getWordOrigin(wordID) {
  return getOfxordAPI(`/entries/en-gb/${wordID}`);
}

function getTranslation(sourceLangTranslate, targetLangTranslate, wordID) {
  const resource = `/translations/${sourceLangTranslate}/${targetLangTranslate}/${wordID}`;
  return getOfxordAPI(resource);
}

describe('Origin of the word API Tests', () => {
  it('origin - Insurance - 200', () => {
    expect(getWordOrigin('Insurance')).to.have.status(200);
    return chakram.wait();
  });

  it('origin - word not found - 404', () => {
    expect(getWordOrigin('NotExistentWord')).to.have.status(404);
    return chakram.wait();
  });

  it('origin - Unknown filter value - 400', () => {
    expect(getWordOrigin('Insurance?lexicalCategory=test')).to.have.status(400);
    return chakram.wait();
  });
});

describe('Translation API Tests', () => {
  it('Test Translation from En to Fr - 200', () => {
    expect(getTranslation('en', 'fr', 'Test')).to.have.status(200);
    return chakram.wait();
  });

  it('Test Translation from En to Fr - 404', () => {
    expect(getTranslation('en', 'fr', 'NotExistentWord')).to.have.status(404);
    return chakram.wait();
  });

  it('Test Translation from En to Fr - 400', () => {
    expect(getTranslation('xx', 'fr', 'Test')).to.have.status(200);
    return chakram.wait();
  });
});
