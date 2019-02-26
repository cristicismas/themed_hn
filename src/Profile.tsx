import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router';
import { apiCall } from './services/api';
import styled from 'styled-components';

const StyledField = styled.div`
  display: flex;
  margin: 7px;

  .label {
    width: 100px;
  }

  .value {
    width: 100%;
  }
`;

interface IProps extends RouteComponentProps<any> {}

interface IState {
  id: string;
  created: number;
  karma: number;
  about: string;
  submitted: number[];
}

class Profile extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      id: '',
      created: 0,
      karma: 0,
      about: '',
      submitted: []
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    // fetch user data.
    apiCall('user/' + id).then(res => {
      this.setState({ ...res });
    });
  }

  render() {
    const { id, created, karma, about } = this.state;

    return (
      <div className='profile'>
        <StyledField className='field'>
          <div className='label'>user:</div>
          <div className='value'>{id}</div>
        </StyledField>

        <StyledField className='field'>
          <div className='label'>created:</div>
          <div className='value'>{created}</div>
        </StyledField>

        <StyledField className='field'>
          <div className='label'>karma:</div>
          <div className='value'>{karma}</div>
        </StyledField>

        <StyledField className='field'>
          <div className='label'>about:</div>
          <div className='value' dangerouslySetInnerHTML={{ __html: about }} />
        </StyledField>
      </div>
    );
  }
}

export default Profile;
