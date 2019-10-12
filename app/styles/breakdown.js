'use strict';

import { DynamicStyleSheet, DynamicValue } from 'react-native-dark-mode'

const breakdown = DynamicStyleSheet({
  container: {
    backgroundColor: '#ddd',
    paddingBottom: 8,
    paddingTop: 8,
  },
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    paddingBottom: 2,
    paddingTop: 2,
  },
  grey: {
    // TODO: system background - needs semantic colors
    backgroundColor: '#ccc',
  },
  lightRed: {
    backgroundColor: DynamicValue('#ffeeeeff', '#550000ff'),
  },
  red: {
    backgroundColor: DynamicValue('#ffddddff', '#660000ff'),
  },
  lightBlue: {
    backgroundColor: DynamicValue('#eeeeffff', '#000055ff'),
  },
  blue: {
    backgroundColor: DynamicValue('#ddddffff', '#000066ff'),
  },
  row: {
    flexDirection: 'row',
  },
  infoRow: {
    minHeight: 40,
    marginBottom: 2,
  },
  font: {
    fontSize: 12,
    textAlign: 'center'
  },
  imageSize: {
    width: 24,
    height: 24
  },
  total: {
    fontWeight: 'bold',
  },
});

export default breakdown;
