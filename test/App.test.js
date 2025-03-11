import App from "../App"
import { render, fireEvent, waitFor , screen } from '@testing-library/react-native';


describe('Wether the adding works', ()=>{
it('', ()=>{
    render(<App />)
 screen.getRole('TouchableOpacity')
 const input = screen.getByPlaceholderText('/Add a task /i');
 expect(input).toBeTruthy();
    const addButton = screen.getByText('Add');
    expect(addButton).toBeTruthy();

    const taskText = 'Buy groceries';
    fireEvent.changeText(input, taskText);
    
    fireEvent.press(addButton);
    
    const addedTask = screen.getByText(taskText);
    expect(addedTask).toBeTruthy();
    
    expect(input.props.value).toBe('');

}
)

})
test('edits a task when edit button is pressed', () => {
    const { getByPlaceholderText, getByText, getAllByText } = render(<App />);
    
    
    const input = getByPlaceholderText('Add a task...');
    const addButton = getByText('Add');
    fireEvent.changeText(input, 'Task to edit');
    fireEvent.press(addButton);
    const editButton = getByText('Edit');
    fireEvent.press(editButton);
    
    expect(input.props.value).toBe('Task to edit');

    fireEvent.changeText(input, 'Edited task');
    const updateButton = getByText('Update');
    fireEvent.press(updateButton);
    const editedTask = getByText('Edited task');
    expect(editedTask).toBeTruthy();
  });
