import fetch from '../__mock__/fetch.js';
import MovieListing from './MovieListing.js';
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

global.fetch = fetch;

describe('MovieListing component', () => {
   let fetchSpy;
   let movieListing;

  beforeEach( async () => {
    fetchSpy = jest.spyOn(window, 'fetch');
    movieListing = await shallow(
        <MovieListing />
      );
  })

  describe('when rendered', () => {
    it('should make a Api call', () => {
      expect(fetchSpy).toBeCalled();
    });

    it('should return the length of fetched movies', () => {
      expect(movieListing.state('movies').length).toEqual(2);
    });

    it('should return the title of fetched movies', () => {
      expect(movieListing.state('movies')[0].Title).toEqual("The First Movie");
    });
  });
});
