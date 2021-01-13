import { gql } from 'apollo-server';

const Vehicle = gql`
  """
  Highlevel vehicle data.
  """
  type Vehicle {

    drivetrain: Vehicle_Drivetrain
  }

  """
  Drivetrain data for internal combustion engines, transmissions, electric motors, etc.
  """
  type Vehicle_Drivetrain {

    fuelSystem: Vehicle_Drivetrain_FuelSystem

    internalCombustionEngine: Vehicle_Drivetrain_InternalCombustionEngine

    transmission: Vehicle_Drivetrain_Transmission
  }

  """
  Fuel system data.
  """
  type Vehicle_Drivetrain_FuelSystem {
    """
    Current consumption in liters per 100 km.
    """
    instantConsumption: Float
      @hasPermissions(
        permissions: ["Vehicle.Drivetrain.FuelSystem.InstantConsumption_READ"]
      )

    """
    Level in fuel tank as percent of capacity. 0 = empty. 100 = full.
    """
    level: Int
      @hasPermissions(permissions: ["Vehicle.Drivetrain.FuelSystem.Level_READ"])

    """
    Capacity of the fuel tank in liters
    """
    tankCapacity: Int
      @hasPermissions(
        permissions: ["Vehicle.Drivetrain.FuelSystem.TankCapacity_READ"]
      )
  }


  """
  Engine-specific data, stopping at the bell housing.
  """
  type Vehicle_Drivetrain_InternalCombustionEngine {

    engine: Vehicle_Drivetrain_InternalCombustionEngine_Engine
  }

  """
  Engine signals
  """
  type Vehicle_Drivetrain_InternalCombustionEngine_Engine {
    """
    Engine speed measured as rotations per minute.
    """
    speed: Int
      @hasPermissions(
        permissions: [
          "Vehicle.Drivetrain.InternalCombustionEngine.Engine.Speed_READ"
        ]
      )
  }

  """
  Transmission-specific data, stopping at the drive shafts.
  """
  type Vehicle_Drivetrain_Transmission {
    """
    Current gear. 0=Neutral. -1=Reverse
    """
    gear: Int
      @hasPermissions(
        permissions: ["Vehicle.Drivetrain.Transmission.Gear_READ"]
      )
  }
`;

export default Vehicle;
