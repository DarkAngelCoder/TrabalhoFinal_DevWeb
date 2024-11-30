import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import Home from './pages/Home';
import Clientes from './pages/Clientes';  
import Produtos from './pages/Produtos';
import Pedidos from './pages/Pedidos';
import { Home as HomeIcon } from '@mui/icons-material';  
import Rodape from './components/Rodape'; 

const App = () => {
  return (
    <Router>
      <AppBar position="static" sx={{ backgroundColor: '#a5a0f1' }}> 
        <Toolbar>
          <Box display="flex" width="100%" justifyContent="space-between">
            <Button
              color="inherit"
              component={Link}
              to="/"
              startIcon={<HomeIcon />}
              sx={{
                color: '#fff', 
                '&:hover': { backgroundColor: '#8e24aa' }, 
                border: '1px solid #fff',
                borderRadius: '5px', 
                padding: '6px 12px',
              }}
            >
              Início
            </Button>
            <Box>
              <Button
                color="inherit"
                component={Link}
                to="/clientes"
                sx={{
                  color: '#fff',
                  '&:hover': { backgroundColor: '#8e24aa' },
                  border: '1px solid #fff',
                  borderRadius: '5px',
                  padding: '6px 12px',
                }}
              >
                Clientes
              </Button>
              <Button
                color="inherit"
                component={Link}
                to="/produtos"
                sx={{
                  color: '#fff',
                  '&:hover': { backgroundColor: '#8e24aa' },
                  border: '1px solid #fff',
                  borderRadius: '5px',
                  padding: '6px 12px',
                }}
              >
                Produtos
              </Button>
              <Button
                color="inherit"
                component={Link}
                to="/pedidos"
                sx={{
                  color: '#fff',
                  '&:hover': { backgroundColor: '#8e24aa' },
                  border: '1px solid #fff',
                  borderRadius: '5px',
                  padding: '6px 12px',
                }}
              >
                Pedidos
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/pedidos" element={<Pedidos />} />
      </Routes>
      <Rodape />
    </Router>
  );
};

export default App;
