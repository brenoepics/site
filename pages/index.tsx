import type { NextPage } from 'next';
import { useState } from 'react';
import {
  AppShell,
  Navbar,
  Header,
  Aside,
  Footer,
  Text,
  useMantineTheme,
  Burger,
  MediaQuery,
  Button,
} from '@mantine/core';

const Home: NextPage = () => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <div>
      <div className="header">
        <Header height={70} p="md">
          <div
            style={{ display: 'flex', alignItems: 'center', height: '100%' }}
          >
            <Button variant="default" href="#">
              Home
            </Button>
          </div>
        </Header>
      </div>
      <div className="body">
        <h1 className="title">Sophia Elementaris</h1>
      </div>
    </div>
  );
};

export default Home;
