const cld = require('@axosoft/cld');

module.exports = {
  async detect(text) {
    const result = await cld.detect(text);
    if (!result.reliable || result.languages[0].percent < 85) {
      throw new Error('Not enough reliable text');
    }

    return result.languages[0].code;
  }
}
