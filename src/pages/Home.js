import React from 'react';
import styled from 'styled-components';
import AddButton from '../components/AddButton';

function Home(props) {
	return (
		<Wrapper>
			<AddButton />
		</Wrapper>
	);
}

export default Home;

const Wrapper = styled.div`
	height: 100vh;
	width: 100vw;
	display: flex;
	margin: 0px;
`;
