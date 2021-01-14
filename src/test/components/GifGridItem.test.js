import { shallow } from 'enzyme/build';
import React from 'react';
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas en <GifGridItem/>', () => {

    const title = 'A title';
    const url = 'https://localhost/a/image.gif';
    const wraper = shallow(<GifGridItem title={title} url={url} />);

    test('debe de mostrar <GifGridItem/> correctamente ', () => {
      
        expect( wraper ).toMatchSnapshot();
    });
    
    test('debe de tener un parrafo con el title ', () => {
        
        const p = wraper.find('p');

        expect(p.text().trim()).toBe(title);
    });

    test('debe de tener la imagen igual al url y alt de los props ', () => {
        
        const img = wraper.find('img');
        // console.log(img.props('src'));

        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    });

    test('debe tener animate_fadeIn ', () => {
        
        const div = wraper.find('div');
        const className = div.prop('className');
        
        // console.log(div.prop('className'));
        expect(className.includes('animate__fadeInLeft')).toBe(true);
    })
    
    
    
    
})