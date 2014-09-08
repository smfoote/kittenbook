var kbValues = {
  projectName: 'kittenbook',
  versionNumber: '0.0.1',
  areaCodes: {
    '408': 'Silicon Valley',
    '702': 'Las Vegas',
    '801': 'Northern Utah',
    '765': 'West Lafayette',
    '901': 'Memphis',
    '507': 'Rochester, MN'
  }
};

/**
 * Return the area codes object from kbValues
 * @method getAreaCodes
 * @return {object}
 */
function getAreaCodes() {
  return kbValues.areaCodes;
}
