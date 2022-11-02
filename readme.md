# ThingsBoard Device Emulator

Server to emulate a device telemetry connected to ThingsBoard. Easy to create and modify new generator functions and classes.

## Geting Started

Download the project dependencies.

```
npm install
yarn install
```

Create a `.env.dev` file in the root directory of the project.

```
ACCESS_TOKEN_FIRST_DEVICE="<your access token>"
TB_HOST_ADDRESS="<your host address>"
```

Run the emulator.

```
npm run dev

--- or ---

yarn dev
```

## Generator Functions/Classes

### Random Generator

Outputs a random number between the minimum and maximum values.

```
randomGenerator(min: number, max: number)
```

### Random Activation Generator

Outputs radomly if the device is activated or not.

It's possible to set a minimum activation time and a maximum inactive time.

```
randomActivationGenerator(min: number = 0, max: number = 3)
generate()
```

### Random Summatory Generator

Outputs a summatory of random numbers between the positive or negative variation.

It's possible to set a minimum and maximum value for the summatory to prevent the summatory to be too big or too small.

```
randomSummatoryGenerator(initValue: number, min: number = 0, max: number = 100)
generate(variation: number)
```
