import { useEffect, useState } from 'react';

import './App.css'

import { Header } from './components/Header';
import { Search } from './components/Search';
import { Filter } from './components/Filter'
import { Card } from './components/Card';
import { Pagination } from './components/Pagination';

const App = () => {
	const [url, setUrl] = useState('https://rickandmortyapi.com/api/character/');

	const [data, setData] = useState({
		results: [],
		loading: true,
		info: {}
	});

	const [filterOptions, setFilterOptions] = useState({
		status: '',
		specie: '',
		gender: ''
	});

	useEffect(() => {
		setUrl(`https://rickandmortyapi.com/api/character/?status=${filterOptions.status}&species=${filterOptions.specie}&gender=${filterOptions.gender}`);
	}, [filterOptions])

	useEffect(() => {
		fetch(url)
			.then((res) => {
				return res.json()
			})
			.then((data) => {
				setData({ results: data.results, loading: false, info: data.info });
			}).catch((err) => {
				throw new Error(err)
			})
	}, [url]);

	const { results, loading, info } = !!data && data;

	const search = (term) => {
		setUrl(`https://rickandmortyapi.com/api/character/?name=${term}`);
	}

	const searchByFilter = ({ status = filterOptions.status, specie = filterOptions.specie, gender = filterOptions.gender }) => {
		setFilterOptions({
			specie,
			gender,
			status
		})
	}

	const nextPage = () => {
		info.next !== null && setUrl(`${info.next}`)
	}

	const prevPage = () => {
		info.prev !== null && setUrl(`${info.prev}`)
	}

	return (
		<>
			<Header />
			<Search search={search} />
			<div className='container-main'>
				<Filter searchByFilter={searchByFilter} />
				{
					results ? (
						<Card results={results} loading={loading} />
					) : (
						<div className='cards'>
							<h2> No data found</h2>
						</div>
					)
				}
			</div>

			<Pagination nextPage={nextPage} prevPage={prevPage} />
		</>
	)
}

export default App;
