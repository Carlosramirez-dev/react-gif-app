import React from 'react';
import { shallow } from "enzyme/build";
import GifExpertApp from "../GifExpertApp";



describe('Pruebas con <GifExpertApp/>', () => {

    test('debe de mostrarlo correctamente ', () => {
        
        const wraper = shallow(<GifExpertApp/>);

        expect(wraper).toMatchSnapshot();
    });

    test('debe de mostrar una lista de categorias ', () => {
        
        const categories = ['One Punch', 'Dragon Ball'];
        const wraper = shallow(<GifExpertApp defaultCategories={categories}/>);

        expect(wraper).toMatchSnapshot();
        expect(wraper.find('GifGrid').length).toBe(categories.length);

    })
    
    
});
