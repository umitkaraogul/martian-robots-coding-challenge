import { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  TextField
} from '@mui/material';

type RobotPositionInputProp = {
  runClick: (value: string) => void;
  clearClick: () => void;
  value?: string;
};
export const RobotPositionInput = ({
  value = '',
  runClick,
  clearClick
}: RobotPositionInputProp) => {
  const [textValue, setTextValue] = useState(value);

  return (
    <Box sx={{ my: 4, paddingLeft: '10px' }}>
      <Card>
        <CardContent>
          <TextField
            id='outlined-textarea'
            label='Input'
            placeholder=''
            maxRows={15}
            multiline
            minRows={10}
            value={textValue}
            onChange={({ target }) => setTextValue(target.value)}
          />
        </CardContent>
        <CardActions>
          <Button variant='contained' onClick={() => runClick(textValue)}>
            Run
          </Button>
          <Button variant='contained' onClick={clearClick}>
            Clear
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};
