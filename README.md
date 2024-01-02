## Local Mount

First, run the development server:

```
docker-compose up --build -d
```

## GitHub Codespaces

Start the application in GitHub Codespaces. Once the virtual machine is ready execute the below command to start your application.

```
docker-compose up --build -d
```
## copy .env file to local
```
 cp -r .env.example .env.development.local
```

## Verify

Open [http://localhost:3000/questions#] with your browser to see the result.