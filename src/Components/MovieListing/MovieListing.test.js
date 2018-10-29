import fetch from '../__mock__/fetch.js';
import MovieListing from './MovieListing.js';
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

global.fetch = fetch;

describe('MovieListing component', () => {
  describe('when rendered', () => {
    it('should make a Api call', async () => {
      const fetchSpy = jest.spyOn(window, 'fetch');
      const movieListing = await shallow(
        <MovieListing />
      );
      expect(fetchSpy).toBeCalled();
    });
  });
});
