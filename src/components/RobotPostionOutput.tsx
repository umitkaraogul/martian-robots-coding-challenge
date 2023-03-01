import {
  Box,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography
} from '@mui/material';

type RobotPositionOutputProp = {
  values?: string[];
};
export const RobotPositionOutput = ({
  values = []
}: RobotPositionOutputProp) => {
  return (
    <Box sx={{ my: 4, paddingLeft: '10px' }}>
      <Card sx={{ minWidth: 275, minHeight: 350 }}>
        <CardContent>
          <Typography color='text.primary' gutterBottom>
            Output
          </Typography>
          <List
            sx={{ width: '100%', bgcolor: 'background.paper' }}
            aria-label='contacts'
          >
            {values.map((value, index) => (
              <ListItem disablePadding key={`${value}-${index}`}>
                <ListItemButton>
                  <ListItemText primary={value} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </Box>
  );
};
