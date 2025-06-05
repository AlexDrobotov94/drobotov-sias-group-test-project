import { Typography } from "../../../shared/components/typograpy";
// TODO: добавить алиасы
export function MainPage() {
  return (
    <div>
      <Typography variant="h1" color="primary">
        Typography H1 primary
      </Typography>

      <Typography variant="h1" color="successForeground">
        Typography H1 successForeground
      </Typography>
      <Typography variant="h1" color="successBackground">
        Typography H1 successBackground
      </Typography>

      <Typography variant="h1" color="doneForeground">
        Typography H1 doneForeground
      </Typography>
      <Typography variant="h1" color="doneBackground">
        Typography H1 doneBackground
      </Typography>

      <Typography variant="h1" color="warningForeground">
        Typography H1 warningForeground
      </Typography>
      <Typography variant="h1" color="warningBackground">
        Typography H1 warningBackground
      </Typography>

      <Typography variant="h1" color="errorForeground">
        Typography H1 errorForeground
      </Typography>
      <Typography variant="h1" color="errorBackground">
        Typography H1 errorBackground
      </Typography>
    </div>
  );
}
