import { gql } from 'apollo-server';

const Vehicle = gql`
  """
  Highlevel vehicle data.
  """
  type Vehicle {
    adas: Vehicle_ADAS

    acceleration: Vehicle_Acceleration

    """
    The time needed to accelerate the vehicle from a given start velocity to a given target velocity.
    """
    accelerationTime: Int

    """
    Ambient air temperature
    """
    ambientAirTemperature: Float

    angularVelocity: Vehicle_AngularVelocity

    """
    Average speed for the current trip
    """
    averageSpeed: Float

    body: Vehicle_Body

    cabin: Vehicle_Cabin

    """
    The available volume for cargo or luggage. For automobiles, this is usually the trunk volume.
    """
    cargoVolume: Int

    chassis: Vehicle_Chassis

    """
    Accumulated drive time in seconds.
    """
    driveTime: Float

    drivetrain: Vehicle_Drivetrain

    """
    The CO2 emissions in g/km.
    """
    emissionsCO2: Int

    """
    Accumulated idle time in seconds.
    """
    idleTime: Float

    """
    Accumulated ignition off time in seconds.
    """
    ignitionOffTime: Float

    """
    Accumulated ignition on time in seconds.
    """
    ignitionOnTime: Float

    """
    Indicates whether the vehicle is stationary or moving
    """
    isMoving: Boolean

    obd: Vehicle_OBD

    """
    The permitted total weight of cargo and installations (e.g. a roof rack) on top of the vehicle.
    """
    roofLoad: Int

    """
    Vehicle speed, as sensed by the gearbox.
    """
    speed: Float

    """
    Odometer reading
    """
    travelledDistance: Float

    """
    Current trip meter reading
    """
    tripMeterReading: Float

    vehicleIdentification: Vehicle_VehicleIdentification
  }

  """
  All Advanced Driver Assist Systems data.
  """
  type Vehicle_ADAS {
    abs: Vehicle_ADAS_ABS

    cruiseControl: Vehicle_ADAS_CruiseControl

    esc: Vehicle_ADAS_ESC

    laneDepartureDetection: Vehicle_ADAS_LaneDepartureDetection

    obstacleDetection: Vehicle_ADAS_ObstacleDetection

    tcs: Vehicle_ADAS_TCS
  }

  """
  Antilock Braking System signals
  """
  type Vehicle_ADAS_ABS {
    """
    Indicates if ABS incurred an error condition. True = Error. False = No Error.
    """
    error: Boolean

    """
    Indicates if ABS is enabled. True = Enabled. False = Disabled.
    """
    isActive: Boolean

    """
    Indicates if ABS is currently regulating brake pressure. True = Engaged. False = Not Engaged.
    """
    isEngaged: Boolean
  }

  """
  Signals from Cruise Control system
  """
  type Vehicle_ADAS_CruiseControl {
    """
    Indicates if cruise control system incurred and error condition. True = Error. False = NoError.
    """
    error: Boolean

    """
    Indicates if cruise control system is enabled. True = Enabled. False = Disabled.
    """
    isActive: Boolean

    """
    Set cruise control speed in kilometers per hour
    """
    speedSet: Float
  }

  """
  Electronic Stability Control System signals
  """
  type Vehicle_ADAS_ESC {
    """
    Indicates if ESC incurred an error condition. True = Error. False = No Error.
    """
    error: Boolean

    """
    Indicates if ECS is enabled. True = Enabled. False = Disabled.
    """
    isActive: Boolean

    """
    Indicates if ESC is currently regulating vehicle stability. True = Engaged. False = Not Engaged.
    """
    isEngaged: Boolean
  }

  """
  Signals from Land Departure Detection System
  """
  type Vehicle_ADAS_LaneDepartureDetection {
    """
    Indicates if lane departure system incurred an error condition. True = Error. False = No Error.
    """
    error: Boolean

    """
    Indicates if lane departure detection system is enabled. True = Enabled. False = Disabled.
    """
    isActive: Boolean

    """
    Indicates if lane departure detection registered a lane departure
    """
    warning: Boolean
  }

  """
  Signals form Obstacle Sensor System
  """
  type Vehicle_ADAS_ObstacleDetection {
    distanceToObject: Vehicle_ADAS_ObstacleDetection_DistanceToObject

    """
    Indicates if obstacle sensor system incurred an error condition. True = Error. False = No Error.
    """
    error: Boolean

    """
    Indicates if obstacle sensor system is enabled. True = Enabled. False = Disabled.
    """
    isActive: Boolean
  }

  """
  Distance signals form Obstacle Sensor System
  """
  type Vehicle_ADAS_ObstacleDetection_DistanceToObject {
    """
    Front left distance to object in meters
    """
    frontLeft: Int

    """
    Front right distance to object in meters
    """
    frontRight: Int

    """
    Rear left distance to object in meters
    """
    rearLeft: Int

    """
    Rear right distance to object in meters
    """
    rearRight: Int
  }

  """
  Traction Control System signals
  """
  type Vehicle_ADAS_TCS {
    """
    Indicates if TCS incurred an error condition. True = Error. False = No Error.
    """
    error: Boolean

    """
    Indicates if TCS is enabled. True = Enabled. False = Disabled.
    """
    isActive: Boolean

    """
    Indicates if TCS is currently regulating traction. True = Engaged. False = Not Engaged.
    """
    isEngaged: Boolean
  }

  """
  Spatial acceleration
  """
  type Vehicle_Acceleration {
    """
    Vehicle acceleration in Y (lateral acceleration).
    """
    lateral: Float

    """
    Vehicle acceleration in X (longitudinal acceleration).
    """
    longitudinal: Float

    """
    Vehicle acceleration in Z (vertical acceleration).
    """
    vertical: Float
  }

  """
  Spatial rotation
  """
  type Vehicle_AngularVelocity {
    """
    Vehicle rotation rate along Y (lateral).
    """
    pitch: Int

    """
    Vehicle rotation rate along X (longitudinal).
    """
    roll: Int

    """
    Vehicle rotation rate along Z (vertical).
    """
    yaw: Int
  }

  """
  All body components.
  """
  type Vehicle_Body {
    """
    Body type code as defined by ISO 3779
    """
    bodyType: String

    hood: Vehicle_Body_Hood

    horn: Vehicle_Body_Horn

    lights: Vehicle_Body_Lights

    mirrors: Vehicle_Body_Mirrors

    raindetection: Vehicle_Body_Raindetection

    """
    Location of the fuel cap or charge port
    """
    refuelPosition: Vehicle_Body_RefuelPosition_Enum

    trunk: Vehicle_Body_Trunk

    windshield: Vehicle_Body_Windshield
  }

  """
  Hood status
  """
  type Vehicle_Body_Hood {
    """
    hood open or closed. True = Open. False = Closed
    """
    isOpen: Boolean
  }

  """
  Horn signals
  """
  type Vehicle_Body_Horn {
    """
    Horn active or inactive. True = Active. False = Inactive.
    """
    isActive: Boolean
  }

  """
  All lights
  """
  type Vehicle_Body_Lights {
    """
    Is backup (reverse) light on
    """
    isBackupOn: Boolean

    """
    Is brake light on
    """
    isBrakeOn: Boolean

    """
    Is front fog light on
    """
    isFrontFogOn: Boolean

    """
    Are hazards on
    """
    isHazardOn: Boolean

    """
    Is high beam on
    """
    isHighBeamOn: Boolean

    """
    Is left indicator flashing
    """
    isLeftIndicatorOn: Boolean

    """
    Is low beam on
    """
    isLowBeamOn: Boolean

    """
    Is parking light on
    """
    isParkingOn: Boolean

    """
    Is rear fog light on
    """
    isRearFogOn: Boolean

    """
    Is right indicator flashing
    """
    isRightIndicatorOn: Boolean

    """
    Are running lights on
    """
    isRunningOn: Boolean
  }

  """
  All mirrors
  """
  type Vehicle_Body_Mirrors {
    left: Vehicle_Body_Mirrors_Left

    right: Vehicle_Body_Mirrors_Right
  }

  """
  Left mirrors
  """
  type Vehicle_Body_Mirrors_Left {
    heating: Vehicle_Body_Mirrors_Left_Heating

    """
    Mirror pan as a percent. 0 = Center Position. 100 = Fully Left Position. -100 = Fully Right Position.
    """
    pan: Int

    """
    Mirror tilt as a percent. 0 = Center Position. 100 = Fully Upward Position. -100 = Fully Downward Position.
    """
    tilt: Int
  }

  """
  Mirror heater signals
  """
  type Vehicle_Body_Mirrors_Left_Heating {
    """
    Mirror Heater on or off. True = Heater On. False = Heater Off.
    """
    status: Boolean
  }

  """
  Right mirrors
  """
  type Vehicle_Body_Mirrors_Right {
    heating: Vehicle_Body_Mirrors_Right_Heating

    """
    Mirror pan as a percent. 0 = Center Position. 100 = Fully Left Position. -100 = Fully Right Position.
    """
    pan: Int

    """
    Mirror tilt as a percent. 0 = Center Position. 100 = Fully Upward Position. -100 = Fully Downward Position.
    """
    tilt: Int
  }

  """
  Mirror heater signals
  """
  type Vehicle_Body_Mirrors_Right_Heating {
    """
    Mirror Heater on or off. True = Heater On. False = Heater Off.
    """
    status: Boolean
  }

  """
  Rainsensor signals
  """
  type Vehicle_Body_Raindetection {
    """
    Rain intensity. 0 = Dry, No Rain. 100 = Covered.
    """
    intensity: Int
  }

  enum Vehicle_Body_RefuelPosition_Enum {
    front_left
    front_right
    middle_left
    middle_right
    rear_left
    rear_right
  }

  """
  Trunk status
  """
  type Vehicle_Body_Trunk {
    """
    Is trunk locked or unlocked. True = Locked. False = Unlocked.
    """
    isLocked: Boolean

    """
    Trunk open or closed. True = Open. False = Closed
    """
    isOpen: Boolean
  }

  """
  Windshield signals
  """
  type Vehicle_Body_Windshield {
    front: Vehicle_Body_Windshield_Front

    rear: Vehicle_Body_Windshield_Rear
  }

  """
  Front windshield signals
  """
  type Vehicle_Body_Windshield_Front {
    heating: Vehicle_Body_Windshield_Front_Heating

    washerFluid: Vehicle_Body_Windshield_Front_WasherFluid

    wiping: Vehicle_Body_Windshield_Front_Wiping
  }

  """
  Front windshield heater signals
  """
  type Vehicle_Body_Windshield_Front_Heating {
    """
    Front windshield heater status. 0 - off, 1 - on
    """
    status: Boolean
  }

  """
  Front windshield washer fluid signals
  """
  type Vehicle_Body_Windshield_Front_WasherFluid {
    """
    Washer fluid level as a percent. 0 = Empty. 100 = Full.
    """
    level: Int

    """
    Low level indication for washer fluid. True = Level Low. False = Level OK.
    """
    levelLow: Boolean
  }

  """
  Front windshield wiper signals
  """
  type Vehicle_Body_Windshield_Front_Wiping {
    """
    Front wiper status
    """
    status: Vehicle_Body_Windshield_Front_Wiping_Status_Enum
  }

  enum Vehicle_Body_Windshield_Front_Wiping_Status_Enum {
    off
    slow
    medium
    fast
    interval
    rainsensor
  }

  """
  Rear windshield signals
  """
  type Vehicle_Body_Windshield_Rear {
    heating: Vehicle_Body_Windshield_Rear_Heating

    washerFluid: Vehicle_Body_Windshield_Rear_WasherFluid

    wiping: Vehicle_Body_Windshield_Rear_Wiping
  }

  """
  Rear windshield heater signals
  """
  type Vehicle_Body_Windshield_Rear_Heating {
    """
    Rear windshield heater status. 0 - off, 1 - on
    """
    status: Boolean
  }

  """
  Rear windshield washer fluid signals
  """
  type Vehicle_Body_Windshield_Rear_WasherFluid {
    """
    Washer fluid level as a percent. 0 = Empty. 100 = Full.
    """
    level: Int

    """
    Low level indication for washer fluid. True = Level Low. False = Level OK.
    """
    levelLow: Boolean
  }

  """
  Rear windshield wiper signals
  """
  type Vehicle_Body_Windshield_Rear_Wiping {
    """
    Rear wiper status
    """
    status: Vehicle_Body_Windshield_Rear_Wiping_Status_Enum
  }

  enum Vehicle_Body_Windshield_Rear_Wiping_Status_Enum {
    off
    slow
    medium
    fast
    interval
    rainsensor
  }

  """
  All in-cabin components, including doors.
  """
  type Vehicle_Cabin {
    convertible: Vehicle_Cabin_Convertible

    door: Vehicle_Cabin_Door

    hvac: Vehicle_Cabin_HVAC

    infotainment: Vehicle_Cabin_Infotainment

    lights: Vehicle_Cabin_Lights

    rearShade: Vehicle_Cabin_RearShade

    rearviewMirror: Vehicle_Cabin_RearviewMirror

    seat: Vehicle_Cabin_Seat

    steeringWheel: Vehicle_Cabin_SteeringWheel

    sunroof: Vehicle_Cabin_Sunroof
  }

  """
  Convertible roof
  """
  type Vehicle_Cabin_Convertible {
    """
    Roof status on convertible vehicles
    """
    status: Vehicle_Cabin_Convertible_Status_Enum
  }

  enum Vehicle_Cabin_Convertible_Status_Enum {
    undefined
    closed
    open
    closing
    opening
    stalled
  }

  """
  All doors, including windows and switches
  """
  type Vehicle_Cabin_Door {
    """
    Number of doors in vehicle
    """
    count: Int

    row1: Vehicle_Cabin_Door_Row1

    row2: Vehicle_Cabin_Door_Row2

    row3: Vehicle_Cabin_Door_Row3

    row4: Vehicle_Cabin_Door_Row4
  }

  """
  Front doors
  """
  type Vehicle_Cabin_Door_Row1 {
    left: Vehicle_Cabin_Door_Row1_Left

    right: Vehicle_Cabin_Door_Row1_Right
  }

  """
  Left front door
  """
  type Vehicle_Cabin_Door_Row1_Left {
    """
    Is door child lock engaged. True = Engaged. False = Disengaged.
    """
    isChildLockActive: Boolean

    """
    Is door locked or unlocked. True = Locked. False = Unlocked.
    """
    isLocked: Boolean

    """
    Is door open or closed
    """
    isOpen: Boolean

    shade: Vehicle_Cabin_Door_Row1_Left_Shade

    window: Vehicle_Cabin_Door_Row1_Left_Window
  }

  """
  Side window shade
  """
  type Vehicle_Cabin_Door_Row1_Left_Shade {
    """
    Position of side window blind. 0 = Fully retracted. 100 = Fully deployed.
    """
    position: Int

    """
    Switch controlling sliding action such as window, sunroof, or blind.
    """
    switch: Vehicle_Cabin_Door_Row1_Left_Shade_Switch_Enum
  }

  enum Vehicle_Cabin_Door_Row1_Left_Shade_Switch_Enum {
    Inactive
    Close
    Open
    OneShotClose
    OneShotOpen
  }

  """
  Door window status
  """
  type Vehicle_Cabin_Door_Row1_Left_Window {
    """
    Window position. 0 = Fully closed 100 = Fully opened.
    """
    position: Int

    """
    Switch controlling sliding action such as window, sunroof, or blind.
    """
    switch: Vehicle_Cabin_Door_Row1_Left_Window_Switch_Enum
  }

  enum Vehicle_Cabin_Door_Row1_Left_Window_Switch_Enum {
    Inactive
    Close
    Open
    OneShotClose
    OneShotOpen
  }

  """
  Right front door
  """
  type Vehicle_Cabin_Door_Row1_Right {
    """
    Is door child lock engaged. True = Engaged. False = Disengaged.
    """
    isChildLockActive: Boolean

    """
    Is door locked or unlocked. True = Locked. False = Unlocked.
    """
    isLocked: Boolean

    """
    Is door open or closed
    """
    isOpen: Boolean

    shade: Vehicle_Cabin_Door_Row1_Right_Shade

    window: Vehicle_Cabin_Door_Row1_Right_Window
  }

  """
  Side window shade
  """
  type Vehicle_Cabin_Door_Row1_Right_Shade {
    """
    Position of side window blind. 0 = Fully retracted. 100 = Fully deployed.
    """
    position: Int

    """
    Switch controlling sliding action such as window, sunroof, or blind.
    """
    switch: Vehicle_Cabin_Door_Row1_Right_Shade_Switch_Enum
  }

  enum Vehicle_Cabin_Door_Row1_Right_Shade_Switch_Enum {
    Inactive
    Close
    Open
    OneShotClose
    OneShotOpen
  }

  """
  Door window status
  """
  type Vehicle_Cabin_Door_Row1_Right_Window {
    """
    Window position. 0 = Fully closed 100 = Fully opened.
    """
    position: Int

    """
    Switch controlling sliding action such as window, sunroof, or blind.
    """
    switch: Vehicle_Cabin_Door_Row1_Right_Window_Switch_Enum
  }

  enum Vehicle_Cabin_Door_Row1_Right_Window_Switch_Enum {
    Inactive
    Close
    Open
    OneShotClose
    OneShotOpen
  }

  """
  Second row doors
  """
  type Vehicle_Cabin_Door_Row2 {
    left: Vehicle_Cabin_Door_Row2_Left

    right: Vehicle_Cabin_Door_Row2_Right
  }

  """
  Left second row door
  """
  type Vehicle_Cabin_Door_Row2_Left {
    """
    Is door child lock engaged. True = Engaged. False = Disengaged.
    """
    isChildLockActive: Boolean

    """
    Is door locked or unlocked. True = Locked. False = Unlocked.
    """
    isLocked: Boolean

    """
    Is door open or closed
    """
    isOpen: Boolean

    shade: Vehicle_Cabin_Door_Row2_Left_Shade

    window: Vehicle_Cabin_Door_Row2_Left_Window
  }

  """
  Side window shade
  """
  type Vehicle_Cabin_Door_Row2_Left_Shade {
    """
    Position of side window blind. 0 = Fully retracted. 100 = Fully deployed.
    """
    position: Int

    """
    Switch controlling sliding action such as window, sunroof, or blind.
    """
    switch: Vehicle_Cabin_Door_Row2_Left_Shade_Switch_Enum
  }

  enum Vehicle_Cabin_Door_Row2_Left_Shade_Switch_Enum {
    Inactive
    Close
    Open
    OneShotClose
    OneShotOpen
  }

  """
  Door window status
  """
  type Vehicle_Cabin_Door_Row2_Left_Window {
    """
    Window position. 0 = Fully closed 100 = Fully opened.
    """
    position: Int

    """
    Switch controlling sliding action such as window, sunroof, or blind.
    """
    switch: Vehicle_Cabin_Door_Row2_Left_Window_Switch_Enum
  }

  enum Vehicle_Cabin_Door_Row2_Left_Window_Switch_Enum {
    Inactive
    Close
    Open
    OneShotClose
    OneShotOpen
  }

  """
  Right second row door
  """
  type Vehicle_Cabin_Door_Row2_Right {
    """
    Is door child lock engaged. True = Engaged. False = Disengaged.
    """
    isChildLockActive: Boolean

    """
    Is door locked or unlocked. True = Locked. False = Unlocked.
    """
    isLocked: Boolean

    """
    Is door open or closed
    """
    isOpen: Boolean

    shade: Vehicle_Cabin_Door_Row2_Right_Shade

    window: Vehicle_Cabin_Door_Row2_Right_Window
  }

  """
  Side window shade
  """
  type Vehicle_Cabin_Door_Row2_Right_Shade {
    """
    Position of side window blind. 0 = Fully retracted. 100 = Fully deployed.
    """
    position: Int

    """
    Switch controlling sliding action such as window, sunroof, or blind.
    """
    switch: Vehicle_Cabin_Door_Row2_Right_Shade_Switch_Enum
  }

  enum Vehicle_Cabin_Door_Row2_Right_Shade_Switch_Enum {
    Inactive
    Close
    Open
    OneShotClose
    OneShotOpen
  }

  """
  Door window status
  """
  type Vehicle_Cabin_Door_Row2_Right_Window {
    """
    Window position. 0 = Fully closed 100 = Fully opened.
    """
    position: Int

    """
    Switch controlling sliding action such as window, sunroof, or blind.
    """
    switch: Vehicle_Cabin_Door_Row2_Right_Window_Switch_Enum
  }

  enum Vehicle_Cabin_Door_Row2_Right_Window_Switch_Enum {
    Inactive
    Close
    Open
    OneShotClose
    OneShotOpen
  }

  """
  Third row doors
  """
  type Vehicle_Cabin_Door_Row3 {
    left: Vehicle_Cabin_Door_Row3_Left

    right: Vehicle_Cabin_Door_Row3_Right
  }

  """
  Left third row door
  """
  type Vehicle_Cabin_Door_Row3_Left {
    """
    Is door child lock engaged. True = Engaged. False = Disengaged.
    """
    isChildLockActive: Boolean

    """
    Is door locked or unlocked. True = Locked. False = Unlocked.
    """
    isLocked: Boolean

    """
    Is door open or closed
    """
    isOpen: Boolean

    shade: Vehicle_Cabin_Door_Row3_Left_Shade

    window: Vehicle_Cabin_Door_Row3_Left_Window
  }

  """
  Side window shade
  """
  type Vehicle_Cabin_Door_Row3_Left_Shade {
    """
    Position of side window blind. 0 = Fully retracted. 100 = Fully deployed.
    """
    position: Int

    """
    Switch controlling sliding action such as window, sunroof, or blind.
    """
    switch: Vehicle_Cabin_Door_Row3_Left_Shade_Switch_Enum
  }

  enum Vehicle_Cabin_Door_Row3_Left_Shade_Switch_Enum {
    Inactive
    Close
    Open
    OneShotClose
    OneShotOpen
  }

  """
  Door window status
  """
  type Vehicle_Cabin_Door_Row3_Left_Window {
    """
    Window position. 0 = Fully closed 100 = Fully opened.
    """
    position: Int

    """
    Switch controlling sliding action such as window, sunroof, or blind.
    """
    switch: Vehicle_Cabin_Door_Row3_Left_Window_Switch_Enum
  }

  enum Vehicle_Cabin_Door_Row3_Left_Window_Switch_Enum {
    Inactive
    Close
    Open
    OneShotClose
    OneShotOpen
  }

  """
  Right third row door
  """
  type Vehicle_Cabin_Door_Row3_Right {
    """
    Is door child lock engaged. True = Engaged. False = Disengaged.
    """
    isChildLockActive: Boolean

    """
    Is door locked or unlocked. True = Locked. False = Unlocked.
    """
    isLocked: Boolean

    """
    Is door open or closed
    """
    isOpen: Boolean

    shade: Vehicle_Cabin_Door_Row3_Right_Shade

    window: Vehicle_Cabin_Door_Row3_Right_Window
  }

  """
  Side window shade
  """
  type Vehicle_Cabin_Door_Row3_Right_Shade {
    """
    Position of side window blind. 0 = Fully retracted. 100 = Fully deployed.
    """
    position: Int

    """
    Switch controlling sliding action such as window, sunroof, or blind.
    """
    switch: Vehicle_Cabin_Door_Row3_Right_Shade_Switch_Enum
  }

  enum Vehicle_Cabin_Door_Row3_Right_Shade_Switch_Enum {
    Inactive
    Close
    Open
    OneShotClose
    OneShotOpen
  }

  """
  Door window status
  """
  type Vehicle_Cabin_Door_Row3_Right_Window {
    """
    Window position. 0 = Fully closed 100 = Fully opened.
    """
    position: Int

    """
    Switch controlling sliding action such as window, sunroof, or blind.
    """
    switch: Vehicle_Cabin_Door_Row3_Right_Window_Switch_Enum
  }

  enum Vehicle_Cabin_Door_Row3_Right_Window_Switch_Enum {
    Inactive
    Close
    Open
    OneShotClose
    OneShotOpen
  }

  """
  Fourth row doors
  """
  type Vehicle_Cabin_Door_Row4 {
    left: Vehicle_Cabin_Door_Row4_Left

    right: Vehicle_Cabin_Door_Row4_Right
  }

  """
  Left fourth row door
  """
  type Vehicle_Cabin_Door_Row4_Left {
    """
    Is door child lock engaged. True = Engaged. False = Disengaged.
    """
    isChildLockActive: Boolean

    """
    Is door locked or unlocked. True = Locked. False = Unlocked.
    """
    isLocked: Boolean

    """
    Is door open or closed
    """
    isOpen: Boolean

    shade: Vehicle_Cabin_Door_Row4_Left_Shade

    window: Vehicle_Cabin_Door_Row4_Left_Window
  }

  """
  Side window shade
  """
  type Vehicle_Cabin_Door_Row4_Left_Shade {
    """
    Position of side window blind. 0 = Fully retracted. 100 = Fully deployed.
    """
    position: Int

    """
    Switch controlling sliding action such as window, sunroof, or blind.
    """
    switch: Vehicle_Cabin_Door_Row4_Left_Shade_Switch_Enum
  }

  enum Vehicle_Cabin_Door_Row4_Left_Shade_Switch_Enum {
    Inactive
    Close
    Open
    OneShotClose
    OneShotOpen
  }

  """
  Door window status
  """
  type Vehicle_Cabin_Door_Row4_Left_Window {
    """
    Window position. 0 = Fully closed 100 = Fully opened.
    """
    position: Int

    """
    Switch controlling sliding action such as window, sunroof, or blind.
    """
    switch: Vehicle_Cabin_Door_Row4_Left_Window_Switch_Enum
  }

  enum Vehicle_Cabin_Door_Row4_Left_Window_Switch_Enum {
    Inactive
    Close
    Open
    OneShotClose
    OneShotOpen
  }

  """
  Right fourth row door
  """
  type Vehicle_Cabin_Door_Row4_Right {
    """
    Is door child lock engaged. True = Engaged. False = Disengaged.
    """
    isChildLockActive: Boolean

    """
    Is door locked or unlocked. True = Locked. False = Unlocked.
    """
    isLocked: Boolean

    """
    Is door open or closed
    """
    isOpen: Boolean

    shade: Vehicle_Cabin_Door_Row4_Right_Shade

    window: Vehicle_Cabin_Door_Row4_Right_Window
  }

  """
  Side window shade
  """
  type Vehicle_Cabin_Door_Row4_Right_Shade {
    """
    Position of side window blind. 0 = Fully retracted. 100 = Fully deployed.
    """
    position: Int

    """
    Switch controlling sliding action such as window, sunroof, or blind.
    """
    switch: Vehicle_Cabin_Door_Row4_Right_Shade_Switch_Enum
  }

  enum Vehicle_Cabin_Door_Row4_Right_Shade_Switch_Enum {
    Inactive
    Close
    Open
    OneShotClose
    OneShotOpen
  }

  """
  Door window status
  """
  type Vehicle_Cabin_Door_Row4_Right_Window {
    """
    Window position. 0 = Fully closed 100 = Fully opened.
    """
    position: Int

    """
    Switch controlling sliding action such as window, sunroof, or blind.
    """
    switch: Vehicle_Cabin_Door_Row4_Right_Window_Switch_Enum
  }

  enum Vehicle_Cabin_Door_Row4_Right_Window_Switch_Enum {
    Inactive
    Close
    Open
    OneShotClose
    OneShotOpen
  }

  """
  Climate control
  """
  type Vehicle_Cabin_HVAC {
    """
    Ambient air temperature
    """
    ambientAirTemperature: Float

    """
    Is Air conditioning active.
    """
    isAirConditioningActive: Boolean

    """
    Is front defroster active.
    """
    isFrontDefrosterActive: Boolean

    """
    Is rear defroster active.
    """
    isRearDefrosterActive: Boolean

    """
    Is recirculation active.
    """
    isRecirculationActive: Boolean

    row1: Vehicle_Cabin_HVAC_Row1

    row2: Vehicle_Cabin_HVAC_Row2

    row3: Vehicle_Cabin_HVAC_Row3

    row4: Vehicle_Cabin_HVAC_Row4
  }

  """
  Frontmost row HVAC.
  """
  type Vehicle_Cabin_HVAC_Row1 {
    left: Vehicle_Cabin_HVAC_Row1_Left

    right: Vehicle_Cabin_HVAC_Row1_Right
  }

  """
  Frontmost row left HVAC.
  """
  type Vehicle_Cabin_HVAC_Row1_Left {
    """
    Direction of airstream
    """
    airDistribution: Vehicle_Cabin_HVAC_Row1_Left_AirDistribution_Enum

    """
    Fan Speed, 0 = off. 100 = max
    """
    fanSpeed: Int

    """
    Temperature
    """
    temperature: Int
  }

  enum Vehicle_Cabin_HVAC_Row1_Left_AirDistribution_Enum {
    up
    middle
    down
  }

  """
  Frontmost row right HVAC.
  """
  type Vehicle_Cabin_HVAC_Row1_Right {
    """
    Direction of airstream
    """
    airDistribution: Vehicle_Cabin_HVAC_Row1_Right_AirDistribution_Enum

    """
    Fan Speed, 0 = off. 100 = max
    """
    fanSpeed: Int

    """
    Temperature
    """
    temperature: Int
  }

  enum Vehicle_Cabin_HVAC_Row1_Right_AirDistribution_Enum {
    up
    middle
    down
  }

  """
  Second row HVAC.
  """
  type Vehicle_Cabin_HVAC_Row2 {
    left: Vehicle_Cabin_HVAC_Row2_Left

    right: Vehicle_Cabin_HVAC_Row2_Right
  }

  """
  Second row left HVAC.
  """
  type Vehicle_Cabin_HVAC_Row2_Left {
    """
    Direction of airstream
    """
    airDistribution: Vehicle_Cabin_HVAC_Row2_Left_AirDistribution_Enum

    """
    Fan Speed, 0 = off. 100 = max
    """
    fanSpeed: Int

    """
    Temperature
    """
    temperature: Int
  }

  enum Vehicle_Cabin_HVAC_Row2_Left_AirDistribution_Enum {
    up
    middle
    down
  }

  """
  Second row right HVAC.
  """
  type Vehicle_Cabin_HVAC_Row2_Right {
    """
    Direction of airstream
    """
    airDistribution: Vehicle_Cabin_HVAC_Row2_Right_AirDistribution_Enum

    """
    Fan Speed, 0 = off. 100 = max
    """
    fanSpeed: Int

    """
    Temperature
    """
    temperature: Int
  }

  enum Vehicle_Cabin_HVAC_Row2_Right_AirDistribution_Enum {
    up
    middle
    down
  }

  """
  Third row HVAC.
  """
  type Vehicle_Cabin_HVAC_Row3 {
    left: Vehicle_Cabin_HVAC_Row3_Left

    right: Vehicle_Cabin_HVAC_Row3_Right
  }

  """
  Third row left HVAC.
  """
  type Vehicle_Cabin_HVAC_Row3_Left {
    """
    Direction of airstream
    """
    airDistribution: Vehicle_Cabin_HVAC_Row3_Left_AirDistribution_Enum

    """
    Fan Speed, 0 = off. 100 = max
    """
    fanSpeed: Int

    """
    Temperature
    """
    temperature: Int
  }

  enum Vehicle_Cabin_HVAC_Row3_Left_AirDistribution_Enum {
    up
    middle
    down
  }

  """
  Third row right HVAC.
  """
  type Vehicle_Cabin_HVAC_Row3_Right {
    """
    Direction of airstream
    """
    airDistribution: Vehicle_Cabin_HVAC_Row3_Right_AirDistribution_Enum

    """
    Fan Speed, 0 = off. 100 = max
    """
    fanSpeed: Int

    """
    Temperature
    """
    temperature: Int
  }

  enum Vehicle_Cabin_HVAC_Row3_Right_AirDistribution_Enum {
    up
    middle
    down
  }

  """
  Fourth row HVAC.
  """
  type Vehicle_Cabin_HVAC_Row4 {
    left: Vehicle_Cabin_HVAC_Row4_Left

    right: Vehicle_Cabin_HVAC_Row4_Right
  }

  """
  Fourth row left HVAC.
  """
  type Vehicle_Cabin_HVAC_Row4_Left {
    """
    Direction of airstream
    """
    airDistribution: Vehicle_Cabin_HVAC_Row4_Left_AirDistribution_Enum

    """
    Fan Speed, 0 = off. 100 = max
    """
    fanSpeed: Int

    """
    Temperature
    """
    temperature: Int
  }

  enum Vehicle_Cabin_HVAC_Row4_Left_AirDistribution_Enum {
    up
    middle
    down
  }

  """
  Fourth row right HVAC.
  """
  type Vehicle_Cabin_HVAC_Row4_Right {
    """
    Direction of airstream
    """
    airDistribution: Vehicle_Cabin_HVAC_Row4_Right_AirDistribution_Enum

    """
    Fan Speed, 0 = off. 100 = max
    """
    fanSpeed: Int

    """
    Temperature
    """
    temperature: Int
  }

  enum Vehicle_Cabin_HVAC_Row4_Right_AirDistribution_Enum {
    up
    middle
    down
  }

  """
  Infotainment system
  """
  type Vehicle_Cabin_Infotainment {
    hmi: Vehicle_Cabin_Infotainment_HMI

    media: Vehicle_Cabin_Infotainment_Media

    navigation: Vehicle_Cabin_Infotainment_Navigation
  }

  """
  HMI related signals
  """
  type Vehicle_Cabin_Infotainment_HMI {
    """
    ISO 639-1 standard language code for the current HMI
    """
    currentLanguage: String

    """
    Date format used in the current HMI
    """
    dateFormat: Vehicle_Cabin_Infotainment_HMI_DateFormat_Enum

    """
    Current display theme
    """
    dayNightMode: Vehicle_Cabin_Infotainment_HMI_DayNightMode_Enum

    """
    Distance unit used in the current HMI
    """
    distanceUnit: Vehicle_Cabin_Infotainment_HMI_DistanceUnit_Enum

    """
    EV fuel economy unit used in the current HMI
    """
    evEconomyUnits: Vehicle_Cabin_Infotainment_HMI_EVEconomyUnits_Enum

    """
    Fuel economy unit used in the current HMI
    """
    fuelEconomyUnits: Vehicle_Cabin_Infotainment_HMI_FuelEconomyUnits_Enum

    """
    Temperature unit used in the current HMI
    """
    temperatureUnit: Vehicle_Cabin_Infotainment_HMI_TemperatureUnit_Enum

    """
    Time format used in the current HMI
    """
    timeFormat: Vehicle_Cabin_Infotainment_HMI_TimeFormat_Enum
  }

  enum Vehicle_Cabin_Infotainment_HMI_DateFormat_Enum {
    YYYY_MM_DD
    DD_MM_YYYY
    MM_DD_YYYY
    YY_MM_DD
    DD_MM_YY
    MM_DD_YY
  }

  enum Vehicle_Cabin_Infotainment_HMI_DayNightMode_Enum {
    Day
    Night
  }

  enum Vehicle_Cabin_Infotainment_HMI_DistanceUnit_Enum {
    mi
    km
  }

  enum Vehicle_Cabin_Infotainment_HMI_EVEconomyUnits_Enum {
    mi_kWh
    km_kWh
    kWh_100mi
    kWh_100km
    Wh_mi
    Wh_km
  }

  enum Vehicle_Cabin_Infotainment_HMI_FuelEconomyUnits_Enum {
    mpg_UK
    mpg_US
    mpl
    km_l
    l_100km
  }

  enum Vehicle_Cabin_Infotainment_HMI_TemperatureUnit_Enum {
    C
    F
  }

  enum Vehicle_Cabin_Infotainment_HMI_TimeFormat_Enum {
    _12HR
    _24HR
  }

  """
  All Media actions
  """
  type Vehicle_Cabin_Infotainment_Media {
    """
    Tells if the media was
    """
    action: Vehicle_Cabin_Infotainment_Media_Action_Enum

    """
    URI of suggested media that was declined
    """
    declinedURI: String

    played: Vehicle_Cabin_Infotainment_Media_Played

    """
    URI of suggested media that was selected
    """
    selectedURI: String

    """
    Current Media Volume
    """
    volume: Int
  }

  enum Vehicle_Cabin_Infotainment_Media_Action_Enum {
    unknown
    Stop
    Play
    FastForward
    FastBackward
    SkipForward
    SkipBackward
  }

  """
  Collection of signals updated in concert when a new media is played
  """
  type Vehicle_Cabin_Infotainment_Media_Played {
    """
    Name of album being played
    """
    album: String

    """
    Name of artist being played
    """
    artist: String

    """
    Media selected for playback
    """
    source: Vehicle_Cabin_Infotainment_Media_Played_Source_Enum

    """
    Name of track being played
    """
    track: String

    """
    User Resource associated with the media
    """
    uri: String
  }

  enum Vehicle_Cabin_Infotainment_Media_Played_Source_Enum {
    unknown
    SiriusXM
    AM
    FM
    DAB
    TV
    CD
    DVD
    AUX
    USB
    Disk
    Bluetooth
    Internet
    Voice
    Beep
  }

  """
  All navigation actions
  """
  type Vehicle_Cabin_Infotainment_Navigation {
    currentLocation: Vehicle_Cabin_Infotainment_Navigation_CurrentLocation

    destinationSet: Vehicle_Cabin_Infotainment_Navigation_DestinationSet
  }

  """
  The current latitude and longitude of the vehicle.
  """
  type Vehicle_Cabin_Infotainment_Navigation_CurrentLocation {
    """
    Accuracy level of the latitude and longitude coordinates in meters.
    """
    accuracy: Float

    """
    Current elevation of the position in meters.
    """
    altitude: Float

    """
    Current magnetic compass heading, in degrees.
    """
    heading: Float

    """
    Current latitude of vehicle, as reported by GPS.
    """
    latitude: Float

    """
    Current longitude of vehicle, as reported by GPS.
    """
    longitude: Float

    """
    Vehicle speed, as sensed by the GPS receiver.
    """
    speed: Int
  }

  """
  A navigation has been selected.
  """
  type Vehicle_Cabin_Infotainment_Navigation_DestinationSet {
    """
    Latitude of destination
    """
    latitude: Float

    """
    Longitude of destination
    """
    longitude: Float
  }

  """
  Interior lights signals and sensors
  """
  type Vehicle_Cabin_Lights {
    """
    How much ambient light is detected in cabin. 0 = No ambient light. 100 = Full brightness
    """
    ambientLight: Int

    """
    Is central dome light light on
    """
    isDomeOn: Boolean

    """
    Is glove box light on
    """
    isGloveBoxOn: Boolean

    """
    Is trunk light light on
    """
    isTrunkOn: Boolean

    """
    Intensity of the interior lights. 0 = Off. 100 = Full brightness.
    """
    lightIntensity: Int

    row1: Vehicle_Cabin_Lights_Row1

    row2: Vehicle_Cabin_Lights_Row2

    row3: Vehicle_Cabin_Lights_Row3

    row4: Vehicle_Cabin_Lights_Row4
  }

  """
  Front lights
  """
  type Vehicle_Cabin_Lights_Row1 {
    """
    Is light shared across first row on
    """
    isSharedOn: Boolean

    left: Vehicle_Cabin_Lights_Row1_Left

    right: Vehicle_Cabin_Lights_Row1_Right
  }

  """
  Left front lights
  """
  type Vehicle_Cabin_Lights_Row1_Left {
    """
    Is passenger light on
    """
    isPassengerOn: Boolean
  }

  """
  Right front lights
  """
  type Vehicle_Cabin_Lights_Row1_Right {
    """
    Is passenger light on
    """
    isPassengerOn: Boolean
  }

  """
  Front lights
  """
  type Vehicle_Cabin_Lights_Row2 {
    """
    Is light shared across second row on
    """
    isSharedOn: Boolean

    left: Vehicle_Cabin_Lights_Row2_Left

    right: Vehicle_Cabin_Lights_Row2_Right
  }

  """
  Left second row lights
  """
  type Vehicle_Cabin_Lights_Row2_Left {
    """
    Is passenger light on
    """
    isPassengerOn: Boolean
  }

  """
  Right second row lights
  """
  type Vehicle_Cabin_Lights_Row2_Right {
    """
    Is passenger light on
    """
    isPassengerOn: Boolean
  }

  """
  Front lights
  """
  type Vehicle_Cabin_Lights_Row3 {
    """
    Is light shared third across row on
    """
    isSharedOn: Boolean

    left: Vehicle_Cabin_Lights_Row3_Left

    right: Vehicle_Cabin_Lights_Row3_Right
  }

  """
  Left third row lights
  """
  type Vehicle_Cabin_Lights_Row3_Left {
    """
    Is passenger light on
    """
    isPassengerOn: Boolean
  }

  """
  Right third row lights
  """
  type Vehicle_Cabin_Lights_Row3_Right {
    """
    Is passenger light on
    """
    isPassengerOn: Boolean
  }

  """
  Front lights
  """
  type Vehicle_Cabin_Lights_Row4 {
    """
    Is light shared across fourth row on
    """
    isSharedOn: Boolean

    left: Vehicle_Cabin_Lights_Row4_Left

    right: Vehicle_Cabin_Lights_Row4_Right
  }

  """
  Left fourth row lights
  """
  type Vehicle_Cabin_Lights_Row4_Left {
    """
    Is passenger light on
    """
    isPassengerOn: Boolean
  }

  """
  Right fourth row lights
  """
  type Vehicle_Cabin_Lights_Row4_Right {
    """
    Is passenger light on
    """
    isPassengerOn: Boolean
  }

  """
  Rear window shade.
  """
  type Vehicle_Cabin_RearShade {
    """
    Position of side window blind. 0 = Fully retracted. 100 = Fully deployed.
    """
    position: Int

    """
    Switch controlling sliding action such as window, sunroof, or blind.
    """
    switch: Vehicle_Cabin_RearShade_Switch_Enum
  }

  enum Vehicle_Cabin_RearShade_Switch_Enum {
    Inactive
    Close
    Open
    OneShotClose
    OneShotOpen
  }

  """
  Rearview mirror
  """
  type Vehicle_Cabin_RearviewMirror {
    """
    Dimming level of rearview mirror. 0 = undimmed. 100 = fully dimmed
    """
    dimmingLevel: Int
  }

  """
  All seats.
  """
  type Vehicle_Cabin_Seat {
    """
    The position of the driver seat in row 1. (1-5)
    """
    driverPosition: Int

    row1: Vehicle_Cabin_Seat_Row1

    """
    Number of seats across row 1 (frontmost)
    """
    row1PosCount: Int

    row2: Vehicle_Cabin_Seat_Row2

    """
    Number of seats across row 2
    """
    row2PosCount: Int

    row3: Vehicle_Cabin_Seat_Row3

    """
    Number of seats across row 3
    """
    row3PosCount: Int

    row4: Vehicle_Cabin_Seat_Row4

    """
    Number of seats across row 4
    """
    row4PosCount: Int

    """
    Number of seats across row 5
    """
    row5PosCount: Int

    """
    Number of seat rows in vehicle
    """
    rowCount: Int
  }

  """
  Front seats
  """
  type Vehicle_Cabin_Seat_Row1 {
    pos1: Vehicle_Cabin_Seat_Row1_Pos1

    pos2: Vehicle_Cabin_Seat_Row1_Pos2

    pos3: Vehicle_Cabin_Seat_Row1_Pos3

    pos4: Vehicle_Cabin_Seat_Row1_Pos4

    pos5: Vehicle_Cabin_Seat_Row1_Pos5
  }

  """
  First seat from left, front row
  """
  type Vehicle_Cabin_Seat_Row1_Pos1 {
    airbag: Vehicle_Cabin_Seat_Row1_Pos1_Airbag

    cushion: Vehicle_Cabin_Seat_Row1_Pos1_Cushion

    """
    Does the seat have a passenger in it.
    """
    hasPassenger: Boolean

    headRestraint: Vehicle_Cabin_Seat_Row1_Pos1_HeadRestraint

    """
    Seat cooling / heating. 0 = off. -100 = max cold. +100 = max heat
    """
    heating: Int

    """
    Is the belt engaged.
    """
    isBelted: Boolean

    lumbar: Vehicle_Cabin_Seat_Row1_Pos1_Lumbar

    """
    Seat massage level. 0 = off. 100 = max massage.
    """
    massage: Int

    """
    Seat horizontal position. 0 = Frontmost. 1000 = Rearmost
    """
    position: Int

    """
    Recline level. -90 = Max forward recline. 90 max backward recline
    """
    recline: Int

    sideBolster: Vehicle_Cabin_Seat_Row1_Pos1_SideBolster

    switch: Vehicle_Cabin_Seat_Row1_Pos1_Switch
  }

  """
  Airbag signals
  """
  type Vehicle_Cabin_Seat_Row1_Pos1_Airbag {
    """
    Airbag deployment status. True = Airbag deployed. False = Airbag not deployed.
    """
    isDeployed: Boolean
  }

  """
  Cushion signals.
  """
  type Vehicle_Cabin_Seat_Row1_Pos1_Cushion {
    """
    Height of the seat front. 0 = Lowermost. 500 = Uppermost.
    """
    height: Int

    """
    Forward length of cushion (leg support). 0 = Rearmost. 500 = Forwardmost.
    """
    length: Int
  }

  """
  Head restraint settings
  """
  type Vehicle_Cabin_Seat_Row1_Pos1_HeadRestraint {
    """
    Height of head restraint. 0 = Bottommost. 255 = Topmost.
    """
    height: Int
  }

  """
  Lumbar signals
  """
  type Vehicle_Cabin_Seat_Row1_Pos1_Lumbar {
    """
    Lumbar support position. 0 = Lowermost. 255 = Uppermost.
    """
    height: Int

    """
    Lumbar support inflation. 0 = Fully deflated. 255 = Fully inflated.
    """
    inflation: Int
  }

  """
  Side bolster settings
  """
  type Vehicle_Cabin_Seat_Row1_Pos1_SideBolster {
    """
    Lumbar support inflation. 0 = Fully deflated. 255 = Fully inflated.
    """
    inflation: Int
  }

  """
  Seat switch signals
  """
  type Vehicle_Cabin_Seat_Row1_Pos1_Switch {
    """
    Seat forward switch engaged
    """
    backward: Boolean

    """
    Cooler switch for Seat heater
    """
    cooler: Boolean

    cushion: Vehicle_Cabin_Seat_Row1_Pos1_Switch_Cushion

    """
    Seat down switch engaged
    """
    down: Boolean

    """
    Seat forward switch engaged
    """
    forward: Boolean

    headRestraint: Vehicle_Cabin_Seat_Row1_Pos1_Switch_HeadRestraint

    lumbar: Vehicle_Cabin_Seat_Row1_Pos1_Switch_Lumbar

    massage: Vehicle_Cabin_Seat_Row1_Pos1_Switch_Massage

    recline: Vehicle_Cabin_Seat_Row1_Pos1_Switch_Recline

    sideBolster: Vehicle_Cabin_Seat_Row1_Pos1_Switch_SideBolster

    """
    Seat up switch engaged
    """
    up: Boolean

    """
    Warmer switch for Seat heater
    """
    warmer: Boolean
  }

  """
  Cushion switches
  """
  type Vehicle_Cabin_Seat_Row1_Pos1_Switch_Cushion {
    """
    Seat cushion backward/shorten switch engaged
    """
    backward: Boolean

    """
    Seat cushion down switch engaged
    """
    down: Boolean

    """
    Seat cushion forward/lengthen switch engaged
    """
    forward: Boolean

    """
    Seat cushion up switch engaged
    """
    up: Boolean
  }

  """
  Head restraint switches
  """
  type Vehicle_Cabin_Seat_Row1_Pos1_Switch_HeadRestraint {
    """
    Head restraint down switch engaged
    """
    down: Boolean

    """
    Head restraint up switch engaged
    """
    up: Boolean
  }

  """
  Lumbar switches
  """
  type Vehicle_Cabin_Seat_Row1_Pos1_Switch_Lumbar {
    """
    Lumbar deflation switch engaged
    """
    deflate: Boolean

    """
    Lumbar down switch engaged
    """
    down: Boolean

    """
    Lumbar inflation switch engaged
    """
    inflate: Boolean

    """
    Lumbar up switch engaged
    """
    up: Boolean
  }

  """
  Massage switches
  """
  type Vehicle_Cabin_Seat_Row1_Pos1_Switch_Massage {
    """
    Decrease massage level switch engaged
    """
    decrease: Boolean

    """
    Increase massage level switch engaged
    """
    increase: Boolean
  }

  """
  Recline switches
  """
  type Vehicle_Cabin_Seat_Row1_Pos1_Switch_Recline {
    """
    Seatback recline backward switch engaged
    """
    backward: Boolean

    """
    Seatback recline forward switch engaged
    """
    forward: Boolean
  }

  """
  Side bolster switches
  """
  type Vehicle_Cabin_Seat_Row1_Pos1_Switch_SideBolster {
    """
    Lumbar deflation switch engaged
    """
    deflate: Boolean

    """
    Lumbar inflation switch engaged
    """
    inflate: Boolean
  }

  """
  Second seat from left, front row
  """
  type Vehicle_Cabin_Seat_Row1_Pos2 {
    airbag: Vehicle_Cabin_Seat_Row1_Pos2_Airbag

    cushion: Vehicle_Cabin_Seat_Row1_Pos2_Cushion

    """
    Does the seat have a passenger in it.
    """
    hasPassenger: Boolean

    headRestraint: Vehicle_Cabin_Seat_Row1_Pos2_HeadRestraint

    """
    Seat cooling / heating. 0 = off. -100 = max cold. +100 = max heat
    """
    heating: Int

    """
    Is the belt engaged.
    """
    isBelted: Boolean

    lumbar: Vehicle_Cabin_Seat_Row1_Pos2_Lumbar

    """
    Seat massage level. 0 = off. 100 = max massage.
    """
    massage: Int

    """
    Seat horizontal position. 0 = Frontmost. 1000 = Rearmost
    """
    position: Int

    """
    Recline level. -90 = Max forward recline. 90 max backward recline
    """
    recline: Int

    sideBolster: Vehicle_Cabin_Seat_Row1_Pos2_SideBolster

    switch: Vehicle_Cabin_Seat_Row1_Pos2_Switch
  }

  """
  Airbag signals
  """
  type Vehicle_Cabin_Seat_Row1_Pos2_Airbag {
    """
    Airbag deployment status. True = Airbag deployed. False = Airbag not deployed.
    """
    isDeployed: Boolean
  }

  """
  Cushion signals.
  """
  type Vehicle_Cabin_Seat_Row1_Pos2_Cushion {
    """
    Height of the seat front. 0 = Lowermost. 500 = Uppermost.
    """
    height: Int

    """
    Forward length of cushion (leg support). 0 = Rearmost. 500 = Forwardmost.
    """
    length: Int
  }

  """
  Head restraint settings
  """
  type Vehicle_Cabin_Seat_Row1_Pos2_HeadRestraint {
    """
    Height of head restraint. 0 = Bottommost. 255 = Topmost.
    """
    height: Int
  }

  """
  Lumbar signals
  """
  type Vehicle_Cabin_Seat_Row1_Pos2_Lumbar {
    """
    Lumbar support position. 0 = Lowermost. 255 = Uppermost.
    """
    height: Int

    """
    Lumbar support inflation. 0 = Fully deflated. 255 = Fully inflated.
    """
    inflation: Int
  }

  """
  Side bolster settings
  """
  type Vehicle_Cabin_Seat_Row1_Pos2_SideBolster {
    """
    Lumbar support inflation. 0 = Fully deflated. 255 = Fully inflated.
    """
    inflation: Int
  }

  """
  Seat switch signals
  """
  type Vehicle_Cabin_Seat_Row1_Pos2_Switch {
    """
    Seat forward switch engaged
    """
    backward: Boolean

    """
    Cooler switch for Seat heater
    """
    cooler: Boolean

    cushion: Vehicle_Cabin_Seat_Row1_Pos2_Switch_Cushion

    """
    Seat down switch engaged
    """
    down: Boolean

    """
    Seat forward switch engaged
    """
    forward: Boolean

    headRestraint: Vehicle_Cabin_Seat_Row1_Pos2_Switch_HeadRestraint

    lumbar: Vehicle_Cabin_Seat_Row1_Pos2_Switch_Lumbar

    massage: Vehicle_Cabin_Seat_Row1_Pos2_Switch_Massage

    recline: Vehicle_Cabin_Seat_Row1_Pos2_Switch_Recline

    sideBolster: Vehicle_Cabin_Seat_Row1_Pos2_Switch_SideBolster

    """
    Seat up switch engaged
    """
    up: Boolean

    """
    Warmer switch for Seat heater
    """
    warmer: Boolean
  }

  """
  Cushion switches
  """
  type Vehicle_Cabin_Seat_Row1_Pos2_Switch_Cushion {
    """
    Seat cushion backward/shorten switch engaged
    """
    backward: Boolean

    """
    Seat cushion down switch engaged
    """
    down: Boolean

    """
    Seat cushion forward/lengthen switch engaged
    """
    forward: Boolean

    """
    Seat cushion up switch engaged
    """
    up: Boolean
  }

  """
  Head restraint switches
  """
  type Vehicle_Cabin_Seat_Row1_Pos2_Switch_HeadRestraint {
    """
    Head restraint down switch engaged
    """
    down: Boolean

    """
    Head restraint up switch engaged
    """
    up: Boolean
  }

  """
  Lumbar switches
  """
  type Vehicle_Cabin_Seat_Row1_Pos2_Switch_Lumbar {
    """
    Lumbar deflation switch engaged
    """
    deflate: Boolean

    """
    Lumbar down switch engaged
    """
    down: Boolean

    """
    Lumbar inflation switch engaged
    """
    inflate: Boolean

    """
    Lumbar up switch engaged
    """
    up: Boolean
  }

  """
  Massage switches
  """
  type Vehicle_Cabin_Seat_Row1_Pos2_Switch_Massage {
    """
    Decrease massage level switch engaged
    """
    decrease: Boolean

    """
    Increase massage level switch engaged
    """
    increase: Boolean
  }

  """
  Recline switches
  """
  type Vehicle_Cabin_Seat_Row1_Pos2_Switch_Recline {
    """
    Seatback recline backward switch engaged
    """
    backward: Boolean

    """
    Seatback recline forward switch engaged
    """
    forward: Boolean
  }

  """
  Side bolster switches
  """
  type Vehicle_Cabin_Seat_Row1_Pos2_Switch_SideBolster {
    """
    Lumbar deflation switch engaged
    """
    deflate: Boolean

    """
    Lumbar inflation switch engaged
    """
    inflate: Boolean
  }

  """
  Third seat from left, front row
  """
  type Vehicle_Cabin_Seat_Row1_Pos3 {
    airbag: Vehicle_Cabin_Seat_Row1_Pos3_Airbag

    cushion: Vehicle_Cabin_Seat_Row1_Pos3_Cushion

    """
    Does the seat have a passenger in it.
    """
    hasPassenger: Boolean

    headRestraint: Vehicle_Cabin_Seat_Row1_Pos3_HeadRestraint

    """
    Seat cooling / heating. 0 = off. -100 = max cold. +100 = max heat
    """
    heating: Int

    """
    Is the belt engaged.
    """
    isBelted: Boolean

    lumbar: Vehicle_Cabin_Seat_Row1_Pos3_Lumbar

    """
    Seat massage level. 0 = off. 100 = max massage.
    """
    massage: Int

    """
    Seat horizontal position. 0 = Frontmost. 1000 = Rearmost
    """
    position: Int

    """
    Recline level. -90 = Max forward recline. 90 max backward recline
    """
    recline: Int

    sideBolster: Vehicle_Cabin_Seat_Row1_Pos3_SideBolster

    switch: Vehicle_Cabin_Seat_Row1_Pos3_Switch
  }

  """
  Airbag signals
  """
  type Vehicle_Cabin_Seat_Row1_Pos3_Airbag {
    """
    Airbag deployment status. True = Airbag deployed. False = Airbag not deployed.
    """
    isDeployed: Boolean
  }

  """
  Cushion signals.
  """
  type Vehicle_Cabin_Seat_Row1_Pos3_Cushion {
    """
    Height of the seat front. 0 = Lowermost. 500 = Uppermost.
    """
    height: Int

    """
    Forward length of cushion (leg support). 0 = Rearmost. 500 = Forwardmost.
    """
    length: Int
  }

  """
  Head restraint settings
  """
  type Vehicle_Cabin_Seat_Row1_Pos3_HeadRestraint {
    """
    Height of head restraint. 0 = Bottommost. 255 = Topmost.
    """
    height: Int
  }

  """
  Lumbar signals
  """
  type Vehicle_Cabin_Seat_Row1_Pos3_Lumbar {
    """
    Lumbar support position. 0 = Lowermost. 255 = Uppermost.
    """
    height: Int

    """
    Lumbar support inflation. 0 = Fully deflated. 255 = Fully inflated.
    """
    inflation: Int
  }

  """
  Side bolster settings
  """
  type Vehicle_Cabin_Seat_Row1_Pos3_SideBolster {
    """
    Lumbar support inflation. 0 = Fully deflated. 255 = Fully inflated.
    """
    inflation: Int
  }

  """
  Seat switch signals
  """
  type Vehicle_Cabin_Seat_Row1_Pos3_Switch {
    """
    Seat forward switch engaged
    """
    backward: Boolean

    """
    Cooler switch for Seat heater
    """
    cooler: Boolean

    cushion: Vehicle_Cabin_Seat_Row1_Pos3_Switch_Cushion

    """
    Seat down switch engaged
    """
    down: Boolean

    """
    Seat forward switch engaged
    """
    forward: Boolean

    headRestraint: Vehicle_Cabin_Seat_Row1_Pos3_Switch_HeadRestraint

    lumbar: Vehicle_Cabin_Seat_Row1_Pos3_Switch_Lumbar

    massage: Vehicle_Cabin_Seat_Row1_Pos3_Switch_Massage

    recline: Vehicle_Cabin_Seat_Row1_Pos3_Switch_Recline

    sideBolster: Vehicle_Cabin_Seat_Row1_Pos3_Switch_SideBolster

    """
    Seat up switch engaged
    """
    up: Boolean

    """
    Warmer switch for Seat heater
    """
    warmer: Boolean
  }

  """
  Cushion switches
  """
  type Vehicle_Cabin_Seat_Row1_Pos3_Switch_Cushion {
    """
    Seat cushion backward/shorten switch engaged
    """
    backward: Boolean

    """
    Seat cushion down switch engaged
    """
    down: Boolean

    """
    Seat cushion forward/lengthen switch engaged
    """
    forward: Boolean

    """
    Seat cushion up switch engaged
    """
    up: Boolean
  }

  """
  Head restraint switches
  """
  type Vehicle_Cabin_Seat_Row1_Pos3_Switch_HeadRestraint {
    """
    Head restraint down switch engaged
    """
    down: Boolean

    """
    Head restraint up switch engaged
    """
    up: Boolean
  }

  """
  Lumbar switches
  """
  type Vehicle_Cabin_Seat_Row1_Pos3_Switch_Lumbar {
    """
    Lumbar deflation switch engaged
    """
    deflate: Boolean

    """
    Lumbar down switch engaged
    """
    down: Boolean

    """
    Lumbar inflation switch engaged
    """
    inflate: Boolean

    """
    Lumbar up switch engaged
    """
    up: Boolean
  }

  """
  Massage switches
  """
  type Vehicle_Cabin_Seat_Row1_Pos3_Switch_Massage {
    """
    Decrease massage level switch engaged
    """
    decrease: Boolean

    """
    Increase massage level switch engaged
    """
    increase: Boolean
  }

  """
  Recline switches
  """
  type Vehicle_Cabin_Seat_Row1_Pos3_Switch_Recline {
    """
    Seatback recline backward switch engaged
    """
    backward: Boolean

    """
    Seatback recline forward switch engaged
    """
    forward: Boolean
  }

  """
  Side bolster switches
  """
  type Vehicle_Cabin_Seat_Row1_Pos3_Switch_SideBolster {
    """
    Lumbar deflation switch engaged
    """
    deflate: Boolean

    """
    Lumbar inflation switch engaged
    """
    inflate: Boolean
  }

  """
  Fourth seat from left, front row
  """
  type Vehicle_Cabin_Seat_Row1_Pos4 {
    airbag: Vehicle_Cabin_Seat_Row1_Pos4_Airbag

    cushion: Vehicle_Cabin_Seat_Row1_Pos4_Cushion

    """
    Does the seat have a passenger in it.
    """
    hasPassenger: Boolean

    headRestraint: Vehicle_Cabin_Seat_Row1_Pos4_HeadRestraint

    """
    Seat cooling / heating. 0 = off. -100 = max cold. +100 = max heat
    """
    heating: Int

    """
    Is the belt engaged.
    """
    isBelted: Boolean

    lumbar: Vehicle_Cabin_Seat_Row1_Pos4_Lumbar

    """
    Seat massage level. 0 = off. 100 = max massage.
    """
    massage: Int

    """
    Seat horizontal position. 0 = Frontmost. 1000 = Rearmost
    """
    position: Int

    """
    Recline level. -90 = Max forward recline. 90 max backward recline
    """
    recline: Int

    sideBolster: Vehicle_Cabin_Seat_Row1_Pos4_SideBolster

    switch: Vehicle_Cabin_Seat_Row1_Pos4_Switch
  }

  """
  Airbag signals
  """
  type Vehicle_Cabin_Seat_Row1_Pos4_Airbag {
    """
    Airbag deployment status. True = Airbag deployed. False = Airbag not deployed.
    """
    isDeployed: Boolean
  }

  """
  Cushion signals.
  """
  type Vehicle_Cabin_Seat_Row1_Pos4_Cushion {
    """
    Height of the seat front. 0 = Lowermost. 500 = Uppermost.
    """
    height: Int

    """
    Forward length of cushion (leg support). 0 = Rearmost. 500 = Forwardmost.
    """
    length: Int
  }

  """
  Head restraint settings
  """
  type Vehicle_Cabin_Seat_Row1_Pos4_HeadRestraint {
    """
    Height of head restraint. 0 = Bottommost. 255 = Topmost.
    """
    height: Int
  }

  """
  Lumbar signals
  """
  type Vehicle_Cabin_Seat_Row1_Pos4_Lumbar {
    """
    Lumbar support position. 0 = Lowermost. 255 = Uppermost.
    """
    height: Int

    """
    Lumbar support inflation. 0 = Fully deflated. 255 = Fully inflated.
    """
    inflation: Int
  }

  """
  Side bolster settings
  """
  type Vehicle_Cabin_Seat_Row1_Pos4_SideBolster {
    """
    Lumbar support inflation. 0 = Fully deflated. 255 = Fully inflated.
    """
    inflation: Int
  }

  """
  Seat switch signals
  """
  type Vehicle_Cabin_Seat_Row1_Pos4_Switch {
    """
    Seat forward switch engaged
    """
    backward: Boolean

    """
    Cooler switch for Seat heater
    """
    cooler: Boolean

    cushion: Vehicle_Cabin_Seat_Row1_Pos4_Switch_Cushion

    """
    Seat down switch engaged
    """
    down: Boolean

    """
    Seat forward switch engaged
    """
    forward: Boolean

    headRestraint: Vehicle_Cabin_Seat_Row1_Pos4_Switch_HeadRestraint

    lumbar: Vehicle_Cabin_Seat_Row1_Pos4_Switch_Lumbar

    massage: Vehicle_Cabin_Seat_Row1_Pos4_Switch_Massage

    recline: Vehicle_Cabin_Seat_Row1_Pos4_Switch_Recline

    sideBolster: Vehicle_Cabin_Seat_Row1_Pos4_Switch_SideBolster

    """
    Seat up switch engaged
    """
    up: Boolean

    """
    Warmer switch for Seat heater
    """
    warmer: Boolean
  }

  """
  Cushion switches
  """
  type Vehicle_Cabin_Seat_Row1_Pos4_Switch_Cushion {
    """
    Seat cushion backward/shorten switch engaged
    """
    backward: Boolean

    """
    Seat cushion down switch engaged
    """
    down: Boolean

    """
    Seat cushion forward/lengthen switch engaged
    """
    forward: Boolean

    """
    Seat cushion up switch engaged
    """
    up: Boolean
  }

  """
  Head restraint switches
  """
  type Vehicle_Cabin_Seat_Row1_Pos4_Switch_HeadRestraint {
    """
    Head restraint down switch engaged
    """
    down: Boolean

    """
    Head restraint up switch engaged
    """
    up: Boolean
  }

  """
  Lumbar switches
  """
  type Vehicle_Cabin_Seat_Row1_Pos4_Switch_Lumbar {
    """
    Lumbar deflation switch engaged
    """
    deflate: Boolean

    """
    Lumbar down switch engaged
    """
    down: Boolean

    """
    Lumbar inflation switch engaged
    """
    inflate: Boolean

    """
    Lumbar up switch engaged
    """
    up: Boolean
  }

  """
  Massage switches
  """
  type Vehicle_Cabin_Seat_Row1_Pos4_Switch_Massage {
    """
    Decrease massage level switch engaged
    """
    decrease: Boolean

    """
    Increase massage level switch engaged
    """
    increase: Boolean
  }

  """
  Recline switches
  """
  type Vehicle_Cabin_Seat_Row1_Pos4_Switch_Recline {
    """
    Seatback recline backward switch engaged
    """
    backward: Boolean

    """
    Seatback recline forward switch engaged
    """
    forward: Boolean
  }

  """
  Side bolster switches
  """
  type Vehicle_Cabin_Seat_Row1_Pos4_Switch_SideBolster {
    """
    Lumbar deflation switch engaged
    """
    deflate: Boolean

    """
    Lumbar inflation switch engaged
    """
    inflate: Boolean
  }

  """
  Fifth seat from left, front row
  """
  type Vehicle_Cabin_Seat_Row1_Pos5 {
    airbag: Vehicle_Cabin_Seat_Row1_Pos5_Airbag

    cushion: Vehicle_Cabin_Seat_Row1_Pos5_Cushion

    """
    Does the seat have a passenger in it.
    """
    hasPassenger: Boolean

    headRestraint: Vehicle_Cabin_Seat_Row1_Pos5_HeadRestraint

    """
    Seat cooling / heating. 0 = off. -100 = max cold. +100 = max heat
    """
    heating: Int

    """
    Is the belt engaged.
    """
    isBelted: Boolean

    lumbar: Vehicle_Cabin_Seat_Row1_Pos5_Lumbar

    """
    Seat massage level. 0 = off. 100 = max massage.
    """
    massage: Int

    """
    Seat horizontal position. 0 = Frontmost. 1000 = Rearmost
    """
    position: Int

    """
    Recline level. -90 = Max forward recline. 90 max backward recline
    """
    recline: Int

    sideBolster: Vehicle_Cabin_Seat_Row1_Pos5_SideBolster

    switch: Vehicle_Cabin_Seat_Row1_Pos5_Switch
  }

  """
  Airbag signals
  """
  type Vehicle_Cabin_Seat_Row1_Pos5_Airbag {
    """
    Airbag deployment status. True = Airbag deployed. False = Airbag not deployed.
    """
    isDeployed: Boolean
  }

  """
  Cushion signals.
  """
  type Vehicle_Cabin_Seat_Row1_Pos5_Cushion {
    """
    Height of the seat front. 0 = Lowermost. 500 = Uppermost.
    """
    height: Int

    """
    Forward length of cushion (leg support). 0 = Rearmost. 500 = Forwardmost.
    """
    length: Int
  }

  """
  Head restraint settings
  """
  type Vehicle_Cabin_Seat_Row1_Pos5_HeadRestraint {
    """
    Height of head restraint. 0 = Bottommost. 255 = Topmost.
    """
    height: Int
  }

  """
  Lumbar signals
  """
  type Vehicle_Cabin_Seat_Row1_Pos5_Lumbar {
    """
    Lumbar support position. 0 = Lowermost. 255 = Uppermost.
    """
    height: Int

    """
    Lumbar support inflation. 0 = Fully deflated. 255 = Fully inflated.
    """
    inflation: Int
  }

  """
  Side bolster settings
  """
  type Vehicle_Cabin_Seat_Row1_Pos5_SideBolster {
    """
    Lumbar support inflation. 0 = Fully deflated. 255 = Fully inflated.
    """
    inflation: Int
  }

  """
  Seat switch signals
  """
  type Vehicle_Cabin_Seat_Row1_Pos5_Switch {
    """
    Seat forward switch engaged
    """
    backward: Boolean

    """
    Cooler switch for Seat heater
    """
    cooler: Boolean

    cushion: Vehicle_Cabin_Seat_Row1_Pos5_Switch_Cushion

    """
    Seat down switch engaged
    """
    down: Boolean

    """
    Seat forward switch engaged
    """
    forward: Boolean

    headRestraint: Vehicle_Cabin_Seat_Row1_Pos5_Switch_HeadRestraint

    lumbar: Vehicle_Cabin_Seat_Row1_Pos5_Switch_Lumbar

    massage: Vehicle_Cabin_Seat_Row1_Pos5_Switch_Massage

    recline: Vehicle_Cabin_Seat_Row1_Pos5_Switch_Recline

    sideBolster: Vehicle_Cabin_Seat_Row1_Pos5_Switch_SideBolster

    """
    Seat up switch engaged
    """
    up: Boolean

    """
    Warmer switch for Seat heater
    """
    warmer: Boolean
  }

  """
  Cushion switches
  """
  type Vehicle_Cabin_Seat_Row1_Pos5_Switch_Cushion {
    """
    Seat cushion backward/shorten switch engaged
    """
    backward: Boolean

    """
    Seat cushion down switch engaged
    """
    down: Boolean

    """
    Seat cushion forward/lengthen switch engaged
    """
    forward: Boolean

    """
    Seat cushion up switch engaged
    """
    up: Boolean
  }

  """
  Head restraint switches
  """
  type Vehicle_Cabin_Seat_Row1_Pos5_Switch_HeadRestraint {
    """
    Head restraint down switch engaged
    """
    down: Boolean

    """
    Head restraint up switch engaged
    """
    up: Boolean
  }

  """
  Lumbar switches
  """
  type Vehicle_Cabin_Seat_Row1_Pos5_Switch_Lumbar {
    """
    Lumbar deflation switch engaged
    """
    deflate: Boolean

    """
    Lumbar down switch engaged
    """
    down: Boolean

    """
    Lumbar inflation switch engaged
    """
    inflate: Boolean

    """
    Lumbar up switch engaged
    """
    up: Boolean
  }

  """
  Massage switches
  """
  type Vehicle_Cabin_Seat_Row1_Pos5_Switch_Massage {
    """
    Decrease massage level switch engaged
    """
    decrease: Boolean

    """
    Increase massage level switch engaged
    """
    increase: Boolean
  }

  """
  Recline switches
  """
  type Vehicle_Cabin_Seat_Row1_Pos5_Switch_Recline {
    """
    Seatback recline backward switch engaged
    """
    backward: Boolean

    """
    Seatback recline forward switch engaged
    """
    forward: Boolean
  }

  """
  Side bolster switches
  """
  type Vehicle_Cabin_Seat_Row1_Pos5_Switch_SideBolster {
    """
    Lumbar deflation switch engaged
    """
    deflate: Boolean

    """
    Lumbar inflation switch engaged
    """
    inflate: Boolean
  }

  """
  Front seats
  """
  type Vehicle_Cabin_Seat_Row2 {
    pos1: Vehicle_Cabin_Seat_Row2_Pos1

    pos2: Vehicle_Cabin_Seat_Row2_Pos2

    pos3: Vehicle_Cabin_Seat_Row2_Pos3

    pos4: Vehicle_Cabin_Seat_Row2_Pos4

    pos5: Vehicle_Cabin_Seat_Row2_Pos5
  }

  """
  First seat from left, second row
  """
  type Vehicle_Cabin_Seat_Row2_Pos1 {
    airbag: Vehicle_Cabin_Seat_Row2_Pos1_Airbag

    cushion: Vehicle_Cabin_Seat_Row2_Pos1_Cushion

    """
    Does the seat have a passenger in it.
    """
    hasPassenger: Boolean

    headRestraint: Vehicle_Cabin_Seat_Row2_Pos1_HeadRestraint

    """
    Seat cooling / heating. 0 = off. -100 = max cold. +100 = max heat
    """
    heating: Int

    """
    Is the belt engaged.
    """
    isBelted: Boolean

    lumbar: Vehicle_Cabin_Seat_Row2_Pos1_Lumbar

    """
    Seat massage level. 0 = off. 100 = max massage.
    """
    massage: Int

    """
    Seat horizontal position. 0 = Frontmost. 1000 = Rearmost
    """
    position: Int

    """
    Recline level. -90 = Max forward recline. 90 max backward recline
    """
    recline: Int

    sideBolster: Vehicle_Cabin_Seat_Row2_Pos1_SideBolster

    switch: Vehicle_Cabin_Seat_Row2_Pos1_Switch
  }

  """
  Airbag signals
  """
  type Vehicle_Cabin_Seat_Row2_Pos1_Airbag {
    """
    Airbag deployment status. True = Airbag deployed. False = Airbag not deployed.
    """
    isDeployed: Boolean
  }

  """
  Cushion signals.
  """
  type Vehicle_Cabin_Seat_Row2_Pos1_Cushion {
    """
    Height of the seat front. 0 = Lowermost. 500 = Uppermost.
    """
    height: Int

    """
    Forward length of cushion (leg support). 0 = Rearmost. 500 = Forwardmost.
    """
    length: Int
  }

  """
  Head restraint settings
  """
  type Vehicle_Cabin_Seat_Row2_Pos1_HeadRestraint {
    """
    Height of head restraint. 0 = Bottommost. 255 = Topmost.
    """
    height: Int
  }

  """
  Lumbar signals
  """
  type Vehicle_Cabin_Seat_Row2_Pos1_Lumbar {
    """
    Lumbar support position. 0 = Lowermost. 255 = Uppermost.
    """
    height: Int

    """
    Lumbar support inflation. 0 = Fully deflated. 255 = Fully inflated.
    """
    inflation: Int
  }

  """
  Side bolster settings
  """
  type Vehicle_Cabin_Seat_Row2_Pos1_SideBolster {
    """
    Lumbar support inflation. 0 = Fully deflated. 255 = Fully inflated.
    """
    inflation: Int
  }

  """
  Seat switch signals
  """
  type Vehicle_Cabin_Seat_Row2_Pos1_Switch {
    """
    Seat forward switch engaged
    """
    backward: Boolean

    """
    Cooler switch for Seat heater
    """
    cooler: Boolean

    cushion: Vehicle_Cabin_Seat_Row2_Pos1_Switch_Cushion

    """
    Seat down switch engaged
    """
    down: Boolean

    """
    Seat forward switch engaged
    """
    forward: Boolean

    headRestraint: Vehicle_Cabin_Seat_Row2_Pos1_Switch_HeadRestraint

    lumbar: Vehicle_Cabin_Seat_Row2_Pos1_Switch_Lumbar

    massage: Vehicle_Cabin_Seat_Row2_Pos1_Switch_Massage

    recline: Vehicle_Cabin_Seat_Row2_Pos1_Switch_Recline

    sideBolster: Vehicle_Cabin_Seat_Row2_Pos1_Switch_SideBolster

    """
    Seat up switch engaged
    """
    up: Boolean

    """
    Warmer switch for Seat heater
    """
    warmer: Boolean
  }

  """
  Cushion switches
  """
  type Vehicle_Cabin_Seat_Row2_Pos1_Switch_Cushion {
    """
    Seat cushion backward/shorten switch engaged
    """
    backward: Boolean

    """
    Seat cushion down switch engaged
    """
    down: Boolean

    """
    Seat cushion forward/lengthen switch engaged
    """
    forward: Boolean

    """
    Seat cushion up switch engaged
    """
    up: Boolean
  }

  """
  Head restraint switches
  """
  type Vehicle_Cabin_Seat_Row2_Pos1_Switch_HeadRestraint {
    """
    Head restraint down switch engaged
    """
    down: Boolean

    """
    Head restraint up switch engaged
    """
    up: Boolean
  }

  """
  Lumbar switches
  """
  type Vehicle_Cabin_Seat_Row2_Pos1_Switch_Lumbar {
    """
    Lumbar deflation switch engaged
    """
    deflate: Boolean

    """
    Lumbar down switch engaged
    """
    down: Boolean

    """
    Lumbar inflation switch engaged
    """
    inflate: Boolean

    """
    Lumbar up switch engaged
    """
    up: Boolean
  }

  """
  Massage switches
  """
  type Vehicle_Cabin_Seat_Row2_Pos1_Switch_Massage {
    """
    Decrease massage level switch engaged
    """
    decrease: Boolean

    """
    Increase massage level switch engaged
    """
    increase: Boolean
  }

  """
  Recline switches
  """
  type Vehicle_Cabin_Seat_Row2_Pos1_Switch_Recline {
    """
    Seatback recline backward switch engaged
    """
    backward: Boolean

    """
    Seatback recline forward switch engaged
    """
    forward: Boolean
  }

  """
  Side bolster switches
  """
  type Vehicle_Cabin_Seat_Row2_Pos1_Switch_SideBolster {
    """
    Lumbar deflation switch engaged
    """
    deflate: Boolean

    """
    Lumbar inflation switch engaged
    """
    inflate: Boolean
  }

  """
  Second seat from left, second row
  """
  type Vehicle_Cabin_Seat_Row2_Pos2 {
    airbag: Vehicle_Cabin_Seat_Row2_Pos2_Airbag

    cushion: Vehicle_Cabin_Seat_Row2_Pos2_Cushion

    """
    Does the seat have a passenger in it.
    """
    hasPassenger: Boolean

    headRestraint: Vehicle_Cabin_Seat_Row2_Pos2_HeadRestraint

    """
    Seat cooling / heating. 0 = off. -100 = max cold. +100 = max heat
    """
    heating: Int

    """
    Is the belt engaged.
    """
    isBelted: Boolean

    lumbar: Vehicle_Cabin_Seat_Row2_Pos2_Lumbar

    """
    Seat massage level. 0 = off. 100 = max massage.
    """
    massage: Int

    """
    Seat horizontal position. 0 = Frontmost. 1000 = Rearmost
    """
    position: Int

    """
    Recline level. -90 = Max forward recline. 90 max backward recline
    """
    recline: Int

    sideBolster: Vehicle_Cabin_Seat_Row2_Pos2_SideBolster

    switch: Vehicle_Cabin_Seat_Row2_Pos2_Switch
  }

  """
  Airbag signals
  """
  type Vehicle_Cabin_Seat_Row2_Pos2_Airbag {
    """
    Airbag deployment status. True = Airbag deployed. False = Airbag not deployed.
    """
    isDeployed: Boolean
  }

  """
  Cushion signals.
  """
  type Vehicle_Cabin_Seat_Row2_Pos2_Cushion {
    """
    Height of the seat front. 0 = Lowermost. 500 = Uppermost.
    """
    height: Int

    """
    Forward length of cushion (leg support). 0 = Rearmost. 500 = Forwardmost.
    """
    length: Int
  }

  """
  Head restraint settings
  """
  type Vehicle_Cabin_Seat_Row2_Pos2_HeadRestraint {
    """
    Height of head restraint. 0 = Bottommost. 255 = Topmost.
    """
    height: Int
  }

  """
  Lumbar signals
  """
  type Vehicle_Cabin_Seat_Row2_Pos2_Lumbar {
    """
    Lumbar support position. 0 = Lowermost. 255 = Uppermost.
    """
    height: Int

    """
    Lumbar support inflation. 0 = Fully deflated. 255 = Fully inflated.
    """
    inflation: Int
  }

  """
  Side bolster settings
  """
  type Vehicle_Cabin_Seat_Row2_Pos2_SideBolster {
    """
    Lumbar support inflation. 0 = Fully deflated. 255 = Fully inflated.
    """
    inflation: Int
  }

  """
  Seat switch signals
  """
  type Vehicle_Cabin_Seat_Row2_Pos2_Switch {
    """
    Seat forward switch engaged
    """
    backward: Boolean

    """
    Cooler switch for Seat heater
    """
    cooler: Boolean

    cushion: Vehicle_Cabin_Seat_Row2_Pos2_Switch_Cushion

    """
    Seat down switch engaged
    """
    down: Boolean

    """
    Seat forward switch engaged
    """
    forward: Boolean

    headRestraint: Vehicle_Cabin_Seat_Row2_Pos2_Switch_HeadRestraint

    lumbar: Vehicle_Cabin_Seat_Row2_Pos2_Switch_Lumbar

    massage: Vehicle_Cabin_Seat_Row2_Pos2_Switch_Massage

    recline: Vehicle_Cabin_Seat_Row2_Pos2_Switch_Recline

    sideBolster: Vehicle_Cabin_Seat_Row2_Pos2_Switch_SideBolster

    """
    Seat up switch engaged
    """
    up: Boolean

    """
    Warmer switch for Seat heater
    """
    warmer: Boolean
  }

  """
  Cushion switches
  """
  type Vehicle_Cabin_Seat_Row2_Pos2_Switch_Cushion {
    """
    Seat cushion backward/shorten switch engaged
    """
    backward: Boolean

    """
    Seat cushion down switch engaged
    """
    down: Boolean

    """
    Seat cushion forward/lengthen switch engaged
    """
    forward: Boolean

    """
    Seat cushion up switch engaged
    """
    up: Boolean
  }

  """
  Head restraint switches
  """
  type Vehicle_Cabin_Seat_Row2_Pos2_Switch_HeadRestraint {
    """
    Head restraint down switch engaged
    """
    down: Boolean

    """
    Head restraint up switch engaged
    """
    up: Boolean
  }

  """
  Lumbar switches
  """
  type Vehicle_Cabin_Seat_Row2_Pos2_Switch_Lumbar {
    """
    Lumbar deflation switch engaged
    """
    deflate: Boolean

    """
    Lumbar down switch engaged
    """
    down: Boolean

    """
    Lumbar inflation switch engaged
    """
    inflate: Boolean

    """
    Lumbar up switch engaged
    """
    up: Boolean
  }

  """
  Massage switches
  """
  type Vehicle_Cabin_Seat_Row2_Pos2_Switch_Massage {
    """
    Decrease massage level switch engaged
    """
    decrease: Boolean

    """
    Increase massage level switch engaged
    """
    increase: Boolean
  }

  """
  Recline switches
  """
  type Vehicle_Cabin_Seat_Row2_Pos2_Switch_Recline {
    """
    Seatback recline backward switch engaged
    """
    backward: Boolean

    """
    Seatback recline forward switch engaged
    """
    forward: Boolean
  }

  """
  Side bolster switches
  """
  type Vehicle_Cabin_Seat_Row2_Pos2_Switch_SideBolster {
    """
    Lumbar deflation switch engaged
    """
    deflate: Boolean

    """
    Lumbar inflation switch engaged
    """
    inflate: Boolean
  }

  """
  Third seat from left, second row
  """
  type Vehicle_Cabin_Seat_Row2_Pos3 {
    airbag: Vehicle_Cabin_Seat_Row2_Pos3_Airbag

    cushion: Vehicle_Cabin_Seat_Row2_Pos3_Cushion

    """
    Does the seat have a passenger in it.
    """
    hasPassenger: Boolean

    headRestraint: Vehicle_Cabin_Seat_Row2_Pos3_HeadRestraint

    """
    Seat cooling / heating. 0 = off. -100 = max cold. +100 = max heat
    """
    heating: Int

    """
    Is the belt engaged.
    """
    isBelted: Boolean

    lumbar: Vehicle_Cabin_Seat_Row2_Pos3_Lumbar

    """
    Seat massage level. 0 = off. 100 = max massage.
    """
    massage: Int

    """
    Seat horizontal position. 0 = Frontmost. 1000 = Rearmost
    """
    position: Int

    """
    Recline level. -90 = Max forward recline. 90 max backward recline
    """
    recline: Int

    sideBolster: Vehicle_Cabin_Seat_Row2_Pos3_SideBolster

    switch: Vehicle_Cabin_Seat_Row2_Pos3_Switch
  }

  """
  Airbag signals
  """
  type Vehicle_Cabin_Seat_Row2_Pos3_Airbag {
    """
    Airbag deployment status. True = Airbag deployed. False = Airbag not deployed.
    """
    isDeployed: Boolean
  }

  """
  Cushion signals.
  """
  type Vehicle_Cabin_Seat_Row2_Pos3_Cushion {
    """
    Height of the seat front. 0 = Lowermost. 500 = Uppermost.
    """
    height: Int

    """
    Forward length of cushion (leg support). 0 = Rearmost. 500 = Forwardmost.
    """
    length: Int
  }

  """
  Head restraint settings
  """
  type Vehicle_Cabin_Seat_Row2_Pos3_HeadRestraint {
    """
    Height of head restraint. 0 = Bottommost. 255 = Topmost.
    """
    height: Int
  }

  """
  Lumbar signals
  """
  type Vehicle_Cabin_Seat_Row2_Pos3_Lumbar {
    """
    Lumbar support position. 0 = Lowermost. 255 = Uppermost.
    """
    height: Int

    """
    Lumbar support inflation. 0 = Fully deflated. 255 = Fully inflated.
    """
    inflation: Int
  }

  """
  Side bolster settings
  """
  type Vehicle_Cabin_Seat_Row2_Pos3_SideBolster {
    """
    Lumbar support inflation. 0 = Fully deflated. 255 = Fully inflated.
    """
    inflation: Int
  }

  """
  Seat switch signals
  """
  type Vehicle_Cabin_Seat_Row2_Pos3_Switch {
    """
    Seat forward switch engaged
    """
    backward: Boolean

    """
    Cooler switch for Seat heater
    """
    cooler: Boolean

    cushion: Vehicle_Cabin_Seat_Row2_Pos3_Switch_Cushion

    """
    Seat down switch engaged
    """
    down: Boolean

    """
    Seat forward switch engaged
    """
    forward: Boolean

    headRestraint: Vehicle_Cabin_Seat_Row2_Pos3_Switch_HeadRestraint

    lumbar: Vehicle_Cabin_Seat_Row2_Pos3_Switch_Lumbar

    massage: Vehicle_Cabin_Seat_Row2_Pos3_Switch_Massage

    recline: Vehicle_Cabin_Seat_Row2_Pos3_Switch_Recline

    sideBolster: Vehicle_Cabin_Seat_Row2_Pos3_Switch_SideBolster

    """
    Seat up switch engaged
    """
    up: Boolean

    """
    Warmer switch for Seat heater
    """
    warmer: Boolean
  }

  """
  Cushion switches
  """
  type Vehicle_Cabin_Seat_Row2_Pos3_Switch_Cushion {
    """
    Seat cushion backward/shorten switch engaged
    """
    backward: Boolean

    """
    Seat cushion down switch engaged
    """
    down: Boolean

    """
    Seat cushion forward/lengthen switch engaged
    """
    forward: Boolean

    """
    Seat cushion up switch engaged
    """
    up: Boolean
  }

  """
  Head restraint switches
  """
  type Vehicle_Cabin_Seat_Row2_Pos3_Switch_HeadRestraint {
    """
    Head restraint down switch engaged
    """
    down: Boolean

    """
    Head restraint up switch engaged
    """
    up: Boolean
  }

  """
  Lumbar switches
  """
  type Vehicle_Cabin_Seat_Row2_Pos3_Switch_Lumbar {
    """
    Lumbar deflation switch engaged
    """
    deflate: Boolean

    """
    Lumbar down switch engaged
    """
    down: Boolean

    """
    Lumbar inflation switch engaged
    """
    inflate: Boolean

    """
    Lumbar up switch engaged
    """
    up: Boolean
  }

  """
  Massage switches
  """
  type Vehicle_Cabin_Seat_Row2_Pos3_Switch_Massage {
    """
    Decrease massage level switch engaged
    """
    decrease: Boolean

    """
    Increase massage level switch engaged
    """
    increase: Boolean
  }

  """
  Recline switches
  """
  type Vehicle_Cabin_Seat_Row2_Pos3_Switch_Recline {
    """
    Seatback recline backward switch engaged
    """
    backward: Boolean

    """
    Seatback recline forward switch engaged
    """
    forward: Boolean
  }

  """
  Side bolster switches
  """
  type Vehicle_Cabin_Seat_Row2_Pos3_Switch_SideBolster {
    """
    Lumbar deflation switch engaged
    """
    deflate: Boolean

    """
    Lumbar inflation switch engaged
    """
    inflate: Boolean
  }

  """
  Fourth seat from left, second row
  """
  type Vehicle_Cabin_Seat_Row2_Pos4 {
    airbag: Vehicle_Cabin_Seat_Row2_Pos4_Airbag

    cushion: Vehicle_Cabin_Seat_Row2_Pos4_Cushion

    """
    Does the seat have a passenger in it.
    """
    hasPassenger: Boolean

    headRestraint: Vehicle_Cabin_Seat_Row2_Pos4_HeadRestraint

    """
    Seat cooling / heating. 0 = off. -100 = max cold. +100 = max heat
    """
    heating: Int

    """
    Is the belt engaged.
    """
    isBelted: Boolean

    lumbar: Vehicle_Cabin_Seat_Row2_Pos4_Lumbar

    """
    Seat massage level. 0 = off. 100 = max massage.
    """
    massage: Int

    """
    Seat horizontal position. 0 = Frontmost. 1000 = Rearmost
    """
    position: Int

    """
    Recline level. -90 = Max forward recline. 90 max backward recline
    """
    recline: Int

    sideBolster: Vehicle_Cabin_Seat_Row2_Pos4_SideBolster

    switch: Vehicle_Cabin_Seat_Row2_Pos4_Switch
  }

  """
  Airbag signals
  """
  type Vehicle_Cabin_Seat_Row2_Pos4_Airbag {
    """
    Airbag deployment status. True = Airbag deployed. False = Airbag not deployed.
    """
    isDeployed: Boolean
  }

  """
  Cushion signals.
  """
  type Vehicle_Cabin_Seat_Row2_Pos4_Cushion {
    """
    Height of the seat front. 0 = Lowermost. 500 = Uppermost.
    """
    height: Int

    """
    Forward length of cushion (leg support). 0 = Rearmost. 500 = Forwardmost.
    """
    length: Int
  }

  """
  Head restraint settings
  """
  type Vehicle_Cabin_Seat_Row2_Pos4_HeadRestraint {
    """
    Height of head restraint. 0 = Bottommost. 255 = Topmost.
    """
    height: Int
  }

  """
  Lumbar signals
  """
  type Vehicle_Cabin_Seat_Row2_Pos4_Lumbar {
    """
    Lumbar support position. 0 = Lowermost. 255 = Uppermost.
    """
    height: Int

    """
    Lumbar support inflation. 0 = Fully deflated. 255 = Fully inflated.
    """
    inflation: Int
  }

  """
  Side bolster settings
  """
  type Vehicle_Cabin_Seat_Row2_Pos4_SideBolster {
    """
    Lumbar support inflation. 0 = Fully deflated. 255 = Fully inflated.
    """
    inflation: Int
  }

  """
  Seat switch signals
  """
  type Vehicle_Cabin_Seat_Row2_Pos4_Switch {
    """
    Seat forward switch engaged
    """
    backward: Boolean

    """
    Cooler switch for Seat heater
    """
    cooler: Boolean

    cushion: Vehicle_Cabin_Seat_Row2_Pos4_Switch_Cushion

    """
    Seat down switch engaged
    """
    down: Boolean

    """
    Seat forward switch engaged
    """
    forward: Boolean

    headRestraint: Vehicle_Cabin_Seat_Row2_Pos4_Switch_HeadRestraint

    lumbar: Vehicle_Cabin_Seat_Row2_Pos4_Switch_Lumbar

    massage: Vehicle_Cabin_Seat_Row2_Pos4_Switch_Massage

    recline: Vehicle_Cabin_Seat_Row2_Pos4_Switch_Recline

    sideBolster: Vehicle_Cabin_Seat_Row2_Pos4_Switch_SideBolster

    """
    Seat up switch engaged
    """
    up: Boolean

    """
    Warmer switch for Seat heater
    """
    warmer: Boolean
  }

  """
  Cushion switches
  """
  type Vehicle_Cabin_Seat_Row2_Pos4_Switch_Cushion {
    """
    Seat cushion backward/shorten switch engaged
    """
    backward: Boolean

    """
    Seat cushion down switch engaged
    """
    down: Boolean

    """
    Seat cushion forward/lengthen switch engaged
    """
    forward: Boolean

    """
    Seat cushion up switch engaged
    """
    up: Boolean
  }

  """
  Head restraint switches
  """
  type Vehicle_Cabin_Seat_Row2_Pos4_Switch_HeadRestraint {
    """
    Head restraint down switch engaged
    """
    down: Boolean

    """
    Head restraint up switch engaged
    """
    up: Boolean
  }

  """
  Lumbar switches
  """
  type Vehicle_Cabin_Seat_Row2_Pos4_Switch_Lumbar {
    """
    Lumbar deflation switch engaged
    """
    deflate: Boolean

    """
    Lumbar down switch engaged
    """
    down: Boolean

    """
    Lumbar inflation switch engaged
    """
    inflate: Boolean

    """
    Lumbar up switch engaged
    """
    up: Boolean
  }

  """
  Massage switches
  """
  type Vehicle_Cabin_Seat_Row2_Pos4_Switch_Massage {
    """
    Decrease massage level switch engaged
    """
    decrease: Boolean

    """
    Increase massage level switch engaged
    """
    increase: Boolean
  }

  """
  Recline switches
  """
  type Vehicle_Cabin_Seat_Row2_Pos4_Switch_Recline {
    """
    Seatback recline backward switch engaged
    """
    backward: Boolean

    """
    Seatback recline forward switch engaged
    """
    forward: Boolean
  }

  """
  Side bolster switches
  """
  type Vehicle_Cabin_Seat_Row2_Pos4_Switch_SideBolster {
    """
    Lumbar deflation switch engaged
    """
    deflate: Boolean

    """
    Lumbar inflation switch engaged
    """
    inflate: Boolean
  }

  """
  Fifth seat from left, second row
  """
  type Vehicle_Cabin_Seat_Row2_Pos5 {
    airbag: Vehicle_Cabin_Seat_Row2_Pos5_Airbag

    cushion: Vehicle_Cabin_Seat_Row2_Pos5_Cushion

    """
    Does the seat have a passenger in it.
    """
    hasPassenger: Boolean

    headRestraint: Vehicle_Cabin_Seat_Row2_Pos5_HeadRestraint

    """
    Seat cooling / heating. 0 = off. -100 = max cold. +100 = max heat
    """
    heating: Int

    """
    Is the belt engaged.
    """
    isBelted: Boolean

    lumbar: Vehicle_Cabin_Seat_Row2_Pos5_Lumbar

    """
    Seat massage level. 0 = off. 100 = max massage.
    """
    massage: Int

    """
    Seat horizontal position. 0 = Frontmost. 1000 = Rearmost
    """
    position: Int

    """
    Recline level. -90 = Max forward recline. 90 max backward recline
    """
    recline: Int

    sideBolster: Vehicle_Cabin_Seat_Row2_Pos5_SideBolster

    switch: Vehicle_Cabin_Seat_Row2_Pos5_Switch
  }

  """
  Airbag signals
  """
  type Vehicle_Cabin_Seat_Row2_Pos5_Airbag {
    """
    Airbag deployment status. True = Airbag deployed. False = Airbag not deployed.
    """
    isDeployed: Boolean
  }

  """
  Cushion signals.
  """
  type Vehicle_Cabin_Seat_Row2_Pos5_Cushion {
    """
    Height of the seat front. 0 = Lowermost. 500 = Uppermost.
    """
    height: Int

    """
    Forward length of cushion (leg support). 0 = Rearmost. 500 = Forwardmost.
    """
    length: Int
  }

  """
  Head restraint settings
  """
  type Vehicle_Cabin_Seat_Row2_Pos5_HeadRestraint {
    """
    Height of head restraint. 0 = Bottommost. 255 = Topmost.
    """
    height: Int
  }

  """
  Lumbar signals
  """
  type Vehicle_Cabin_Seat_Row2_Pos5_Lumbar {
    """
    Lumbar support position. 0 = Lowermost. 255 = Uppermost.
    """
    height: Int

    """
    Lumbar support inflation. 0 = Fully deflated. 255 = Fully inflated.
    """
    inflation: Int
  }

  """
  Side bolster settings
  """
  type Vehicle_Cabin_Seat_Row2_Pos5_SideBolster {
    """
    Lumbar support inflation. 0 = Fully deflated. 255 = Fully inflated.
    """
    inflation: Int
  }

  """
  Seat switch signals
  """
  type Vehicle_Cabin_Seat_Row2_Pos5_Switch {
    """
    Seat forward switch engaged
    """
    backward: Boolean

    """
    Cooler switch for Seat heater
    """
    cooler: Boolean

    cushion: Vehicle_Cabin_Seat_Row2_Pos5_Switch_Cushion

    """
    Seat down switch engaged
    """
    down: Boolean

    """
    Seat forward switch engaged
    """
    forward: Boolean

    headRestraint: Vehicle_Cabin_Seat_Row2_Pos5_Switch_HeadRestraint

    lumbar: Vehicle_Cabin_Seat_Row2_Pos5_Switch_Lumbar

    massage: Vehicle_Cabin_Seat_Row2_Pos5_Switch_Massage

    recline: Vehicle_Cabin_Seat_Row2_Pos5_Switch_Recline

    sideBolster: Vehicle_Cabin_Seat_Row2_Pos5_Switch_SideBolster

    """
    Seat up switch engaged
    """
    up: Boolean

    """
    Warmer switch for Seat heater
    """
    warmer: Boolean
  }

  """
  Cushion switches
  """
  type Vehicle_Cabin_Seat_Row2_Pos5_Switch_Cushion {
    """
    Seat cushion backward/shorten switch engaged
    """
    backward: Boolean

    """
    Seat cushion down switch engaged
    """
    down: Boolean

    """
    Seat cushion forward/lengthen switch engaged
    """
    forward: Boolean

    """
    Seat cushion up switch engaged
    """
    up: Boolean
  }

  """
  Head restraint switches
  """
  type Vehicle_Cabin_Seat_Row2_Pos5_Switch_HeadRestraint {
    """
    Head restraint down switch engaged
    """
    down: Boolean

    """
    Head restraint up switch engaged
    """
    up: Boolean
  }

  """
  Lumbar switches
  """
  type Vehicle_Cabin_Seat_Row2_Pos5_Switch_Lumbar {
    """
    Lumbar deflation switch engaged
    """
    deflate: Boolean

    """
    Lumbar down switch engaged
    """
    down: Boolean

    """
    Lumbar inflation switch engaged
    """
    inflate: Boolean

    """
    Lumbar up switch engaged
    """
    up: Boolean
  }

  """
  Massage switches
  """
  type Vehicle_Cabin_Seat_Row2_Pos5_Switch_Massage {
    """
    Decrease massage level switch engaged
    """
    decrease: Boolean

    """
    Increase massage level switch engaged
    """
    increase: Boolean
  }

  """
  Recline switches
  """
  type Vehicle_Cabin_Seat_Row2_Pos5_Switch_Recline {
    """
    Seatback recline backward switch engaged
    """
    backward: Boolean

    """
    Seatback recline forward switch engaged
    """
    forward: Boolean
  }

  """
  Side bolster switches
  """
  type Vehicle_Cabin_Seat_Row2_Pos5_Switch_SideBolster {
    """
    Lumbar deflation switch engaged
    """
    deflate: Boolean

    """
    Lumbar inflation switch engaged
    """
    inflate: Boolean
  }

  """
  Front seats
  """
  type Vehicle_Cabin_Seat_Row3 {
    pos1: Vehicle_Cabin_Seat_Row3_Pos1

    pos2: Vehicle_Cabin_Seat_Row3_Pos2

    pos3: Vehicle_Cabin_Seat_Row3_Pos3

    pos4: Vehicle_Cabin_Seat_Row3_Pos4

    pos5: Vehicle_Cabin_Seat_Row3_Pos5
  }

  """
  First seat from left, third row
  """
  type Vehicle_Cabin_Seat_Row3_Pos1 {
    airbag: Vehicle_Cabin_Seat_Row3_Pos1_Airbag

    cushion: Vehicle_Cabin_Seat_Row3_Pos1_Cushion

    """
    Does the seat have a passenger in it.
    """
    hasPassenger: Boolean

    headRestraint: Vehicle_Cabin_Seat_Row3_Pos1_HeadRestraint

    """
    Seat cooling / heating. 0 = off. -100 = max cold. +100 = max heat
    """
    heating: Int

    """
    Is the belt engaged.
    """
    isBelted: Boolean

    lumbar: Vehicle_Cabin_Seat_Row3_Pos1_Lumbar

    """
    Seat massage level. 0 = off. 100 = max massage.
    """
    massage: Int

    """
    Seat horizontal position. 0 = Frontmost. 1000 = Rearmost
    """
    position: Int

    """
    Recline level. -90 = Max forward recline. 90 max backward recline
    """
    recline: Int

    sideBolster: Vehicle_Cabin_Seat_Row3_Pos1_SideBolster

    switch: Vehicle_Cabin_Seat_Row3_Pos1_Switch
  }

  """
  Airbag signals
  """
  type Vehicle_Cabin_Seat_Row3_Pos1_Airbag {
    """
    Airbag deployment status. True = Airbag deployed. False = Airbag not deployed.
    """
    isDeployed: Boolean
  }

  """
  Cushion signals.
  """
  type Vehicle_Cabin_Seat_Row3_Pos1_Cushion {
    """
    Height of the seat front. 0 = Lowermost. 500 = Uppermost.
    """
    height: Int

    """
    Forward length of cushion (leg support). 0 = Rearmost. 500 = Forwardmost.
    """
    length: Int
  }

  """
  Head restraint settings
  """
  type Vehicle_Cabin_Seat_Row3_Pos1_HeadRestraint {
    """
    Height of head restraint. 0 = Bottommost. 255 = Topmost.
    """
    height: Int
  }

  """
  Lumbar signals
  """
  type Vehicle_Cabin_Seat_Row3_Pos1_Lumbar {
    """
    Lumbar support position. 0 = Lowermost. 255 = Uppermost.
    """
    height: Int

    """
    Lumbar support inflation. 0 = Fully deflated. 255 = Fully inflated.
    """
    inflation: Int
  }

  """
  Side bolster settings
  """
  type Vehicle_Cabin_Seat_Row3_Pos1_SideBolster {
    """
    Lumbar support inflation. 0 = Fully deflated. 255 = Fully inflated.
    """
    inflation: Int
  }

  """
  Seat switch signals
  """
  type Vehicle_Cabin_Seat_Row3_Pos1_Switch {
    """
    Seat forward switch engaged
    """
    backward: Boolean

    """
    Cooler switch for Seat heater
    """
    cooler: Boolean

    cushion: Vehicle_Cabin_Seat_Row3_Pos1_Switch_Cushion

    """
    Seat down switch engaged
    """
    down: Boolean

    """
    Seat forward switch engaged
    """
    forward: Boolean

    headRestraint: Vehicle_Cabin_Seat_Row3_Pos1_Switch_HeadRestraint

    lumbar: Vehicle_Cabin_Seat_Row3_Pos1_Switch_Lumbar

    massage: Vehicle_Cabin_Seat_Row3_Pos1_Switch_Massage

    recline: Vehicle_Cabin_Seat_Row3_Pos1_Switch_Recline

    sideBolster: Vehicle_Cabin_Seat_Row3_Pos1_Switch_SideBolster

    """
    Seat up switch engaged
    """
    up: Boolean

    """
    Warmer switch for Seat heater
    """
    warmer: Boolean
  }

  """
  Cushion switches
  """
  type Vehicle_Cabin_Seat_Row3_Pos1_Switch_Cushion {
    """
    Seat cushion backward/shorten switch engaged
    """
    backward: Boolean

    """
    Seat cushion down switch engaged
    """
    down: Boolean

    """
    Seat cushion forward/lengthen switch engaged
    """
    forward: Boolean

    """
    Seat cushion up switch engaged
    """
    up: Boolean
  }

  """
  Head restraint switches
  """
  type Vehicle_Cabin_Seat_Row3_Pos1_Switch_HeadRestraint {
    """
    Head restraint down switch engaged
    """
    down: Boolean

    """
    Head restraint up switch engaged
    """
    up: Boolean
  }

  """
  Lumbar switches
  """
  type Vehicle_Cabin_Seat_Row3_Pos1_Switch_Lumbar {
    """
    Lumbar deflation switch engaged
    """
    deflate: Boolean

    """
    Lumbar down switch engaged
    """
    down: Boolean

    """
    Lumbar inflation switch engaged
    """
    inflate: Boolean

    """
    Lumbar up switch engaged
    """
    up: Boolean
  }

  """
  Massage switches
  """
  type Vehicle_Cabin_Seat_Row3_Pos1_Switch_Massage {
    """
    Decrease massage level switch engaged
    """
    decrease: Boolean

    """
    Increase massage level switch engaged
    """
    increase: Boolean
  }

  """
  Recline switches
  """
  type Vehicle_Cabin_Seat_Row3_Pos1_Switch_Recline {
    """
    Seatback recline backward switch engaged
    """
    backward: Boolean

    """
    Seatback recline forward switch engaged
    """
    forward: Boolean
  }

  """
  Side bolster switches
  """
  type Vehicle_Cabin_Seat_Row3_Pos1_Switch_SideBolster {
    """
    Lumbar deflation switch engaged
    """
    deflate: Boolean

    """
    Lumbar inflation switch engaged
    """
    inflate: Boolean
  }

  """
  Third seat from left, third row
  """
  type Vehicle_Cabin_Seat_Row3_Pos2 {
    airbag: Vehicle_Cabin_Seat_Row3_Pos2_Airbag

    cushion: Vehicle_Cabin_Seat_Row3_Pos2_Cushion

    """
    Does the seat have a passenger in it.
    """
    hasPassenger: Boolean

    headRestraint: Vehicle_Cabin_Seat_Row3_Pos2_HeadRestraint

    """
    Seat cooling / heating. 0 = off. -100 = max cold. +100 = max heat
    """
    heating: Int

    """
    Is the belt engaged.
    """
    isBelted: Boolean

    lumbar: Vehicle_Cabin_Seat_Row3_Pos2_Lumbar

    """
    Seat massage level. 0 = off. 100 = max massage.
    """
    massage: Int

    """
    Seat horizontal position. 0 = Frontmost. 1000 = Rearmost
    """
    position: Int

    """
    Recline level. -90 = Max forward recline. 90 max backward recline
    """
    recline: Int

    sideBolster: Vehicle_Cabin_Seat_Row3_Pos2_SideBolster

    switch: Vehicle_Cabin_Seat_Row3_Pos2_Switch
  }

  """
  Airbag signals
  """
  type Vehicle_Cabin_Seat_Row3_Pos2_Airbag {
    """
    Airbag deployment status. True = Airbag deployed. False = Airbag not deployed.
    """
    isDeployed: Boolean
  }

  """
  Cushion signals.
  """
  type Vehicle_Cabin_Seat_Row3_Pos2_Cushion {
    """
    Height of the seat front. 0 = Lowermost. 500 = Uppermost.
    """
    height: Int

    """
    Forward length of cushion (leg support). 0 = Rearmost. 500 = Forwardmost.
    """
    length: Int
  }

  """
  Head restraint settings
  """
  type Vehicle_Cabin_Seat_Row3_Pos2_HeadRestraint {
    """
    Height of head restraint. 0 = Bottommost. 255 = Topmost.
    """
    height: Int
  }

  """
  Lumbar signals
  """
  type Vehicle_Cabin_Seat_Row3_Pos2_Lumbar {
    """
    Lumbar support position. 0 = Lowermost. 255 = Uppermost.
    """
    height: Int

    """
    Lumbar support inflation. 0 = Fully deflated. 255 = Fully inflated.
    """
    inflation: Int
  }

  """
  Side bolster settings
  """
  type Vehicle_Cabin_Seat_Row3_Pos2_SideBolster {
    """
    Lumbar support inflation. 0 = Fully deflated. 255 = Fully inflated.
    """
    inflation: Int
  }

  """
  Seat switch signals
  """
  type Vehicle_Cabin_Seat_Row3_Pos2_Switch {
    """
    Seat forward switch engaged
    """
    backward: Boolean

    """
    Cooler switch for Seat heater
    """
    cooler: Boolean

    cushion: Vehicle_Cabin_Seat_Row3_Pos2_Switch_Cushion

    """
    Seat down switch engaged
    """
    down: Boolean

    """
    Seat forward switch engaged
    """
    forward: Boolean

    headRestraint: Vehicle_Cabin_Seat_Row3_Pos2_Switch_HeadRestraint

    lumbar: Vehicle_Cabin_Seat_Row3_Pos2_Switch_Lumbar

    massage: Vehicle_Cabin_Seat_Row3_Pos2_Switch_Massage

    recline: Vehicle_Cabin_Seat_Row3_Pos2_Switch_Recline

    sideBolster: Vehicle_Cabin_Seat_Row3_Pos2_Switch_SideBolster

    """
    Seat up switch engaged
    """
    up: Boolean

    """
    Warmer switch for Seat heater
    """
    warmer: Boolean
  }

  """
  Cushion switches
  """
  type Vehicle_Cabin_Seat_Row3_Pos2_Switch_Cushion {
    """
    Seat cushion backward/shorten switch engaged
    """
    backward: Boolean

    """
    Seat cushion down switch engaged
    """
    down: Boolean

    """
    Seat cushion forward/lengthen switch engaged
    """
    forward: Boolean

    """
    Seat cushion up switch engaged
    """
    up: Boolean
  }

  """
  Head restraint switches
  """
  type Vehicle_Cabin_Seat_Row3_Pos2_Switch_HeadRestraint {
    """
    Head restraint down switch engaged
    """
    down: Boolean

    """
    Head restraint up switch engaged
    """
    up: Boolean
  }

  """
  Lumbar switches
  """
  type Vehicle_Cabin_Seat_Row3_Pos2_Switch_Lumbar {
    """
    Lumbar deflation switch engaged
    """
    deflate: Boolean

    """
    Lumbar down switch engaged
    """
    down: Boolean

    """
    Lumbar inflation switch engaged
    """
    inflate: Boolean

    """
    Lumbar up switch engaged
    """
    up: Boolean
  }

  """
  Massage switches
  """
  type Vehicle_Cabin_Seat_Row3_Pos2_Switch_Massage {
    """
    Decrease massage level switch engaged
    """
    decrease: Boolean

    """
    Increase massage level switch engaged
    """
    increase: Boolean
  }

  """
  Recline switches
  """
  type Vehicle_Cabin_Seat_Row3_Pos2_Switch_Recline {
    """
    Seatback recline backward switch engaged
    """
    backward: Boolean

    """
    Seatback recline forward switch engaged
    """
    forward: Boolean
  }

  """
  Side bolster switches
  """
  type Vehicle_Cabin_Seat_Row3_Pos2_Switch_SideBolster {
    """
    Lumbar deflation switch engaged
    """
    deflate: Boolean

    """
    Lumbar inflation switch engaged
    """
    inflate: Boolean
  }

  """
  Third seat from left, third row
  """
  type Vehicle_Cabin_Seat_Row3_Pos3 {
    airbag: Vehicle_Cabin_Seat_Row3_Pos3_Airbag

    cushion: Vehicle_Cabin_Seat_Row3_Pos3_Cushion

    """
    Does the seat have a passenger in it.
    """
    hasPassenger: Boolean

    headRestraint: Vehicle_Cabin_Seat_Row3_Pos3_HeadRestraint

    """
    Seat cooling / heating. 0 = off. -100 = max cold. +100 = max heat
    """
    heating: Int

    """
    Is the belt engaged.
    """
    isBelted: Boolean

    lumbar: Vehicle_Cabin_Seat_Row3_Pos3_Lumbar

    """
    Seat massage level. 0 = off. 100 = max massage.
    """
    massage: Int

    """
    Seat horizontal position. 0 = Frontmost. 1000 = Rearmost
    """
    position: Int

    """
    Recline level. -90 = Max forward recline. 90 max backward recline
    """
    recline: Int

    sideBolster: Vehicle_Cabin_Seat_Row3_Pos3_SideBolster

    switch: Vehicle_Cabin_Seat_Row3_Pos3_Switch
  }

  """
  Airbag signals
  """
  type Vehicle_Cabin_Seat_Row3_Pos3_Airbag {
    """
    Airbag deployment status. True = Airbag deployed. False = Airbag not deployed.
    """
    isDeployed: Boolean
  }

  """
  Cushion signals.
  """
  type Vehicle_Cabin_Seat_Row3_Pos3_Cushion {
    """
    Height of the seat front. 0 = Lowermost. 500 = Uppermost.
    """
    height: Int

    """
    Forward length of cushion (leg support). 0 = Rearmost. 500 = Forwardmost.
    """
    length: Int
  }

  """
  Head restraint settings
  """
  type Vehicle_Cabin_Seat_Row3_Pos3_HeadRestraint {
    """
    Height of head restraint. 0 = Bottommost. 255 = Topmost.
    """
    height: Int
  }

  """
  Lumbar signals
  """
  type Vehicle_Cabin_Seat_Row3_Pos3_Lumbar {
    """
    Lumbar support position. 0 = Lowermost. 255 = Uppermost.
    """
    height: Int

    """
    Lumbar support inflation. 0 = Fully deflated. 255 = Fully inflated.
    """
    inflation: Int
  }

  """
  Side bolster settings
  """
  type Vehicle_Cabin_Seat_Row3_Pos3_SideBolster {
    """
    Lumbar support inflation. 0 = Fully deflated. 255 = Fully inflated.
    """
    inflation: Int
  }

  """
  Seat switch signals
  """
  type Vehicle_Cabin_Seat_Row3_Pos3_Switch {
    """
    Seat forward switch engaged
    """
    backward: Boolean

    """
    Cooler switch for Seat heater
    """
    cooler: Boolean

    cushion: Vehicle_Cabin_Seat_Row3_Pos3_Switch_Cushion

    """
    Seat down switch engaged
    """
    down: Boolean

    """
    Seat forward switch engaged
    """
    forward: Boolean

    headRestraint: Vehicle_Cabin_Seat_Row3_Pos3_Switch_HeadRestraint

    lumbar: Vehicle_Cabin_Seat_Row3_Pos3_Switch_Lumbar

    massage: Vehicle_Cabin_Seat_Row3_Pos3_Switch_Massage

    recline: Vehicle_Cabin_Seat_Row3_Pos3_Switch_Recline

    sideBolster: Vehicle_Cabin_Seat_Row3_Pos3_Switch_SideBolster

    """
    Seat up switch engaged
    """
    up: Boolean

    """
    Warmer switch for Seat heater
    """
    warmer: Boolean
  }

  """
  Cushion switches
  """
  type Vehicle_Cabin_Seat_Row3_Pos3_Switch_Cushion {
    """
    Seat cushion backward/shorten switch engaged
    """
    backward: Boolean

    """
    Seat cushion down switch engaged
    """
    down: Boolean

    """
    Seat cushion forward/lengthen switch engaged
    """
    forward: Boolean

    """
    Seat cushion up switch engaged
    """
    up: Boolean
  }

  """
  Head restraint switches
  """
  type Vehicle_Cabin_Seat_Row3_Pos3_Switch_HeadRestraint {
    """
    Head restraint down switch engaged
    """
    down: Boolean

    """
    Head restraint up switch engaged
    """
    up: Boolean
  }

  """
  Lumbar switches
  """
  type Vehicle_Cabin_Seat_Row3_Pos3_Switch_Lumbar {
    """
    Lumbar deflation switch engaged
    """
    deflate: Boolean

    """
    Lumbar down switch engaged
    """
    down: Boolean

    """
    Lumbar inflation switch engaged
    """
    inflate: Boolean

    """
    Lumbar up switch engaged
    """
    up: Boolean
  }

  """
  Massage switches
  """
  type Vehicle_Cabin_Seat_Row3_Pos3_Switch_Massage {
    """
    Decrease massage level switch engaged
    """
    decrease: Boolean

    """
    Increase massage level switch engaged
    """
    increase: Boolean
  }

  """
  Recline switches
  """
  type Vehicle_Cabin_Seat_Row3_Pos3_Switch_Recline {
    """
    Seatback recline backward switch engaged
    """
    backward: Boolean

    """
    Seatback recline forward switch engaged
    """
    forward: Boolean
  }

  """
  Side bolster switches
  """
  type Vehicle_Cabin_Seat_Row3_Pos3_Switch_SideBolster {
    """
    Lumbar deflation switch engaged
    """
    deflate: Boolean

    """
    Lumbar inflation switch engaged
    """
    inflate: Boolean
  }

  """
  Fourth seat from left, third row
  """
  type Vehicle_Cabin_Seat_Row3_Pos4 {
    airbag: Vehicle_Cabin_Seat_Row3_Pos4_Airbag

    cushion: Vehicle_Cabin_Seat_Row3_Pos4_Cushion

    """
    Does the seat have a passenger in it.
    """
    hasPassenger: Boolean

    headRestraint: Vehicle_Cabin_Seat_Row3_Pos4_HeadRestraint

    """
    Seat cooling / heating. 0 = off. -100 = max cold. +100 = max heat
    """
    heating: Int

    """
    Is the belt engaged.
    """
    isBelted: Boolean

    lumbar: Vehicle_Cabin_Seat_Row3_Pos4_Lumbar

    """
    Seat massage level. 0 = off. 100 = max massage.
    """
    massage: Int

    """
    Seat horizontal position. 0 = Frontmost. 1000 = Rearmost
    """
    position: Int

    """
    Recline level. -90 = Max forward recline. 90 max backward recline
    """
    recline: Int

    sideBolster: Vehicle_Cabin_Seat_Row3_Pos4_SideBolster

    switch: Vehicle_Cabin_Seat_Row3_Pos4_Switch
  }

  """
  Airbag signals
  """
  type Vehicle_Cabin_Seat_Row3_Pos4_Airbag {
    """
    Airbag deployment status. True = Airbag deployed. False = Airbag not deployed.
    """
    isDeployed: Boolean
  }

  """
  Cushion signals.
  """
  type Vehicle_Cabin_Seat_Row3_Pos4_Cushion {
    """
    Height of the seat front. 0 = Lowermost. 500 = Uppermost.
    """
    height: Int

    """
    Forward length of cushion (leg support). 0 = Rearmost. 500 = Forwardmost.
    """
    length: Int
  }

  """
  Head restraint settings
  """
  type Vehicle_Cabin_Seat_Row3_Pos4_HeadRestraint {
    """
    Height of head restraint. 0 = Bottommost. 255 = Topmost.
    """
    height: Int
  }

  """
  Lumbar signals
  """
  type Vehicle_Cabin_Seat_Row3_Pos4_Lumbar {
    """
    Lumbar support position. 0 = Lowermost. 255 = Uppermost.
    """
    height: Int

    """
    Lumbar support inflation. 0 = Fully deflated. 255 = Fully inflated.
    """
    inflation: Int
  }

  """
  Side bolster settings
  """
  type Vehicle_Cabin_Seat_Row3_Pos4_SideBolster {
    """
    Lumbar support inflation. 0 = Fully deflated. 255 = Fully inflated.
    """
    inflation: Int
  }

  """
  Seat switch signals
  """
  type Vehicle_Cabin_Seat_Row3_Pos4_Switch {
    """
    Seat forward switch engaged
    """
    backward: Boolean

    """
    Cooler switch for Seat heater
    """
    cooler: Boolean

    cushion: Vehicle_Cabin_Seat_Row3_Pos4_Switch_Cushion

    """
    Seat down switch engaged
    """
    down: Boolean

    """
    Seat forward switch engaged
    """
    forward: Boolean

    headRestraint: Vehicle_Cabin_Seat_Row3_Pos4_Switch_HeadRestraint

    lumbar: Vehicle_Cabin_Seat_Row3_Pos4_Switch_Lumbar

    massage: Vehicle_Cabin_Seat_Row3_Pos4_Switch_Massage

    recline: Vehicle_Cabin_Seat_Row3_Pos4_Switch_Recline

    sideBolster: Vehicle_Cabin_Seat_Row3_Pos4_Switch_SideBolster

    """
    Seat up switch engaged
    """
    up: Boolean

    """
    Warmer switch for Seat heater
    """
    warmer: Boolean
  }

  """
  Cushion switches
  """
  type Vehicle_Cabin_Seat_Row3_Pos4_Switch_Cushion {
    """
    Seat cushion backward/shorten switch engaged
    """
    backward: Boolean

    """
    Seat cushion down switch engaged
    """
    down: Boolean

    """
    Seat cushion forward/lengthen switch engaged
    """
    forward: Boolean

    """
    Seat cushion up switch engaged
    """
    up: Boolean
  }

  """
  Head restraint switches
  """
  type Vehicle_Cabin_Seat_Row3_Pos4_Switch_HeadRestraint {
    """
    Head restraint down switch engaged
    """
    down: Boolean

    """
    Head restraint up switch engaged
    """
    up: Boolean
  }

  """
  Lumbar switches
  """
  type Vehicle_Cabin_Seat_Row3_Pos4_Switch_Lumbar {
    """
    Lumbar deflation switch engaged
    """
    deflate: Boolean

    """
    Lumbar down switch engaged
    """
    down: Boolean

    """
    Lumbar inflation switch engaged
    """
    inflate: Boolean

    """
    Lumbar up switch engaged
    """
    up: Boolean
  }

  """
  Massage switches
  """
  type Vehicle_Cabin_Seat_Row3_Pos4_Switch_Massage {
    """
    Decrease massage level switch engaged
    """
    decrease: Boolean

    """
    Increase massage level switch engaged
    """
    increase: Boolean
  }

  """
  Recline switches
  """
  type Vehicle_Cabin_Seat_Row3_Pos4_Switch_Recline {
    """
    Seatback recline backward switch engaged
    """
    backward: Boolean

    """
    Seatback recline forward switch engaged
    """
    forward: Boolean
  }

  """
  Side bolster switches
  """
  type Vehicle_Cabin_Seat_Row3_Pos4_Switch_SideBolster {
    """
    Lumbar deflation switch engaged
    """
    deflate: Boolean

    """
    Lumbar inflation switch engaged
    """
    inflate: Boolean
  }

  """
  Fifth seat from left, third row
  """
  type Vehicle_Cabin_Seat_Row3_Pos5 {
    airbag: Vehicle_Cabin_Seat_Row3_Pos5_Airbag

    cushion: Vehicle_Cabin_Seat_Row3_Pos5_Cushion

    """
    Does the seat have a passenger in it.
    """
    hasPassenger: Boolean

    headRestraint: Vehicle_Cabin_Seat_Row3_Pos5_HeadRestraint

    """
    Seat cooling / heating. 0 = off. -100 = max cold. +100 = max heat
    """
    heating: Int

    """
    Is the belt engaged.
    """
    isBelted: Boolean

    lumbar: Vehicle_Cabin_Seat_Row3_Pos5_Lumbar

    """
    Seat massage level. 0 = off. 100 = max massage.
    """
    massage: Int

    """
    Seat horizontal position. 0 = Frontmost. 1000 = Rearmost
    """
    position: Int

    """
    Recline level. -90 = Max forward recline. 90 max backward recline
    """
    recline: Int

    sideBolster: Vehicle_Cabin_Seat_Row3_Pos5_SideBolster

    switch: Vehicle_Cabin_Seat_Row3_Pos5_Switch
  }

  """
  Airbag signals
  """
  type Vehicle_Cabin_Seat_Row3_Pos5_Airbag {
    """
    Airbag deployment status. True = Airbag deployed. False = Airbag not deployed.
    """
    isDeployed: Boolean
  }

  """
  Cushion signals.
  """
  type Vehicle_Cabin_Seat_Row3_Pos5_Cushion {
    """
    Height of the seat front. 0 = Lowermost. 500 = Uppermost.
    """
    height: Int

    """
    Forward length of cushion (leg support). 0 = Rearmost. 500 = Forwardmost.
    """
    length: Int
  }

  """
  Head restraint settings
  """
  type Vehicle_Cabin_Seat_Row3_Pos5_HeadRestraint {
    """
    Height of head restraint. 0 = Bottommost. 255 = Topmost.
    """
    height: Int
  }

  """
  Lumbar signals
  """
  type Vehicle_Cabin_Seat_Row3_Pos5_Lumbar {
    """
    Lumbar support position. 0 = Lowermost. 255 = Uppermost.
    """
    height: Int

    """
    Lumbar support inflation. 0 = Fully deflated. 255 = Fully inflated.
    """
    inflation: Int
  }

  """
  Side bolster settings
  """
  type Vehicle_Cabin_Seat_Row3_Pos5_SideBolster {
    """
    Lumbar support inflation. 0 = Fully deflated. 255 = Fully inflated.
    """
    inflation: Int
  }

  """
  Seat switch signals
  """
  type Vehicle_Cabin_Seat_Row3_Pos5_Switch {
    """
    Seat forward switch engaged
    """
    backward: Boolean

    """
    Cooler switch for Seat heater
    """
    cooler: Boolean

    cushion: Vehicle_Cabin_Seat_Row3_Pos5_Switch_Cushion

    """
    Seat down switch engaged
    """
    down: Boolean

    """
    Seat forward switch engaged
    """
    forward: Boolean

    headRestraint: Vehicle_Cabin_Seat_Row3_Pos5_Switch_HeadRestraint

    lumbar: Vehicle_Cabin_Seat_Row3_Pos5_Switch_Lumbar

    massage: Vehicle_Cabin_Seat_Row3_Pos5_Switch_Massage

    recline: Vehicle_Cabin_Seat_Row3_Pos5_Switch_Recline

    sideBolster: Vehicle_Cabin_Seat_Row3_Pos5_Switch_SideBolster

    """
    Seat up switch engaged
    """
    up: Boolean

    """
    Warmer switch for Seat heater
    """
    warmer: Boolean
  }

  """
  Cushion switches
  """
  type Vehicle_Cabin_Seat_Row3_Pos5_Switch_Cushion {
    """
    Seat cushion backward/shorten switch engaged
    """
    backward: Boolean

    """
    Seat cushion down switch engaged
    """
    down: Boolean

    """
    Seat cushion forward/lengthen switch engaged
    """
    forward: Boolean

    """
    Seat cushion up switch engaged
    """
    up: Boolean
  }

  """
  Head restraint switches
  """
  type Vehicle_Cabin_Seat_Row3_Pos5_Switch_HeadRestraint {
    """
    Head restraint down switch engaged
    """
    down: Boolean

    """
    Head restraint up switch engaged
    """
    up: Boolean
  }

  """
  Lumbar switches
  """
  type Vehicle_Cabin_Seat_Row3_Pos5_Switch_Lumbar {
    """
    Lumbar deflation switch engaged
    """
    deflate: Boolean

    """
    Lumbar down switch engaged
    """
    down: Boolean

    """
    Lumbar inflation switch engaged
    """
    inflate: Boolean

    """
    Lumbar up switch engaged
    """
    up: Boolean
  }

  """
  Massage switches
  """
  type Vehicle_Cabin_Seat_Row3_Pos5_Switch_Massage {
    """
    Decrease massage level switch engaged
    """
    decrease: Boolean

    """
    Increase massage level switch engaged
    """
    increase: Boolean
  }

  """
  Recline switches
  """
  type Vehicle_Cabin_Seat_Row3_Pos5_Switch_Recline {
    """
    Seatback recline backward switch engaged
    """
    backward: Boolean

    """
    Seatback recline forward switch engaged
    """
    forward: Boolean
  }

  """
  Side bolster switches
  """
  type Vehicle_Cabin_Seat_Row3_Pos5_Switch_SideBolster {
    """
    Lumbar deflation switch engaged
    """
    deflate: Boolean

    """
    Lumbar inflation switch engaged
    """
    inflate: Boolean
  }

  """
  Front seats
  """
  type Vehicle_Cabin_Seat_Row4 {
    pos1: Vehicle_Cabin_Seat_Row4_Pos1

    pos2: Vehicle_Cabin_Seat_Row4_Pos2

    pos3: Vehicle_Cabin_Seat_Row4_Pos3

    pos4: Vehicle_Cabin_Seat_Row4_Pos4

    pos5: Vehicle_Cabin_Seat_Row4_Pos5
  }

  """
  First seat from left, fourth row
  """
  type Vehicle_Cabin_Seat_Row4_Pos1 {
    airbag: Vehicle_Cabin_Seat_Row4_Pos1_Airbag

    cushion: Vehicle_Cabin_Seat_Row4_Pos1_Cushion

    """
    Does the seat have a passenger in it.
    """
    hasPassenger: Boolean

    headRestraint: Vehicle_Cabin_Seat_Row4_Pos1_HeadRestraint

    """
    Seat cooling / heating. 0 = off. -100 = max cold. +100 = max heat
    """
    heating: Int

    """
    Is the belt engaged.
    """
    isBelted: Boolean

    lumbar: Vehicle_Cabin_Seat_Row4_Pos1_Lumbar

    """
    Seat massage level. 0 = off. 100 = max massage.
    """
    massage: Int

    """
    Seat horizontal position. 0 = Frontmost. 1000 = Rearmost
    """
    position: Int

    """
    Recline level. -90 = Max forward recline. 90 max backward recline
    """
    recline: Int

    sideBolster: Vehicle_Cabin_Seat_Row4_Pos1_SideBolster

    switch: Vehicle_Cabin_Seat_Row4_Pos1_Switch
  }

  """
  Airbag signals
  """
  type Vehicle_Cabin_Seat_Row4_Pos1_Airbag {
    """
    Airbag deployment status. True = Airbag deployed. False = Airbag not deployed.
    """
    isDeployed: Boolean
  }

  """
  Cushion signals.
  """
  type Vehicle_Cabin_Seat_Row4_Pos1_Cushion {
    """
    Height of the seat front. 0 = Lowermost. 500 = Uppermost.
    """
    height: Int

    """
    Forward length of cushion (leg support). 0 = Rearmost. 500 = Forwardmost.
    """
    length: Int
  }

  """
  Head restraint settings
  """
  type Vehicle_Cabin_Seat_Row4_Pos1_HeadRestraint {
    """
    Height of head restraint. 0 = Bottommost. 255 = Topmost.
    """
    height: Int
  }

  """
  Lumbar signals
  """
  type Vehicle_Cabin_Seat_Row4_Pos1_Lumbar {
    """
    Lumbar support position. 0 = Lowermost. 255 = Uppermost.
    """
    height: Int

    """
    Lumbar support inflation. 0 = Fully deflated. 255 = Fully inflated.
    """
    inflation: Int
  }

  """
  Side bolster settings
  """
  type Vehicle_Cabin_Seat_Row4_Pos1_SideBolster {
    """
    Lumbar support inflation. 0 = Fully deflated. 255 = Fully inflated.
    """
    inflation: Int
  }

  """
  Seat switch signals
  """
  type Vehicle_Cabin_Seat_Row4_Pos1_Switch {
    """
    Seat forward switch engaged
    """
    backward: Boolean

    """
    Cooler switch for Seat heater
    """
    cooler: Boolean

    cushion: Vehicle_Cabin_Seat_Row4_Pos1_Switch_Cushion

    """
    Seat down switch engaged
    """
    down: Boolean

    """
    Seat forward switch engaged
    """
    forward: Boolean

    headRestraint: Vehicle_Cabin_Seat_Row4_Pos1_Switch_HeadRestraint

    lumbar: Vehicle_Cabin_Seat_Row4_Pos1_Switch_Lumbar

    massage: Vehicle_Cabin_Seat_Row4_Pos1_Switch_Massage

    recline: Vehicle_Cabin_Seat_Row4_Pos1_Switch_Recline

    sideBolster: Vehicle_Cabin_Seat_Row4_Pos1_Switch_SideBolster

    """
    Seat up switch engaged
    """
    up: Boolean

    """
    Warmer switch for Seat heater
    """
    warmer: Boolean
  }

  """
  Cushion switches
  """
  type Vehicle_Cabin_Seat_Row4_Pos1_Switch_Cushion {
    """
    Seat cushion backward/shorten switch engaged
    """
    backward: Boolean

    """
    Seat cushion down switch engaged
    """
    down: Boolean

    """
    Seat cushion forward/lengthen switch engaged
    """
    forward: Boolean

    """
    Seat cushion up switch engaged
    """
    up: Boolean
  }

  """
  Head restraint switches
  """
  type Vehicle_Cabin_Seat_Row4_Pos1_Switch_HeadRestraint {
    """
    Head restraint down switch engaged
    """
    down: Boolean

    """
    Head restraint up switch engaged
    """
    up: Boolean
  }

  """
  Lumbar switches
  """
  type Vehicle_Cabin_Seat_Row4_Pos1_Switch_Lumbar {
    """
    Lumbar deflation switch engaged
    """
    deflate: Boolean

    """
    Lumbar down switch engaged
    """
    down: Boolean

    """
    Lumbar inflation switch engaged
    """
    inflate: Boolean

    """
    Lumbar up switch engaged
    """
    up: Boolean
  }

  """
  Massage switches
  """
  type Vehicle_Cabin_Seat_Row4_Pos1_Switch_Massage {
    """
    Decrease massage level switch engaged
    """
    decrease: Boolean

    """
    Increase massage level switch engaged
    """
    increase: Boolean
  }

  """
  Recline switches
  """
  type Vehicle_Cabin_Seat_Row4_Pos1_Switch_Recline {
    """
    Seatback recline backward switch engaged
    """
    backward: Boolean

    """
    Seatback recline forward switch engaged
    """
    forward: Boolean
  }

  """
  Side bolster switches
  """
  type Vehicle_Cabin_Seat_Row4_Pos1_Switch_SideBolster {
    """
    Lumbar deflation switch engaged
    """
    deflate: Boolean

    """
    Lumbar inflation switch engaged
    """
    inflate: Boolean
  }

  """
  Fourth seat from left, fourth row
  """
  type Vehicle_Cabin_Seat_Row4_Pos2 {
    airbag: Vehicle_Cabin_Seat_Row4_Pos2_Airbag

    cushion: Vehicle_Cabin_Seat_Row4_Pos2_Cushion

    """
    Does the seat have a passenger in it.
    """
    hasPassenger: Boolean

    headRestraint: Vehicle_Cabin_Seat_Row4_Pos2_HeadRestraint

    """
    Seat cooling / heating. 0 = off. -100 = max cold. +100 = max heat
    """
    heating: Int

    """
    Is the belt engaged.
    """
    isBelted: Boolean

    lumbar: Vehicle_Cabin_Seat_Row4_Pos2_Lumbar

    """
    Seat massage level. 0 = off. 100 = max massage.
    """
    massage: Int

    """
    Seat horizontal position. 0 = Frontmost. 1000 = Rearmost
    """
    position: Int

    """
    Recline level. -90 = Max forward recline. 90 max backward recline
    """
    recline: Int

    sideBolster: Vehicle_Cabin_Seat_Row4_Pos2_SideBolster

    switch: Vehicle_Cabin_Seat_Row4_Pos2_Switch
  }

  """
  Airbag signals
  """
  type Vehicle_Cabin_Seat_Row4_Pos2_Airbag {
    """
    Airbag deployment status. True = Airbag deployed. False = Airbag not deployed.
    """
    isDeployed: Boolean
  }

  """
  Cushion signals.
  """
  type Vehicle_Cabin_Seat_Row4_Pos2_Cushion {
    """
    Height of the seat front. 0 = Lowermost. 500 = Uppermost.
    """
    height: Int

    """
    Forward length of cushion (leg support). 0 = Rearmost. 500 = Forwardmost.
    """
    length: Int
  }

  """
  Head restraint settings
  """
  type Vehicle_Cabin_Seat_Row4_Pos2_HeadRestraint {
    """
    Height of head restraint. 0 = Bottommost. 255 = Topmost.
    """
    height: Int
  }

  """
  Lumbar signals
  """
  type Vehicle_Cabin_Seat_Row4_Pos2_Lumbar {
    """
    Lumbar support position. 0 = Lowermost. 255 = Uppermost.
    """
    height: Int

    """
    Lumbar support inflation. 0 = Fully deflated. 255 = Fully inflated.
    """
    inflation: Int
  }

  """
  Side bolster settings
  """
  type Vehicle_Cabin_Seat_Row4_Pos2_SideBolster {
    """
    Lumbar support inflation. 0 = Fully deflated. 255 = Fully inflated.
    """
    inflation: Int
  }

  """
  Seat switch signals
  """
  type Vehicle_Cabin_Seat_Row4_Pos2_Switch {
    """
    Seat forward switch engaged
    """
    backward: Boolean

    """
    Cooler switch for Seat heater
    """
    cooler: Boolean

    cushion: Vehicle_Cabin_Seat_Row4_Pos2_Switch_Cushion

    """
    Seat down switch engaged
    """
    down: Boolean

    """
    Seat forward switch engaged
    """
    forward: Boolean

    headRestraint: Vehicle_Cabin_Seat_Row4_Pos2_Switch_HeadRestraint

    lumbar: Vehicle_Cabin_Seat_Row4_Pos2_Switch_Lumbar

    massage: Vehicle_Cabin_Seat_Row4_Pos2_Switch_Massage

    recline: Vehicle_Cabin_Seat_Row4_Pos2_Switch_Recline

    sideBolster: Vehicle_Cabin_Seat_Row4_Pos2_Switch_SideBolster

    """
    Seat up switch engaged
    """
    up: Boolean

    """
    Warmer switch for Seat heater
    """
    warmer: Boolean
  }

  """
  Cushion switches
  """
  type Vehicle_Cabin_Seat_Row4_Pos2_Switch_Cushion {
    """
    Seat cushion backward/shorten switch engaged
    """
    backward: Boolean

    """
    Seat cushion down switch engaged
    """
    down: Boolean

    """
    Seat cushion forward/lengthen switch engaged
    """
    forward: Boolean

    """
    Seat cushion up switch engaged
    """
    up: Boolean
  }

  """
  Head restraint switches
  """
  type Vehicle_Cabin_Seat_Row4_Pos2_Switch_HeadRestraint {
    """
    Head restraint down switch engaged
    """
    down: Boolean

    """
    Head restraint up switch engaged
    """
    up: Boolean
  }

  """
  Lumbar switches
  """
  type Vehicle_Cabin_Seat_Row4_Pos2_Switch_Lumbar {
    """
    Lumbar deflation switch engaged
    """
    deflate: Boolean

    """
    Lumbar down switch engaged
    """
    down: Boolean

    """
    Lumbar inflation switch engaged
    """
    inflate: Boolean

    """
    Lumbar up switch engaged
    """
    up: Boolean
  }

  """
  Massage switches
  """
  type Vehicle_Cabin_Seat_Row4_Pos2_Switch_Massage {
    """
    Decrease massage level switch engaged
    """
    decrease: Boolean

    """
    Increase massage level switch engaged
    """
    increase: Boolean
  }

  """
  Recline switches
  """
  type Vehicle_Cabin_Seat_Row4_Pos2_Switch_Recline {
    """
    Seatback recline backward switch engaged
    """
    backward: Boolean

    """
    Seatback recline forward switch engaged
    """
    forward: Boolean
  }

  """
  Side bolster switches
  """
  type Vehicle_Cabin_Seat_Row4_Pos2_Switch_SideBolster {
    """
    Lumbar deflation switch engaged
    """
    deflate: Boolean

    """
    Lumbar inflation switch engaged
    """
    inflate: Boolean
  }

  """
  Fourth seat from left, fourth row
  """
  type Vehicle_Cabin_Seat_Row4_Pos3 {
    airbag: Vehicle_Cabin_Seat_Row4_Pos3_Airbag

    cushion: Vehicle_Cabin_Seat_Row4_Pos3_Cushion

    """
    Does the seat have a passenger in it.
    """
    hasPassenger: Boolean

    headRestraint: Vehicle_Cabin_Seat_Row4_Pos3_HeadRestraint

    """
    Seat cooling / heating. 0 = off. -100 = max cold. +100 = max heat
    """
    heating: Int

    """
    Is the belt engaged.
    """
    isBelted: Boolean

    lumbar: Vehicle_Cabin_Seat_Row4_Pos3_Lumbar

    """
    Seat massage level. 0 = off. 100 = max massage.
    """
    massage: Int

    """
    Seat horizontal position. 0 = Frontmost. 1000 = Rearmost
    """
    position: Int

    """
    Recline level. -90 = Max forward recline. 90 max backward recline
    """
    recline: Int

    sideBolster: Vehicle_Cabin_Seat_Row4_Pos3_SideBolster

    switch: Vehicle_Cabin_Seat_Row4_Pos3_Switch
  }

  """
  Airbag signals
  """
  type Vehicle_Cabin_Seat_Row4_Pos3_Airbag {
    """
    Airbag deployment status. True = Airbag deployed. False = Airbag not deployed.
    """
    isDeployed: Boolean
  }

  """
  Cushion signals.
  """
  type Vehicle_Cabin_Seat_Row4_Pos3_Cushion {
    """
    Height of the seat front. 0 = Lowermost. 500 = Uppermost.
    """
    height: Int

    """
    Forward length of cushion (leg support). 0 = Rearmost. 500 = Forwardmost.
    """
    length: Int
  }

  """
  Head restraint settings
  """
  type Vehicle_Cabin_Seat_Row4_Pos3_HeadRestraint {
    """
    Height of head restraint. 0 = Bottommost. 255 = Topmost.
    """
    height: Int
  }

  """
  Lumbar signals
  """
  type Vehicle_Cabin_Seat_Row4_Pos3_Lumbar {
    """
    Lumbar support position. 0 = Lowermost. 255 = Uppermost.
    """
    height: Int

    """
    Lumbar support inflation. 0 = Fully deflated. 255 = Fully inflated.
    """
    inflation: Int
  }

  """
  Side bolster settings
  """
  type Vehicle_Cabin_Seat_Row4_Pos3_SideBolster {
    """
    Lumbar support inflation. 0 = Fully deflated. 255 = Fully inflated.
    """
    inflation: Int
  }

  """
  Seat switch signals
  """
  type Vehicle_Cabin_Seat_Row4_Pos3_Switch {
    """
    Seat forward switch engaged
    """
    backward: Boolean

    """
    Cooler switch for Seat heater
    """
    cooler: Boolean

    cushion: Vehicle_Cabin_Seat_Row4_Pos3_Switch_Cushion

    """
    Seat down switch engaged
    """
    down: Boolean

    """
    Seat forward switch engaged
    """
    forward: Boolean

    headRestraint: Vehicle_Cabin_Seat_Row4_Pos3_Switch_HeadRestraint

    lumbar: Vehicle_Cabin_Seat_Row4_Pos3_Switch_Lumbar

    massage: Vehicle_Cabin_Seat_Row4_Pos3_Switch_Massage

    recline: Vehicle_Cabin_Seat_Row4_Pos3_Switch_Recline

    sideBolster: Vehicle_Cabin_Seat_Row4_Pos3_Switch_SideBolster

    """
    Seat up switch engaged
    """
    up: Boolean

    """
    Warmer switch for Seat heater
    """
    warmer: Boolean
  }

  """
  Cushion switches
  """
  type Vehicle_Cabin_Seat_Row4_Pos3_Switch_Cushion {
    """
    Seat cushion backward/shorten switch engaged
    """
    backward: Boolean

    """
    Seat cushion down switch engaged
    """
    down: Boolean

    """
    Seat cushion forward/lengthen switch engaged
    """
    forward: Boolean

    """
    Seat cushion up switch engaged
    """
    up: Boolean
  }

  """
  Head restraint switches
  """
  type Vehicle_Cabin_Seat_Row4_Pos3_Switch_HeadRestraint {
    """
    Head restraint down switch engaged
    """
    down: Boolean

    """
    Head restraint up switch engaged
    """
    up: Boolean
  }

  """
  Lumbar switches
  """
  type Vehicle_Cabin_Seat_Row4_Pos3_Switch_Lumbar {
    """
    Lumbar deflation switch engaged
    """
    deflate: Boolean

    """
    Lumbar down switch engaged
    """
    down: Boolean

    """
    Lumbar inflation switch engaged
    """
    inflate: Boolean

    """
    Lumbar up switch engaged
    """
    up: Boolean
  }

  """
  Massage switches
  """
  type Vehicle_Cabin_Seat_Row4_Pos3_Switch_Massage {
    """
    Decrease massage level switch engaged
    """
    decrease: Boolean

    """
    Increase massage level switch engaged
    """
    increase: Boolean
  }

  """
  Recline switches
  """
  type Vehicle_Cabin_Seat_Row4_Pos3_Switch_Recline {
    """
    Seatback recline backward switch engaged
    """
    backward: Boolean

    """
    Seatback recline forward switch engaged
    """
    forward: Boolean
  }

  """
  Side bolster switches
  """
  type Vehicle_Cabin_Seat_Row4_Pos3_Switch_SideBolster {
    """
    Lumbar deflation switch engaged
    """
    deflate: Boolean

    """
    Lumbar inflation switch engaged
    """
    inflate: Boolean
  }

  """
  Fourth seat from left, fourth row
  """
  type Vehicle_Cabin_Seat_Row4_Pos4 {
    airbag: Vehicle_Cabin_Seat_Row4_Pos4_Airbag

    cushion: Vehicle_Cabin_Seat_Row4_Pos4_Cushion

    """
    Does the seat have a passenger in it.
    """
    hasPassenger: Boolean

    headRestraint: Vehicle_Cabin_Seat_Row4_Pos4_HeadRestraint

    """
    Seat cooling / heating. 0 = off. -100 = max cold. +100 = max heat
    """
    heating: Int

    """
    Is the belt engaged.
    """
    isBelted: Boolean

    lumbar: Vehicle_Cabin_Seat_Row4_Pos4_Lumbar

    """
    Seat massage level. 0 = off. 100 = max massage.
    """
    massage: Int

    """
    Seat horizontal position. 0 = Frontmost. 1000 = Rearmost
    """
    position: Int

    """
    Recline level. -90 = Max forward recline. 90 max backward recline
    """
    recline: Int

    sideBolster: Vehicle_Cabin_Seat_Row4_Pos4_SideBolster

    switch: Vehicle_Cabin_Seat_Row4_Pos4_Switch
  }

  """
  Airbag signals
  """
  type Vehicle_Cabin_Seat_Row4_Pos4_Airbag {
    """
    Airbag deployment status. True = Airbag deployed. False = Airbag not deployed.
    """
    isDeployed: Boolean
  }

  """
  Cushion signals.
  """
  type Vehicle_Cabin_Seat_Row4_Pos4_Cushion {
    """
    Height of the seat front. 0 = Lowermost. 500 = Uppermost.
    """
    height: Int

    """
    Forward length of cushion (leg support). 0 = Rearmost. 500 = Forwardmost.
    """
    length: Int
  }

  """
  Head restraint settings
  """
  type Vehicle_Cabin_Seat_Row4_Pos4_HeadRestraint {
    """
    Height of head restraint. 0 = Bottommost. 255 = Topmost.
    """
    height: Int
  }

  """
  Lumbar signals
  """
  type Vehicle_Cabin_Seat_Row4_Pos4_Lumbar {
    """
    Lumbar support position. 0 = Lowermost. 255 = Uppermost.
    """
    height: Int

    """
    Lumbar support inflation. 0 = Fully deflated. 255 = Fully inflated.
    """
    inflation: Int
  }

  """
  Side bolster settings
  """
  type Vehicle_Cabin_Seat_Row4_Pos4_SideBolster {
    """
    Lumbar support inflation. 0 = Fully deflated. 255 = Fully inflated.
    """
    inflation: Int
  }

  """
  Seat switch signals
  """
  type Vehicle_Cabin_Seat_Row4_Pos4_Switch {
    """
    Seat forward switch engaged
    """
    backward: Boolean

    """
    Cooler switch for Seat heater
    """
    cooler: Boolean

    cushion: Vehicle_Cabin_Seat_Row4_Pos4_Switch_Cushion

    """
    Seat down switch engaged
    """
    down: Boolean

    """
    Seat forward switch engaged
    """
    forward: Boolean

    headRestraint: Vehicle_Cabin_Seat_Row4_Pos4_Switch_HeadRestraint

    lumbar: Vehicle_Cabin_Seat_Row4_Pos4_Switch_Lumbar

    massage: Vehicle_Cabin_Seat_Row4_Pos4_Switch_Massage

    recline: Vehicle_Cabin_Seat_Row4_Pos4_Switch_Recline

    sideBolster: Vehicle_Cabin_Seat_Row4_Pos4_Switch_SideBolster

    """
    Seat up switch engaged
    """
    up: Boolean

    """
    Warmer switch for Seat heater
    """
    warmer: Boolean
  }

  """
  Cushion switches
  """
  type Vehicle_Cabin_Seat_Row4_Pos4_Switch_Cushion {
    """
    Seat cushion backward/shorten switch engaged
    """
    backward: Boolean

    """
    Seat cushion down switch engaged
    """
    down: Boolean

    """
    Seat cushion forward/lengthen switch engaged
    """
    forward: Boolean

    """
    Seat cushion up switch engaged
    """
    up: Boolean
  }

  """
  Head restraint switches
  """
  type Vehicle_Cabin_Seat_Row4_Pos4_Switch_HeadRestraint {
    """
    Head restraint down switch engaged
    """
    down: Boolean

    """
    Head restraint up switch engaged
    """
    up: Boolean
  }

  """
  Lumbar switches
  """
  type Vehicle_Cabin_Seat_Row4_Pos4_Switch_Lumbar {
    """
    Lumbar deflation switch engaged
    """
    deflate: Boolean

    """
    Lumbar down switch engaged
    """
    down: Boolean

    """
    Lumbar inflation switch engaged
    """
    inflate: Boolean

    """
    Lumbar up switch engaged
    """
    up: Boolean
  }

  """
  Massage switches
  """
  type Vehicle_Cabin_Seat_Row4_Pos4_Switch_Massage {
    """
    Decrease massage level switch engaged
    """
    decrease: Boolean

    """
    Increase massage level switch engaged
    """
    increase: Boolean
  }

  """
  Recline switches
  """
  type Vehicle_Cabin_Seat_Row4_Pos4_Switch_Recline {
    """
    Seatback recline backward switch engaged
    """
    backward: Boolean

    """
    Seatback recline forward switch engaged
    """
    forward: Boolean
  }

  """
  Side bolster switches
  """
  type Vehicle_Cabin_Seat_Row4_Pos4_Switch_SideBolster {
    """
    Lumbar deflation switch engaged
    """
    deflate: Boolean

    """
    Lumbar inflation switch engaged
    """
    inflate: Boolean
  }

  """
  Fifth seat from left, fourth row
  """
  type Vehicle_Cabin_Seat_Row4_Pos5 {
    airbag: Vehicle_Cabin_Seat_Row4_Pos5_Airbag

    cushion: Vehicle_Cabin_Seat_Row4_Pos5_Cushion

    """
    Does the seat have a passenger in it.
    """
    hasPassenger: Boolean

    headRestraint: Vehicle_Cabin_Seat_Row4_Pos5_HeadRestraint

    """
    Seat cooling / heating. 0 = off. -100 = max cold. +100 = max heat
    """
    heating: Int

    """
    Is the belt engaged.
    """
    isBelted: Boolean

    lumbar: Vehicle_Cabin_Seat_Row4_Pos5_Lumbar

    """
    Seat massage level. 0 = off. 100 = max massage.
    """
    massage: Int

    """
    Seat horizontal position. 0 = Frontmost. 1000 = Rearmost
    """
    position: Int

    """
    Recline level. -90 = Max forward recline. 90 max backward recline
    """
    recline: Int

    sideBolster: Vehicle_Cabin_Seat_Row4_Pos5_SideBolster

    switch: Vehicle_Cabin_Seat_Row4_Pos5_Switch
  }

  """
  Airbag signals
  """
  type Vehicle_Cabin_Seat_Row4_Pos5_Airbag {
    """
    Airbag deployment status. True = Airbag deployed. False = Airbag not deployed.
    """
    isDeployed: Boolean
  }

  """
  Cushion signals.
  """
  type Vehicle_Cabin_Seat_Row4_Pos5_Cushion {
    """
    Height of the seat front. 0 = Lowermost. 500 = Uppermost.
    """
    height: Int

    """
    Forward length of cushion (leg support). 0 = Rearmost. 500 = Forwardmost.
    """
    length: Int
  }

  """
  Head restraint settings
  """
  type Vehicle_Cabin_Seat_Row4_Pos5_HeadRestraint {
    """
    Height of head restraint. 0 = Bottommost. 255 = Topmost.
    """
    height: Int
  }

  """
  Lumbar signals
  """
  type Vehicle_Cabin_Seat_Row4_Pos5_Lumbar {
    """
    Lumbar support position. 0 = Lowermost. 255 = Uppermost.
    """
    height: Int

    """
    Lumbar support inflation. 0 = Fully deflated. 255 = Fully inflated.
    """
    inflation: Int
  }

  """
  Side bolster settings
  """
  type Vehicle_Cabin_Seat_Row4_Pos5_SideBolster {
    """
    Lumbar support inflation. 0 = Fully deflated. 255 = Fully inflated.
    """
    inflation: Int
  }

  """
  Seat switch signals
  """
  type Vehicle_Cabin_Seat_Row4_Pos5_Switch {
    """
    Seat forward switch engaged
    """
    backward: Boolean

    """
    Cooler switch for Seat heater
    """
    cooler: Boolean

    cushion: Vehicle_Cabin_Seat_Row4_Pos5_Switch_Cushion

    """
    Seat down switch engaged
    """
    down: Boolean

    """
    Seat forward switch engaged
    """
    forward: Boolean

    headRestraint: Vehicle_Cabin_Seat_Row4_Pos5_Switch_HeadRestraint

    lumbar: Vehicle_Cabin_Seat_Row4_Pos5_Switch_Lumbar

    massage: Vehicle_Cabin_Seat_Row4_Pos5_Switch_Massage

    recline: Vehicle_Cabin_Seat_Row4_Pos5_Switch_Recline

    sideBolster: Vehicle_Cabin_Seat_Row4_Pos5_Switch_SideBolster

    """
    Seat up switch engaged
    """
    up: Boolean

    """
    Warmer switch for Seat heater
    """
    warmer: Boolean
  }

  """
  Cushion switches
  """
  type Vehicle_Cabin_Seat_Row4_Pos5_Switch_Cushion {
    """
    Seat cushion backward/shorten switch engaged
    """
    backward: Boolean

    """
    Seat cushion down switch engaged
    """
    down: Boolean

    """
    Seat cushion forward/lengthen switch engaged
    """
    forward: Boolean

    """
    Seat cushion up switch engaged
    """
    up: Boolean
  }

  """
  Head restraint switches
  """
  type Vehicle_Cabin_Seat_Row4_Pos5_Switch_HeadRestraint {
    """
    Head restraint down switch engaged
    """
    down: Boolean

    """
    Head restraint up switch engaged
    """
    up: Boolean
  }

  """
  Lumbar switches
  """
  type Vehicle_Cabin_Seat_Row4_Pos5_Switch_Lumbar {
    """
    Lumbar deflation switch engaged
    """
    deflate: Boolean

    """
    Lumbar down switch engaged
    """
    down: Boolean

    """
    Lumbar inflation switch engaged
    """
    inflate: Boolean

    """
    Lumbar up switch engaged
    """
    up: Boolean
  }

  """
  Massage switches
  """
  type Vehicle_Cabin_Seat_Row4_Pos5_Switch_Massage {
    """
    Decrease massage level switch engaged
    """
    decrease: Boolean

    """
    Increase massage level switch engaged
    """
    increase: Boolean
  }

  """
  Recline switches
  """
  type Vehicle_Cabin_Seat_Row4_Pos5_Switch_Recline {
    """
    Seatback recline backward switch engaged
    """
    backward: Boolean

    """
    Seatback recline forward switch engaged
    """
    forward: Boolean
  }

  """
  Side bolster switches
  """
  type Vehicle_Cabin_Seat_Row4_Pos5_Switch_SideBolster {
    """
    Lumbar deflation switch engaged
    """
    deflate: Boolean

    """
    Lumbar inflation switch engaged
    """
    inflate: Boolean
  }

  """
  Steering wheel configuration attributes
  """
  type Vehicle_Cabin_SteeringWheel {
    """
    Position of the steering wheel inside the cabin
    """
    position: Vehicle_Cabin_SteeringWheel_Position_Enum
  }

  enum Vehicle_Cabin_SteeringWheel_Position_Enum {
    front_left
    front_right
  }

  """
  Sun roof status.
  """
  type Vehicle_Cabin_Sunroof {
    """
    Sunroof position. 0 = Fully closed 100 = Fully opened. -100 = Fully tilted
    """
    position: Int

    shade: Vehicle_Cabin_Sunroof_Shade

    """
    Switch controlling sliding action such as window, sunroof, or shade.
    """
    switch: Vehicle_Cabin_Sunroof_Switch_Enum
  }

  """
  Sun roof shade status
  """
  type Vehicle_Cabin_Sunroof_Shade {
    """
    Position of side window blind. 0 = Fully retracted. 100 = Fully deployed.
    """
    position: Int

    """
    Switch controlling sliding action such as window, sunroof, or blind.
    """
    switch: Vehicle_Cabin_Sunroof_Shade_Switch_Enum
  }

  enum Vehicle_Cabin_Sunroof_Shade_Switch_Enum {
    Inactive
    Close
    Open
    OneShotClose
    OneShotOpen
  }

  enum Vehicle_Cabin_Sunroof_Switch_Enum {
    Inactive
    Close
    Open
    OneShotClose
    OneShotOpen
    TiltUp
    TiltDown
  }

  """
  All data concerning steering, suspension, wheels, and brakes.
  """
  type Vehicle_Chassis {
    accelerator: Vehicle_Chassis_Accelerator

    axle: Vehicle_Chassis_Axle

    brake: Vehicle_Chassis_Brake

    """
    Vehicle curb weight, in kg, including all liquids and full tank of fuel, but no cargo or passengers.
    """
    curbWeight: Int

    """
    Curb weight of vehicle, including all liquids and full tank of fuel and full load of cargo and passengers.
    """
    grossWeight: Int

    """
    Overall vehicle height, in mm.
    """
    height: Int

    """
    Overall vehicle length, in mm.
    """
    length: Int

    parkingBrake: Vehicle_Chassis_ParkingBrake

    steeringWheel: Vehicle_Chassis_SteeringWheel

    """
    Maximum weight, in kilos, of trailer.
    """
    towWeight: Int

    """
    Overall wheel tracking, in mm.
    """
    track: Int

    trailer: Vehicle_Chassis_Trailer

    """
    Overall wheel base, in mm.
    """
    wheelbase: Int

    """
    Overall vehicle width, in mm.
    """
    width: Int
  }

  """
  Accelerator signals
  """
  type Vehicle_Chassis_Accelerator {
    """
    Accelerator pedal position as percent. 0 = Not depressed. 100 = Fully depressed.
    """
    pedalPosition: Int
  }

  """
  Axle signals
  """
  type Vehicle_Chassis_Axle {
    """
    Number of axles on the vehicle
    """
    count: Int

    row1: Vehicle_Chassis_Axle_Row1

    row2: Vehicle_Chassis_Axle_Row2
  }

  """
  Axle signals for first row
  """
  type Vehicle_Chassis_Axle_Row1 {
    """
    Diameter of tires, in inches, as per ETRO / TRA standard.
    """
    tireDiameter: Int

    """
    Width of tires, in inches, as per ETRO / TRA standard.
    """
    tireWidth: Int

    wheel: Vehicle_Chassis_Axle_Row1_Wheel

    """
    Number of wheels on the first axle
    """
    wheelCount: Int

    """
    Diameter of wheels (without tires), in inches, as per ETRO / TRA standard.
    """
    wheelDiameter: Int

    """
    Width of wheels (without tires), in inches, as per ETRO / TRA standard.
    """
    wheelWidth: Int
  }

  """
  Brake signals for first row
  """
  type Vehicle_Chassis_Axle_Row1_Wheel {
    left: Vehicle_Chassis_Axle_Row1_Wheel_Left

    right: Vehicle_Chassis_Axle_Row1_Wheel_Right
  }

  """
  Row1 wheel left.
  """
  type Vehicle_Chassis_Axle_Row1_Wheel_Left {
    brake: Vehicle_Chassis_Axle_Row1_Wheel_Left_Brake

    tire: Vehicle_Chassis_Axle_Row1_Wheel_Left_Tire
  }

  """
  Brake signals for wheel
  """
  type Vehicle_Chassis_Axle_Row1_Wheel_Left_Brake {
    """
    Brake pad wear status. True = Worn. False = Not Worn.
    """
    brakesWorn: Boolean

    """
    Brake fluid level as percent. 0 = Empty. 100 = Full.
    """
    fluidLevel: Int

    """
    Brake fluid level status. True = Brake fluid level low. False = Brake fluid level OK.
    """
    fluidLevelLow: Boolean

    """
    Brake pad wear as percent. 0 = No Wear. 100 = Worn.
    """
    padWear: Int
  }

  """
  Tire signals for wheel
  """
  type Vehicle_Chassis_Axle_Row1_Wheel_Left_Tire {
    """
    Tire pressure in kilo-Pascal
    """
    pressure: Int

    """
    Tire Pressure Status. True = Low tire pressure. False = Good tire pressure.
    """
    pressureLow: Boolean

    """
    Tire temperature in Celsius.
    """
    temperature: Float
  }

  """
  Row1 wheel right.
  """
  type Vehicle_Chassis_Axle_Row1_Wheel_Right {
    brake: Vehicle_Chassis_Axle_Row1_Wheel_Right_Brake

    tire: Vehicle_Chassis_Axle_Row1_Wheel_Right_Tire
  }

  """
  Brake signals for wheel
  """
  type Vehicle_Chassis_Axle_Row1_Wheel_Right_Brake {
    """
    Brake pad wear status. True = Worn. False = Not Worn.
    """
    brakesWorn: Boolean

    """
    Brake fluid level as percent. 0 = Empty. 100 = Full.
    """
    fluidLevel: Int

    """
    Brake fluid level status. True = Brake fluid level low. False = Brake fluid level OK.
    """
    fluidLevelLow: Boolean

    """
    Brake pad wear as percent. 0 = No Wear. 100 = Worn.
    """
    padWear: Int
  }

  """
  Tire signals for wheel
  """
  type Vehicle_Chassis_Axle_Row1_Wheel_Right_Tire {
    """
    Tire pressure in kilo-Pascal
    """
    pressure: Int

    """
    Tire Pressure Status. True = Low tire pressure. False = Good tire pressure.
    """
    pressureLow: Boolean

    """
    Tire temperature in Celsius.
    """
    temperature: Float
  }

  """
  Axle signals for second row
  """
  type Vehicle_Chassis_Axle_Row2 {
    """
    Diameter of tires, in inches, as per ETRO / TRA standard.
    """
    tireDiameter: Int

    """
    Width of tires, in inches, as per ETRO / TRA standard.
    """
    tireWidth: Int

    wheel: Vehicle_Chassis_Axle_Row2_Wheel

    """
    Diameter of wheels (without tires), in inches, as per ETRO / TRA standard.
    """
    wheelDiameter: Int

    """
    Width of wheels (without tires), in inches, as per ETRO / TRA standard.
    """
    wheelWidth: Int
  }

  """
  Wheel signals for second row
  """
  type Vehicle_Chassis_Axle_Row2_Wheel {
    left: Vehicle_Chassis_Axle_Row2_Wheel_Left

    right: Vehicle_Chassis_Axle_Row2_Wheel_Right
  }

  """
  Row2 wheel left.
  """
  type Vehicle_Chassis_Axle_Row2_Wheel_Left {
    brake: Vehicle_Chassis_Axle_Row2_Wheel_Left_Brake

    tire: Vehicle_Chassis_Axle_Row2_Wheel_Left_Tire
  }

  """
  Brake signals for wheel
  """
  type Vehicle_Chassis_Axle_Row2_Wheel_Left_Brake {
    """
    Brake pad wear status. True = Worn. False = Not Worn.
    """
    brakesWorn: Boolean

    """
    Brake fluid level as percent. 0 = Empty. 100 = Full.
    """
    fluidLevel: Int

    """
    Brake fluid level status. True = Brake fluid level low. False = Brake fluid level OK.
    """
    fluidLevelLow: Boolean

    """
    Brake pad wear as percent. 0 = No Wear. 100 = Worn.
    """
    padWear: Int
  }

  """
  Tire signals for wheel
  """
  type Vehicle_Chassis_Axle_Row2_Wheel_Left_Tire {
    """
    Tire pressure in kilo-Pascal
    """
    pressure: Int

    """
    Tire Pressure Status. True = Low tire pressure. False = Good tire pressure.
    """
    pressureLow: Boolean

    """
    Tire temperature in Celsius.
    """
    temperature: Float
  }

  """
  Row2 wheel right.
  """
  type Vehicle_Chassis_Axle_Row2_Wheel_Right {
    brake: Vehicle_Chassis_Axle_Row2_Wheel_Right_Brake

    tire: Vehicle_Chassis_Axle_Row2_Wheel_Right_Tire
  }

  """
  Brake signals for wheel
  """
  type Vehicle_Chassis_Axle_Row2_Wheel_Right_Brake {
    """
    Brake pad wear status. True = Worn. False = Not Worn.
    """
    brakesWorn: Boolean

    """
    Brake fluid level as percent. 0 = Empty. 100 = Full.
    """
    fluidLevel: Int

    """
    Brake fluid level status. True = Brake fluid level low. False = Brake fluid level OK.
    """
    fluidLevelLow: Boolean

    """
    Brake pad wear as percent. 0 = No Wear. 100 = Worn.
    """
    padWear: Int
  }

  """
  Tire signals for wheel
  """
  type Vehicle_Chassis_Axle_Row2_Wheel_Right_Tire {
    """
    Tire pressure in kilo-Pascal
    """
    pressure: Int

    """
    Tire Pressure Status. True = Low tire pressure. False = Good tire pressure.
    """
    pressureLow: Boolean

    """
    Tire temperature in Celsius.
    """
    temperature: Float
  }

  """
  Brake system signals
  """
  type Vehicle_Chassis_Brake {
    """
    Brake pedal position as percent. 0 = Not depressed. 100 = Fully depressed.
    """
    pedalPosition: Int
  }

  """
  Parking brake signals
  """
  type Vehicle_Chassis_ParkingBrake {
    """
    Parking brake status. True = Parking Brake is Engaged. False = Parking Brake is not Engaged.
    """
    isEngaged: Boolean
  }

  """
  Steering wheel signals
  """
  type Vehicle_Chassis_SteeringWheel {
    """
    Steering wheel angle. Positive = degrees to the left. Negative = degrees to the right.
    """
    angle: Int

    """
    Steering wheel column extension from dashboard. 0 = Closest to dashboard. 100 = Furthest from dashboard.
    """
    extension: Int

    """
    Steering wheel column tilt. 0 = Lowest position. 100 = Highest position.
    """
    tilt: Int
  }

  """
  Trailer signals
  """
  type Vehicle_Chassis_Trailer {
    """
    Signal indicating if trailer is connected or not.
    """
    connected: Boolean
  }

  """
  Drivetrain data for internal combustion engines, transmissions, electric motors, etc.
  """
  type Vehicle_Drivetrain {
    batteryManagement: Vehicle_Drivetrain_BatteryManagement

    electricMotor: Vehicle_Drivetrain_ElectricMotor

    fuelCell: Vehicle_Drivetrain_FuelCell

    fuelSystem: Vehicle_Drivetrain_FuelSystem

    internalCombustionEngine: Vehicle_Drivetrain_InternalCombustionEngine

    transmission: Vehicle_Drivetrain_Transmission
  }

  """
  Battery Management data.
  """
  type Vehicle_Drivetrain_BatteryManagement {
    """
    Remaining capacity of the batter pack
    """
    batteryCapacity: Int

    """
    Temperature of the battery pack
    """
    batteryTemperature: Float

    """
    Indicates the primary charging inlet type fitted to the vehicle
    """
    chargingInlet: Vehicle_Drivetrain_BatteryManagement_ChargingInlet_Enum

    """
    Indicates that the battery level is low
    """
    lowBatteryLevel: Boolean
  }

  enum Vehicle_Drivetrain_BatteryManagement_ChargingInlet_Enum {
    unknown
    Not_Fitted
    AC_Type_1
    AC_Type_2
    AC_GBT
    AC_DC_Type_1_Combo
    AC_DC_Type_2_Combo
    DC_GBT
    DC_Chademo
  }

  """
  Electric Motor specific data.
  """
  type Vehicle_Drivetrain_ElectricMotor {
    """
    Dummy description
    """
    dummyField: String
  }

  """
  Fuel Cell data.
  """
  type Vehicle_Drivetrain_FuelCell {
    """
    Dummy description
    """
    dummyField: String
  }

  """
  Fuel system data.
  """
  type Vehicle_Drivetrain_FuelSystem {
    """
    Average consumption in liters per 100 km.
    """
    averageConsumption: Float

    """
    Fuel amount consumed since start in liters.
    """
    consumptionSinceStart: Float

    """
    Indicates whether eco start stop is currently enabled
    """
    engineStopStartEnabled: Boolean

    """
    Defines the fuel type of the vehicle
    """
    fuelType: Vehicle_Drivetrain_FuelSystem_FuelType_Enum

    """
    Defines the hybrid type of the vehicle
    """
    hybridType: Vehicle_Drivetrain_FuelSystem_HybridType_Enum

    """
    Current consumption in liters per 100 km.
    """
    instantConsumption: Float

    """
    Level in fuel tank as percent of capacity. 0 = empty. 100 = full.
    """
    level: Int

    """
    Indicates that the fuel level is low (e.g. less 50km range)
    """
    lowFuelLevel: Boolean

    """
    Range in meters.
    """
    range: Float

    """
    Capacity of the fuel tank in liters
    """
    tankCapacity: Int

    """
    Time elapsed since start in seconds.
    """
    timeSinceStart: Float
  }

  enum Vehicle_Drivetrain_FuelSystem_FuelType_Enum {
    unknown
    gasoline
    diesel
    electric
    hybrid
    E85
    CNG
    LPG
  }

  enum Vehicle_Drivetrain_FuelSystem_HybridType_Enum {
    unknown
    not_applicable
    stop_start
    belt_ISG
    CIMG
    PHEV
  }

  """
  Engine-specific data, stopping at the bell housing.
  """
  type Vehicle_Drivetrain_InternalCombustionEngine {
    """
    Engine configuration.
    """
    configuration: Vehicle_Drivetrain_InternalCombustionEngine_Configuration_Enum

    """
    Displacement in cubic centimetres.
    """
    displacement: Int

    engine: Vehicle_Drivetrain_InternalCombustionEngine_Engine

    """
    Type of fuel that the engine runs on.
    """
    fuelType: Vehicle_Drivetrain_InternalCombustionEngine_FuelType_Enum

    """
    Peak power, in kilowatts, that engine can generate.
    """
    maxPower: Int

    """
    Peak power, in newton meter, that the engine can generate.
    """
    maxTorque: Int
  }

  enum Vehicle_Drivetrain_InternalCombustionEngine_Configuration_Enum {
    unknown
    straight
    V
    boxer
    W
    rotary
    radial
    square
    H
    U
    opposed
    X
  }

  """
  Engine signals
  """
  type Vehicle_Drivetrain_InternalCombustionEngine_Engine {
    """
    Ambient (Outside) air temperature
    """
    ambientAirTemperature: Float

    """
    Engine coolant temperature.
    """
    ect: Int

    """
    Engine oil pressure.
    """
    eop: Int

    """
    Engine oil temperature.
    """
    eot: Int

    """
    Grams of air drawn into engine per second.
    """
    maf: Int

    """
    Manifold air pressure possibly boosted using forced induction.
    """
    map: Int

    """
    Current engine power output.
    """
    power: Int

    """
    Engine speed measured as rotations per minute.
    """
    speed: Int

    """
    Current throttle position.
    """
    tps: Int

    """
    Current engine torque.
    """
    torque: Int
  }

  enum Vehicle_Drivetrain_InternalCombustionEngine_FuelType_Enum {
    unknown
    gasoline
    diesel
    E85
    CNG
  }

  """
  Transmission-specific data, stopping at the drive shafts.
  """
  type Vehicle_Drivetrain_Transmission {
    """
    Clutch wear as a percent. 0 = no wear. 100 = worn.
    """
    clutchWear: Int

    """
    Drive type.
    """
    driveType: Vehicle_Drivetrain_Transmission_DriveType_Enum

    """
    Current gear. 0=Neutral. -1=Reverse
    """
    gear: Int

    """
    Is the gearbox in automatic or manual (paddle) mode.
    """
    gearChangeMode: Vehicle_Drivetrain_Transmission_GearChangeMode_Enum

    """
    Number of forward gears in the transmission. -1 = CVT.
    """
    gearCount: Int

    """
    Current gearbox performance mode.
    """
    performanceMode: Vehicle_Drivetrain_Transmission_PerformanceMode_Enum

    """
    Vehicle speed, as sensed by the gearbox.
    """
    speed: Float

    """
    The current gearbox temperature
    """
    temperature: Int

    """
    Odometer reading
    """
    travelledDistance: Float

    """
    Transmission type.
    """
    type: Vehicle_Drivetrain_Transmission_Type_Enum
  }

  enum Vehicle_Drivetrain_Transmission_DriveType_Enum {
    unknown
    forward_wheel_drive
    rear_wheel_drive
    all_wheel_drive
  }

  enum Vehicle_Drivetrain_Transmission_GearChangeMode_Enum {
    manual
    automatic
  }

  enum Vehicle_Drivetrain_Transmission_PerformanceMode_Enum {
    normal
    sport
    economy
    snow
    rain
  }

  enum Vehicle_Drivetrain_Transmission_Type_Enum {
    unknown
    sequential
    H
    automatic
    DSG
    CVT
  }

  """
  OBD data.
  """
  type Vehicle_OBD {
    """
    PID 43 - Absolute load value
    """
    absoluteLoad: Int

    """
    PID 49 - Accelerator pedal position D
    """
    acceleratorPositionD: Int

    """
    PID 4A - Accelerator pedal position E
    """
    acceleratorPositionE: Int

    """
    PID 4B - Accelerator pedal position F
    """
    acceleratorPositionF: Int

    """
    PID 12 - Secondary air status
    """
    airStatus: String

    """
    PID 46 - Ambient air temperature
    """
    ambientAirTemperature: Float

    """
    PID 1E - Auxiliary input status (power take off)
    """
    auxInputStatus: Boolean

    """
    PID 33 - Barometric pressure
    """
    barometricPressure: Float

    catalyst: Vehicle_OBD_Catalyst

    """
    PID 2C - Commanded exhaust gas recirculation (EGR)
    """
    commandedEGR: Int

    """
    PID 2E - Commanded evaporative purge (EVAP) valve
    """
    commandedEVAP: Int

    """
    PID 44 - Commanded equivalence ratio
    """
    commandedEquivalenceRatio: Float

    """
    PID 42 - Control module voltage
    """
    controlModuleVoltage: Float

    """
    PID 05 - Coolant temperature
    """
    coolantTemperature: Float

    """
    PID 31 - Distance traveled since codes cleared
    """
    distanceSinceDTCClear: Float

    """
    PID 21 - Distance traveled with MIL on
    """
    distanceWithMIL: Float

    driveCycleStatus: Vehicle_OBD_DriveCycleStatus

    """
    PID 2D - Exhaust gas recirculation (EGR) error
    """
    egrError: Int

    """
    PID 32 - Evaporative purge (EVAP) system pressure
    """
    evapVaporPressure: Float

    """
    PID 53 - Absolute evaporative purge (EVAP) system pressure
    """
    evapVaporPressureAbsolute: Float

    """
    PID 54 - Alternate evaporative purge (EVAP) system pressure
    """
    evapVaporPressureAlternate: Float

    """
    PID 04 - Engine load in percent - 0 = no load, 100 = full load
    """
    engineLoad: Int

    """
    PID 0C - Engine speed measured as rotations per minute
    """
    engineSpeed: Float

    """
    PID 52 - Percentage of ethanol in the fuel
    """
    ethanolPercent: Int

    """
    PID 02 - DTC that triggered the freeze frame
    """
    freezeDTC: String

    """
    PID 5D - Fuel injection timing
    """
    fuelInjectionTiming: Int

    """
    PID 2F - Fuel level in the fuel tank
    """
    fuelLevel: Int

    """
    PID 0A - Fuel pressure
    """
    fuelPressure: Float

    """
    PID 59 - Absolute fuel rail pressure
    """
    fuelRailPressureAbsolute: Float

    """
    PID 23 - Fuel rail pressure direct inject
    """
    fuelRailPressureDirect: Float

    """
    PID 22 - Fuel rail pressure relative to vacuum
    """
    fuelRailPressureVac: Float

    """
    PID 5E - Engine fuel rate
    """
    fuelRate: Float

    """
    PID 03 - Fuel status
    """
    fuelStatus: String

    """
    PID 51 - Fuel type
    """
    fuelType: String

    """
    PID 5B - Remaining life of hybrid battery
    """
    hybridBatteryRemaining: Int

    """
    PID 0F - Intake temperature
    """
    intakeTemp: Float

    """
    PID 07 - Long Term (learned) Fuel Trim - Bank 1 - negative percent leaner, positive percent richer
    """
    longTermFuelTrim1: Int

    """
    PID 09 - Long Term (learned) Fuel Trim - Bank 2 - negative percent leaner, positive percent richer
    """
    longTermFuelTrim2: Int

    """
    PID 56 - Long term secondary O2 trim - Bank 1
    """
    longTermO2Trim1: Int

    """
    PID 58 - Long term secondary O2 trim - Bank 2
    """
    longTermO2Trim2: Int

    """
    PID 10 - Grams of air drawn into engine per second
    """
    maf: Int

    """
    PID 0B - Intake manifold pressure
    """
    map: Float

    """
    PID 50 - Maximum flow for mass air flow sensor
    """
    maxMAF: Float

    o2: Vehicle_OBD_O2

    o2Alt: Vehicle_OBD_O2Alt

    o2WR: Vehicle_OBD_O2WR

    """
    PID 5C - Engine oil temperature
    """
    oilTemperature: Int

    """
    PID 00 - Bit array of the supported pids 01 to 20
    """
    pidsA: Float

    """
    PID 20 - Bit array of the supported pids 21 to 40
    """
    pidsB: Float

    """
    PID 40 - Bit array of the supported pids 41 to 60
    """
    pidsC: Float

    """
    PID 5A - Relative accelerator pedal position
    """
    relativeAcceleratorPosition: Int

    """
    PID 45 - Relative throttle position
    """
    relativeThrottlePosition: Int

    """
    PID 1F - Engine run time
    """
    runTime: Float

    """
    PID 4D - Run time with MIL on
    """
    runTimeMIL: Float

    """
    PID 06 - Short Term (immediate) Fuel Trim - Bank 1 - negative percent leaner, positive percent richer
    """
    shortTermFuelTrim1: Int

    """
    PID 08 - Short Term (immediate) Fuel Trim - Bank 2 - negative percent leaner, positive percent richer
    """
    shortTermFuelTrim2: Int

    """
    PID 55 - Short term secondary O2 trim - Bank 1
    """
    shortTermO2Trim1: Int

    """
    PID 57 - Short term secondary O2 trim - Bank 2
    """
    shortTermO2Trim2: Int

    """
    PID 0D - Vehicle speed
    """
    speed: Float

    status: Vehicle_OBD_Status

    """
    PID 4C - Commanded throttle actuator
    """
    throttleActuator: Int

    """
    PID 11 - Throttle position - 0 = closed throttle, 100 = open throttle
    """
    throttlePosition: Int

    """
    PID 47 - Absolute throttle position B
    """
    throttlePositionB: Int

    """
    PID 48 - Absolute throttle position C
    """
    throttlePositionC: Int

    """
    PID 4E - Time since trouble codes cleared
    """
    timeSinceDTCCleared: Float

    """
    PID 0E - Time advance
    """
    timingAdvance: Float

    """
    PID 30 - Number of warm-ups since codes cleared
    """
    warmupsSinceDTCClear: Int
  }

  """
  Catalyst signals
  """
  type Vehicle_OBD_Catalyst {
    bank1: Vehicle_OBD_Catalyst_Bank1

    bank2: Vehicle_OBD_Catalyst_Bank2
  }

  """
  Catalyst bank 1 signals
  """
  type Vehicle_OBD_Catalyst_Bank1 {
    """
    PID 3C - Catalyst temperature from bank 1, sensor 1
    """
    temperature1: Float

    """
    PID 3E - Catalyst temperature from bank 1, sensor 2
    """
    temperature2: Float
  }

  """
  Catalyst bank 2 signals
  """
  type Vehicle_OBD_Catalyst_Bank2 {
    """
    PID 3D - Catalyst temperature from bank 2, sensor 1
    """
    temperature1: Float

    """
    PID 3F - Catalyst temperature from bank 2, sensor 2
    """
    temperature2: Float
  }

  """
  PID 41 - OBD status for the current drive cycle
  """
  type Vehicle_OBD_DriveCycleStatus {
    """
    Number of sensor Trouble Codes (DTC)
    """
    dtcCount: Float

    """
    Type of the ignition for ICE - spark = spark plug ignition, compression = self-igniting (Diesel engines)
    """
    ignitionType: Vehicle_OBD_DriveCycleStatus_IgnitionType_Enum

    """
    Malfunction Indicator Light (MIL) - False = Off, True = On
    """
    mil: Boolean
  }

  enum Vehicle_OBD_DriveCycleStatus_IgnitionType_Enum {
    spark
    compression
  }

  """
  PID 13 - Presence of oxygen sensors for the banks
  """
  type Vehicle_OBD_O2 {
    bank1: Vehicle_OBD_O2_Bank1

    bank2: Vehicle_OBD_O2_Bank2
  }

  """
  PID 1D - Presence of alternate oxygen sensors for the banks
  """
  type Vehicle_OBD_O2Alt {
    bank1: Vehicle_OBD_O2Alt_Bank1

    bank2: Vehicle_OBD_O2Alt_Bank2
  }

  """
  Alternate oxygen sensors on bank 1, at most 4 sensors per bank
  """
  type Vehicle_OBD_O2Alt_Bank1 {
    sensor1: Vehicle_OBD_O2Alt_Bank1_Sensor1

    sensor2: Vehicle_OBD_O2Alt_Bank1_Sensor2

    sensor3: Vehicle_OBD_O2Alt_Bank1_Sensor3

    sensor4: Vehicle_OBD_O2Alt_Bank1_Sensor4
  }

  """
  Alternate oxygen sensor
  """
  type Vehicle_OBD_O2Alt_Bank1_Sensor1 {
    """
    Dummy description
    """
    dummyField: String
  }

  """
  Alternate oxygen sensor
  """
  type Vehicle_OBD_O2Alt_Bank1_Sensor2 {
    """
    Dummy description
    """
    dummyField: String
  }

  """
  Alternate oxygen sensor
  """
  type Vehicle_OBD_O2Alt_Bank1_Sensor3 {
    """
    Dummy description
    """
    dummyField: String
  }

  """
  Alternate oxygen sensor
  """
  type Vehicle_OBD_O2Alt_Bank1_Sensor4 {
    """
    Dummy description
    """
    dummyField: String
  }

  """
  Alternate oxygen sensors on bank 2, at most 4 sensors per bank
  """
  type Vehicle_OBD_O2Alt_Bank2 {
    sensor1: Vehicle_OBD_O2Alt_Bank2_Sensor1

    sensor2: Vehicle_OBD_O2Alt_Bank2_Sensor2

    sensor3: Vehicle_OBD_O2Alt_Bank2_Sensor3

    sensor4: Vehicle_OBD_O2Alt_Bank2_Sensor4
  }

  """
  Alternate oxygen sensor
  """
  type Vehicle_OBD_O2Alt_Bank2_Sensor1 {
    """
    Dummy description
    """
    dummyField: String
  }

  """
  Alternate oxygen sensor
  """
  type Vehicle_OBD_O2Alt_Bank2_Sensor2 {
    """
    Dummy description
    """
    dummyField: String
  }

  """
  Alternate oxygen sensor
  """
  type Vehicle_OBD_O2Alt_Bank2_Sensor3 {
    """
    Dummy description
    """
    dummyField: String
  }

  """
  Alternate oxygen sensor
  """
  type Vehicle_OBD_O2Alt_Bank2_Sensor4 {
    """
    Dummy description
    """
    dummyField: String
  }

  """
  Wide range/band oxygen sensors
  """
  type Vehicle_OBD_O2WR {
    sensor1: Vehicle_OBD_O2WR_Sensor1

    sensor2: Vehicle_OBD_O2WR_Sensor2

    sensor3: Vehicle_OBD_O2WR_Sensor3

    sensor4: Vehicle_OBD_O2WR_Sensor4

    sensor5: Vehicle_OBD_O2WR_Sensor5

    sensor6: Vehicle_OBD_O2WR_Sensor6

    sensor7: Vehicle_OBD_O2WR_Sensor7

    sensor8: Vehicle_OBD_O2WR_Sensor8
  }

  """
  Wide range/band oxygen senor 1
  """
  type Vehicle_OBD_O2WR_Sensor1 {
    """
    PID 34 - Lambda current for wide range/band oxygen sensor 1
    """
    current: Float

    """
    PID 24 - Lambda voltage for wide range/band oxygen sensor 1
    """
    voltage: Float
  }

  """
  Wide range/band oxygen senor 2
  """
  type Vehicle_OBD_O2WR_Sensor2 {
    """
    PID 35 - Lambda current for wide range/band oxygen sensor 2
    """
    current: Float

    """
    PID 25 - Lambda voltage for wide range/band oxygen sensor 2
    """
    voltage: Float
  }

  """
  Wide range/band oxygen senor 3
  """
  type Vehicle_OBD_O2WR_Sensor3 {
    """
    PID 36 - Lambda current for wide range/band oxygen sensor 4
    """
    current: Float

    """
    PID 26 - Lambda voltage for wide range/band oxygen sensor 3
    """
    voltage: Float
  }

  """
  Wide range/band oxygen senor 4
  """
  type Vehicle_OBD_O2WR_Sensor4 {
    """
    PID 37 - Lambda current for wide range/band oxygen sensor 4
    """
    current: Float

    """
    PID 27 - Lambda voltage for wide range/band oxygen sensor 4
    """
    voltage: Float
  }

  """
  Wide range/band oxygen senor 5
  """
  type Vehicle_OBD_O2WR_Sensor5 {
    """
    PID 38 - Lambda current for wide range/band oxygen sensor 5
    """
    current: Float

    """
    PID 28 - Lambda voltage for wide range/band oxygen sensor 5
    """
    voltage: Float
  }

  """
  Wide range/band oxygen senor 6
  """
  type Vehicle_OBD_O2WR_Sensor6 {
    """
    PID 39 - Lambda current for wide range/band oxygen sensor 6
    """
    current: Float

    """
    PID 29 - Lambda voltage for wide range/band oxygen sensor 6
    """
    voltage: Float
  }

  """
  Wide range/band oxygen senor 7
  """
  type Vehicle_OBD_O2WR_Sensor7 {
    """
    PID 3A - Lambda current for wide range/band oxygen sensor 7
    """
    current: Float

    """
    PID 2A - Lambda voltage for wide range/band oxygen sensor 7
    """
    voltage: Float
  }

  """
  Wide range/band oxygen senor 8
  """
  type Vehicle_OBD_O2WR_Sensor8 {
    """
    PID 3B - Lambda current for wide range/band oxygen sensor 8
    """
    current: Float

    """
    PID 2B - Lambda voltage for wide range/band oxygen sensor 8
    """
    voltage: Float
  }

  """
  Oxygen sensors on bank 1, at most 4 sensors per bank
  """
  type Vehicle_OBD_O2_Bank1 {
    sensor1: Vehicle_OBD_O2_Bank1_Sensor1

    sensor2: Vehicle_OBD_O2_Bank1_Sensor2

    sensor3: Vehicle_OBD_O2_Bank1_Sensor3

    sensor4: Vehicle_OBD_O2_Bank1_Sensor4
  }

  """
  Oxygen sensor
  """
  type Vehicle_OBD_O2_Bank1_Sensor1 {
    """
    PID 14 - Sensor voltage
    """
    voltage: Float
  }

  """
  Oxygen sensor
  """
  type Vehicle_OBD_O2_Bank1_Sensor2 {
    """
    PID 15 - Sensor voltage
    """
    voltage: Float
  }

  """
  Oxygen sensor
  """
  type Vehicle_OBD_O2_Bank1_Sensor3 {
    """
    PID 16 - Sensor voltage
    """
    voltage: Float
  }

  """
  Oxygen sensor
  """
  type Vehicle_OBD_O2_Bank1_Sensor4 {
    """
    PID 17 - Sensor voltage
    """
    voltage: Float
  }

  """
  Oxygen sensors on bank 2, at most 4 sensors per bank
  """
  type Vehicle_OBD_O2_Bank2 {
    sensor1: Vehicle_OBD_O2_Bank2_Sensor1

    sensor2: Vehicle_OBD_O2_Bank2_Sensor2

    sensor3: Vehicle_OBD_O2_Bank2_Sensor3

    sensor4: Vehicle_OBD_O2_Bank2_Sensor4
  }

  """
  Oxygen sensor
  """
  type Vehicle_OBD_O2_Bank2_Sensor1 {
    """
    PID 18 - Sensor voltage
    """
    voltage: Float
  }

  """
  Oxygen sensor
  """
  type Vehicle_OBD_O2_Bank2_Sensor2 {
    """
    PID 19 - Sensor voltage
    """
    voltage: Float
  }

  """
  Oxygen sensor
  """
  type Vehicle_OBD_O2_Bank2_Sensor3 {
    """
    PID 1A - Sensor voltage
    """
    voltage: Float
  }

  """
  Oxygen sensor
  """
  type Vehicle_OBD_O2_Bank2_Sensor4 {
    """
    PID 1B - Sensor voltage
    """
    voltage: Float
  }

  """
  PID 01 - OBD status
  """
  type Vehicle_OBD_Status {
    """
    Number of sensor Trouble Codes (DTC)
    """
    dtcCount: Float

    """
    Type of the ignition for ICE - spark = spark plug ignition, compression = self-igniting (Diesel engines)
    """
    ignitionType: Vehicle_OBD_Status_IgnitionType_Enum

    """
    Malfunction Indicator Light (MIL) False = Off, True = On
    """
    mil: Boolean
  }

  enum Vehicle_OBD_Status_IgnitionType_Enum {
    spark
    compression
  }

  """
  Attributes that identify a vehicle
  """
  type Vehicle_VehicleIdentification {
    """
    The ACRISS Car Classification Code is a code used by many car rental companies.
    """
    acrissCode: String

    """
    Vehicle brand or manufacturer
    """
    brand: String

    """
    Vehicle model
    """
    model: String

    """
    17-character Vehicle Identification Number (VIN) as defined by ISO 3779
    """
    vin: String

    """
    3-character World Manufacturer Identification (WMI) as defined by ISO 3780
    """
    wmi: String

    """
    Model year of the vehicle
    """
    year: Int

    """
    Indicates the design and body style of the vehicle (e.g. station wagon, hatchback, etc.).
    """
    bodyType: String

    """
    The date of the first registration of the vehicle with the respective public authorities.
    """
    dateVehicleFirstRegistered: String

    """
    A textual description of known damages, both repaired and unrepaired.
    """
    knownVehicleDamages: String

    """
    Indicates that the vehicle meets the respective emission standard.
    """
    meetsEmissionStandard: String

    """
    The date of production of the item, e.g. vehicle.
    """
    productionDate: String

    """
    The date the item e.g. vehicle was purchased by the current owner.
    """
    purchaseDate: String

    """
    A short text indicating the configuration of the vehicle, e.g. '5dr hatchback ST 2.5 MT 225 hp' or 'limited edition'.
    """
    vehicleConfiguration: String

    """
    A short text indicating the configuration of the vehicle, e.g. '5dr hatchback ST 2.5 MT 225 hp' or 'limited edition'.
    """
    vehicleInteriorColor: String

    """
    The type or material of the interior of the vehicle (e.g. synthetic fabric, leather, wood, etc.).
    """
    vehicleInteriorType: String

    """
    The release date of a vehicle model (often used to differentiate versions of the same make and model).
    """
    vehicleModelDate: String

    """
    The number of passengers that can be seated in the vehicle, both in terms of the physical space available, and in terms of limitations set by law.
    """
    vehicleSeatingCapacity: Int

    """
    Indicates whether the vehicle has been used for special purposes, like commercial rental, driving school.
    """
    vehicleSpecialUsage: String
  }
`;

export default Vehicle;
