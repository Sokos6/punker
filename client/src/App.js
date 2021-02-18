import './App.css';
import Web3Data from './components/Web3Data';
import { useWeb3 } from '@openzeppelin/network/react';

const infuraProjectId = '3c3e47b42c5749f7abd077faaa924e7f';

function App() {
    const web3Context = useWeb3(
        `wss://mainnet.infura.io/ws/v3/${infuraProjectId}`
    );
    return (
        <div className="App">
            <div>
                <h1>Cryptofrequency</h1>
                <Web3Data title="Web3 Data" web3Context={web3Context} />
            </div>
        </div>
    );
}

export default App;
