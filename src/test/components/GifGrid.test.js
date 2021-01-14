import React from 'react';
import { shallow } from "enzyme/build";
import GifGrid from "../../components/GifGrid";
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');


describe('pruebas en el <GifGrid/>', () => {
    const category = 'Hola mundo';

    test('debe de mostrar correctamente <GifGrid/>', () => {
        
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wraper = shallow( <GifGrid category={category} />);
        expect( wraper ).toMatchSnapshot();
    });

    test('debe de mostrar items cuando se cargan imagenes useFetchGifs ', () => { 
        
        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/cualquier/cosa.jpg',
            title: 'un Title'
        },
        {
            id: '123',
            url: 'https://localhost/cualquier/cosa2.jpg',
            title: 'Otro Title'
        }]

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wraper = shallow( <GifGrid category={category} />);
        expect(wraper).toMatchSnapshot();
        expect(wraper.find('p').exists()).toBe(false);
        
        expect(wraper.find('GifGridItem').length).toBe( gifs.length);
    });

        
});
