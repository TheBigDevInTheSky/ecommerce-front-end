import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from './components'
import { ExamplePage } from './components'

import './App.css'

const App: React.FC = () => (
    <BrowserRouter>
        <Routes>
            {/* Create a <Route /> with a path for any additional route we may need*/}
            <Route path="/" element={<HomePage />} />
            <Route path="/examplePage" element={<ExamplePage />} />
        </Routes>
    </BrowserRouter>
)

export default App
