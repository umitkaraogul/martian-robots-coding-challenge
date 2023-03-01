import { useState } from 'react';
import { Container } from '@mui/material';
import { RobotPositionInput } from '../components/RobotPositionInput';
import { RobotPositionOutput } from '../components/RobotPostionOutput';
import { ErrorDialog } from '../components/ErrorDialog';
import executeCommand from '../martian/instructionExecuter';

const MarsScreen = () => {
  const [output, setOutput] = useState<string[]>([]);
  const [error, setError] = useState<string>('');
  const instructionHandler = (value: string) => {
    try {
      const results = executeCommand(value);
      setOutput(results);
      console.log(results.join('\n'));
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      }
    }
  };
  const clearHandler = () => {
    setOutput([]);
  };
  return (
    <>
      <Container
        maxWidth='sm'
        sx={{
          display: 'flex'
        }}
      >
        <RobotPositionInput
          runClick={instructionHandler}
          clearClick={clearHandler}
        />

        <RobotPositionOutput values={output} />
      </Container>
      {error && (
        <ErrorDialog
          error={error}
          closeDialog={() => {
            setError('');
          }}
        />
      )}
    </>
  );
};

export default MarsScreen;
