
import {render,screen} from '@testing-library/react';
import Sup from './Sup';


  
   





test("button should be rendered", () => {
    render(<Sup />);
    const b = screen.getByRole("button");
    expect(b).toBeInTheDocument;
  });
