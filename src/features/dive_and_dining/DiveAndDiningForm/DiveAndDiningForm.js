import React, {Component} from 'react';
import {Button, Form, Segment} from "semantic-ui-react";

class DiveAndDiningForm extends Component {
    render() {
        const {cancelFormOpen} = this.props
        return (
            <Segment>
                <Form>
                    <Form.Field>
                        <label>Dive or Dining Title</label>
                        <input placeholder={'Title'}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Description</label>
                        <input placeholder={'Description'}/>
                    </Form.Field>
                    <Form.Field>
                        <label>City</label>
                        <input placeholder={'City'}/>
                    </Form.Field>
                    <Form.Field>
                        <label>State</label>
                        <input placeholder={'State'}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Country</label>
                        <input placeholder={'Country'}/>
                    </Form.Field>

                    <Button positive type={'submit'}>
                        Submit
                    </Button>
                    <Button type={'button'} onClick={cancelFormOpen}>Cancel</Button>
                </Form>
            </Segment>
        );
    }
}

export default DiveAndDiningForm;