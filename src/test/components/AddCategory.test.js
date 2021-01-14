import React from 'react';
import { shallow } from 'enzyme/build';
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas en <AddCategory/>', () => {
    
    const setCategories = jest.fn();
    let wraper = shallow(<AddCategory setCategories={setCategories} />);
    
    beforeEach( () => {
        jest.clearAllMocks();
        wraper = shallow(<AddCategory setCategories={setCategories} />);
    });

    test('debe de mostrarse correctamente', () => {
    
        expect(wraper).toMatchSnapshot();
    });

    test('debe de cambiar la caja de texto ', () => {
        const input = wraper.find('input');
        const value = 'Pokemon';

        input.simulate('change', { target: { value } });

        expect( wraper.find('p').text().trim()).toBe( value );
    });

    test('No debe de postear la informacion con onsubmit ', () => {
        wraper.find('form').simulate('submit', { preventDefault(){} });

       expect( setCategories ).not.toHaveBeenCalled(); 
    });

    test('debe de llamar el setCategories y limpiar la caja de texto ', () => {
        
        const value = 'Hola mundo';

        //1. simular el inputChange
        wraper.find('input').simulate('change', { target: {value} });

        //2. simular el submit
        wraper.find('form').simulate('submit', { preventDefault(){} });

        //3. setCategories se debe de haber llamado
        expect( setCategories ).toHaveBeenCalled();
        expect( setCategories ).toHaveBeenCalledTimes(1);
        expect( setCategories ).toHaveBeenCalledWith( expect.any(Function) );

        //4. el valor del input debe estas vacio
        expect(wraper.find('input').prop('value')).toBe('');
    }); 
    
    
});
