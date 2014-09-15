(function () {
	define([], function () {
		return {
			getMe: function () {
				return {
					"schema": {
						"namespace": "SiGyl.Models.Areas.Runtime",
						"alias": "Self",
						"annotation:UseStrongSpatialTypes": "false",
						"xmlns:annotation": "http://schemas.microsoft.com/ado/2009/02/edm/annotation",
						"xmlns:customannotation": "http://schemas.microsoft.com/ado/2013/11/edm/customannotation",
						"xmlns": "http://schemas.microsoft.com/ado/2009/11/edm",
						"cSpaceOSpaceMapping": "[[\"SiGyl.Models.Areas.Runtime.AlarmCommand\",\"SiGyl.Models.Areas.Runtime.Database.AlarmCommand\"],[\"SiGyl.Models.Areas.Runtime.RuntimeCommandTemplate\",\"SiGyl.Models.Areas.Runtime.Security.RuntimeCommandTemplate\"],[\"SiGyl.Models.Areas.Runtime.RuntimeClearance\",\"SiGyl.Models.Areas.Runtime.Security.RuntimeClearance\"],[\"SiGyl.Models.Areas.Runtime.RuntimeCommandClearance\",\"SiGyl.Models.Areas.Runtime.Security.RuntimeCommandClearance\"],[\"SiGyl.Models.Areas.Runtime.RuntimeCommand\",\"SiGyl.Models.Areas.Runtime.Security.RuntimeCommand\"],[\"SiGyl.Models.Areas.Runtime.CommandCommand\",\"SiGyl.Models.Areas.Runtime.Security.CommandCommand\"],[\"SiGyl.Models.Areas.Runtime.CommandClearanceCommand\",\"SiGyl.Models.Areas.Runtime.Security.CommandClearanceCommand\"],[\"SiGyl.Models.Areas.Runtime.RuntimeZone\",\"SiGyl.Models.Areas.Runtime.Equipment.RuntimeZone\"],[\"SiGyl.Models.Areas.Runtime.Batch\",\"SiGyl.Models.Areas.Runtime.Batches.Batch\"],[\"SiGyl.Models.Areas.Runtime.RuntimeUnit\",\"SiGyl.Models.Areas.Runtime.Equipment.RuntimeUnit\"],[\"SiGyl.Models.Areas.Runtime.RuntimeAlarm\",\"SiGyl.Models.Areas.Runtime.Database.RuntimeAlarm\"],[\"SiGyl.Models.Areas.Runtime.RuntimeAlarmSeverity\",\"SiGyl.Models.Areas.Runtime.Database.RuntimeAlarmSeverity\"],[\"SiGyl.Models.Areas.Runtime.AlarmSeverityCommand\",\"SiGyl.Models.Areas.Runtime.Database.AlarmSeverityCommand\"],[\"SiGyl.Models.Areas.Runtime.RuntimeSite\",\"SiGyl.Models.Areas.Runtime.Organisation.RuntimeSite\"],[\"SiGyl.Models.Areas.Runtime.SiteCommand\",\"SiGyl.Models.Areas.Runtime.Organisation.SiteCommand\"],[\"SiGyl.Models.Areas.Runtime.RuntimeDevice\",\"SiGyl.Models.Areas.Runtime.Equipment.Devices.RuntimeDevice\"],[\"SiGyl.Models.Areas.Runtime.DeviceCommand\",\"SiGyl.Models.Areas.Runtime.Equipment.Devices.DeviceCommand\"],[\"SiGyl.Models.Areas.Runtime.RuntimeDeviceDisplay\",\"SiGyl.Models.Areas.Runtime.Equipment.Devices.RuntimeDeviceDisplay\"],[\"SiGyl.Models.Areas.Runtime.DeviceDisplayCommand\",\"SiGyl.Models.Areas.Runtime.Equipment.Devices.DeviceDisplayCommand\"],[\"SiGyl.Models.Areas.Runtime.RuntimeDeviceInstance\",\"SiGyl.Models.Areas.Runtime.Equipment.Devices.RuntimeDeviceInstance\"],[\"SiGyl.Models.Areas.Runtime.DeviceInstanceCommand\",\"SiGyl.Models.Areas.Runtime.Equipment.Devices.DeviceInstanceCommand\"],[\"SiGyl.Models.Areas.Runtime.RuntimeDeviceInstanceDisplay\",\"SiGyl.Models.Areas.Runtime.Equipment.Devices.RuntimeDeviceInstanceDisplay\"],[\"SiGyl.Models.Areas.Runtime.DeviceInstanceDisplayCommand\",\"SiGyl.Models.Areas.Runtime.Equipment.Devices.DeviceInstanceDisplayCommand\"],[\"SiGyl.Models.Areas.Runtime.RuntimeDeviceInstanceTag\",\"SiGyl.Models.Areas.Runtime.Equipment.Devices.RuntimeDeviceInstanceTag\"],[\"SiGyl.Models.Areas.Runtime.DeviceInstanceTagCommand\",\"SiGyl.Models.Areas.Runtime.Equipment.Devices.DeviceInstanceTagCommand\"],[\"SiGyl.Models.Areas.Runtime.RuntimeEnterprise\",\"SiGyl.Models.Areas.Runtime.Organisation.RuntimeEnterprise\"],[\"SiGyl.Models.Areas.Runtime.RuntimeApplication\",\"SiGyl.Models.Areas.Runtime.Sys.RuntimeApplication\"],[\"SiGyl.Models.Areas.Runtime.ApplicationCommand\",\"SiGyl.Models.Areas.Runtime.Sys.ApplicationCommand\"],[\"SiGyl.Models.Areas.Runtime.EnterpriseCommand\",\"SiGyl.Models.Areas.Runtime.Organisation.EnterpriseCommand\"],[\"SiGyl.Models.Areas.Runtime.RuntimeAlarmValue\",\"SiGyl.Models.Areas.Runtime.Database.RuntimeAlarmValue\"],[\"SiGyl.Models.Areas.Runtime.AlarmValueCommand\",\"SiGyl.Models.Areas.Runtime.Database.AlarmValueCommand\"],[\"SiGyl.Models.Areas.Runtime.Step\",\"SiGyl.Models.Areas.Runtime.Batches.Step\"],[\"SiGyl.Models.Areas.Runtime.BoolStepFormula\",\"SiGyl.Models.Areas.Runtime.Batches.Formulae.BoolStepFormula\"],[\"SiGyl.Models.Areas.Runtime.BoolStepFormulaCommand\",\"SiGyl.Models.Areas.Runtime.Batches.Formulae.BoolStepFormulaCommand\"],[\"SiGyl.Models.Areas.Runtime.RuntimeBoolParameter\",\"SiGyl.Models.Areas.Runtime.Equipment.Parameters.RuntimeBoolParameter\"],[\"SiGyl.Models.Areas.Runtime.BoolParameterCommand\",\"SiGyl.Models.Areas.Runtime.Equipment.Parameters.BoolParameterCommand\"],[\"SiGyl.Models.Areas.Runtime.RuntimeBoolEnumeration\",\"SiGyl.Models.Areas.Runtime.Equipment.Parameters.Enumerations.RuntimeBoolEnumeration\"],[\"SiGyl.Models.Areas.Runtime.BoolEnumerationCommand\",\"SiGyl.Models.Areas.Runtime.Equipment.Parameters.Enumerations.BoolEnumerationCommand\"],[\"SiGyl.Models.Areas.Runtime.RuntimeOperation\",\"SiGyl.Models.Areas.Runtime.Equipment.RuntimeOperation\"],[\"SiGyl.Models.Areas.Runtime.OperationCommand\",\"SiGyl.Models.Areas.Runtime.Equipment.OperationCommand\"],[\"SiGyl.Models.Areas.Runtime.RuntimeDoubleParameter\",\"SiGyl.Models.Areas.Runtime.Equipment.Parameters.RuntimeDoubleParameter\"],[\"SiGyl.Models.Areas.Runtime.DoubleParameterCommand\",\"SiGyl.Models.Areas.Runtime.Equipment.Parameters.DoubleParameterCommand\"],[\"SiGyl.Models.Areas.Runtime.DoubleStepFormula\",\"SiGyl.Models.Areas.Runtime.Batches.Formulae.DoubleStepFormula\"],[\"SiGyl.Models.Areas.Runtime.DoubleStepFormulaCommand\",\"SiGyl.Models.Areas.Runtime.Batches.Formulae.DoubleStepFormulaCommand\"],[\"SiGyl.Models.Areas.Runtime.RuntimeIntegerParameter\",\"SiGyl.Models.Areas.Runtime.Equipment.Parameters.RuntimeIntegerParameter\"],[\"SiGyl.Models.Areas.Runtime.IntegerParameterCommand\",\"SiGyl.Models.Areas.Runtime.Equipment.Parameters.IntegerParameterCommand\"],[\"SiGyl.Models.Areas.Runtime.RuntimeIntegerEnumeration\",\"SiGyl.Models.Areas.Runtime.Equipment.Parameters.Enumerations.RuntimeIntegerEnumeration\"],[\"SiGyl.Models.Areas.Runtime.IntegerEnumerationCommand\",\"SiGyl.Models.Areas.Runtime.Equipment.Parameters.Enumerations.IntegerEnumerationCommand\"],[\"SiGyl.Models.Areas.Runtime.IntegerStepFormula\",\"SiGyl.Models.Areas.Runtime.Batches.Formulae.IntegerStepFormula\"],[\"SiGyl.Models.Areas.Runtime.IntegerStepFormulaCommand\",\"SiGyl.Models.Areas.Runtime.Batches.Formulae.IntegerStepFormulaCommand\"],[\"SiGyl.Models.Areas.Runtime.RuntimeReport\",\"SiGyl.Models.Areas.Runtime.Equipment.Parameters.RuntimeReport\"],[\"SiGyl.Models.Areas.Runtime.ReportCommand\",\"SiGyl.Models.Areas.Runtime.Equipment.Parameters.ReportCommand\"],[\"SiGyl.Models.Areas.Runtime.StepReport\",\"SiGyl.Models.Areas.Runtime.Batches.Formulae.StepReport\"],[\"SiGyl.Models.Areas.Runtime.StepReportCommand\",\"SiGyl.Models.Areas.Runtime.Batches.Formulae.StepReportCommand\"],[\"SiGyl.Models.Areas.Runtime.RuntimeStringParameter\",\"SiGyl.Models.Areas.Runtime.Equipment.Parameters.RuntimeStringParameter\"],[\"SiGyl.Models.Areas.Runtime.StringParameterCommand\",\"SiGyl.Models.Areas.Runtime.Equipment.Parameters.StringParameterCommand\"],[\"SiGyl.Models.Areas.Runtime.StringStepFormula\",\"SiGyl.Models.Areas.Runtime.Batches.Formulae.StringStepFormula\"],[\"SiGyl.Models.Areas.Runtime.StringStepFormulaCommand\",\"SiGyl.Models.Areas.Runtime.Batches.Formulae.StringStepFormulaCommand\"],[\"SiGyl.Models.Areas.Runtime.StepCommand\",\"SiGyl.Models.Areas.Runtime.Batches.StepCommand\"],[\"SiGyl.Models.Areas.Runtime.RuntimeUnitProcedure\",\"SiGyl.Models.Areas.Runtime.Batches.RuntimeUnitProcedure\"],[\"SiGyl.Models.Areas.Runtime.UnitProcedureCommand\",\"SiGyl.Models.Areas.Runtime.Batches.UnitProcedureCommand\"],[\"SiGyl.Models.Areas.Runtime.RuntimeBoolParameterNode\",\"SiGyl.Models.Areas.Runtime.Equipment.Nodes.RuntimeBoolParameterNode\"],[\"SiGyl.Models.Areas.Runtime.BoolParameterNodeCommand\",\"SiGyl.Models.Areas.Runtime.Equipment.Nodes.BoolParameterNodeCommand\"],[\"SiGyl.Models.Areas.Runtime.RuntimeCommandNode\",\"SiGyl.Models.Areas.Runtime.Equipment.Nodes.RuntimeCommandNode\"],[\"SiGyl.Models.Areas.Runtime.CommandNodeCommand\",\"SiGyl.Models.Areas.Runtime.Equipment.Nodes.CommandNodeCommand\"],[\"SiGyl.Models.Areas.Runtime.UnitCommand\",\"SiGyl.Models.Areas.Runtime.Equipment.UnitCommand\"],[\"SiGyl.Models.Areas.Runtime.RuntimeDataLogNode\",\"SiGyl.Models.Areas.Runtime.Equipment.Nodes.RuntimeDataLogNode\"],[\"SiGyl.Models.Areas.Runtime.DataLogNodeCommand\",\"SiGyl.Models.Areas.Runtime.Equipment.Nodes.DataLogNodeCommand\"],[\"SiGyl.Models.Areas.Runtime.RuntimeDoubleParameterNode\",\"SiGyl.Models.Areas.Runtime.Equipment.Nodes.RuntimeDoubleParameterNode\"],[\"SiGyl.Models.Areas.Runtime.DoubleParameterNodeCommand\",\"SiGyl.Models.Areas.Runtime.Equipment.Nodes.DoubleParameterNodeCommand\"],[\"SiGyl.Models.Areas.Runtime.RuntimeIntegerParameterNode\",\"SiGyl.Models.Areas.Runtime.Equipment.Nodes.RuntimeIntegerParameterNode\"],[\"SiGyl.Models.Areas.Runtime.IntegerParameterNodeCommand\",\"SiGyl.Models.Areas.Runtime.Equipment.Nodes.IntegerParameterNodeCommand\"],[\"SiGyl.Models.Areas.Runtime.RuntimeNodePage\",\"SiGyl.Models.Areas.Runtime.Equipment.NodePages.RuntimeNodePage\"],[\"SiGyl.Models.Areas.Runtime.NodePageCommand\",\"SiGyl.Models.Areas.Runtime.Equipment.NodePages.NodePageCommand\"],[\"SiGyl.Models.Areas.Runtime.RuntimeNodePageItem\",\"SiGyl.Models.Areas.Runtime.Equipment.NodePages.RuntimeNodePageItem\"],[\"SiGyl.Models.Areas.Runtime.NodePageItemCommand\",\"SiGyl.Models.Areas.Runtime.Equipment.NodePages.NodePageItemCommand\"],[\"SiGyl.Models.Areas.Runtime.RuntimeReportNode\",\"SiGyl.Models.Areas.Runtime.Equipment.Nodes.RuntimeReportNode\"],[\"SiGyl.Models.Areas.Runtime.ReportNodeCommand\",\"SiGyl.Models.Areas.Runtime.Equipment.Nodes.ReportNodeCommand\"],[\"SiGyl.Models.Areas.Runtime.RuntimeStateNode\",\"SiGyl.Models.Areas.Runtime.Equipment.Nodes.RuntimeStateNode\"],[\"SiGyl.Models.Areas.Runtime.StateNodeCommand\",\"SiGyl.Models.Areas.Runtime.Equipment.Nodes.StateNodeCommand\"],[\"SiGyl.Models.Areas.Runtime.RuntimeStringParameterNode\",\"SiGyl.Models.Areas.Runtime.Equipment.Nodes.RuntimeStringParameterNode\"],[\"SiGyl.Models.Areas.Runtime.StringParameterNodeCommand\",\"SiGyl.Models.Areas.Runtime.Equipment.Nodes.StringParameterNodeCommand\"],[\"SiGyl.Models.Areas.Runtime.BatchCommand\",\"SiGyl.Models.Areas.Runtime.Batches.BatchCommand\"],[\"SiGyl.Models.Areas.Runtime.ZoneCommand\",\"SiGyl.Models.Areas.Runtime.Equipment.ZoneCommand\"],[\"SiGyl.Models.Areas.Runtime.RuntimeGroup\",\"SiGyl.Models.Areas.Runtime.Security.RuntimeGroup\"],[\"SiGyl.Models.Areas.Runtime.GroupCommand\",\"SiGyl.Models.Areas.Runtime.Security.GroupCommand\"],[\"SiGyl.Models.Areas.Runtime.RuntimeZoneClearance\",\"SiGyl.Models.Areas.Runtime.Security.RuntimeZoneClearance\"],[\"SiGyl.Models.Areas.Runtime.ZoneClearanceCommand\",\"SiGyl.Models.Areas.Runtime.Security.ZoneClearanceCommand\"],[\"SiGyl.Models.Areas.Runtime.RuntimeSignature\",\"SiGyl.Models.Areas.Runtime.Security.RuntimeSignature\"],[\"SiGyl.Models.Areas.Runtime.SignatureCommand\",\"SiGyl.Models.Areas.Runtime.Security.SignatureCommand\"],[\"SiGyl.Models.Areas.Runtime.ClearanceCommand\",\"SiGyl.Models.Areas.Runtime.Security.ClearanceCommand\"],[\"SiGyl.Models.Areas.Runtime.RuntimeCommandInstance\",\"SiGyl.Models.Areas.Runtime.Security.RuntimeCommandInstance\"],[\"SiGyl.Models.Areas.Runtime.RuntimeCommandInstanceSignature\",\"SiGyl.Models.Areas.Runtime.Security.RuntimeCommandInstanceSignature\"],[\"SiGyl.Models.Areas.Runtime.RuntimeCommandInstanceValue\",\"SiGyl.Models.Areas.Runtime.Security.RuntimeCommandInstanceValue\"],[\"SiGyl.Models.Areas.Runtime.RuntimeCommandInstanceValueData\",\"SiGyl.Models.Areas.Runtime.Security.RuntimeCommandInstanceValueData\"],[\"SiGyl.Models.Areas.Runtime.RuntimeCommandTemplateSignature\",\"SiGyl.Models.Areas.Runtime.Security.RuntimeCommandTemplateSignature\"],[\"SiGyl.Models.Areas.Runtime.RuntimeCommandTemplateValue\",\"SiGyl.Models.Areas.Runtime.Security.RuntimeCommandTemplateValue\"],[\"SiGyl.Models.Areas.Runtime.RuntimeCommandTemplateValueData\",\"SiGyl.Models.Areas.Runtime.Security.RuntimeCommandTemplateValueData\"]]",
						"enumType": [
						  {
						  	"name": "OpcState",
						  	"isFlags": "false",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.Runtime.Equipment.OpcState, SiGyl.Models.Areas.Runtime, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
						  	"underlyingType": "Int32",
						  	"member": [
							  {
							  	"name": "Disconnected",
							  	"value": "0"
							  },
							  {
							  	"name": "Connecting",
							  	"value": "1"
							  },
							  {
							  	"name": "Connected",
							  	"value": "2"
							  },
							  {
							  	"name": "ConnectionSlow",
							  	"value": "3"
							  },
							  {
							  	"name": "Reconnecting",
							  	"value": "4"
							  },
							  {
							  	"name": "Reconnected",
							  	"value": "5"
							  },
							  {
							  	"name": "Closed",
							  	"value": "6"
							  },
							  {
							  	"name": "Error",
							  	"value": "7"
							  }
						  	]
						  },
						  {
						  	"name": "BatchState",
						  	"isFlags": "false",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.Runtime.Batches.BatchState, SiGyl.Models.Areas.Runtime, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
						  	"underlyingType": "Int32",
						  	"member": [
							  {
							  	"name": "Creating",
							  	"value": "0"
							  },
							  {
							  	"name": "Ready",
							  	"value": "1"
							  },
							  {
							  	"name": "Starting",
							  	"value": "2"
							  },
							  {
							  	"name": "Started",
							  	"value": "3"
							  },
							  {
							  	"name": "Complete",
							  	"value": "4"
							  }
						  	]
						  },
						  {
						  	"name": "UnitInterfaceState",
						  	"isFlags": "false",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.Runtime.Equipment.UnitInterfaceState, SiGyl.Models.Areas.Runtime, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
						  	"underlyingType": "Int32",
						  	"member": [
							  {
							  	"name": "None",
							  	"value": "0"
							  },
							  {
							  	"name": "Error",
							  	"value": "1"
							  },
							  {
							  	"name": "AllocatingBatch",
							  	"value": "2"
							  },
							  {
							  	"name": "DeallocatingBatch",
							  	"value": "3"
							  },
							  {
							  	"name": "DownloadOperationIndex",
							  	"value": "4"
							  },
							  {
							  	"name": "DownloadingOperationIndex",
							  	"value": "5"
							  },
							  {
							  	"name": "SetFormulaeActive",
							  	"value": "6"
							  },
							  {
							  	"name": "UploadOperationIndex",
							  	"value": "7"
							  },
							  {
							  	"name": "DownloadingParameters",
							  	"value": "8"
							  },
							  {
							  	"name": "DownloadParameters",
							  	"value": "9"
							  },
							  {
							  	"name": "UploadingReports",
							  	"value": "10"
							  },
							  {
							  	"name": "UploadReports",
							  	"value": "11"
							  },
							  {
							  	"name": "CompletingStep",
							  	"value": "12"
							  }
						  	]
						  },
						  {
						  	"name": "UnitInterfaceError",
						  	"isFlags": "false",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.Runtime.Equipment.UnitInterfaceError, SiGyl.Models.Areas.Runtime, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
						  	"underlyingType": "Int32",
						  	"member": [
							  {
							  	"name": "None",
							  	"value": "0"
							  },
							  {
							  	"name": "DownloadOperationIndex",
							  	"value": "1"
							  },
							  {
							  	"name": "DownloadParameters",
							  	"value": "2"
							  },
							  {
							  	"name": "UploadReports",
							  	"value": "3"
							  }
						  	]
						  },
						  {
						  	"name": "UnitNodeState",
						  	"isFlags": "false",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.Runtime.Equipment.Nodes.UnitNodeState, SiGyl.Models.Areas.Runtime, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
						  	"underlyingType": "Int32",
						  	"member": [
							  {
							  	"name": "Inactive",
							  	"value": "0"
							  },
							  {
							  	"name": "Downloading",
							  	"value": "1"
							  },
							  {
							  	"name": "Download",
							  	"value": "2"
							  },
							  {
							  	"name": "Downloaded",
							  	"value": "3"
							  },
							  {
							  	"name": "Active",
							  	"value": "4"
							  },
							  {
							  	"name": "Uploading",
							  	"value": "5"
							  },
							  {
							  	"name": "Upload",
							  	"value": "6"
							  },
							  {
							  	"name": "Uploaded",
							  	"value": "7"
							  },
							  {
							  	"name": "Monitor",
							  	"value": "8"
							  },
							  {
							  	"name": "Error",
							  	"value": "9"
							  },
							  {
							  	"name": "Retrying",
							  	"value": "10"
							  },
							  {
							  	"name": "ResettingError",
							  	"value": "11"
							  }
						  	]
						  },
						  {
						  	"name": "UnitNodeError",
						  	"isFlags": "false",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.Runtime.Equipment.Nodes.UnitNodeError, SiGyl.Models.Areas.Runtime, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
						  	"underlyingType": "Int32",
						  	"member": [
							  {
							  	"name": "None",
							  	"value": "0"
							  },
							  {
							  	"name": "Download",
							  	"value": "1"
							  },
							  {
							  	"name": "Upload",
							  	"value": "2"
							  }
						  	]
						  },
						  {
						  	"name": "StepState",
						  	"isFlags": "false",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.Runtime.Batches.StepState, SiGyl.Models.Areas.Runtime, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
						  	"underlyingType": "Int32",
						  	"member": [
							  {
							  	"name": "Ready",
							  	"value": "0"
							  },
							  {
							  	"name": "Creating",
							  	"value": "1"
							  },
							  {
							  	"name": "Created",
							  	"value": "2"
							  },
							  {
							  	"name": "Started",
							  	"value": "3"
							  },
							  {
							  	"name": "Active",
							  	"value": "4"
							  },
							  {
							  	"name": "SetFormulaeActive",
							  	"value": "5"
							  },
							  {
							  	"name": "FormulaeActive",
							  	"value": "6"
							  },
							  {
							  	"name": "Completing",
							  	"value": "7"
							  },
							  {
							  	"name": "Complete",
							  	"value": "8"
							  },
							  {
							  	"name": "Deleting",
							  	"value": "9"
							  },
							  {
							  	"name": "Deleted",
							  	"value": "10"
							  },
							  {
							  	"name": "Aborting",
							  	"value": "11"
							  },
							  {
							  	"name": "Aborted",
							  	"value": "12"
							  },
							  {
							  	"name": "AbortingComplete",
							  	"value": "13"
							  },
							  {
							  	"name": "AbortedComplete",
							  	"value": "14"
							  },
							  {
							  	"name": "Resetting",
							  	"value": "15"
							  }
						  	]
						  },
						  {
						  	"name": "StepFormulaState",
						  	"isFlags": "false",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.Runtime.Batches.Formulae.StepFormulaState, SiGyl.Models.Areas.Runtime, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
						  	"underlyingType": "Int32",
						  	"member": [
							  {
							  	"name": "Creating",
							  	"value": "0"
							  },
							  {
							  	"name": "Inactive",
							  	"value": "1"
							  },
							  {
							  	"name": "Download",
							  	"value": "2"
							  },
							  {
							  	"name": "Downloading",
							  	"value": "3"
							  },
							  {
							  	"name": "Downloaded",
							  	"value": "4"
							  },
							  {
							  	"name": "Active",
							  	"value": "5"
							  },
							  {
							  	"name": "Monitoring",
							  	"value": "6"
							  },
							  {
							  	"name": "Monitor",
							  	"value": "7"
							  },
							  {
							  	"name": "Completing",
							  	"value": "8"
							  },
							  {
							  	"name": "Complete",
							  	"value": "9"
							  },
							  {
							  	"name": "Error",
							  	"value": "10"
							  },
							  {
							  	"name": "ResettingError",
							  	"value": "11"
							  },
							  {
							  	"name": "Retrying",
							  	"value": "12"
							  },
							  {
							  	"name": "Editing",
							  	"value": "13"
							  },
							  {
							  	"name": "Deleted",
							  	"value": "14"
							  }
						  	]
						  },
						  {
						  	"name": "StepFormulaError",
						  	"isFlags": "false",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.Runtime.Batches.Formulae.StepFormulaError, SiGyl.Models.Areas.Runtime, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
						  	"underlyingType": "Int32",
						  	"member": [
							  {
							  	"name": "None",
							  	"value": "0"
							  },
							  {
							  	"name": "Download",
							  	"value": "1"
							  }
						  	]
						  },
						  {
						  	"name": "UnitProcedureState",
						  	"isFlags": "false",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.Runtime.Batches.UnitProcedureState, SiGyl.Models.Areas.Runtime, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
						  	"underlyingType": "Int32",
						  	"member": [
							  {
							  	"name": "Ready",
							  	"value": "0"
							  },
							  {
							  	"name": "Starting",
							  	"value": "1"
							  },
							  {
							  	"name": "Active",
							  	"value": "2"
							  },
							  {
							  	"name": "Completing",
							  	"value": "3"
							  },
							  {
							  	"name": "Complete",
							  	"value": "4"
							  },
							  {
							  	"name": "Delete",
							  	"value": "5"
							  },
							  {
							  	"name": "Deleting",
							  	"value": "6"
							  },
							  {
							  	"name": "Deleted",
							  	"value": "7"
							  }
						  	]
						  },
						  {
						  	"name": "UnitProcedureMode",
						  	"isFlags": "false",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.Runtime.Batches.UnitProcedureMode, SiGyl.Models.Areas.Runtime, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
						  	"underlyingType": "Int32",
						  	"member": [
							  {
							  	"name": "Auto",
							  	"value": "0"
							  },
							  {
							  	"name": "Manual",
							  	"value": "1"
							  }
						  	]
						  },
						  {
						  	"name": "DataType",
						  	"isFlags": "false",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.Configuration.Database.DataType, SiGyl.Models.Areas.Configuration, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
						  	"underlyingType": "Int32",
						  	"member": [
							  {
							  	"name": "String",
							  	"value": "0"
							  },
							  {
							  	"name": "Integer",
							  	"value": "1"
							  },
							  {
							  	"name": "Bool",
							  	"value": "2"
							  },
							  {
							  	"name": "Double",
							  	"value": "3"
							  },
							  {
							  	"name": "Unknown",
							  	"value": "4"
							  }
						  	]
						  }
						],
						"association": [
						  {
						  	"name": "RuntimeCommandClearance_Clearance",
						  	"end": [
							  {
							  	"role": "RuntimeCommandClearance_Clearance_Source",
							  	"type": "Edm.Self.RuntimeCommandClearance",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "RuntimeCommandClearance_Clearance_Target",
							  	"type": "Edm.Self.RuntimeClearance",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "RuntimeCommandClearance_Clearance_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "RuntimeCommandClearance_Clearance_Source",
						  			"propertyRef": {
						  				"name": "ClearanceId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "CommandCommand_CommandTemplate",
						  	"end": [
							  {
							  	"role": "CommandCommand_CommandTemplate_Source",
							  	"type": "Edm.Self.CommandCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "CommandCommand_CommandTemplate_Target",
							  	"type": "Edm.Self.RuntimeCommandTemplate",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "CommandCommand_CommandTemplate_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "CommandCommand_CommandTemplate_Source",
						  			"propertyRef": {
						  				"name": "CommandTemplateId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "CommandCommand_Parent",
						  	"end": [
							  {
							  	"role": "CommandCommand_Parent_Source",
							  	"type": "Edm.Self.CommandCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "CommandCommand_Parent_Target",
							  	"type": "Edm.Self.RuntimeCommand",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "CommandCommand_Parent_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "CommandCommand_Parent_Source",
						  			"propertyRef": {
						  				"name": "ParentId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "RuntimeCommandClearance_Command",
						  	"end": [
							  {
							  	"role": "RuntimeCommandClearance_Command_Source",
							  	"type": "Edm.Self.RuntimeCommandClearance",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "RuntimeCommandClearance_Command_Target",
							  	"type": "Edm.Self.RuntimeCommand",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "RuntimeCommandClearance_Command_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "RuntimeCommandClearance_Command_Source",
						  			"propertyRef": {
						  				"name": "CommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "CommandClearanceCommand_CommandTemplate",
						  	"end": [
							  {
							  	"role": "CommandClearanceCommand_CommandTemplate_Target",
							  	"type": "Edm.Self.RuntimeCommandTemplate",
							  	"multiplicity": "1"
							  },
							  {
							  	"role": "CommandClearanceCommand_CommandTemplate_Source",
							  	"type": "Edm.Self.CommandClearanceCommand",
							  	"multiplicity": "1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "CommandClearanceCommand_CommandTemplate_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "CommandClearanceCommand_CommandTemplate_Source",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "CommandClearanceCommand_Parent",
						  	"end": [
							  {
							  	"role": "CommandClearanceCommand_Parent_Source",
							  	"type": "Edm.Self.CommandClearanceCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "CommandClearanceCommand_Parent_Target",
							  	"type": "Edm.Self.RuntimeCommandClearance",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "CommandClearanceCommand_Parent_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "CommandClearanceCommand_Parent_Source",
						  			"propertyRef": {
						  				"name": "ParentId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "AlarmSeverityCommand_CommandTemplate",
						  	"end": [
							  {
							  	"role": "AlarmSeverityCommand_CommandTemplate_Source",
							  	"type": "Edm.Self.AlarmSeverityCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "AlarmSeverityCommand_CommandTemplate_Target",
							  	"type": "Edm.Self.RuntimeCommandTemplate",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "AlarmSeverityCommand_CommandTemplate_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "AlarmSeverityCommand_CommandTemplate_Source",
						  			"propertyRef": {
						  				"name": "CommandTemplateId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "AlarmSeverityCommand_Parent",
						  	"end": [
							  {
							  	"role": "AlarmSeverityCommand_Parent_Source",
							  	"type": "Edm.Self.AlarmSeverityCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "AlarmSeverityCommand_Parent_Target",
							  	"type": "Edm.Self.RuntimeAlarmSeverity",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "AlarmSeverityCommand_Parent_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "AlarmSeverityCommand_Parent_Source",
						  			"propertyRef": {
						  				"name": "ParentId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "RuntimeSite_AlarmSeverities",
						  	"end": [
							  {
							  	"role": "RuntimeSite_AlarmSeverities_Source",
							  	"type": "Edm.Self.RuntimeSite",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  },
							  {
							  	"role": "RuntimeSite_AlarmSeverities_Target",
							  	"type": "Edm.Self.RuntimeAlarmSeverity",
							  	"multiplicity": "*"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "RuntimeSite_AlarmSeverities_Source",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "RuntimeSite_AlarmSeverities_Target",
						  			"propertyRef": {
						  				"name": "SiteId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "RuntimeSite_Clearances",
						  	"end": [
							  {
							  	"role": "RuntimeSite_Clearances_Source",
							  	"type": "Edm.Self.RuntimeSite",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  },
							  {
							  	"role": "RuntimeSite_Clearances_Target",
							  	"type": "Edm.Self.RuntimeClearance",
							  	"multiplicity": "*"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "RuntimeSite_Clearances_Source",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "RuntimeSite_Clearances_Target",
						  			"propertyRef": {
						  				"name": "SiteId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "SiteCommand_CommandTemplate",
						  	"end": [
							  {
							  	"role": "SiteCommand_CommandTemplate_Source",
							  	"type": "Edm.Self.SiteCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "SiteCommand_CommandTemplate_Target",
							  	"type": "Edm.Self.RuntimeCommandTemplate",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "SiteCommand_CommandTemplate_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "SiteCommand_CommandTemplate_Source",
						  			"propertyRef": {
						  				"name": "CommandTemplateId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "SiteCommand_Parent",
						  	"end": [
							  {
							  	"role": "SiteCommand_Parent_Source",
							  	"type": "Edm.Self.SiteCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "SiteCommand_Parent_Target",
							  	"type": "Edm.Self.RuntimeSite",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "SiteCommand_Parent_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "SiteCommand_Parent_Source",
						  			"propertyRef": {
						  				"name": "ParentId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "DeviceCommand_CommandTemplate",
						  	"end": [
							  {
							  	"role": "DeviceCommand_CommandTemplate_Source",
							  	"type": "Edm.Self.DeviceCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "DeviceCommand_CommandTemplate_Target",
							  	"type": "Edm.Self.RuntimeCommandTemplate",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "DeviceCommand_CommandTemplate_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "DeviceCommand_CommandTemplate_Source",
						  			"propertyRef": {
						  				"name": "CommandTemplateId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "DeviceCommand_Parent",
						  	"end": [
							  {
							  	"role": "DeviceCommand_Parent_Source",
							  	"type": "Edm.Self.DeviceCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "DeviceCommand_Parent_Target",
							  	"type": "Edm.Self.RuntimeDevice",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "DeviceCommand_Parent_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "DeviceCommand_Parent_Source",
						  			"propertyRef": {
						  				"name": "ParentId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "DeviceDisplayCommand_CommandTemplate",
						  	"end": [
							  {
							  	"role": "DeviceDisplayCommand_CommandTemplate_Source",
							  	"type": "Edm.Self.DeviceDisplayCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "DeviceDisplayCommand_CommandTemplate_Target",
							  	"type": "Edm.Self.RuntimeCommandTemplate",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "DeviceDisplayCommand_CommandTemplate_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "DeviceDisplayCommand_CommandTemplate_Source",
						  			"propertyRef": {
						  				"name": "CommandTemplateId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "DeviceDisplayCommand_Parent",
						  	"end": [
							  {
							  	"role": "DeviceDisplayCommand_Parent_Source",
							  	"type": "Edm.Self.DeviceDisplayCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "DeviceDisplayCommand_Parent_Target",
							  	"type": "Edm.Self.RuntimeDeviceDisplay",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "DeviceDisplayCommand_Parent_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "DeviceDisplayCommand_Parent_Source",
						  			"propertyRef": {
						  				"name": "ParentId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "RuntimeDeviceDisplay_Device",
						  	"end": [
							  {
							  	"role": "RuntimeDeviceDisplay_Device_Source",
							  	"type": "Edm.Self.RuntimeDeviceDisplay",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "RuntimeDeviceDisplay_Device_Target",
							  	"type": "Edm.Self.RuntimeDevice",
							  	"multiplicity": "1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "RuntimeDeviceDisplay_Device_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "RuntimeDeviceDisplay_Device_Source",
						  			"propertyRef": {
						  				"name": "DeviceId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "DeviceInstanceCommand_CommandTemplate",
						  	"end": [
							  {
							  	"role": "DeviceInstanceCommand_CommandTemplate_Source",
							  	"type": "Edm.Self.DeviceInstanceCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "DeviceInstanceCommand_CommandTemplate_Target",
							  	"type": "Edm.Self.RuntimeCommandTemplate",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "DeviceInstanceCommand_CommandTemplate_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "DeviceInstanceCommand_CommandTemplate_Source",
						  			"propertyRef": {
						  				"name": "CommandTemplateId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "DeviceInstanceCommand_Parent",
						  	"end": [
							  {
							  	"role": "DeviceInstanceCommand_Parent_Source",
							  	"type": "Edm.Self.DeviceInstanceCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "DeviceInstanceCommand_Parent_Target",
							  	"type": "Edm.Self.RuntimeDeviceInstance",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "DeviceInstanceCommand_Parent_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "DeviceInstanceCommand_Parent_Source",
						  			"propertyRef": {
						  				"name": "ParentId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "RuntimeDeviceInstance_Device",
						  	"end": [
							  {
							  	"role": "RuntimeDeviceInstance_Device_Source",
							  	"type": "Edm.Self.RuntimeDeviceInstance",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "RuntimeDeviceInstance_Device_Target",
							  	"type": "Edm.Self.RuntimeDevice",
							  	"multiplicity": "1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "RuntimeDeviceInstance_Device_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "RuntimeDeviceInstance_Device_Source",
						  			"propertyRef": {
						  				"name": "DeviceId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "DeviceInstanceDisplayCommand_CommandTemplate",
						  	"end": [
							  {
							  	"role": "DeviceInstanceDisplayCommand_CommandTemplate_Source",
							  	"type": "Edm.Self.DeviceInstanceDisplayCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "DeviceInstanceDisplayCommand_CommandTemplate_Target",
							  	"type": "Edm.Self.RuntimeCommandTemplate",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "DeviceInstanceDisplayCommand_CommandTemplate_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "DeviceInstanceDisplayCommand_CommandTemplate_Source",
						  			"propertyRef": {
						  				"name": "CommandTemplateId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "DeviceInstanceDisplayCommand_Parent",
						  	"end": [
							  {
							  	"role": "DeviceInstanceDisplayCommand_Parent_Source",
							  	"type": "Edm.Self.DeviceInstanceDisplayCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "DeviceInstanceDisplayCommand_Parent_Target",
							  	"type": "Edm.Self.RuntimeDeviceInstanceDisplay",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "DeviceInstanceDisplayCommand_Parent_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "DeviceInstanceDisplayCommand_Parent_Source",
						  			"propertyRef": {
						  				"name": "ParentId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "RuntimeDeviceInstanceDisplay_DeviceDisplay",
						  	"end": [
							  {
							  	"role": "RuntimeDeviceInstanceDisplay_DeviceDisplay_Source",
							  	"type": "Edm.Self.RuntimeDeviceInstanceDisplay",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "RuntimeDeviceInstanceDisplay_DeviceDisplay_Target",
							  	"type": "Edm.Self.RuntimeDeviceDisplay",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "RuntimeDeviceInstanceDisplay_DeviceDisplay_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "RuntimeDeviceInstanceDisplay_DeviceDisplay_Source",
						  			"propertyRef": {
						  				"name": "DeviceDisplayId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "RuntimeDeviceInstanceDisplay_DeviceInstance",
						  	"end": [
							  {
							  	"role": "RuntimeDeviceInstanceDisplay_DeviceInstance_Source",
							  	"type": "Edm.Self.RuntimeDeviceInstanceDisplay",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "RuntimeDeviceInstanceDisplay_DeviceInstance_Target",
							  	"type": "Edm.Self.RuntimeDeviceInstance",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "RuntimeDeviceInstanceDisplay_DeviceInstance_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "RuntimeDeviceInstanceDisplay_DeviceInstance_Source",
						  			"propertyRef": {
						  				"name": "DeviceInstanceId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "DeviceInstanceTagCommand_CommandTemplate",
						  	"end": [
							  {
							  	"role": "DeviceInstanceTagCommand_CommandTemplate_Source",
							  	"type": "Edm.Self.DeviceInstanceTagCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "DeviceInstanceTagCommand_CommandTemplate_Target",
							  	"type": "Edm.Self.RuntimeCommandTemplate",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "DeviceInstanceTagCommand_CommandTemplate_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "DeviceInstanceTagCommand_CommandTemplate_Source",
						  			"propertyRef": {
						  				"name": "CommandTemplateId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "DeviceInstanceTagCommand_Parent",
						  	"end": [
							  {
							  	"role": "DeviceInstanceTagCommand_Parent_Source",
							  	"type": "Edm.Self.DeviceInstanceTagCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "DeviceInstanceTagCommand_Parent_Target",
							  	"type": "Edm.Self.RuntimeDeviceInstanceTag",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "DeviceInstanceTagCommand_Parent_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "DeviceInstanceTagCommand_Parent_Source",
						  			"propertyRef": {
						  				"name": "ParentId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "RuntimeDeviceInstanceTag_DeviceInstance",
						  	"end": [
							  {
							  	"role": "RuntimeDeviceInstanceTag_DeviceInstance_Source",
							  	"type": "Edm.Self.RuntimeDeviceInstanceTag",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "RuntimeDeviceInstanceTag_DeviceInstance_Target",
							  	"type": "Edm.Self.RuntimeDeviceInstance",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "RuntimeDeviceInstanceTag_DeviceInstance_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "RuntimeDeviceInstanceTag_DeviceInstance_Source",
						  			"propertyRef": {
						  				"name": "DeviceInstanceId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "RuntimeDeviceInstance_Unit",
						  	"end": [
							  {
							  	"role": "RuntimeDeviceInstance_Unit_Source",
							  	"type": "Edm.Self.RuntimeDeviceInstance",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "RuntimeDeviceInstance_Unit_Target",
							  	"type": "Edm.Self.RuntimeUnit",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "RuntimeDeviceInstance_Unit_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "RuntimeDeviceInstance_Unit_Source",
						  			"propertyRef": {
						  				"name": "UnitId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "RuntimeDevice_Site",
						  	"end": [
							  {
							  	"role": "RuntimeDevice_Site_Source",
							  	"type": "Edm.Self.RuntimeDevice",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "RuntimeDevice_Site_Target",
							  	"type": "Edm.Self.RuntimeSite",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "RuntimeDevice_Site_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "RuntimeDevice_Site_Source",
						  			"propertyRef": {
						  				"name": "SiteId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "ApplicationCommand_CommandTemplate",
						  	"end": [
							  {
							  	"role": "ApplicationCommand_CommandTemplate_Source",
							  	"type": "Edm.Self.ApplicationCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "ApplicationCommand_CommandTemplate_Target",
							  	"type": "Edm.Self.RuntimeCommandTemplate",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "ApplicationCommand_CommandTemplate_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "ApplicationCommand_CommandTemplate_Source",
						  			"propertyRef": {
						  				"name": "CommandTemplateId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "ApplicationCommand_Parent",
						  	"end": [
							  {
							  	"role": "ApplicationCommand_Parent_Source",
							  	"type": "Edm.Self.ApplicationCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "ApplicationCommand_Parent_Target",
							  	"type": "Edm.Self.RuntimeApplication",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "ApplicationCommand_Parent_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "ApplicationCommand_Parent_Source",
						  			"propertyRef": {
						  				"name": "ParentId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "RuntimeApplication_Enterprises",
						  	"end": [
							  {
							  	"role": "RuntimeApplication_Enterprises_Source",
							  	"type": "Edm.Self.RuntimeApplication",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  },
							  {
							  	"role": "RuntimeApplication_Enterprises_Target",
							  	"type": "Edm.Self.RuntimeEnterprise",
							  	"multiplicity": "*"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "RuntimeApplication_Enterprises_Source",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "RuntimeApplication_Enterprises_Target",
						  			"propertyRef": {
						  				"name": "ApplicationId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "EnterpriseCommand_CommandTemplate",
						  	"end": [
							  {
							  	"role": "EnterpriseCommand_CommandTemplate_Source",
							  	"type": "Edm.Self.EnterpriseCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "EnterpriseCommand_CommandTemplate_Target",
							  	"type": "Edm.Self.RuntimeCommandTemplate",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "EnterpriseCommand_CommandTemplate_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "EnterpriseCommand_CommandTemplate_Source",
						  			"propertyRef": {
						  				"name": "CommandTemplateId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "EnterpriseCommand_Parent",
						  	"end": [
							  {
							  	"role": "EnterpriseCommand_Parent_Source",
							  	"type": "Edm.Self.EnterpriseCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "EnterpriseCommand_Parent_Target",
							  	"type": "Edm.Self.RuntimeEnterprise",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "EnterpriseCommand_Parent_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "EnterpriseCommand_Parent_Source",
						  			"propertyRef": {
						  				"name": "ParentId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "RuntimeEnterprise_Sites",
						  	"end": [
							  {
							  	"role": "RuntimeEnterprise_Sites_Source",
							  	"type": "Edm.Self.RuntimeEnterprise",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  },
							  {
							  	"role": "RuntimeEnterprise_Sites_Target",
							  	"type": "Edm.Self.RuntimeSite",
							  	"multiplicity": "*"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "RuntimeEnterprise_Sites_Source",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "RuntimeEnterprise_Sites_Target",
						  			"propertyRef": {
						  				"name": "EnterpriseId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "RuntimeSite_Zones",
						  	"end": [
							  {
							  	"role": "RuntimeSite_Zones_Source",
							  	"type": "Edm.Self.RuntimeSite",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  },
							  {
							  	"role": "RuntimeSite_Zones_Target",
							  	"type": "Edm.Self.RuntimeZone",
							  	"multiplicity": "*"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "RuntimeSite_Zones_Source",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "RuntimeSite_Zones_Target",
						  			"propertyRef": {
						  				"name": "SiteId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "RuntimeAlarm_AlarmSeverity",
						  	"end": [
							  {
							  	"role": "RuntimeAlarm_AlarmSeverity_Source",
							  	"type": "Edm.Self.RuntimeAlarm",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "RuntimeAlarm_AlarmSeverity_Target",
							  	"type": "Edm.Self.RuntimeAlarmSeverity",
							  	"multiplicity": "1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "RuntimeAlarm_AlarmSeverity_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "RuntimeAlarm_AlarmSeverity_Source",
						  			"propertyRef": {
						  				"name": "AlarmSeverityId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "RuntimeAlarm_Commands",
						  	"end": [
							  {
							  	"role": "RuntimeAlarm_Commands_Source",
							  	"type": "Edm.Self.RuntimeAlarm",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  },
							  {
							  	"role": "RuntimeAlarm_Commands_Target",
							  	"type": "Edm.Self.AlarmCommand",
							  	"multiplicity": "*"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "RuntimeAlarm_Commands_Source",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "RuntimeAlarm_Commands_Target",
						  			"propertyRef": {
						  				"name": "ParentId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "RuntimeAlarm_Unit",
						  	"end": [
							  {
							  	"role": "RuntimeAlarm_Unit_Source",
							  	"type": "Edm.Self.RuntimeAlarm",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "RuntimeAlarm_Unit_Target",
							  	"type": "Edm.Self.RuntimeUnit",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "RuntimeAlarm_Unit_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "RuntimeAlarm_Unit_Source",
						  			"propertyRef": {
						  				"name": "UnitId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "RuntimeAlarmValue_Alarm",
						  	"end": [
							  {
							  	"role": "RuntimeAlarmValue_Alarm_Source",
							  	"type": "Edm.Self.RuntimeAlarmValue",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "RuntimeAlarmValue_Alarm_Target",
							  	"type": "Edm.Self.RuntimeAlarm",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "RuntimeAlarmValue_Alarm_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "RuntimeAlarmValue_Alarm_Source",
						  			"propertyRef": {
						  				"name": "AlarmId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "AlarmValueCommand_CommandTemplate",
						  	"end": [
							  {
							  	"role": "AlarmValueCommand_CommandTemplate_Source",
							  	"type": "Edm.Self.AlarmValueCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "AlarmValueCommand_CommandTemplate_Target",
							  	"type": "Edm.Self.RuntimeCommandTemplate",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "AlarmValueCommand_CommandTemplate_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "AlarmValueCommand_CommandTemplate_Source",
						  			"propertyRef": {
						  				"name": "CommandTemplateId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "AlarmValueCommand_Parent",
						  	"end": [
							  {
							  	"role": "AlarmValueCommand_Parent_Source",
							  	"type": "Edm.Self.AlarmValueCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "AlarmValueCommand_Parent_Target",
							  	"type": "Edm.Self.RuntimeAlarmValue",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "AlarmValueCommand_Parent_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "AlarmValueCommand_Parent_Source",
						  			"propertyRef": {
						  				"name": "ParentId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "RuntimeUnit_AllocatedBatch",
						  	"end": [
							  {
							  	"role": "RuntimeUnit_AllocatedBatch_Source",
							  	"type": "Edm.Self.RuntimeUnit",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "RuntimeUnit_AllocatedBatch_Target",
							  	"type": "Edm.Self.Batch",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "RuntimeUnit_AllocatedBatch_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "RuntimeUnit_AllocatedBatch_Source",
						  			"propertyRef": {
						  				"name": "AllocatedBatchId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "BoolStepFormulaCommand_CommandTemplate",
						  	"end": [
							  {
							  	"role": "BoolStepFormulaCommand_CommandTemplate_Source",
							  	"type": "Edm.Self.BoolStepFormulaCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "BoolStepFormulaCommand_CommandTemplate_Target",
							  	"type": "Edm.Self.RuntimeCommandTemplate",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "BoolStepFormulaCommand_CommandTemplate_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "BoolStepFormulaCommand_CommandTemplate_Source",
						  			"propertyRef": {
						  				"name": "CommandTemplateId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "BoolStepFormulaCommand_Parent",
						  	"end": [
							  {
							  	"role": "BoolStepFormulaCommand_Parent_Source",
							  	"type": "Edm.Self.BoolStepFormulaCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "BoolStepFormulaCommand_Parent_Target",
							  	"type": "Edm.Self.BoolStepFormula",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "BoolStepFormulaCommand_Parent_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "BoolStepFormulaCommand_Parent_Source",
						  			"propertyRef": {
						  				"name": "ParentId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "BoolParameterCommand_CommandTemplate",
						  	"end": [
							  {
							  	"role": "BoolParameterCommand_CommandTemplate_Source",
							  	"type": "Edm.Self.BoolParameterCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "BoolParameterCommand_CommandTemplate_Target",
							  	"type": "Edm.Self.RuntimeCommandTemplate",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "BoolParameterCommand_CommandTemplate_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "BoolParameterCommand_CommandTemplate_Source",
						  			"propertyRef": {
						  				"name": "CommandTemplateId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "BoolParameterCommand_Parent",
						  	"end": [
							  {
							  	"role": "BoolParameterCommand_Parent_Source",
							  	"type": "Edm.Self.BoolParameterCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "BoolParameterCommand_Parent_Target",
							  	"type": "Edm.Self.RuntimeBoolParameter",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "BoolParameterCommand_Parent_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "BoolParameterCommand_Parent_Source",
						  			"propertyRef": {
						  				"name": "ParentId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "BoolEnumerationCommand_CommandTemplate",
						  	"end": [
							  {
							  	"role": "BoolEnumerationCommand_CommandTemplate_Source",
							  	"type": "Edm.Self.BoolEnumerationCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "BoolEnumerationCommand_CommandTemplate_Target",
							  	"type": "Edm.Self.RuntimeCommandTemplate",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "BoolEnumerationCommand_CommandTemplate_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "BoolEnumerationCommand_CommandTemplate_Source",
						  			"propertyRef": {
						  				"name": "CommandTemplateId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "BoolEnumerationCommand_Parent",
						  	"end": [
							  {
							  	"role": "BoolEnumerationCommand_Parent_Source",
							  	"type": "Edm.Self.BoolEnumerationCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "BoolEnumerationCommand_Parent_Target",
							  	"type": "Edm.Self.RuntimeBoolEnumeration",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "BoolEnumerationCommand_Parent_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "BoolEnumerationCommand_Parent_Source",
						  			"propertyRef": {
						  				"name": "ParentId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "RuntimeBoolEnumeration_Parameter",
						  	"end": [
							  {
							  	"role": "RuntimeBoolEnumeration_Parameter_Source",
							  	"type": "Edm.Self.RuntimeBoolEnumeration",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "RuntimeBoolEnumeration_Parameter_Target",
							  	"type": "Edm.Self.RuntimeBoolParameter",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "RuntimeBoolEnumeration_Parameter_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "RuntimeBoolEnumeration_Parameter_Source",
						  			"propertyRef": {
						  				"name": "ParameterId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "RuntimeOperation_BoolParameters",
						  	"end": [
							  {
							  	"role": "RuntimeOperation_BoolParameters_Source",
							  	"type": "Edm.Self.RuntimeOperation",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  },
							  {
							  	"role": "RuntimeOperation_BoolParameters_Target",
							  	"type": "Edm.Self.RuntimeBoolParameter",
							  	"multiplicity": "*"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "RuntimeOperation_BoolParameters_Source",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "RuntimeOperation_BoolParameters_Target",
						  			"propertyRef": {
						  				"name": "OperationId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "OperationCommand_CommandTemplate",
						  	"end": [
							  {
							  	"role": "OperationCommand_CommandTemplate_Source",
							  	"type": "Edm.Self.OperationCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "OperationCommand_CommandTemplate_Target",
							  	"type": "Edm.Self.RuntimeCommandTemplate",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "OperationCommand_CommandTemplate_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "OperationCommand_CommandTemplate_Source",
						  			"propertyRef": {
						  				"name": "CommandTemplateId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "OperationCommand_Parent",
						  	"end": [
							  {
							  	"role": "OperationCommand_Parent_Source",
							  	"type": "Edm.Self.OperationCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "OperationCommand_Parent_Target",
							  	"type": "Edm.Self.RuntimeOperation",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "OperationCommand_Parent_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "OperationCommand_Parent_Source",
						  			"propertyRef": {
						  				"name": "ParentId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "DoubleParameterCommand_CommandTemplate",
						  	"end": [
							  {
							  	"role": "DoubleParameterCommand_CommandTemplate_Source",
							  	"type": "Edm.Self.DoubleParameterCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "DoubleParameterCommand_CommandTemplate_Target",
							  	"type": "Edm.Self.RuntimeCommandTemplate",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "DoubleParameterCommand_CommandTemplate_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "DoubleParameterCommand_CommandTemplate_Source",
						  			"propertyRef": {
						  				"name": "CommandTemplateId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "DoubleParameterCommand_Parent",
						  	"end": [
							  {
							  	"role": "DoubleParameterCommand_Parent_Source",
							  	"type": "Edm.Self.DoubleParameterCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "DoubleParameterCommand_Parent_Target",
							  	"type": "Edm.Self.RuntimeDoubleParameter",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "DoubleParameterCommand_Parent_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "DoubleParameterCommand_Parent_Source",
						  			"propertyRef": {
						  				"name": "ParentId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "RuntimeDoubleParameter_Operation",
						  	"end": [
							  {
							  	"role": "RuntimeDoubleParameter_Operation_Source",
							  	"type": "Edm.Self.RuntimeDoubleParameter",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "RuntimeDoubleParameter_Operation_Target",
							  	"type": "Edm.Self.RuntimeOperation",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "RuntimeDoubleParameter_Operation_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "RuntimeDoubleParameter_Operation_Source",
						  			"propertyRef": {
						  				"name": "OperationId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "DoubleStepFormulaCommand_CommandTemplate",
						  	"end": [
							  {
							  	"role": "DoubleStepFormulaCommand_CommandTemplate_Source",
							  	"type": "Edm.Self.DoubleStepFormulaCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "DoubleStepFormulaCommand_CommandTemplate_Target",
							  	"type": "Edm.Self.RuntimeCommandTemplate",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "DoubleStepFormulaCommand_CommandTemplate_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "DoubleStepFormulaCommand_CommandTemplate_Source",
						  			"propertyRef": {
						  				"name": "CommandTemplateId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "DoubleStepFormulaCommand_Parent",
						  	"end": [
							  {
							  	"role": "DoubleStepFormulaCommand_Parent_Source",
							  	"type": "Edm.Self.DoubleStepFormulaCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "DoubleStepFormulaCommand_Parent_Target",
							  	"type": "Edm.Self.DoubleStepFormula",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "DoubleStepFormulaCommand_Parent_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "DoubleStepFormulaCommand_Parent_Source",
						  			"propertyRef": {
						  				"name": "ParentId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "DoubleStepFormula_Parameter",
						  	"end": [
							  {
							  	"role": "DoubleStepFormula_Parameter_Source",
							  	"type": "Edm.Self.DoubleStepFormula",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "DoubleStepFormula_Parameter_Target",
							  	"type": "Edm.Self.RuntimeDoubleParameter",
							  	"multiplicity": "1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "DoubleStepFormula_Parameter_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "DoubleStepFormula_Parameter_Source",
						  			"propertyRef": {
						  				"name": "ParameterId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "DoubleStepFormula_Step",
						  	"end": [
							  {
							  	"role": "DoubleStepFormula_Step_Source",
							  	"type": "Edm.Self.DoubleStepFormula",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "DoubleStepFormula_Step_Target",
							  	"type": "Edm.Self.Step",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "DoubleStepFormula_Step_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "DoubleStepFormula_Step_Source",
						  			"propertyRef": {
						  				"name": "StepId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "IntegerParameterCommand_CommandTemplate",
						  	"end": [
							  {
							  	"role": "IntegerParameterCommand_CommandTemplate_Source",
							  	"type": "Edm.Self.IntegerParameterCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "IntegerParameterCommand_CommandTemplate_Target",
							  	"type": "Edm.Self.RuntimeCommandTemplate",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "IntegerParameterCommand_CommandTemplate_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "IntegerParameterCommand_CommandTemplate_Source",
						  			"propertyRef": {
						  				"name": "CommandTemplateId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "IntegerParameterCommand_Parent",
						  	"end": [
							  {
							  	"role": "IntegerParameterCommand_Parent_Source",
							  	"type": "Edm.Self.IntegerParameterCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "IntegerParameterCommand_Parent_Target",
							  	"type": "Edm.Self.RuntimeIntegerParameter",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "IntegerParameterCommand_Parent_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "IntegerParameterCommand_Parent_Source",
						  			"propertyRef": {
						  				"name": "ParentId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "IntegerEnumerationCommand_CommandTemplate",
						  	"end": [
							  {
							  	"role": "IntegerEnumerationCommand_CommandTemplate_Source",
							  	"type": "Edm.Self.IntegerEnumerationCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "IntegerEnumerationCommand_CommandTemplate_Target",
							  	"type": "Edm.Self.RuntimeCommandTemplate",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "IntegerEnumerationCommand_CommandTemplate_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "IntegerEnumerationCommand_CommandTemplate_Source",
						  			"propertyRef": {
						  				"name": "CommandTemplateId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "IntegerEnumerationCommand_Parent",
						  	"end": [
							  {
							  	"role": "IntegerEnumerationCommand_Parent_Source",
							  	"type": "Edm.Self.IntegerEnumerationCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "IntegerEnumerationCommand_Parent_Target",
							  	"type": "Edm.Self.RuntimeIntegerEnumeration",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "IntegerEnumerationCommand_Parent_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "IntegerEnumerationCommand_Parent_Source",
						  			"propertyRef": {
						  				"name": "ParentId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "RuntimeIntegerEnumeration_Parameter",
						  	"end": [
							  {
							  	"role": "RuntimeIntegerEnumeration_Parameter_Source",
							  	"type": "Edm.Self.RuntimeIntegerEnumeration",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "RuntimeIntegerEnumeration_Parameter_Target",
							  	"type": "Edm.Self.RuntimeIntegerParameter",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "RuntimeIntegerEnumeration_Parameter_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "RuntimeIntegerEnumeration_Parameter_Source",
						  			"propertyRef": {
						  				"name": "ParameterId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "RuntimeIntegerParameter_Operation",
						  	"end": [
							  {
							  	"role": "RuntimeIntegerParameter_Operation_Source",
							  	"type": "Edm.Self.RuntimeIntegerParameter",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "RuntimeIntegerParameter_Operation_Target",
							  	"type": "Edm.Self.RuntimeOperation",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "RuntimeIntegerParameter_Operation_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "RuntimeIntegerParameter_Operation_Source",
						  			"propertyRef": {
						  				"name": "OperationId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "IntegerStepFormulaCommand_CommandTemplate",
						  	"end": [
							  {
							  	"role": "IntegerStepFormulaCommand_CommandTemplate_Source",
							  	"type": "Edm.Self.IntegerStepFormulaCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "IntegerStepFormulaCommand_CommandTemplate_Target",
							  	"type": "Edm.Self.RuntimeCommandTemplate",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "IntegerStepFormulaCommand_CommandTemplate_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "IntegerStepFormulaCommand_CommandTemplate_Source",
						  			"propertyRef": {
						  				"name": "CommandTemplateId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "IntegerStepFormulaCommand_Parent",
						  	"end": [
							  {
							  	"role": "IntegerStepFormulaCommand_Parent_Source",
							  	"type": "Edm.Self.IntegerStepFormulaCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "IntegerStepFormulaCommand_Parent_Target",
							  	"type": "Edm.Self.IntegerStepFormula",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "IntegerStepFormulaCommand_Parent_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "IntegerStepFormulaCommand_Parent_Source",
						  			"propertyRef": {
						  				"name": "ParentId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "IntegerStepFormula_Parameter",
						  	"end": [
							  {
							  	"role": "IntegerStepFormula_Parameter_Source",
							  	"type": "Edm.Self.IntegerStepFormula",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "IntegerStepFormula_Parameter_Target",
							  	"type": "Edm.Self.RuntimeIntegerParameter",
							  	"multiplicity": "1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "IntegerStepFormula_Parameter_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "IntegerStepFormula_Parameter_Source",
						  			"propertyRef": {
						  				"name": "ParameterId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "IntegerStepFormula_Step",
						  	"end": [
							  {
							  	"role": "IntegerStepFormula_Step_Source",
							  	"type": "Edm.Self.IntegerStepFormula",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "IntegerStepFormula_Step_Target",
							  	"type": "Edm.Self.Step",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "IntegerStepFormula_Step_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "IntegerStepFormula_Step_Source",
						  			"propertyRef": {
						  				"name": "StepId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "ReportCommand_CommandTemplate",
						  	"end": [
							  {
							  	"role": "ReportCommand_CommandTemplate_Source",
							  	"type": "Edm.Self.ReportCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "ReportCommand_CommandTemplate_Target",
							  	"type": "Edm.Self.RuntimeCommandTemplate",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "ReportCommand_CommandTemplate_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "ReportCommand_CommandTemplate_Source",
						  			"propertyRef": {
						  				"name": "CommandTemplateId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "ReportCommand_Parent",
						  	"end": [
							  {
							  	"role": "ReportCommand_Parent_Source",
							  	"type": "Edm.Self.ReportCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "ReportCommand_Parent_Target",
							  	"type": "Edm.Self.RuntimeReport",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "ReportCommand_Parent_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "ReportCommand_Parent_Source",
						  			"propertyRef": {
						  				"name": "ParentId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "RuntimeReport_Operation",
						  	"end": [
							  {
							  	"role": "RuntimeReport_Operation_Source",
							  	"type": "Edm.Self.RuntimeReport",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "RuntimeReport_Operation_Target",
							  	"type": "Edm.Self.RuntimeOperation",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "RuntimeReport_Operation_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "RuntimeReport_Operation_Source",
						  			"propertyRef": {
						  				"name": "OperationId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "StepReportCommand_CommandTemplate",
						  	"end": [
							  {
							  	"role": "StepReportCommand_CommandTemplate_Source",
							  	"type": "Edm.Self.StepReportCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "StepReportCommand_CommandTemplate_Target",
							  	"type": "Edm.Self.RuntimeCommandTemplate",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "StepReportCommand_CommandTemplate_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "StepReportCommand_CommandTemplate_Source",
						  			"propertyRef": {
						  				"name": "CommandTemplateId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "StepReportCommand_Parent",
						  	"end": [
							  {
							  	"role": "StepReportCommand_Parent_Source",
							  	"type": "Edm.Self.StepReportCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "StepReportCommand_Parent_Target",
							  	"type": "Edm.Self.StepReport",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "StepReportCommand_Parent_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "StepReportCommand_Parent_Source",
						  			"propertyRef": {
						  				"name": "ParentId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "StepReport_Parameter",
						  	"end": [
							  {
							  	"role": "StepReport_Parameter_Source",
							  	"type": "Edm.Self.StepReport",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "StepReport_Parameter_Target",
							  	"type": "Edm.Self.RuntimeReport",
							  	"multiplicity": "1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "StepReport_Parameter_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "StepReport_Parameter_Source",
						  			"propertyRef": {
						  				"name": "ParameterId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "StepReport_Step",
						  	"end": [
							  {
							  	"role": "StepReport_Step_Source",
							  	"type": "Edm.Self.StepReport",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "StepReport_Step_Target",
							  	"type": "Edm.Self.Step",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "StepReport_Step_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "StepReport_Step_Source",
						  			"propertyRef": {
						  				"name": "StepId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "StringParameterCommand_CommandTemplate",
						  	"end": [
							  {
							  	"role": "StringParameterCommand_CommandTemplate_Source",
							  	"type": "Edm.Self.StringParameterCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "StringParameterCommand_CommandTemplate_Target",
							  	"type": "Edm.Self.RuntimeCommandTemplate",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "StringParameterCommand_CommandTemplate_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "StringParameterCommand_CommandTemplate_Source",
						  			"propertyRef": {
						  				"name": "CommandTemplateId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "StringParameterCommand_Parent",
						  	"end": [
							  {
							  	"role": "StringParameterCommand_Parent_Source",
							  	"type": "Edm.Self.StringParameterCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "StringParameterCommand_Parent_Target",
							  	"type": "Edm.Self.RuntimeStringParameter",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "StringParameterCommand_Parent_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "StringParameterCommand_Parent_Source",
						  			"propertyRef": {
						  				"name": "ParentId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "RuntimeStringParameter_Operation",
						  	"end": [
							  {
							  	"role": "RuntimeStringParameter_Operation_Source",
							  	"type": "Edm.Self.RuntimeStringParameter",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "RuntimeStringParameter_Operation_Target",
							  	"type": "Edm.Self.RuntimeOperation",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "RuntimeStringParameter_Operation_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "RuntimeStringParameter_Operation_Source",
						  			"propertyRef": {
						  				"name": "OperationId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "StringStepFormulaCommand_CommandTemplate",
						  	"end": [
							  {
							  	"role": "StringStepFormulaCommand_CommandTemplate_Source",
							  	"type": "Edm.Self.StringStepFormulaCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "StringStepFormulaCommand_CommandTemplate_Target",
							  	"type": "Edm.Self.RuntimeCommandTemplate",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "StringStepFormulaCommand_CommandTemplate_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "StringStepFormulaCommand_CommandTemplate_Source",
						  			"propertyRef": {
						  				"name": "CommandTemplateId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "StringStepFormulaCommand_Parent",
						  	"end": [
							  {
							  	"role": "StringStepFormulaCommand_Parent_Source",
							  	"type": "Edm.Self.StringStepFormulaCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "StringStepFormulaCommand_Parent_Target",
							  	"type": "Edm.Self.StringStepFormula",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "StringStepFormulaCommand_Parent_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "StringStepFormulaCommand_Parent_Source",
						  			"propertyRef": {
						  				"name": "ParentId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "StringStepFormula_Parameter",
						  	"end": [
							  {
							  	"role": "StringStepFormula_Parameter_Source",
							  	"type": "Edm.Self.StringStepFormula",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "StringStepFormula_Parameter_Target",
							  	"type": "Edm.Self.RuntimeStringParameter",
							  	"multiplicity": "1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "StringStepFormula_Parameter_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "StringStepFormula_Parameter_Source",
						  			"propertyRef": {
						  				"name": "ParameterId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "StringStepFormula_Step",
						  	"end": [
							  {
							  	"role": "StringStepFormula_Step_Source",
							  	"type": "Edm.Self.StringStepFormula",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "StringStepFormula_Step_Target",
							  	"type": "Edm.Self.Step",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "StringStepFormula_Step_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "StringStepFormula_Step_Source",
						  			"propertyRef": {
						  				"name": "StepId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "RuntimeOperation_Unit",
						  	"end": [
							  {
							  	"role": "RuntimeOperation_Unit_Source",
							  	"type": "Edm.Self.RuntimeOperation",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "RuntimeOperation_Unit_Target",
							  	"type": "Edm.Self.RuntimeUnit",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "RuntimeOperation_Unit_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "RuntimeOperation_Unit_Source",
						  			"propertyRef": {
						  				"name": "UnitId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "BoolStepFormula_Parameter",
						  	"end": [
							  {
							  	"role": "BoolStepFormula_Parameter_Source",
							  	"type": "Edm.Self.BoolStepFormula",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "BoolStepFormula_Parameter_Target",
							  	"type": "Edm.Self.RuntimeBoolParameter",
							  	"multiplicity": "1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "BoolStepFormula_Parameter_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "BoolStepFormula_Parameter_Source",
						  			"propertyRef": {
						  				"name": "ParameterId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "BoolStepFormula_Step",
						  	"end": [
							  {
							  	"role": "BoolStepFormula_Step_Source",
							  	"type": "Edm.Self.BoolStepFormula",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "BoolStepFormula_Step_Target",
							  	"type": "Edm.Self.Step",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "BoolStepFormula_Step_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "BoolStepFormula_Step_Source",
						  			"propertyRef": {
						  				"name": "StepId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "StepCommand_CommandTemplate",
						  	"end": [
							  {
							  	"role": "StepCommand_CommandTemplate_Source",
							  	"type": "Edm.Self.StepCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "StepCommand_CommandTemplate_Target",
							  	"type": "Edm.Self.RuntimeCommandTemplate",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "StepCommand_CommandTemplate_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "StepCommand_CommandTemplate_Source",
						  			"propertyRef": {
						  				"name": "CommandTemplateId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "StepCommand_Parent",
						  	"end": [
							  {
							  	"role": "StepCommand_Parent_Source",
							  	"type": "Edm.Self.StepCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "StepCommand_Parent_Target",
							  	"type": "Edm.Self.Step",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "StepCommand_Parent_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "StepCommand_Parent_Source",
						  			"propertyRef": {
						  				"name": "ParentId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "Step_Operation",
						  	"end": [
							  {
							  	"role": "Step_Operation_Source",
							  	"type": "Edm.Self.Step",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "Step_Operation_Target",
							  	"type": "Edm.Self.RuntimeOperation",
							  	"multiplicity": "1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "Step_Operation_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "Step_Operation_Source",
						  			"propertyRef": {
						  				"name": "OperationId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "RuntimeUnitProcedure_AllocatedStep",
						  	"end": [
							  {
							  	"role": "RuntimeUnitProcedure_AllocatedStep_Source",
							  	"type": "Edm.Self.RuntimeUnitProcedure",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "RuntimeUnitProcedure_AllocatedStep_Target",
							  	"type": "Edm.Self.Step",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "RuntimeUnitProcedure_AllocatedStep_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "RuntimeUnitProcedure_AllocatedStep_Source",
						  			"propertyRef": {
						  				"name": "AllocatedStepId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "RuntimeUnitProcedure_Batch",
						  	"end": [
							  {
							  	"role": "RuntimeUnitProcedure_Batch_Source",
							  	"type": "Edm.Self.RuntimeUnitProcedure",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "RuntimeUnitProcedure_Batch_Target",
							  	"type": "Edm.Self.Batch",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "RuntimeUnitProcedure_Batch_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "RuntimeUnitProcedure_Batch_Source",
						  			"propertyRef": {
						  				"name": "BatchId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "UnitProcedureCommand_CommandTemplate",
						  	"end": [
							  {
							  	"role": "UnitProcedureCommand_CommandTemplate_Source",
							  	"type": "Edm.Self.UnitProcedureCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "UnitProcedureCommand_CommandTemplate_Target",
							  	"type": "Edm.Self.RuntimeCommandTemplate",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "UnitProcedureCommand_CommandTemplate_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "UnitProcedureCommand_CommandTemplate_Source",
						  			"propertyRef": {
						  				"name": "CommandTemplateId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "UnitProcedureCommand_Parent",
						  	"end": [
							  {
							  	"role": "UnitProcedureCommand_Parent_Source",
							  	"type": "Edm.Self.UnitProcedureCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "UnitProcedureCommand_Parent_Target",
							  	"type": "Edm.Self.RuntimeUnitProcedure",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "UnitProcedureCommand_Parent_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "UnitProcedureCommand_Parent_Source",
						  			"propertyRef": {
						  				"name": "ParentId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "RuntimeUnitProcedure_Unit",
						  	"end": [
							  {
							  	"role": "RuntimeUnitProcedure_Unit_Source",
							  	"type": "Edm.Self.RuntimeUnitProcedure",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "RuntimeUnitProcedure_Unit_Target",
							  	"type": "Edm.Self.RuntimeUnit",
							  	"multiplicity": "1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "RuntimeUnitProcedure_Unit_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "RuntimeUnitProcedure_Unit_Source",
						  			"propertyRef": {
						  				"name": "UnitId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "Step_UnitProcedure",
						  	"end": [
							  {
							  	"role": "Step_UnitProcedure_Source",
							  	"type": "Edm.Self.Step",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "Step_UnitProcedure_Target",
							  	"type": "Edm.Self.RuntimeUnitProcedure",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "Step_UnitProcedure_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "Step_UnitProcedure_Source",
						  			"propertyRef": {
						  				"name": "UnitProcedureId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "RuntimeUnit_AllocatedStep",
						  	"end": [
							  {
							  	"role": "RuntimeUnit_AllocatedStep_Source",
							  	"type": "Edm.Self.RuntimeUnit",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "RuntimeUnit_AllocatedStep_Target",
							  	"type": "Edm.Self.Step",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "RuntimeUnit_AllocatedStep_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "RuntimeUnit_AllocatedStep_Source",
						  			"propertyRef": {
						  				"name": "AllocatedStepId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "RuntimeUnit_AllocatedUnitProcedure",
						  	"end": [
							  {
							  	"role": "RuntimeUnit_AllocatedUnitProcedure_Source",
							  	"type": "Edm.Self.RuntimeUnit",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "RuntimeUnit_AllocatedUnitProcedure_Target",
							  	"type": "Edm.Self.RuntimeUnitProcedure",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "RuntimeUnit_AllocatedUnitProcedure_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "RuntimeUnit_AllocatedUnitProcedure_Source",
						  			"propertyRef": {
						  				"name": "AllocatedUnitProcedureId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "BoolParameterNodeCommand_CommandTemplate",
						  	"end": [
							  {
							  	"role": "BoolParameterNodeCommand_CommandTemplate_Source",
							  	"type": "Edm.Self.BoolParameterNodeCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "BoolParameterNodeCommand_CommandTemplate_Target",
							  	"type": "Edm.Self.RuntimeCommandTemplate",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "BoolParameterNodeCommand_CommandTemplate_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "BoolParameterNodeCommand_CommandTemplate_Source",
						  			"propertyRef": {
						  				"name": "CommandTemplateId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "BoolParameterNodeCommand_Parent",
						  	"end": [
							  {
							  	"role": "BoolParameterNodeCommand_Parent_Source",
							  	"type": "Edm.Self.BoolParameterNodeCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "BoolParameterNodeCommand_Parent_Target",
							  	"type": "Edm.Self.RuntimeBoolParameterNode",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "BoolParameterNodeCommand_Parent_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "BoolParameterNodeCommand_Parent_Source",
						  			"propertyRef": {
						  				"name": "ParentId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "RuntimeBoolParameterNode_Unit",
						  	"end": [
							  {
							  	"role": "RuntimeBoolParameterNode_Unit_Source",
							  	"type": "Edm.Self.RuntimeBoolParameterNode",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "RuntimeBoolParameterNode_Unit_Target",
							  	"type": "Edm.Self.RuntimeUnit",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "RuntimeBoolParameterNode_Unit_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "RuntimeBoolParameterNode_Unit_Source",
						  			"propertyRef": {
						  				"name": "UnitId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "CommandNodeCommand_CommandTemplate",
						  	"end": [
							  {
							  	"role": "CommandNodeCommand_CommandTemplate_Source",
							  	"type": "Edm.Self.CommandNodeCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "CommandNodeCommand_CommandTemplate_Target",
							  	"type": "Edm.Self.RuntimeCommandTemplate",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "CommandNodeCommand_CommandTemplate_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "CommandNodeCommand_CommandTemplate_Source",
						  			"propertyRef": {
						  				"name": "CommandTemplateId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "CommandNodeCommand_Parent",
						  	"end": [
							  {
							  	"role": "CommandNodeCommand_Parent_Source",
							  	"type": "Edm.Self.CommandNodeCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "CommandNodeCommand_Parent_Target",
							  	"type": "Edm.Self.RuntimeCommandNode",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "CommandNodeCommand_Parent_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "CommandNodeCommand_Parent_Source",
						  			"propertyRef": {
						  				"name": "ParentId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "RuntimeCommandNode_Unit",
						  	"end": [
							  {
							  	"role": "RuntimeCommandNode_Unit_Source",
							  	"type": "Edm.Self.RuntimeCommandNode",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "RuntimeCommandNode_Unit_Target",
							  	"type": "Edm.Self.RuntimeUnit",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "RuntimeCommandNode_Unit_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "RuntimeCommandNode_Unit_Source",
						  			"propertyRef": {
						  				"name": "UnitId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "UnitCommand_CommandTemplate",
						  	"end": [
							  {
							  	"role": "UnitCommand_CommandTemplate_Source",
							  	"type": "Edm.Self.UnitCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "UnitCommand_CommandTemplate_Target",
							  	"type": "Edm.Self.RuntimeCommandTemplate",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "UnitCommand_CommandTemplate_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "UnitCommand_CommandTemplate_Source",
						  			"propertyRef": {
						  				"name": "CommandTemplateId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "UnitCommand_Parent",
						  	"end": [
							  {
							  	"role": "UnitCommand_Parent_Source",
							  	"type": "Edm.Self.UnitCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "UnitCommand_Parent_Target",
							  	"type": "Edm.Self.RuntimeUnit",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "UnitCommand_Parent_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "UnitCommand_Parent_Source",
						  			"propertyRef": {
						  				"name": "ParentId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "DataLogNodeCommand_CommandTemplate",
						  	"end": [
							  {
							  	"role": "DataLogNodeCommand_CommandTemplate_Source",
							  	"type": "Edm.Self.DataLogNodeCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "DataLogNodeCommand_CommandTemplate_Target",
							  	"type": "Edm.Self.RuntimeCommandTemplate",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "DataLogNodeCommand_CommandTemplate_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "DataLogNodeCommand_CommandTemplate_Source",
						  			"propertyRef": {
						  				"name": "CommandTemplateId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "DataLogNodeCommand_Parent",
						  	"end": [
							  {
							  	"role": "DataLogNodeCommand_Parent_Source",
							  	"type": "Edm.Self.DataLogNodeCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "DataLogNodeCommand_Parent_Target",
							  	"type": "Edm.Self.RuntimeDataLogNode",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "DataLogNodeCommand_Parent_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "DataLogNodeCommand_Parent_Source",
						  			"propertyRef": {
						  				"name": "ParentId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "RuntimeDataLogNode_Unit",
						  	"end": [
							  {
							  	"role": "RuntimeDataLogNode_Unit_Source",
							  	"type": "Edm.Self.RuntimeDataLogNode",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "RuntimeDataLogNode_Unit_Target",
							  	"type": "Edm.Self.RuntimeUnit",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "RuntimeDataLogNode_Unit_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "RuntimeDataLogNode_Unit_Source",
						  			"propertyRef": {
						  				"name": "UnitId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "DoubleParameterNodeCommand_CommandTemplate",
						  	"end": [
							  {
							  	"role": "DoubleParameterNodeCommand_CommandTemplate_Source",
							  	"type": "Edm.Self.DoubleParameterNodeCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "DoubleParameterNodeCommand_CommandTemplate_Target",
							  	"type": "Edm.Self.RuntimeCommandTemplate",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "DoubleParameterNodeCommand_CommandTemplate_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "DoubleParameterNodeCommand_CommandTemplate_Source",
						  			"propertyRef": {
						  				"name": "CommandTemplateId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "DoubleParameterNodeCommand_Parent",
						  	"end": [
							  {
							  	"role": "DoubleParameterNodeCommand_Parent_Source",
							  	"type": "Edm.Self.DoubleParameterNodeCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "DoubleParameterNodeCommand_Parent_Target",
							  	"type": "Edm.Self.RuntimeDoubleParameterNode",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "DoubleParameterNodeCommand_Parent_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "DoubleParameterNodeCommand_Parent_Source",
						  			"propertyRef": {
						  				"name": "ParentId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "RuntimeDoubleParameterNode_Unit",
						  	"end": [
							  {
							  	"role": "RuntimeDoubleParameterNode_Unit_Source",
							  	"type": "Edm.Self.RuntimeDoubleParameterNode",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "RuntimeDoubleParameterNode_Unit_Target",
							  	"type": "Edm.Self.RuntimeUnit",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "RuntimeDoubleParameterNode_Unit_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "RuntimeDoubleParameterNode_Unit_Source",
						  			"propertyRef": {
						  				"name": "UnitId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "IntegerParameterNodeCommand_CommandTemplate",
						  	"end": [
							  {
							  	"role": "IntegerParameterNodeCommand_CommandTemplate_Source",
							  	"type": "Edm.Self.IntegerParameterNodeCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "IntegerParameterNodeCommand_CommandTemplate_Target",
							  	"type": "Edm.Self.RuntimeCommandTemplate",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "IntegerParameterNodeCommand_CommandTemplate_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "IntegerParameterNodeCommand_CommandTemplate_Source",
						  			"propertyRef": {
						  				"name": "CommandTemplateId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "IntegerParameterNodeCommand_Parent",
						  	"end": [
							  {
							  	"role": "IntegerParameterNodeCommand_Parent_Source",
							  	"type": "Edm.Self.IntegerParameterNodeCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "IntegerParameterNodeCommand_Parent_Target",
							  	"type": "Edm.Self.RuntimeIntegerParameterNode",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "IntegerParameterNodeCommand_Parent_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "IntegerParameterNodeCommand_Parent_Source",
						  			"propertyRef": {
						  				"name": "ParentId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "RuntimeIntegerParameterNode_Unit",
						  	"end": [
							  {
							  	"role": "RuntimeIntegerParameterNode_Unit_Source",
							  	"type": "Edm.Self.RuntimeIntegerParameterNode",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "RuntimeIntegerParameterNode_Unit_Target",
							  	"type": "Edm.Self.RuntimeUnit",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "RuntimeIntegerParameterNode_Unit_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "RuntimeIntegerParameterNode_Unit_Source",
						  			"propertyRef": {
						  				"name": "UnitId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "NodePageCommand_CommandTemplate",
						  	"end": [
							  {
							  	"role": "NodePageCommand_CommandTemplate_Source",
							  	"type": "Edm.Self.NodePageCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "NodePageCommand_CommandTemplate_Target",
							  	"type": "Edm.Self.RuntimeCommandTemplate",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "NodePageCommand_CommandTemplate_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "NodePageCommand_CommandTemplate_Source",
						  			"propertyRef": {
						  				"name": "CommandTemplateId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "NodePageCommand_Parent",
						  	"end": [
							  {
							  	"role": "NodePageCommand_Parent_Source",
							  	"type": "Edm.Self.NodePageCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "NodePageCommand_Parent_Target",
							  	"type": "Edm.Self.RuntimeNodePage",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "NodePageCommand_Parent_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "NodePageCommand_Parent_Source",
						  			"propertyRef": {
						  				"name": "ParentId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "NodePageItemCommand_CommandTemplate",
						  	"end": [
							  {
							  	"role": "NodePageItemCommand_CommandTemplate_Source",
							  	"type": "Edm.Self.NodePageItemCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "NodePageItemCommand_CommandTemplate_Target",
							  	"type": "Edm.Self.RuntimeCommandTemplate",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "NodePageItemCommand_CommandTemplate_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "NodePageItemCommand_CommandTemplate_Source",
						  			"propertyRef": {
						  				"name": "CommandTemplateId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "NodePageItemCommand_Parent",
						  	"end": [
							  {
							  	"role": "NodePageItemCommand_Parent_Source",
							  	"type": "Edm.Self.NodePageItemCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "NodePageItemCommand_Parent_Target",
							  	"type": "Edm.Self.RuntimeNodePageItem",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "NodePageItemCommand_Parent_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "NodePageItemCommand_Parent_Source",
						  			"propertyRef": {
						  				"name": "ParentId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "RuntimeNodePageItem_NodePage",
						  	"end": [
							  {
							  	"role": "RuntimeNodePageItem_NodePage_Source",
							  	"type": "Edm.Self.RuntimeNodePageItem",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "RuntimeNodePageItem_NodePage_Target",
							  	"type": "Edm.Self.RuntimeNodePage",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "RuntimeNodePageItem_NodePage_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "RuntimeNodePageItem_NodePage_Source",
						  			"propertyRef": {
						  				"name": "NodePageId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "RuntimeNodePage_Unit",
						  	"end": [
							  {
							  	"role": "RuntimeNodePage_Unit_Source",
							  	"type": "Edm.Self.RuntimeNodePage",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "RuntimeNodePage_Unit_Target",
							  	"type": "Edm.Self.RuntimeUnit",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "RuntimeNodePage_Unit_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "RuntimeNodePage_Unit_Source",
						  			"propertyRef": {
						  				"name": "UnitId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "ReportNodeCommand_CommandTemplate",
						  	"end": [
							  {
							  	"role": "ReportNodeCommand_CommandTemplate_Source",
							  	"type": "Edm.Self.ReportNodeCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "ReportNodeCommand_CommandTemplate_Target",
							  	"type": "Edm.Self.RuntimeCommandTemplate",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "ReportNodeCommand_CommandTemplate_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "ReportNodeCommand_CommandTemplate_Source",
						  			"propertyRef": {
						  				"name": "CommandTemplateId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "ReportNodeCommand_Parent",
						  	"end": [
							  {
							  	"role": "ReportNodeCommand_Parent_Source",
							  	"type": "Edm.Self.ReportNodeCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "ReportNodeCommand_Parent_Target",
							  	"type": "Edm.Self.RuntimeReportNode",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "ReportNodeCommand_Parent_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "ReportNodeCommand_Parent_Source",
						  			"propertyRef": {
						  				"name": "ParentId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "RuntimeReportNode_Unit",
						  	"end": [
							  {
							  	"role": "RuntimeReportNode_Unit_Source",
							  	"type": "Edm.Self.RuntimeReportNode",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "RuntimeReportNode_Unit_Target",
							  	"type": "Edm.Self.RuntimeUnit",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "RuntimeReportNode_Unit_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "RuntimeReportNode_Unit_Source",
						  			"propertyRef": {
						  				"name": "UnitId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "StateNodeCommand_CommandTemplate",
						  	"end": [
							  {
							  	"role": "StateNodeCommand_CommandTemplate_Source",
							  	"type": "Edm.Self.StateNodeCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "StateNodeCommand_CommandTemplate_Target",
							  	"type": "Edm.Self.RuntimeCommandTemplate",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "StateNodeCommand_CommandTemplate_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "StateNodeCommand_CommandTemplate_Source",
						  			"propertyRef": {
						  				"name": "CommandTemplateId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "StateNodeCommand_Parent",
						  	"end": [
							  {
							  	"role": "StateNodeCommand_Parent_Source",
							  	"type": "Edm.Self.StateNodeCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "StateNodeCommand_Parent_Target",
							  	"type": "Edm.Self.RuntimeStateNode",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "StateNodeCommand_Parent_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "StateNodeCommand_Parent_Source",
						  			"propertyRef": {
						  				"name": "ParentId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "RuntimeStateNode_Unit",
						  	"end": [
							  {
							  	"role": "RuntimeStateNode_Unit_Source",
							  	"type": "Edm.Self.RuntimeStateNode",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "RuntimeStateNode_Unit_Target",
							  	"type": "Edm.Self.RuntimeUnit",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "RuntimeStateNode_Unit_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "RuntimeStateNode_Unit_Source",
						  			"propertyRef": {
						  				"name": "UnitId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "StringParameterNodeCommand_CommandTemplate",
						  	"end": [
							  {
							  	"role": "StringParameterNodeCommand_CommandTemplate_Source",
							  	"type": "Edm.Self.StringParameterNodeCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "StringParameterNodeCommand_CommandTemplate_Target",
							  	"type": "Edm.Self.RuntimeCommandTemplate",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "StringParameterNodeCommand_CommandTemplate_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "StringParameterNodeCommand_CommandTemplate_Source",
						  			"propertyRef": {
						  				"name": "CommandTemplateId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "StringParameterNodeCommand_Parent",
						  	"end": [
							  {
							  	"role": "StringParameterNodeCommand_Parent_Source",
							  	"type": "Edm.Self.StringParameterNodeCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "StringParameterNodeCommand_Parent_Target",
							  	"type": "Edm.Self.RuntimeStringParameterNode",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "StringParameterNodeCommand_Parent_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "StringParameterNodeCommand_Parent_Source",
						  			"propertyRef": {
						  				"name": "ParentId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "RuntimeStringParameterNode_Unit",
						  	"end": [
							  {
							  	"role": "RuntimeStringParameterNode_Unit_Source",
							  	"type": "Edm.Self.RuntimeStringParameterNode",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "RuntimeStringParameterNode_Unit_Target",
							  	"type": "Edm.Self.RuntimeUnit",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "RuntimeStringParameterNode_Unit_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "RuntimeStringParameterNode_Unit_Source",
						  			"propertyRef": {
						  				"name": "UnitId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "RuntimeUnit_Zone",
						  	"end": [
							  {
							  	"role": "RuntimeUnit_Zone_Source",
							  	"type": "Edm.Self.RuntimeUnit",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "RuntimeUnit_Zone_Target",
							  	"type": "Edm.Self.RuntimeZone",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "RuntimeUnit_Zone_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "RuntimeUnit_Zone_Source",
						  			"propertyRef": {
						  				"name": "ZoneId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "BatchCommand_CommandTemplate",
						  	"end": [
							  {
							  	"role": "BatchCommand_CommandTemplate_Source",
							  	"type": "Edm.Self.BatchCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "BatchCommand_CommandTemplate_Target",
							  	"type": "Edm.Self.RuntimeCommandTemplate",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "BatchCommand_CommandTemplate_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "BatchCommand_CommandTemplate_Source",
						  			"propertyRef": {
						  				"name": "CommandTemplateId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "BatchCommand_Parent",
						  	"end": [
							  {
							  	"role": "BatchCommand_Parent_Source",
							  	"type": "Edm.Self.BatchCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "BatchCommand_Parent_Target",
							  	"type": "Edm.Self.Batch",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "BatchCommand_Parent_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "BatchCommand_Parent_Source",
						  			"propertyRef": {
						  				"name": "ParentId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "Batch_Zone",
						  	"end": [
							  {
							  	"role": "Batch_Zone_Source",
							  	"type": "Edm.Self.Batch",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "Batch_Zone_Target",
							  	"type": "Edm.Self.RuntimeZone",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "Batch_Zone_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "Batch_Zone_Source",
						  			"propertyRef": {
						  				"name": "ZoneId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "ZoneCommand_CommandTemplate",
						  	"end": [
							  {
							  	"role": "ZoneCommand_CommandTemplate_Source",
							  	"type": "Edm.Self.ZoneCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "ZoneCommand_CommandTemplate_Target",
							  	"type": "Edm.Self.RuntimeCommandTemplate",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "ZoneCommand_CommandTemplate_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "ZoneCommand_CommandTemplate_Source",
						  			"propertyRef": {
						  				"name": "CommandTemplateId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "ZoneCommand_Parent",
						  	"end": [
							  {
							  	"role": "ZoneCommand_Parent_Source",
							  	"type": "Edm.Self.ZoneCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "ZoneCommand_Parent_Target",
							  	"type": "Edm.Self.RuntimeZone",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "ZoneCommand_Parent_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "ZoneCommand_Parent_Source",
						  			"propertyRef": {
						  				"name": "ParentId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "GroupCommand_CommandTemplate",
						  	"end": [
							  {
							  	"role": "GroupCommand_CommandTemplate_Source",
							  	"type": "Edm.Self.GroupCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "GroupCommand_CommandTemplate_Target",
							  	"type": "Edm.Self.RuntimeCommandTemplate",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "GroupCommand_CommandTemplate_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "GroupCommand_CommandTemplate_Source",
						  			"propertyRef": {
						  				"name": "CommandTemplateId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "GroupCommand_Parent",
						  	"end": [
							  {
							  	"role": "GroupCommand_Parent_Source",
							  	"type": "Edm.Self.GroupCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "GroupCommand_Parent_Target",
							  	"type": "Edm.Self.RuntimeGroup",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "GroupCommand_Parent_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "GroupCommand_Parent_Source",
						  			"propertyRef": {
						  				"name": "ParentId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "RuntimeGroup_Zone",
						  	"end": [
							  {
							  	"role": "RuntimeGroup_Zone_Source",
							  	"type": "Edm.Self.RuntimeGroup",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "RuntimeGroup_Zone_Target",
							  	"type": "Edm.Self.RuntimeZone",
							  	"multiplicity": "1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "RuntimeGroup_Zone_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "RuntimeGroup_Zone_Source",
						  			"propertyRef": {
						  				"name": "ZoneId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "RuntimeZoneClearance_Clearance",
						  	"end": [
							  {
							  	"role": "RuntimeZoneClearance_Clearance_Source",
							  	"type": "Edm.Self.RuntimeZoneClearance",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "RuntimeZoneClearance_Clearance_Target",
							  	"type": "Edm.Self.RuntimeClearance",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "RuntimeZoneClearance_Clearance_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "RuntimeZoneClearance_Clearance_Source",
						  			"propertyRef": {
						  				"name": "ClearanceId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "ZoneClearanceCommand_CommandTemplate",
						  	"end": [
							  {
							  	"role": "ZoneClearanceCommand_CommandTemplate_Source",
							  	"type": "Edm.Self.ZoneClearanceCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "ZoneClearanceCommand_CommandTemplate_Target",
							  	"type": "Edm.Self.RuntimeCommandTemplate",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "ZoneClearanceCommand_CommandTemplate_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "ZoneClearanceCommand_CommandTemplate_Source",
						  			"propertyRef": {
						  				"name": "CommandTemplateId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "ZoneClearanceCommand_Parent",
						  	"end": [
							  {
							  	"role": "ZoneClearanceCommand_Parent_Source",
							  	"type": "Edm.Self.ZoneClearanceCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "ZoneClearanceCommand_Parent_Target",
							  	"type": "Edm.Self.RuntimeZoneClearance",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "ZoneClearanceCommand_Parent_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "ZoneClearanceCommand_Parent_Source",
						  			"propertyRef": {
						  				"name": "ParentId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "SignatureCommand_CommandTemplate",
						  	"end": [
							  {
							  	"role": "SignatureCommand_CommandTemplate_Source",
							  	"type": "Edm.Self.SignatureCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "SignatureCommand_CommandTemplate_Target",
							  	"type": "Edm.Self.RuntimeCommandTemplate",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "SignatureCommand_CommandTemplate_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "SignatureCommand_CommandTemplate_Source",
						  			"propertyRef": {
						  				"name": "CommandTemplateId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "SignatureCommand_Parent",
						  	"end": [
							  {
							  	"role": "SignatureCommand_Parent_Source",
							  	"type": "Edm.Self.SignatureCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "SignatureCommand_Parent_Target",
							  	"type": "Edm.Self.RuntimeSignature",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "SignatureCommand_Parent_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "SignatureCommand_Parent_Source",
						  			"propertyRef": {
						  				"name": "ParentId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "RuntimeSignature_Group",
						  	"end": [
							  {
							  	"role": "RuntimeSignature_Group_Source",
							  	"type": "Edm.Self.RuntimeSignature",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "RuntimeSignature_Group_Target",
							  	"type": "Edm.Self.RuntimeGroup",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "RuntimeSignature_Group_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "RuntimeSignature_Group_Source",
						  			"propertyRef": {
						  				"name": "GroupId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "RuntimeSignature_ZoneClearance",
						  	"end": [
							  {
							  	"role": "RuntimeSignature_ZoneClearance_Source",
							  	"type": "Edm.Self.RuntimeSignature",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "RuntimeSignature_ZoneClearance_Target",
							  	"type": "Edm.Self.RuntimeZoneClearance",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "RuntimeSignature_ZoneClearance_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "RuntimeSignature_ZoneClearance_Source",
						  			"propertyRef": {
						  				"name": "ZoneClearanceId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "RuntimeZoneClearance_Zone",
						  	"end": [
							  {
							  	"role": "RuntimeZoneClearance_Zone_Source",
							  	"type": "Edm.Self.RuntimeZoneClearance",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "RuntimeZoneClearance_Zone_Target",
							  	"type": "Edm.Self.RuntimeZone",
							  	"multiplicity": "1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "RuntimeZoneClearance_Zone_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "RuntimeZoneClearance_Zone_Source",
						  			"propertyRef": {
						  				"name": "ZoneId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "RuntimeCommandClearance_Zone",
						  	"end": [
							  {
							  	"role": "RuntimeCommandClearance_Zone_Source",
							  	"type": "Edm.Self.RuntimeCommandClearance",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "RuntimeCommandClearance_Zone_Target",
							  	"type": "Edm.Self.RuntimeZone",
							  	"multiplicity": "1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "RuntimeCommandClearance_Zone_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "RuntimeCommandClearance_Zone_Source",
						  			"propertyRef": {
						  				"name": "ZoneId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "ClearanceCommand_CommandTemplate",
						  	"end": [
							  {
							  	"role": "ClearanceCommand_CommandTemplate_Source",
							  	"type": "Edm.Self.ClearanceCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "ClearanceCommand_CommandTemplate_Target",
							  	"type": "Edm.Self.RuntimeCommandTemplate",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "ClearanceCommand_CommandTemplate_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "ClearanceCommand_CommandTemplate_Source",
						  			"propertyRef": {
						  				"name": "CommandTemplateId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "ClearanceCommand_Parent",
						  	"end": [
							  {
							  	"role": "ClearanceCommand_Parent_Source",
							  	"type": "Edm.Self.ClearanceCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "ClearanceCommand_Parent_Target",
							  	"type": "Edm.Self.RuntimeClearance",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "ClearanceCommand_Parent_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "ClearanceCommand_Parent_Source",
						  			"propertyRef": {
						  				"name": "ParentId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "RuntimeCommandTemplate_Clearance",
						  	"end": [
							  {
							  	"role": "RuntimeCommandTemplate_Clearance_Source",
							  	"type": "Edm.Self.RuntimeCommandTemplate",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "RuntimeCommandTemplate_Clearance_Target",
							  	"type": "Edm.Self.RuntimeClearance",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "RuntimeCommandTemplate_Clearance_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "RuntimeCommandTemplate_Clearance_Source",
						  			"propertyRef": {
						  				"name": "ClearanceId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "RuntimeCommandTemplate_Command",
						  	"end": [
							  {
							  	"role": "RuntimeCommandTemplate_Command_Source",
							  	"type": "Edm.Self.RuntimeCommandTemplate",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "RuntimeCommandTemplate_Command_Target",
							  	"type": "Edm.Self.RuntimeCommand",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "RuntimeCommandTemplate_Command_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "RuntimeCommandTemplate_Command_Source",
						  			"propertyRef": {
						  				"name": "CommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "RuntimeCommandInstance_Command",
						  	"end": [
							  {
							  	"role": "RuntimeCommandInstance_Command_Source",
							  	"type": "Edm.Self.RuntimeCommandInstance",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "RuntimeCommandInstance_Command_Target",
							  	"type": "Edm.Self.RuntimeCommand",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "RuntimeCommandInstance_Command_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "RuntimeCommandInstance_Command_Source",
						  			"propertyRef": {
						  				"name": "CommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "RuntimeCommandInstance_CommandTemplate",
						  	"end": [
							  {
							  	"role": "RuntimeCommandInstance_CommandTemplate_Source",
							  	"type": "Edm.Self.RuntimeCommandInstance",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "RuntimeCommandInstance_CommandTemplate_Target",
							  	"type": "Edm.Self.RuntimeCommandTemplate",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "RuntimeCommandInstance_CommandTemplate_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "RuntimeCommandInstance_CommandTemplate_Source",
						  			"propertyRef": {
						  				"name": "CommandTemplateId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "RuntimeCommandInstanceSignature_Command",
						  	"end": [
							  {
							  	"role": "RuntimeCommandInstanceSignature_Command_Source",
							  	"type": "Edm.Self.RuntimeCommandInstanceSignature",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "RuntimeCommandInstanceSignature_Command_Target",
							  	"type": "Edm.Self.RuntimeCommandInstance",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "RuntimeCommandInstanceSignature_Command_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "RuntimeCommandInstanceSignature_Command_Source",
						  			"propertyRef": {
						  				"name": "CommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "RuntimeCommandInstanceSignature_Signature",
						  	"end": [
							  {
							  	"role": "RuntimeCommandInstanceSignature_Signature_Source",
							  	"type": "Edm.Self.RuntimeCommandInstanceSignature",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "RuntimeCommandInstanceSignature_Signature_Target",
							  	"type": "Edm.Self.RuntimeSignature",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "RuntimeCommandInstanceSignature_Signature_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "RuntimeCommandInstanceSignature_Signature_Source",
						  			"propertyRef": {
						  				"name": "SignatureId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "RuntimeCommandInstanceValue_Command",
						  	"end": [
							  {
							  	"role": "RuntimeCommandInstanceValue_Command_Source",
							  	"type": "Edm.Self.RuntimeCommandInstanceValue",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "RuntimeCommandInstanceValue_Command_Target",
							  	"type": "Edm.Self.RuntimeCommandInstance",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "RuntimeCommandInstanceValue_Command_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "RuntimeCommandInstanceValue_Command_Source",
						  			"propertyRef": {
						  				"name": "CommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "RuntimeCommandInstanceValueData_CommandInstanceValue",
						  	"end": [
							  {
							  	"role": "RuntimeCommandInstanceValueData_CommandInstanceValue_Source",
							  	"type": "Edm.Self.RuntimeCommandInstanceValueData",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "RuntimeCommandInstanceValueData_CommandInstanceValue_Target",
							  	"type": "Edm.Self.RuntimeCommandInstanceValue",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "RuntimeCommandInstanceValueData_CommandInstanceValue_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "RuntimeCommandInstanceValueData_CommandInstanceValue_Source",
						  			"propertyRef": {
						  				"name": "CommandInstanceValueId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "RuntimeCommandInstance_Zone",
						  	"end": [
							  {
							  	"role": "RuntimeCommandInstance_Zone_Source",
							  	"type": "Edm.Self.RuntimeCommandInstance",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "RuntimeCommandInstance_Zone_Target",
							  	"type": "Edm.Self.RuntimeZone",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "RuntimeCommandInstance_Zone_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "RuntimeCommandInstance_Zone_Source",
						  			"propertyRef": {
						  				"name": "ZoneId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "RuntimeCommandTemplateSignature_Command",
						  	"end": [
							  {
							  	"role": "RuntimeCommandTemplateSignature_Command_Source",
							  	"type": "Edm.Self.RuntimeCommandTemplateSignature",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "RuntimeCommandTemplateSignature_Command_Target",
							  	"type": "Edm.Self.RuntimeCommandTemplate",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "RuntimeCommandTemplateSignature_Command_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "RuntimeCommandTemplateSignature_Command_Source",
						  			"propertyRef": {
						  				"name": "CommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "RuntimeCommandTemplateSignature_Signature",
						  	"end": [
							  {
							  	"role": "RuntimeCommandTemplateSignature_Signature_Source",
							  	"type": "Edm.Self.RuntimeCommandTemplateSignature",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "RuntimeCommandTemplateSignature_Signature_Target",
							  	"type": "Edm.Self.RuntimeSignature",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "RuntimeCommandTemplateSignature_Signature_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "RuntimeCommandTemplateSignature_Signature_Source",
						  			"propertyRef": {
						  				"name": "SignatureId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "RuntimeCommandTemplateValue_Command",
						  	"end": [
							  {
							  	"role": "RuntimeCommandTemplateValue_Command_Source",
							  	"type": "Edm.Self.RuntimeCommandTemplateValue",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "RuntimeCommandTemplateValue_Command_Target",
							  	"type": "Edm.Self.RuntimeCommandTemplate",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "RuntimeCommandTemplateValue_Command_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "RuntimeCommandTemplateValue_Command_Source",
						  			"propertyRef": {
						  				"name": "CommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "RuntimeCommandTemplateValueData_CommandTemplateValue",
						  	"end": [
							  {
							  	"role": "RuntimeCommandTemplateValueData_CommandTemplateValue_Source",
							  	"type": "Edm.Self.RuntimeCommandTemplateValueData",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "RuntimeCommandTemplateValueData_CommandTemplateValue_Target",
							  	"type": "Edm.Self.RuntimeCommandTemplateValue",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "RuntimeCommandTemplateValueData_CommandTemplateValue_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "RuntimeCommandTemplateValueData_CommandTemplateValue_Source",
						  			"propertyRef": {
						  				"name": "CommandTemplateValueId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "RuntimeCommandTemplate_Zone",
						  	"end": [
							  {
							  	"role": "RuntimeCommandTemplate_Zone_Target",
							  	"type": "Edm.Self.RuntimeZone",
							  	"multiplicity": "0..1"
							  },
							  {
							  	"role": "RuntimeCommandTemplate_Zone_Source",
							  	"type": "Edm.Self.RuntimeCommandTemplate",
							  	"multiplicity": "0..1"
							  }
						  	]
						  },
						  {
						  	"name": "AlarmCommand_CommandTemplate",
						  	"end": [
							  {
							  	"role": "AlarmCommand_CommandTemplate_Source",
							  	"type": "Edm.Self.AlarmCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "AlarmCommand_CommandTemplate_Target",
							  	"type": "Edm.Self.RuntimeCommandTemplate",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "AlarmCommand_CommandTemplate_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "AlarmCommand_CommandTemplate_Source",
						  			"propertyRef": {
						  				"name": "CommandTemplateId"
						  			}
						  		}
						  	}
						  }
						],
						"entityContainer": {
							"name": "RuntimeContext",
							"customannotation:UseClrTypes": "true",
							"entitySet": [
							  {
							  	"name": "AlarmCommands",
							  	"entityType": "Self.AlarmCommand"
							  },
							  {
							  	"name": "CommandTemplates",
							  	"entityType": "Self.RuntimeCommandTemplate"
							  },
							  {
							  	"name": "Clearances",
							  	"entityType": "Self.RuntimeClearance"
							  },
							  {
							  	"name": "CommandClearances",
							  	"entityType": "Self.RuntimeCommandClearance"
							  },
							  {
							  	"name": "Commands",
							  	"entityType": "Self.RuntimeCommand"
							  },
							  {
							  	"name": "CommandCommands",
							  	"entityType": "Self.CommandCommand"
							  },
							  {
							  	"name": "CommandClearanceCommands",
							  	"entityType": "Self.CommandClearanceCommand"
							  },
							  {
							  	"name": "Zones",
							  	"entityType": "Self.RuntimeZone"
							  },
							  {
							  	"name": "Batches",
							  	"entityType": "Self.Batch"
							  },
							  {
							  	"name": "Units",
							  	"entityType": "Self.RuntimeUnit"
							  },
							  {
							  	"name": "Alarms",
							  	"entityType": "Self.RuntimeAlarm"
							  },
							  {
							  	"name": "AlarmSeverities",
							  	"entityType": "Self.RuntimeAlarmSeverity"
							  },
							  {
							  	"name": "AlarmSeverityCommands",
							  	"entityType": "Self.AlarmSeverityCommand"
							  },
							  {
							  	"name": "Sites",
							  	"entityType": "Self.RuntimeSite"
							  },
							  {
							  	"name": "SiteCommands",
							  	"entityType": "Self.SiteCommand"
							  },
							  {
							  	"name": "Devices",
							  	"entityType": "Self.RuntimeDevice"
							  },
							  {
							  	"name": "DeviceCommands",
							  	"entityType": "Self.DeviceCommand"
							  },
							  {
							  	"name": "DeviceDisplays",
							  	"entityType": "Self.RuntimeDeviceDisplay"
							  },
							  {
							  	"name": "DeviceDisplayCommands",
							  	"entityType": "Self.DeviceDisplayCommand"
							  },
							  {
							  	"name": "DeviceInstances",
							  	"entityType": "Self.RuntimeDeviceInstance"
							  },
							  {
							  	"name": "DeviceInstanceCommands",
							  	"entityType": "Self.DeviceInstanceCommand"
							  },
							  {
							  	"name": "DeviceInstanceDisplays",
							  	"entityType": "Self.RuntimeDeviceInstanceDisplay"
							  },
							  {
							  	"name": "DeviceInstanceDisplayCommands",
							  	"entityType": "Self.DeviceInstanceDisplayCommand"
							  },
							  {
							  	"name": "DeviceInstanceTags",
							  	"entityType": "Self.RuntimeDeviceInstanceTag"
							  },
							  {
							  	"name": "DeviceInstanceTagCommands",
							  	"entityType": "Self.DeviceInstanceTagCommand"
							  },
							  {
							  	"name": "Enterprises",
							  	"entityType": "Self.RuntimeEnterprise"
							  },
							  {
							  	"name": "Applications",
							  	"entityType": "Self.RuntimeApplication"
							  },
							  {
							  	"name": "ApplicationCommands",
							  	"entityType": "Self.ApplicationCommand"
							  },
							  {
							  	"name": "EnterpriseCommands",
							  	"entityType": "Self.EnterpriseCommand"
							  },
							  {
							  	"name": "AlarmValues",
							  	"entityType": "Self.RuntimeAlarmValue"
							  },
							  {
							  	"name": "AlarmValueCommands",
							  	"entityType": "Self.AlarmValueCommand"
							  },
							  {
							  	"name": "Steps",
							  	"entityType": "Self.Step"
							  },
							  {
							  	"name": "BoolStepFormulae",
							  	"entityType": "Self.BoolStepFormula"
							  },
							  {
							  	"name": "BoolStepFormulaCommands",
							  	"entityType": "Self.BoolStepFormulaCommand"
							  },
							  {
							  	"name": "BoolParameters",
							  	"entityType": "Self.RuntimeBoolParameter"
							  },
							  {
							  	"name": "BoolParameterCommands",
							  	"entityType": "Self.BoolParameterCommand"
							  },
							  {
							  	"name": "BoolEnumerations",
							  	"entityType": "Self.RuntimeBoolEnumeration"
							  },
							  {
							  	"name": "BoolEnumerationCommands",
							  	"entityType": "Self.BoolEnumerationCommand"
							  },
							  {
							  	"name": "Operations",
							  	"entityType": "Self.RuntimeOperation"
							  },
							  {
							  	"name": "OperationCommands",
							  	"entityType": "Self.OperationCommand"
							  },
							  {
							  	"name": "DoubleParameters",
							  	"entityType": "Self.RuntimeDoubleParameter"
							  },
							  {
							  	"name": "DoubleParameterCommands",
							  	"entityType": "Self.DoubleParameterCommand"
							  },
							  {
							  	"name": "DoubleStepFormulae",
							  	"entityType": "Self.DoubleStepFormula"
							  },
							  {
							  	"name": "DoubleStepFormulaCommands",
							  	"entityType": "Self.DoubleStepFormulaCommand"
							  },
							  {
							  	"name": "IntegerParameters",
							  	"entityType": "Self.RuntimeIntegerParameter"
							  },
							  {
							  	"name": "IntegerParameterCommands",
							  	"entityType": "Self.IntegerParameterCommand"
							  },
							  {
							  	"name": "IntegerEnumerations",
							  	"entityType": "Self.RuntimeIntegerEnumeration"
							  },
							  {
							  	"name": "IntegerEnumerationCommands",
							  	"entityType": "Self.IntegerEnumerationCommand"
							  },
							  {
							  	"name": "IntegerStepFormulae",
							  	"entityType": "Self.IntegerStepFormula"
							  },
							  {
							  	"name": "IntegerStepFormulaCommands",
							  	"entityType": "Self.IntegerStepFormulaCommand"
							  },
							  {
							  	"name": "Reports",
							  	"entityType": "Self.RuntimeReport"
							  },
							  {
							  	"name": "ReportCommands",
							  	"entityType": "Self.ReportCommand"
							  },
							  {
							  	"name": "StepReports",
							  	"entityType": "Self.StepReport"
							  },
							  {
							  	"name": "StepReportCommands",
							  	"entityType": "Self.StepReportCommand"
							  },
							  {
							  	"name": "StringParameters",
							  	"entityType": "Self.RuntimeStringParameter"
							  },
							  {
							  	"name": "StringParameterCommands",
							  	"entityType": "Self.StringParameterCommand"
							  },
							  {
							  	"name": "StringStepFormulae",
							  	"entityType": "Self.StringStepFormula"
							  },
							  {
							  	"name": "StringStepFormulaCommands",
							  	"entityType": "Self.StringStepFormulaCommand"
							  },
							  {
							  	"name": "StepCommands",
							  	"entityType": "Self.StepCommand"
							  },
							  {
							  	"name": "UnitProcedures",
							  	"entityType": "Self.RuntimeUnitProcedure"
							  },
							  {
							  	"name": "UnitProcedureCommands",
							  	"entityType": "Self.UnitProcedureCommand"
							  },
							  {
							  	"name": "BoolParameterNodes",
							  	"entityType": "Self.RuntimeBoolParameterNode"
							  },
							  {
							  	"name": "BoolParameterNodeCommands",
							  	"entityType": "Self.BoolParameterNodeCommand"
							  },
							  {
							  	"name": "CommandNodes",
							  	"entityType": "Self.RuntimeCommandNode"
							  },
							  {
							  	"name": "CommandNodeCommands",
							  	"entityType": "Self.CommandNodeCommand"
							  },
							  {
							  	"name": "UnitCommands",
							  	"entityType": "Self.UnitCommand"
							  },
							  {
							  	"name": "DataLogNodes",
							  	"entityType": "Self.RuntimeDataLogNode"
							  },
							  {
							  	"name": "DataLogNodeCommands",
							  	"entityType": "Self.DataLogNodeCommand"
							  },
							  {
							  	"name": "DoubleParameterNodes",
							  	"entityType": "Self.RuntimeDoubleParameterNode"
							  },
							  {
							  	"name": "DoubleParameterNodeCommands",
							  	"entityType": "Self.DoubleParameterNodeCommand"
							  },
							  {
							  	"name": "IntegerParameterNodes",
							  	"entityType": "Self.RuntimeIntegerParameterNode"
							  },
							  {
							  	"name": "IntegerParameterNodeCommands",
							  	"entityType": "Self.IntegerParameterNodeCommand"
							  },
							  {
							  	"name": "NodePages",
							  	"entityType": "Self.RuntimeNodePage"
							  },
							  {
							  	"name": "NodePageCommands",
							  	"entityType": "Self.NodePageCommand"
							  },
							  {
							  	"name": "NodePageItems",
							  	"entityType": "Self.RuntimeNodePageItem"
							  },
							  {
							  	"name": "NodePageItemCommands",
							  	"entityType": "Self.NodePageItemCommand"
							  },
							  {
							  	"name": "ReportNodes",
							  	"entityType": "Self.RuntimeReportNode"
							  },
							  {
							  	"name": "ReportNodeCommands",
							  	"entityType": "Self.ReportNodeCommand"
							  },
							  {
							  	"name": "StateNodes",
							  	"entityType": "Self.RuntimeStateNode"
							  },
							  {
							  	"name": "StateNodeCommands",
							  	"entityType": "Self.StateNodeCommand"
							  },
							  {
							  	"name": "StringParameterNodes",
							  	"entityType": "Self.RuntimeStringParameterNode"
							  },
							  {
							  	"name": "StringParameterNodeCommands",
							  	"entityType": "Self.StringParameterNodeCommand"
							  },
							  {
							  	"name": "BatchCommands",
							  	"entityType": "Self.BatchCommand"
							  },
							  {
							  	"name": "ZoneCommands",
							  	"entityType": "Self.ZoneCommand"
							  },
							  {
							  	"name": "Groups",
							  	"entityType": "Self.RuntimeGroup"
							  },
							  {
							  	"name": "GroupCommands",
							  	"entityType": "Self.GroupCommand"
							  },
							  {
							  	"name": "ZoneClearances",
							  	"entityType": "Self.RuntimeZoneClearance"
							  },
							  {
							  	"name": "ZoneClearanceCommands",
							  	"entityType": "Self.ZoneClearanceCommand"
							  },
							  {
							  	"name": "Signatures",
							  	"entityType": "Self.RuntimeSignature"
							  },
							  {
							  	"name": "SignatureCommands",
							  	"entityType": "Self.SignatureCommand"
							  },
							  {
							  	"name": "ClearanceCommands",
							  	"entityType": "Self.ClearanceCommand"
							  },
							  {
							  	"name": "CommandInstances",
							  	"entityType": "Self.RuntimeCommandInstance"
							  },
							  {
							  	"name": "CommandInstanceSignatures",
							  	"entityType": "Self.RuntimeCommandInstanceSignature"
							  },
							  {
							  	"name": "CommandInstanceValues",
							  	"entityType": "Self.RuntimeCommandInstanceValue"
							  },
							  {
							  	"name": "CommandInstanceValueData",
							  	"entityType": "Self.RuntimeCommandInstanceValueData"
							  },
							  {
							  	"name": "CommandTemplateSignatures",
							  	"entityType": "Self.RuntimeCommandTemplateSignature"
							  },
							  {
							  	"name": "CommandTemplateValues",
							  	"entityType": "Self.RuntimeCommandTemplateValue"
							  },
							  {
							  	"name": "CommandTemplateValueData",
							  	"entityType": "Self.RuntimeCommandTemplateValueData"
							  }
							],
							"associationSet": [
							  {
							  	"name": "RuntimeCommandClearance_Clearance",
							  	"association": "Self.RuntimeCommandClearance_Clearance",
							  	"end": [
								  {
								  	"role": "RuntimeCommandClearance_Clearance_Source",
								  	"entitySet": "CommandClearances"
								  },
								  {
								  	"role": "RuntimeCommandClearance_Clearance_Target",
								  	"entitySet": "Clearances"
								  }
							  	]
							  },
							  {
							  	"name": "CommandCommand_CommandTemplate",
							  	"association": "Self.CommandCommand_CommandTemplate",
							  	"end": [
								  {
								  	"role": "CommandCommand_CommandTemplate_Source",
								  	"entitySet": "CommandCommands"
								  },
								  {
								  	"role": "CommandCommand_CommandTemplate_Target",
								  	"entitySet": "CommandTemplates"
								  }
							  	]
							  },
							  {
							  	"name": "CommandCommand_Parent",
							  	"association": "Self.CommandCommand_Parent",
							  	"end": [
								  {
								  	"role": "CommandCommand_Parent_Source",
								  	"entitySet": "CommandCommands"
								  },
								  {
								  	"role": "CommandCommand_Parent_Target",
								  	"entitySet": "Commands"
								  }
							  	]
							  },
							  {
							  	"name": "RuntimeCommandClearance_Command",
							  	"association": "Self.RuntimeCommandClearance_Command",
							  	"end": [
								  {
								  	"role": "RuntimeCommandClearance_Command_Source",
								  	"entitySet": "CommandClearances"
								  },
								  {
								  	"role": "RuntimeCommandClearance_Command_Target",
								  	"entitySet": "Commands"
								  }
							  	]
							  },
							  {
							  	"name": "CommandClearanceCommand_CommandTemplate",
							  	"association": "Self.CommandClearanceCommand_CommandTemplate",
							  	"end": [
								  {
								  	"role": "CommandClearanceCommand_CommandTemplate_Target",
								  	"entitySet": "CommandTemplates"
								  },
								  {
								  	"role": "CommandClearanceCommand_CommandTemplate_Source",
								  	"entitySet": "CommandClearanceCommands"
								  }
							  	]
							  },
							  {
							  	"name": "CommandClearanceCommand_Parent",
							  	"association": "Self.CommandClearanceCommand_Parent",
							  	"end": [
								  {
								  	"role": "CommandClearanceCommand_Parent_Source",
								  	"entitySet": "CommandClearanceCommands"
								  },
								  {
								  	"role": "CommandClearanceCommand_Parent_Target",
								  	"entitySet": "CommandClearances"
								  }
							  	]
							  },
							  {
							  	"name": "AlarmSeverityCommand_CommandTemplate",
							  	"association": "Self.AlarmSeverityCommand_CommandTemplate",
							  	"end": [
								  {
								  	"role": "AlarmSeverityCommand_CommandTemplate_Source",
								  	"entitySet": "AlarmSeverityCommands"
								  },
								  {
								  	"role": "AlarmSeverityCommand_CommandTemplate_Target",
								  	"entitySet": "CommandTemplates"
								  }
							  	]
							  },
							  {
							  	"name": "AlarmSeverityCommand_Parent",
							  	"association": "Self.AlarmSeverityCommand_Parent",
							  	"end": [
								  {
								  	"role": "AlarmSeverityCommand_Parent_Source",
								  	"entitySet": "AlarmSeverityCommands"
								  },
								  {
								  	"role": "AlarmSeverityCommand_Parent_Target",
								  	"entitySet": "AlarmSeverities"
								  }
							  	]
							  },
							  {
							  	"name": "RuntimeSite_AlarmSeverities",
							  	"association": "Self.RuntimeSite_AlarmSeverities",
							  	"end": [
								  {
								  	"role": "RuntimeSite_AlarmSeverities_Source",
								  	"entitySet": "Sites"
								  },
								  {
								  	"role": "RuntimeSite_AlarmSeverities_Target",
								  	"entitySet": "AlarmSeverities"
								  }
							  	]
							  },
							  {
							  	"name": "RuntimeSite_Clearances",
							  	"association": "Self.RuntimeSite_Clearances",
							  	"end": [
								  {
								  	"role": "RuntimeSite_Clearances_Source",
								  	"entitySet": "Sites"
								  },
								  {
								  	"role": "RuntimeSite_Clearances_Target",
								  	"entitySet": "Clearances"
								  }
							  	]
							  },
							  {
							  	"name": "SiteCommand_CommandTemplate",
							  	"association": "Self.SiteCommand_CommandTemplate",
							  	"end": [
								  {
								  	"role": "SiteCommand_CommandTemplate_Source",
								  	"entitySet": "SiteCommands"
								  },
								  {
								  	"role": "SiteCommand_CommandTemplate_Target",
								  	"entitySet": "CommandTemplates"
								  }
							  	]
							  },
							  {
							  	"name": "SiteCommand_Parent",
							  	"association": "Self.SiteCommand_Parent",
							  	"end": [
								  {
								  	"role": "SiteCommand_Parent_Source",
								  	"entitySet": "SiteCommands"
								  },
								  {
								  	"role": "SiteCommand_Parent_Target",
								  	"entitySet": "Sites"
								  }
							  	]
							  },
							  {
							  	"name": "DeviceCommand_CommandTemplate",
							  	"association": "Self.DeviceCommand_CommandTemplate",
							  	"end": [
								  {
								  	"role": "DeviceCommand_CommandTemplate_Source",
								  	"entitySet": "DeviceCommands"
								  },
								  {
								  	"role": "DeviceCommand_CommandTemplate_Target",
								  	"entitySet": "CommandTemplates"
								  }
							  	]
							  },
							  {
							  	"name": "DeviceCommand_Parent",
							  	"association": "Self.DeviceCommand_Parent",
							  	"end": [
								  {
								  	"role": "DeviceCommand_Parent_Source",
								  	"entitySet": "DeviceCommands"
								  },
								  {
								  	"role": "DeviceCommand_Parent_Target",
								  	"entitySet": "Devices"
								  }
							  	]
							  },
							  {
							  	"name": "DeviceDisplayCommand_CommandTemplate",
							  	"association": "Self.DeviceDisplayCommand_CommandTemplate",
							  	"end": [
								  {
								  	"role": "DeviceDisplayCommand_CommandTemplate_Source",
								  	"entitySet": "DeviceDisplayCommands"
								  },
								  {
								  	"role": "DeviceDisplayCommand_CommandTemplate_Target",
								  	"entitySet": "CommandTemplates"
								  }
							  	]
							  },
							  {
							  	"name": "DeviceDisplayCommand_Parent",
							  	"association": "Self.DeviceDisplayCommand_Parent",
							  	"end": [
								  {
								  	"role": "DeviceDisplayCommand_Parent_Source",
								  	"entitySet": "DeviceDisplayCommands"
								  },
								  {
								  	"role": "DeviceDisplayCommand_Parent_Target",
								  	"entitySet": "DeviceDisplays"
								  }
							  	]
							  },
							  {
							  	"name": "RuntimeDeviceDisplay_Device",
							  	"association": "Self.RuntimeDeviceDisplay_Device",
							  	"end": [
								  {
								  	"role": "RuntimeDeviceDisplay_Device_Source",
								  	"entitySet": "DeviceDisplays"
								  },
								  {
								  	"role": "RuntimeDeviceDisplay_Device_Target",
								  	"entitySet": "Devices"
								  }
							  	]
							  },
							  {
							  	"name": "DeviceInstanceCommand_CommandTemplate",
							  	"association": "Self.DeviceInstanceCommand_CommandTemplate",
							  	"end": [
								  {
								  	"role": "DeviceInstanceCommand_CommandTemplate_Source",
								  	"entitySet": "DeviceInstanceCommands"
								  },
								  {
								  	"role": "DeviceInstanceCommand_CommandTemplate_Target",
								  	"entitySet": "CommandTemplates"
								  }
							  	]
							  },
							  {
							  	"name": "DeviceInstanceCommand_Parent",
							  	"association": "Self.DeviceInstanceCommand_Parent",
							  	"end": [
								  {
								  	"role": "DeviceInstanceCommand_Parent_Source",
								  	"entitySet": "DeviceInstanceCommands"
								  },
								  {
								  	"role": "DeviceInstanceCommand_Parent_Target",
								  	"entitySet": "DeviceInstances"
								  }
							  	]
							  },
							  {
							  	"name": "RuntimeDeviceInstance_Device",
							  	"association": "Self.RuntimeDeviceInstance_Device",
							  	"end": [
								  {
								  	"role": "RuntimeDeviceInstance_Device_Source",
								  	"entitySet": "DeviceInstances"
								  },
								  {
								  	"role": "RuntimeDeviceInstance_Device_Target",
								  	"entitySet": "Devices"
								  }
							  	]
							  },
							  {
							  	"name": "DeviceInstanceDisplayCommand_CommandTemplate",
							  	"association": "Self.DeviceInstanceDisplayCommand_CommandTemplate",
							  	"end": [
								  {
								  	"role": "DeviceInstanceDisplayCommand_CommandTemplate_Source",
								  	"entitySet": "DeviceInstanceDisplayCommands"
								  },
								  {
								  	"role": "DeviceInstanceDisplayCommand_CommandTemplate_Target",
								  	"entitySet": "CommandTemplates"
								  }
							  	]
							  },
							  {
							  	"name": "DeviceInstanceDisplayCommand_Parent",
							  	"association": "Self.DeviceInstanceDisplayCommand_Parent",
							  	"end": [
								  {
								  	"role": "DeviceInstanceDisplayCommand_Parent_Source",
								  	"entitySet": "DeviceInstanceDisplayCommands"
								  },
								  {
								  	"role": "DeviceInstanceDisplayCommand_Parent_Target",
								  	"entitySet": "DeviceInstanceDisplays"
								  }
							  	]
							  },
							  {
							  	"name": "RuntimeDeviceInstanceDisplay_DeviceDisplay",
							  	"association": "Self.RuntimeDeviceInstanceDisplay_DeviceDisplay",
							  	"end": [
								  {
								  	"role": "RuntimeDeviceInstanceDisplay_DeviceDisplay_Source",
								  	"entitySet": "DeviceInstanceDisplays"
								  },
								  {
								  	"role": "RuntimeDeviceInstanceDisplay_DeviceDisplay_Target",
								  	"entitySet": "DeviceDisplays"
								  }
							  	]
							  },
							  {
							  	"name": "RuntimeDeviceInstanceDisplay_DeviceInstance",
							  	"association": "Self.RuntimeDeviceInstanceDisplay_DeviceInstance",
							  	"end": [
								  {
								  	"role": "RuntimeDeviceInstanceDisplay_DeviceInstance_Source",
								  	"entitySet": "DeviceInstanceDisplays"
								  },
								  {
								  	"role": "RuntimeDeviceInstanceDisplay_DeviceInstance_Target",
								  	"entitySet": "DeviceInstances"
								  }
							  	]
							  },
							  {
							  	"name": "DeviceInstanceTagCommand_CommandTemplate",
							  	"association": "Self.DeviceInstanceTagCommand_CommandTemplate",
							  	"end": [
								  {
								  	"role": "DeviceInstanceTagCommand_CommandTemplate_Source",
								  	"entitySet": "DeviceInstanceTagCommands"
								  },
								  {
								  	"role": "DeviceInstanceTagCommand_CommandTemplate_Target",
								  	"entitySet": "CommandTemplates"
								  }
							  	]
							  },
							  {
							  	"name": "DeviceInstanceTagCommand_Parent",
							  	"association": "Self.DeviceInstanceTagCommand_Parent",
							  	"end": [
								  {
								  	"role": "DeviceInstanceTagCommand_Parent_Source",
								  	"entitySet": "DeviceInstanceTagCommands"
								  },
								  {
								  	"role": "DeviceInstanceTagCommand_Parent_Target",
								  	"entitySet": "DeviceInstanceTags"
								  }
							  	]
							  },
							  {
							  	"name": "RuntimeDeviceInstanceTag_DeviceInstance",
							  	"association": "Self.RuntimeDeviceInstanceTag_DeviceInstance",
							  	"end": [
								  {
								  	"role": "RuntimeDeviceInstanceTag_DeviceInstance_Source",
								  	"entitySet": "DeviceInstanceTags"
								  },
								  {
								  	"role": "RuntimeDeviceInstanceTag_DeviceInstance_Target",
								  	"entitySet": "DeviceInstances"
								  }
							  	]
							  },
							  {
							  	"name": "RuntimeDeviceInstance_Unit",
							  	"association": "Self.RuntimeDeviceInstance_Unit",
							  	"end": [
								  {
								  	"role": "RuntimeDeviceInstance_Unit_Source",
								  	"entitySet": "DeviceInstances"
								  },
								  {
								  	"role": "RuntimeDeviceInstance_Unit_Target",
								  	"entitySet": "Units"
								  }
							  	]
							  },
							  {
							  	"name": "RuntimeDevice_Site",
							  	"association": "Self.RuntimeDevice_Site",
							  	"end": [
								  {
								  	"role": "RuntimeDevice_Site_Source",
								  	"entitySet": "Devices"
								  },
								  {
								  	"role": "RuntimeDevice_Site_Target",
								  	"entitySet": "Sites"
								  }
							  	]
							  },
							  {
							  	"name": "ApplicationCommand_CommandTemplate",
							  	"association": "Self.ApplicationCommand_CommandTemplate",
							  	"end": [
								  {
								  	"role": "ApplicationCommand_CommandTemplate_Source",
								  	"entitySet": "ApplicationCommands"
								  },
								  {
								  	"role": "ApplicationCommand_CommandTemplate_Target",
								  	"entitySet": "CommandTemplates"
								  }
							  	]
							  },
							  {
							  	"name": "ApplicationCommand_Parent",
							  	"association": "Self.ApplicationCommand_Parent",
							  	"end": [
								  {
								  	"role": "ApplicationCommand_Parent_Source",
								  	"entitySet": "ApplicationCommands"
								  },
								  {
								  	"role": "ApplicationCommand_Parent_Target",
								  	"entitySet": "Applications"
								  }
							  	]
							  },
							  {
							  	"name": "RuntimeApplication_Enterprises",
							  	"association": "Self.RuntimeApplication_Enterprises",
							  	"end": [
								  {
								  	"role": "RuntimeApplication_Enterprises_Source",
								  	"entitySet": "Applications"
								  },
								  {
								  	"role": "RuntimeApplication_Enterprises_Target",
								  	"entitySet": "Enterprises"
								  }
							  	]
							  },
							  {
							  	"name": "EnterpriseCommand_CommandTemplate",
							  	"association": "Self.EnterpriseCommand_CommandTemplate",
							  	"end": [
								  {
								  	"role": "EnterpriseCommand_CommandTemplate_Source",
								  	"entitySet": "EnterpriseCommands"
								  },
								  {
								  	"role": "EnterpriseCommand_CommandTemplate_Target",
								  	"entitySet": "CommandTemplates"
								  }
							  	]
							  },
							  {
							  	"name": "EnterpriseCommand_Parent",
							  	"association": "Self.EnterpriseCommand_Parent",
							  	"end": [
								  {
								  	"role": "EnterpriseCommand_Parent_Source",
								  	"entitySet": "EnterpriseCommands"
								  },
								  {
								  	"role": "EnterpriseCommand_Parent_Target",
								  	"entitySet": "Enterprises"
								  }
							  	]
							  },
							  {
							  	"name": "RuntimeEnterprise_Sites",
							  	"association": "Self.RuntimeEnterprise_Sites",
							  	"end": [
								  {
								  	"role": "RuntimeEnterprise_Sites_Source",
								  	"entitySet": "Enterprises"
								  },
								  {
								  	"role": "RuntimeEnterprise_Sites_Target",
								  	"entitySet": "Sites"
								  }
							  	]
							  },
							  {
							  	"name": "RuntimeSite_Zones",
							  	"association": "Self.RuntimeSite_Zones",
							  	"end": [
								  {
								  	"role": "RuntimeSite_Zones_Source",
								  	"entitySet": "Sites"
								  },
								  {
								  	"role": "RuntimeSite_Zones_Target",
								  	"entitySet": "Zones"
								  }
							  	]
							  },
							  {
							  	"name": "RuntimeAlarm_AlarmSeverity",
							  	"association": "Self.RuntimeAlarm_AlarmSeverity",
							  	"end": [
								  {
								  	"role": "RuntimeAlarm_AlarmSeverity_Source",
								  	"entitySet": "Alarms"
								  },
								  {
								  	"role": "RuntimeAlarm_AlarmSeverity_Target",
								  	"entitySet": "AlarmSeverities"
								  }
							  	]
							  },
							  {
							  	"name": "RuntimeAlarm_Commands",
							  	"association": "Self.RuntimeAlarm_Commands",
							  	"end": [
								  {
								  	"role": "RuntimeAlarm_Commands_Source",
								  	"entitySet": "Alarms"
								  },
								  {
								  	"role": "RuntimeAlarm_Commands_Target",
								  	"entitySet": "AlarmCommands"
								  }
							  	]
							  },
							  {
							  	"name": "RuntimeAlarm_Unit",
							  	"association": "Self.RuntimeAlarm_Unit",
							  	"end": [
								  {
								  	"role": "RuntimeAlarm_Unit_Source",
								  	"entitySet": "Alarms"
								  },
								  {
								  	"role": "RuntimeAlarm_Unit_Target",
								  	"entitySet": "Units"
								  }
							  	]
							  },
							  {
							  	"name": "RuntimeAlarmValue_Alarm",
							  	"association": "Self.RuntimeAlarmValue_Alarm",
							  	"end": [
								  {
								  	"role": "RuntimeAlarmValue_Alarm_Source",
								  	"entitySet": "AlarmValues"
								  },
								  {
								  	"role": "RuntimeAlarmValue_Alarm_Target",
								  	"entitySet": "Alarms"
								  }
							  	]
							  },
							  {
							  	"name": "AlarmValueCommand_CommandTemplate",
							  	"association": "Self.AlarmValueCommand_CommandTemplate",
							  	"end": [
								  {
								  	"role": "AlarmValueCommand_CommandTemplate_Source",
								  	"entitySet": "AlarmValueCommands"
								  },
								  {
								  	"role": "AlarmValueCommand_CommandTemplate_Target",
								  	"entitySet": "CommandTemplates"
								  }
							  	]
							  },
							  {
							  	"name": "AlarmValueCommand_Parent",
							  	"association": "Self.AlarmValueCommand_Parent",
							  	"end": [
								  {
								  	"role": "AlarmValueCommand_Parent_Source",
								  	"entitySet": "AlarmValueCommands"
								  },
								  {
								  	"role": "AlarmValueCommand_Parent_Target",
								  	"entitySet": "AlarmValues"
								  }
							  	]
							  },
							  {
							  	"name": "RuntimeUnit_AllocatedBatch",
							  	"association": "Self.RuntimeUnit_AllocatedBatch",
							  	"end": [
								  {
								  	"role": "RuntimeUnit_AllocatedBatch_Source",
								  	"entitySet": "Units"
								  },
								  {
								  	"role": "RuntimeUnit_AllocatedBatch_Target",
								  	"entitySet": "Batches"
								  }
							  	]
							  },
							  {
							  	"name": "BoolStepFormulaCommand_CommandTemplate",
							  	"association": "Self.BoolStepFormulaCommand_CommandTemplate",
							  	"end": [
								  {
								  	"role": "BoolStepFormulaCommand_CommandTemplate_Source",
								  	"entitySet": "BoolStepFormulaCommands"
								  },
								  {
								  	"role": "BoolStepFormulaCommand_CommandTemplate_Target",
								  	"entitySet": "CommandTemplates"
								  }
							  	]
							  },
							  {
							  	"name": "BoolStepFormulaCommand_Parent",
							  	"association": "Self.BoolStepFormulaCommand_Parent",
							  	"end": [
								  {
								  	"role": "BoolStepFormulaCommand_Parent_Source",
								  	"entitySet": "BoolStepFormulaCommands"
								  },
								  {
								  	"role": "BoolStepFormulaCommand_Parent_Target",
								  	"entitySet": "BoolStepFormulae"
								  }
							  	]
							  },
							  {
							  	"name": "BoolParameterCommand_CommandTemplate",
							  	"association": "Self.BoolParameterCommand_CommandTemplate",
							  	"end": [
								  {
								  	"role": "BoolParameterCommand_CommandTemplate_Source",
								  	"entitySet": "BoolParameterCommands"
								  },
								  {
								  	"role": "BoolParameterCommand_CommandTemplate_Target",
								  	"entitySet": "CommandTemplates"
								  }
							  	]
							  },
							  {
							  	"name": "BoolParameterCommand_Parent",
							  	"association": "Self.BoolParameterCommand_Parent",
							  	"end": [
								  {
								  	"role": "BoolParameterCommand_Parent_Source",
								  	"entitySet": "BoolParameterCommands"
								  },
								  {
								  	"role": "BoolParameterCommand_Parent_Target",
								  	"entitySet": "BoolParameters"
								  }
							  	]
							  },
							  {
							  	"name": "BoolEnumerationCommand_CommandTemplate",
							  	"association": "Self.BoolEnumerationCommand_CommandTemplate",
							  	"end": [
								  {
								  	"role": "BoolEnumerationCommand_CommandTemplate_Source",
								  	"entitySet": "BoolEnumerationCommands"
								  },
								  {
								  	"role": "BoolEnumerationCommand_CommandTemplate_Target",
								  	"entitySet": "CommandTemplates"
								  }
							  	]
							  },
							  {
							  	"name": "BoolEnumerationCommand_Parent",
							  	"association": "Self.BoolEnumerationCommand_Parent",
							  	"end": [
								  {
								  	"role": "BoolEnumerationCommand_Parent_Source",
								  	"entitySet": "BoolEnumerationCommands"
								  },
								  {
								  	"role": "BoolEnumerationCommand_Parent_Target",
								  	"entitySet": "BoolEnumerations"
								  }
							  	]
							  },
							  {
							  	"name": "RuntimeBoolEnumeration_Parameter",
							  	"association": "Self.RuntimeBoolEnumeration_Parameter",
							  	"end": [
								  {
								  	"role": "RuntimeBoolEnumeration_Parameter_Source",
								  	"entitySet": "BoolEnumerations"
								  },
								  {
								  	"role": "RuntimeBoolEnumeration_Parameter_Target",
								  	"entitySet": "BoolParameters"
								  }
							  	]
							  },
							  {
							  	"name": "RuntimeOperation_BoolParameters",
							  	"association": "Self.RuntimeOperation_BoolParameters",
							  	"end": [
								  {
								  	"role": "RuntimeOperation_BoolParameters_Source",
								  	"entitySet": "Operations"
								  },
								  {
								  	"role": "RuntimeOperation_BoolParameters_Target",
								  	"entitySet": "BoolParameters"
								  }
							  	]
							  },
							  {
							  	"name": "OperationCommand_CommandTemplate",
							  	"association": "Self.OperationCommand_CommandTemplate",
							  	"end": [
								  {
								  	"role": "OperationCommand_CommandTemplate_Source",
								  	"entitySet": "OperationCommands"
								  },
								  {
								  	"role": "OperationCommand_CommandTemplate_Target",
								  	"entitySet": "CommandTemplates"
								  }
							  	]
							  },
							  {
							  	"name": "OperationCommand_Parent",
							  	"association": "Self.OperationCommand_Parent",
							  	"end": [
								  {
								  	"role": "OperationCommand_Parent_Source",
								  	"entitySet": "OperationCommands"
								  },
								  {
								  	"role": "OperationCommand_Parent_Target",
								  	"entitySet": "Operations"
								  }
							  	]
							  },
							  {
							  	"name": "DoubleParameterCommand_CommandTemplate",
							  	"association": "Self.DoubleParameterCommand_CommandTemplate",
							  	"end": [
								  {
								  	"role": "DoubleParameterCommand_CommandTemplate_Source",
								  	"entitySet": "DoubleParameterCommands"
								  },
								  {
								  	"role": "DoubleParameterCommand_CommandTemplate_Target",
								  	"entitySet": "CommandTemplates"
								  }
							  	]
							  },
							  {
							  	"name": "DoubleParameterCommand_Parent",
							  	"association": "Self.DoubleParameterCommand_Parent",
							  	"end": [
								  {
								  	"role": "DoubleParameterCommand_Parent_Source",
								  	"entitySet": "DoubleParameterCommands"
								  },
								  {
								  	"role": "DoubleParameterCommand_Parent_Target",
								  	"entitySet": "DoubleParameters"
								  }
							  	]
							  },
							  {
							  	"name": "RuntimeDoubleParameter_Operation",
							  	"association": "Self.RuntimeDoubleParameter_Operation",
							  	"end": [
								  {
								  	"role": "RuntimeDoubleParameter_Operation_Source",
								  	"entitySet": "DoubleParameters"
								  },
								  {
								  	"role": "RuntimeDoubleParameter_Operation_Target",
								  	"entitySet": "Operations"
								  }
							  	]
							  },
							  {
							  	"name": "DoubleStepFormulaCommand_CommandTemplate",
							  	"association": "Self.DoubleStepFormulaCommand_CommandTemplate",
							  	"end": [
								  {
								  	"role": "DoubleStepFormulaCommand_CommandTemplate_Source",
								  	"entitySet": "DoubleStepFormulaCommands"
								  },
								  {
								  	"role": "DoubleStepFormulaCommand_CommandTemplate_Target",
								  	"entitySet": "CommandTemplates"
								  }
							  	]
							  },
							  {
							  	"name": "DoubleStepFormulaCommand_Parent",
							  	"association": "Self.DoubleStepFormulaCommand_Parent",
							  	"end": [
								  {
								  	"role": "DoubleStepFormulaCommand_Parent_Source",
								  	"entitySet": "DoubleStepFormulaCommands"
								  },
								  {
								  	"role": "DoubleStepFormulaCommand_Parent_Target",
								  	"entitySet": "DoubleStepFormulae"
								  }
							  	]
							  },
							  {
							  	"name": "DoubleStepFormula_Parameter",
							  	"association": "Self.DoubleStepFormula_Parameter",
							  	"end": [
								  {
								  	"role": "DoubleStepFormula_Parameter_Source",
								  	"entitySet": "DoubleStepFormulae"
								  },
								  {
								  	"role": "DoubleStepFormula_Parameter_Target",
								  	"entitySet": "DoubleParameters"
								  }
							  	]
							  },
							  {
							  	"name": "DoubleStepFormula_Step",
							  	"association": "Self.DoubleStepFormula_Step",
							  	"end": [
								  {
								  	"role": "DoubleStepFormula_Step_Source",
								  	"entitySet": "DoubleStepFormulae"
								  },
								  {
								  	"role": "DoubleStepFormula_Step_Target",
								  	"entitySet": "Steps"
								  }
							  	]
							  },
							  {
							  	"name": "IntegerParameterCommand_CommandTemplate",
							  	"association": "Self.IntegerParameterCommand_CommandTemplate",
							  	"end": [
								  {
								  	"role": "IntegerParameterCommand_CommandTemplate_Source",
								  	"entitySet": "IntegerParameterCommands"
								  },
								  {
								  	"role": "IntegerParameterCommand_CommandTemplate_Target",
								  	"entitySet": "CommandTemplates"
								  }
							  	]
							  },
							  {
							  	"name": "IntegerParameterCommand_Parent",
							  	"association": "Self.IntegerParameterCommand_Parent",
							  	"end": [
								  {
								  	"role": "IntegerParameterCommand_Parent_Source",
								  	"entitySet": "IntegerParameterCommands"
								  },
								  {
								  	"role": "IntegerParameterCommand_Parent_Target",
								  	"entitySet": "IntegerParameters"
								  }
							  	]
							  },
							  {
							  	"name": "IntegerEnumerationCommand_CommandTemplate",
							  	"association": "Self.IntegerEnumerationCommand_CommandTemplate",
							  	"end": [
								  {
								  	"role": "IntegerEnumerationCommand_CommandTemplate_Source",
								  	"entitySet": "IntegerEnumerationCommands"
								  },
								  {
								  	"role": "IntegerEnumerationCommand_CommandTemplate_Target",
								  	"entitySet": "CommandTemplates"
								  }
							  	]
							  },
							  {
							  	"name": "IntegerEnumerationCommand_Parent",
							  	"association": "Self.IntegerEnumerationCommand_Parent",
							  	"end": [
								  {
								  	"role": "IntegerEnumerationCommand_Parent_Source",
								  	"entitySet": "IntegerEnumerationCommands"
								  },
								  {
								  	"role": "IntegerEnumerationCommand_Parent_Target",
								  	"entitySet": "IntegerEnumerations"
								  }
							  	]
							  },
							  {
							  	"name": "RuntimeIntegerEnumeration_Parameter",
							  	"association": "Self.RuntimeIntegerEnumeration_Parameter",
							  	"end": [
								  {
								  	"role": "RuntimeIntegerEnumeration_Parameter_Source",
								  	"entitySet": "IntegerEnumerations"
								  },
								  {
								  	"role": "RuntimeIntegerEnumeration_Parameter_Target",
								  	"entitySet": "IntegerParameters"
								  }
							  	]
							  },
							  {
							  	"name": "RuntimeIntegerParameter_Operation",
							  	"association": "Self.RuntimeIntegerParameter_Operation",
							  	"end": [
								  {
								  	"role": "RuntimeIntegerParameter_Operation_Source",
								  	"entitySet": "IntegerParameters"
								  },
								  {
								  	"role": "RuntimeIntegerParameter_Operation_Target",
								  	"entitySet": "Operations"
								  }
							  	]
							  },
							  {
							  	"name": "IntegerStepFormulaCommand_CommandTemplate",
							  	"association": "Self.IntegerStepFormulaCommand_CommandTemplate",
							  	"end": [
								  {
								  	"role": "IntegerStepFormulaCommand_CommandTemplate_Source",
								  	"entitySet": "IntegerStepFormulaCommands"
								  },
								  {
								  	"role": "IntegerStepFormulaCommand_CommandTemplate_Target",
								  	"entitySet": "CommandTemplates"
								  }
							  	]
							  },
							  {
							  	"name": "IntegerStepFormulaCommand_Parent",
							  	"association": "Self.IntegerStepFormulaCommand_Parent",
							  	"end": [
								  {
								  	"role": "IntegerStepFormulaCommand_Parent_Source",
								  	"entitySet": "IntegerStepFormulaCommands"
								  },
								  {
								  	"role": "IntegerStepFormulaCommand_Parent_Target",
								  	"entitySet": "IntegerStepFormulae"
								  }
							  	]
							  },
							  {
							  	"name": "IntegerStepFormula_Parameter",
							  	"association": "Self.IntegerStepFormula_Parameter",
							  	"end": [
								  {
								  	"role": "IntegerStepFormula_Parameter_Source",
								  	"entitySet": "IntegerStepFormulae"
								  },
								  {
								  	"role": "IntegerStepFormula_Parameter_Target",
								  	"entitySet": "IntegerParameters"
								  }
							  	]
							  },
							  {
							  	"name": "IntegerStepFormula_Step",
							  	"association": "Self.IntegerStepFormula_Step",
							  	"end": [
								  {
								  	"role": "IntegerStepFormula_Step_Source",
								  	"entitySet": "IntegerStepFormulae"
								  },
								  {
								  	"role": "IntegerStepFormula_Step_Target",
								  	"entitySet": "Steps"
								  }
							  	]
							  },
							  {
							  	"name": "ReportCommand_CommandTemplate",
							  	"association": "Self.ReportCommand_CommandTemplate",
							  	"end": [
								  {
								  	"role": "ReportCommand_CommandTemplate_Source",
								  	"entitySet": "ReportCommands"
								  },
								  {
								  	"role": "ReportCommand_CommandTemplate_Target",
								  	"entitySet": "CommandTemplates"
								  }
							  	]
							  },
							  {
							  	"name": "ReportCommand_Parent",
							  	"association": "Self.ReportCommand_Parent",
							  	"end": [
								  {
								  	"role": "ReportCommand_Parent_Source",
								  	"entitySet": "ReportCommands"
								  },
								  {
								  	"role": "ReportCommand_Parent_Target",
								  	"entitySet": "Reports"
								  }
							  	]
							  },
							  {
							  	"name": "RuntimeReport_Operation",
							  	"association": "Self.RuntimeReport_Operation",
							  	"end": [
								  {
								  	"role": "RuntimeReport_Operation_Source",
								  	"entitySet": "Reports"
								  },
								  {
								  	"role": "RuntimeReport_Operation_Target",
								  	"entitySet": "Operations"
								  }
							  	]
							  },
							  {
							  	"name": "StepReportCommand_CommandTemplate",
							  	"association": "Self.StepReportCommand_CommandTemplate",
							  	"end": [
								  {
								  	"role": "StepReportCommand_CommandTemplate_Source",
								  	"entitySet": "StepReportCommands"
								  },
								  {
								  	"role": "StepReportCommand_CommandTemplate_Target",
								  	"entitySet": "CommandTemplates"
								  }
							  	]
							  },
							  {
							  	"name": "StepReportCommand_Parent",
							  	"association": "Self.StepReportCommand_Parent",
							  	"end": [
								  {
								  	"role": "StepReportCommand_Parent_Source",
								  	"entitySet": "StepReportCommands"
								  },
								  {
								  	"role": "StepReportCommand_Parent_Target",
								  	"entitySet": "StepReports"
								  }
							  	]
							  },
							  {
							  	"name": "StepReport_Parameter",
							  	"association": "Self.StepReport_Parameter",
							  	"end": [
								  {
								  	"role": "StepReport_Parameter_Source",
								  	"entitySet": "StepReports"
								  },
								  {
								  	"role": "StepReport_Parameter_Target",
								  	"entitySet": "Reports"
								  }
							  	]
							  },
							  {
							  	"name": "StepReport_Step",
							  	"association": "Self.StepReport_Step",
							  	"end": [
								  {
								  	"role": "StepReport_Step_Source",
								  	"entitySet": "StepReports"
								  },
								  {
								  	"role": "StepReport_Step_Target",
								  	"entitySet": "Steps"
								  }
							  	]
							  },
							  {
							  	"name": "StringParameterCommand_CommandTemplate",
							  	"association": "Self.StringParameterCommand_CommandTemplate",
							  	"end": [
								  {
								  	"role": "StringParameterCommand_CommandTemplate_Source",
								  	"entitySet": "StringParameterCommands"
								  },
								  {
								  	"role": "StringParameterCommand_CommandTemplate_Target",
								  	"entitySet": "CommandTemplates"
								  }
							  	]
							  },
							  {
							  	"name": "StringParameterCommand_Parent",
							  	"association": "Self.StringParameterCommand_Parent",
							  	"end": [
								  {
								  	"role": "StringParameterCommand_Parent_Source",
								  	"entitySet": "StringParameterCommands"
								  },
								  {
								  	"role": "StringParameterCommand_Parent_Target",
								  	"entitySet": "StringParameters"
								  }
							  	]
							  },
							  {
							  	"name": "RuntimeStringParameter_Operation",
							  	"association": "Self.RuntimeStringParameter_Operation",
							  	"end": [
								  {
								  	"role": "RuntimeStringParameter_Operation_Source",
								  	"entitySet": "StringParameters"
								  },
								  {
								  	"role": "RuntimeStringParameter_Operation_Target",
								  	"entitySet": "Operations"
								  }
							  	]
							  },
							  {
							  	"name": "StringStepFormulaCommand_CommandTemplate",
							  	"association": "Self.StringStepFormulaCommand_CommandTemplate",
							  	"end": [
								  {
								  	"role": "StringStepFormulaCommand_CommandTemplate_Source",
								  	"entitySet": "StringStepFormulaCommands"
								  },
								  {
								  	"role": "StringStepFormulaCommand_CommandTemplate_Target",
								  	"entitySet": "CommandTemplates"
								  }
							  	]
							  },
							  {
							  	"name": "StringStepFormulaCommand_Parent",
							  	"association": "Self.StringStepFormulaCommand_Parent",
							  	"end": [
								  {
								  	"role": "StringStepFormulaCommand_Parent_Source",
								  	"entitySet": "StringStepFormulaCommands"
								  },
								  {
								  	"role": "StringStepFormulaCommand_Parent_Target",
								  	"entitySet": "StringStepFormulae"
								  }
							  	]
							  },
							  {
							  	"name": "StringStepFormula_Parameter",
							  	"association": "Self.StringStepFormula_Parameter",
							  	"end": [
								  {
								  	"role": "StringStepFormula_Parameter_Source",
								  	"entitySet": "StringStepFormulae"
								  },
								  {
								  	"role": "StringStepFormula_Parameter_Target",
								  	"entitySet": "StringParameters"
								  }
							  	]
							  },
							  {
							  	"name": "StringStepFormula_Step",
							  	"association": "Self.StringStepFormula_Step",
							  	"end": [
								  {
								  	"role": "StringStepFormula_Step_Source",
								  	"entitySet": "StringStepFormulae"
								  },
								  {
								  	"role": "StringStepFormula_Step_Target",
								  	"entitySet": "Steps"
								  }
							  	]
							  },
							  {
							  	"name": "RuntimeOperation_Unit",
							  	"association": "Self.RuntimeOperation_Unit",
							  	"end": [
								  {
								  	"role": "RuntimeOperation_Unit_Source",
								  	"entitySet": "Operations"
								  },
								  {
								  	"role": "RuntimeOperation_Unit_Target",
								  	"entitySet": "Units"
								  }
							  	]
							  },
							  {
							  	"name": "BoolStepFormula_Parameter",
							  	"association": "Self.BoolStepFormula_Parameter",
							  	"end": [
								  {
								  	"role": "BoolStepFormula_Parameter_Source",
								  	"entitySet": "BoolStepFormulae"
								  },
								  {
								  	"role": "BoolStepFormula_Parameter_Target",
								  	"entitySet": "BoolParameters"
								  }
							  	]
							  },
							  {
							  	"name": "BoolStepFormula_Step",
							  	"association": "Self.BoolStepFormula_Step",
							  	"end": [
								  {
								  	"role": "BoolStepFormula_Step_Source",
								  	"entitySet": "BoolStepFormulae"
								  },
								  {
								  	"role": "BoolStepFormula_Step_Target",
								  	"entitySet": "Steps"
								  }
							  	]
							  },
							  {
							  	"name": "StepCommand_CommandTemplate",
							  	"association": "Self.StepCommand_CommandTemplate",
							  	"end": [
								  {
								  	"role": "StepCommand_CommandTemplate_Source",
								  	"entitySet": "StepCommands"
								  },
								  {
								  	"role": "StepCommand_CommandTemplate_Target",
								  	"entitySet": "CommandTemplates"
								  }
							  	]
							  },
							  {
							  	"name": "StepCommand_Parent",
							  	"association": "Self.StepCommand_Parent",
							  	"end": [
								  {
								  	"role": "StepCommand_Parent_Source",
								  	"entitySet": "StepCommands"
								  },
								  {
								  	"role": "StepCommand_Parent_Target",
								  	"entitySet": "Steps"
								  }
							  	]
							  },
							  {
							  	"name": "Step_Operation",
							  	"association": "Self.Step_Operation",
							  	"end": [
								  {
								  	"role": "Step_Operation_Source",
								  	"entitySet": "Steps"
								  },
								  {
								  	"role": "Step_Operation_Target",
								  	"entitySet": "Operations"
								  }
							  	]
							  },
							  {
							  	"name": "RuntimeUnitProcedure_AllocatedStep",
							  	"association": "Self.RuntimeUnitProcedure_AllocatedStep",
							  	"end": [
								  {
								  	"role": "RuntimeUnitProcedure_AllocatedStep_Source",
								  	"entitySet": "UnitProcedures"
								  },
								  {
								  	"role": "RuntimeUnitProcedure_AllocatedStep_Target",
								  	"entitySet": "Steps"
								  }
							  	]
							  },
							  {
							  	"name": "RuntimeUnitProcedure_Batch",
							  	"association": "Self.RuntimeUnitProcedure_Batch",
							  	"end": [
								  {
								  	"role": "RuntimeUnitProcedure_Batch_Source",
								  	"entitySet": "UnitProcedures"
								  },
								  {
								  	"role": "RuntimeUnitProcedure_Batch_Target",
								  	"entitySet": "Batches"
								  }
							  	]
							  },
							  {
							  	"name": "UnitProcedureCommand_CommandTemplate",
							  	"association": "Self.UnitProcedureCommand_CommandTemplate",
							  	"end": [
								  {
								  	"role": "UnitProcedureCommand_CommandTemplate_Source",
								  	"entitySet": "UnitProcedureCommands"
								  },
								  {
								  	"role": "UnitProcedureCommand_CommandTemplate_Target",
								  	"entitySet": "CommandTemplates"
								  }
							  	]
							  },
							  {
							  	"name": "UnitProcedureCommand_Parent",
							  	"association": "Self.UnitProcedureCommand_Parent",
							  	"end": [
								  {
								  	"role": "UnitProcedureCommand_Parent_Source",
								  	"entitySet": "UnitProcedureCommands"
								  },
								  {
								  	"role": "UnitProcedureCommand_Parent_Target",
								  	"entitySet": "UnitProcedures"
								  }
							  	]
							  },
							  {
							  	"name": "RuntimeUnitProcedure_Unit",
							  	"association": "Self.RuntimeUnitProcedure_Unit",
							  	"end": [
								  {
								  	"role": "RuntimeUnitProcedure_Unit_Source",
								  	"entitySet": "UnitProcedures"
								  },
								  {
								  	"role": "RuntimeUnitProcedure_Unit_Target",
								  	"entitySet": "Units"
								  }
							  	]
							  },
							  {
							  	"name": "Step_UnitProcedure",
							  	"association": "Self.Step_UnitProcedure",
							  	"end": [
								  {
								  	"role": "Step_UnitProcedure_Source",
								  	"entitySet": "Steps"
								  },
								  {
								  	"role": "Step_UnitProcedure_Target",
								  	"entitySet": "UnitProcedures"
								  }
							  	]
							  },
							  {
							  	"name": "RuntimeUnit_AllocatedStep",
							  	"association": "Self.RuntimeUnit_AllocatedStep",
							  	"end": [
								  {
								  	"role": "RuntimeUnit_AllocatedStep_Source",
								  	"entitySet": "Units"
								  },
								  {
								  	"role": "RuntimeUnit_AllocatedStep_Target",
								  	"entitySet": "Steps"
								  }
							  	]
							  },
							  {
							  	"name": "RuntimeUnit_AllocatedUnitProcedure",
							  	"association": "Self.RuntimeUnit_AllocatedUnitProcedure",
							  	"end": [
								  {
								  	"role": "RuntimeUnit_AllocatedUnitProcedure_Source",
								  	"entitySet": "Units"
								  },
								  {
								  	"role": "RuntimeUnit_AllocatedUnitProcedure_Target",
								  	"entitySet": "UnitProcedures"
								  }
							  	]
							  },
							  {
							  	"name": "BoolParameterNodeCommand_CommandTemplate",
							  	"association": "Self.BoolParameterNodeCommand_CommandTemplate",
							  	"end": [
								  {
								  	"role": "BoolParameterNodeCommand_CommandTemplate_Source",
								  	"entitySet": "BoolParameterNodeCommands"
								  },
								  {
								  	"role": "BoolParameterNodeCommand_CommandTemplate_Target",
								  	"entitySet": "CommandTemplates"
								  }
							  	]
							  },
							  {
							  	"name": "BoolParameterNodeCommand_Parent",
							  	"association": "Self.BoolParameterNodeCommand_Parent",
							  	"end": [
								  {
								  	"role": "BoolParameterNodeCommand_Parent_Source",
								  	"entitySet": "BoolParameterNodeCommands"
								  },
								  {
								  	"role": "BoolParameterNodeCommand_Parent_Target",
								  	"entitySet": "BoolParameterNodes"
								  }
							  	]
							  },
							  {
							  	"name": "RuntimeBoolParameterNode_Unit",
							  	"association": "Self.RuntimeBoolParameterNode_Unit",
							  	"end": [
								  {
								  	"role": "RuntimeBoolParameterNode_Unit_Source",
								  	"entitySet": "BoolParameterNodes"
								  },
								  {
								  	"role": "RuntimeBoolParameterNode_Unit_Target",
								  	"entitySet": "Units"
								  }
							  	]
							  },
							  {
							  	"name": "CommandNodeCommand_CommandTemplate",
							  	"association": "Self.CommandNodeCommand_CommandTemplate",
							  	"end": [
								  {
								  	"role": "CommandNodeCommand_CommandTemplate_Source",
								  	"entitySet": "CommandNodeCommands"
								  },
								  {
								  	"role": "CommandNodeCommand_CommandTemplate_Target",
								  	"entitySet": "CommandTemplates"
								  }
							  	]
							  },
							  {
							  	"name": "CommandNodeCommand_Parent",
							  	"association": "Self.CommandNodeCommand_Parent",
							  	"end": [
								  {
								  	"role": "CommandNodeCommand_Parent_Source",
								  	"entitySet": "CommandNodeCommands"
								  },
								  {
								  	"role": "CommandNodeCommand_Parent_Target",
								  	"entitySet": "CommandNodes"
								  }
							  	]
							  },
							  {
							  	"name": "RuntimeCommandNode_Unit",
							  	"association": "Self.RuntimeCommandNode_Unit",
							  	"end": [
								  {
								  	"role": "RuntimeCommandNode_Unit_Source",
								  	"entitySet": "CommandNodes"
								  },
								  {
								  	"role": "RuntimeCommandNode_Unit_Target",
								  	"entitySet": "Units"
								  }
							  	]
							  },
							  {
							  	"name": "UnitCommand_CommandTemplate",
							  	"association": "Self.UnitCommand_CommandTemplate",
							  	"end": [
								  {
								  	"role": "UnitCommand_CommandTemplate_Source",
								  	"entitySet": "UnitCommands"
								  },
								  {
								  	"role": "UnitCommand_CommandTemplate_Target",
								  	"entitySet": "CommandTemplates"
								  }
							  	]
							  },
							  {
							  	"name": "UnitCommand_Parent",
							  	"association": "Self.UnitCommand_Parent",
							  	"end": [
								  {
								  	"role": "UnitCommand_Parent_Source",
								  	"entitySet": "UnitCommands"
								  },
								  {
								  	"role": "UnitCommand_Parent_Target",
								  	"entitySet": "Units"
								  }
							  	]
							  },
							  {
							  	"name": "DataLogNodeCommand_CommandTemplate",
							  	"association": "Self.DataLogNodeCommand_CommandTemplate",
							  	"end": [
								  {
								  	"role": "DataLogNodeCommand_CommandTemplate_Source",
								  	"entitySet": "DataLogNodeCommands"
								  },
								  {
								  	"role": "DataLogNodeCommand_CommandTemplate_Target",
								  	"entitySet": "CommandTemplates"
								  }
							  	]
							  },
							  {
							  	"name": "DataLogNodeCommand_Parent",
							  	"association": "Self.DataLogNodeCommand_Parent",
							  	"end": [
								  {
								  	"role": "DataLogNodeCommand_Parent_Source",
								  	"entitySet": "DataLogNodeCommands"
								  },
								  {
								  	"role": "DataLogNodeCommand_Parent_Target",
								  	"entitySet": "DataLogNodes"
								  }
							  	]
							  },
							  {
							  	"name": "RuntimeDataLogNode_Unit",
							  	"association": "Self.RuntimeDataLogNode_Unit",
							  	"end": [
								  {
								  	"role": "RuntimeDataLogNode_Unit_Source",
								  	"entitySet": "DataLogNodes"
								  },
								  {
								  	"role": "RuntimeDataLogNode_Unit_Target",
								  	"entitySet": "Units"
								  }
							  	]
							  },
							  {
							  	"name": "DoubleParameterNodeCommand_CommandTemplate",
							  	"association": "Self.DoubleParameterNodeCommand_CommandTemplate",
							  	"end": [
								  {
								  	"role": "DoubleParameterNodeCommand_CommandTemplate_Source",
								  	"entitySet": "DoubleParameterNodeCommands"
								  },
								  {
								  	"role": "DoubleParameterNodeCommand_CommandTemplate_Target",
								  	"entitySet": "CommandTemplates"
								  }
							  	]
							  },
							  {
							  	"name": "DoubleParameterNodeCommand_Parent",
							  	"association": "Self.DoubleParameterNodeCommand_Parent",
							  	"end": [
								  {
								  	"role": "DoubleParameterNodeCommand_Parent_Source",
								  	"entitySet": "DoubleParameterNodeCommands"
								  },
								  {
								  	"role": "DoubleParameterNodeCommand_Parent_Target",
								  	"entitySet": "DoubleParameterNodes"
								  }
							  	]
							  },
							  {
							  	"name": "RuntimeDoubleParameterNode_Unit",
							  	"association": "Self.RuntimeDoubleParameterNode_Unit",
							  	"end": [
								  {
								  	"role": "RuntimeDoubleParameterNode_Unit_Source",
								  	"entitySet": "DoubleParameterNodes"
								  },
								  {
								  	"role": "RuntimeDoubleParameterNode_Unit_Target",
								  	"entitySet": "Units"
								  }
							  	]
							  },
							  {
							  	"name": "IntegerParameterNodeCommand_CommandTemplate",
							  	"association": "Self.IntegerParameterNodeCommand_CommandTemplate",
							  	"end": [
								  {
								  	"role": "IntegerParameterNodeCommand_CommandTemplate_Source",
								  	"entitySet": "IntegerParameterNodeCommands"
								  },
								  {
								  	"role": "IntegerParameterNodeCommand_CommandTemplate_Target",
								  	"entitySet": "CommandTemplates"
								  }
							  	]
							  },
							  {
							  	"name": "IntegerParameterNodeCommand_Parent",
							  	"association": "Self.IntegerParameterNodeCommand_Parent",
							  	"end": [
								  {
								  	"role": "IntegerParameterNodeCommand_Parent_Source",
								  	"entitySet": "IntegerParameterNodeCommands"
								  },
								  {
								  	"role": "IntegerParameterNodeCommand_Parent_Target",
								  	"entitySet": "IntegerParameterNodes"
								  }
							  	]
							  },
							  {
							  	"name": "RuntimeIntegerParameterNode_Unit",
							  	"association": "Self.RuntimeIntegerParameterNode_Unit",
							  	"end": [
								  {
								  	"role": "RuntimeIntegerParameterNode_Unit_Source",
								  	"entitySet": "IntegerParameterNodes"
								  },
								  {
								  	"role": "RuntimeIntegerParameterNode_Unit_Target",
								  	"entitySet": "Units"
								  }
							  	]
							  },
							  {
							  	"name": "NodePageCommand_CommandTemplate",
							  	"association": "Self.NodePageCommand_CommandTemplate",
							  	"end": [
								  {
								  	"role": "NodePageCommand_CommandTemplate_Source",
								  	"entitySet": "NodePageCommands"
								  },
								  {
								  	"role": "NodePageCommand_CommandTemplate_Target",
								  	"entitySet": "CommandTemplates"
								  }
							  	]
							  },
							  {
							  	"name": "NodePageCommand_Parent",
							  	"association": "Self.NodePageCommand_Parent",
							  	"end": [
								  {
								  	"role": "NodePageCommand_Parent_Source",
								  	"entitySet": "NodePageCommands"
								  },
								  {
								  	"role": "NodePageCommand_Parent_Target",
								  	"entitySet": "NodePages"
								  }
							  	]
							  },
							  {
							  	"name": "NodePageItemCommand_CommandTemplate",
							  	"association": "Self.NodePageItemCommand_CommandTemplate",
							  	"end": [
								  {
								  	"role": "NodePageItemCommand_CommandTemplate_Source",
								  	"entitySet": "NodePageItemCommands"
								  },
								  {
								  	"role": "NodePageItemCommand_CommandTemplate_Target",
								  	"entitySet": "CommandTemplates"
								  }
							  	]
							  },
							  {
							  	"name": "NodePageItemCommand_Parent",
							  	"association": "Self.NodePageItemCommand_Parent",
							  	"end": [
								  {
								  	"role": "NodePageItemCommand_Parent_Source",
								  	"entitySet": "NodePageItemCommands"
								  },
								  {
								  	"role": "NodePageItemCommand_Parent_Target",
								  	"entitySet": "NodePageItems"
								  }
							  	]
							  },
							  {
							  	"name": "RuntimeNodePageItem_NodePage",
							  	"association": "Self.RuntimeNodePageItem_NodePage",
							  	"end": [
								  {
								  	"role": "RuntimeNodePageItem_NodePage_Source",
								  	"entitySet": "NodePageItems"
								  },
								  {
								  	"role": "RuntimeNodePageItem_NodePage_Target",
								  	"entitySet": "NodePages"
								  }
							  	]
							  },
							  {
							  	"name": "RuntimeNodePage_Unit",
							  	"association": "Self.RuntimeNodePage_Unit",
							  	"end": [
								  {
								  	"role": "RuntimeNodePage_Unit_Source",
								  	"entitySet": "NodePages"
								  },
								  {
								  	"role": "RuntimeNodePage_Unit_Target",
								  	"entitySet": "Units"
								  }
							  	]
							  },
							  {
							  	"name": "ReportNodeCommand_CommandTemplate",
							  	"association": "Self.ReportNodeCommand_CommandTemplate",
							  	"end": [
								  {
								  	"role": "ReportNodeCommand_CommandTemplate_Source",
								  	"entitySet": "ReportNodeCommands"
								  },
								  {
								  	"role": "ReportNodeCommand_CommandTemplate_Target",
								  	"entitySet": "CommandTemplates"
								  }
							  	]
							  },
							  {
							  	"name": "ReportNodeCommand_Parent",
							  	"association": "Self.ReportNodeCommand_Parent",
							  	"end": [
								  {
								  	"role": "ReportNodeCommand_Parent_Source",
								  	"entitySet": "ReportNodeCommands"
								  },
								  {
								  	"role": "ReportNodeCommand_Parent_Target",
								  	"entitySet": "ReportNodes"
								  }
							  	]
							  },
							  {
							  	"name": "RuntimeReportNode_Unit",
							  	"association": "Self.RuntimeReportNode_Unit",
							  	"end": [
								  {
								  	"role": "RuntimeReportNode_Unit_Source",
								  	"entitySet": "ReportNodes"
								  },
								  {
								  	"role": "RuntimeReportNode_Unit_Target",
								  	"entitySet": "Units"
								  }
							  	]
							  },
							  {
							  	"name": "StateNodeCommand_CommandTemplate",
							  	"association": "Self.StateNodeCommand_CommandTemplate",
							  	"end": [
								  {
								  	"role": "StateNodeCommand_CommandTemplate_Source",
								  	"entitySet": "StateNodeCommands"
								  },
								  {
								  	"role": "StateNodeCommand_CommandTemplate_Target",
								  	"entitySet": "CommandTemplates"
								  }
							  	]
							  },
							  {
							  	"name": "StateNodeCommand_Parent",
							  	"association": "Self.StateNodeCommand_Parent",
							  	"end": [
								  {
								  	"role": "StateNodeCommand_Parent_Source",
								  	"entitySet": "StateNodeCommands"
								  },
								  {
								  	"role": "StateNodeCommand_Parent_Target",
								  	"entitySet": "StateNodes"
								  }
							  	]
							  },
							  {
							  	"name": "RuntimeStateNode_Unit",
							  	"association": "Self.RuntimeStateNode_Unit",
							  	"end": [
								  {
								  	"role": "RuntimeStateNode_Unit_Source",
								  	"entitySet": "StateNodes"
								  },
								  {
								  	"role": "RuntimeStateNode_Unit_Target",
								  	"entitySet": "Units"
								  }
							  	]
							  },
							  {
							  	"name": "StringParameterNodeCommand_CommandTemplate",
							  	"association": "Self.StringParameterNodeCommand_CommandTemplate",
							  	"end": [
								  {
								  	"role": "StringParameterNodeCommand_CommandTemplate_Source",
								  	"entitySet": "StringParameterNodeCommands"
								  },
								  {
								  	"role": "StringParameterNodeCommand_CommandTemplate_Target",
								  	"entitySet": "CommandTemplates"
								  }
							  	]
							  },
							  {
							  	"name": "StringParameterNodeCommand_Parent",
							  	"association": "Self.StringParameterNodeCommand_Parent",
							  	"end": [
								  {
								  	"role": "StringParameterNodeCommand_Parent_Source",
								  	"entitySet": "StringParameterNodeCommands"
								  },
								  {
								  	"role": "StringParameterNodeCommand_Parent_Target",
								  	"entitySet": "StringParameterNodes"
								  }
							  	]
							  },
							  {
							  	"name": "RuntimeStringParameterNode_Unit",
							  	"association": "Self.RuntimeStringParameterNode_Unit",
							  	"end": [
								  {
								  	"role": "RuntimeStringParameterNode_Unit_Source",
								  	"entitySet": "StringParameterNodes"
								  },
								  {
								  	"role": "RuntimeStringParameterNode_Unit_Target",
								  	"entitySet": "Units"
								  }
							  	]
							  },
							  {
							  	"name": "RuntimeUnit_Zone",
							  	"association": "Self.RuntimeUnit_Zone",
							  	"end": [
								  {
								  	"role": "RuntimeUnit_Zone_Source",
								  	"entitySet": "Units"
								  },
								  {
								  	"role": "RuntimeUnit_Zone_Target",
								  	"entitySet": "Zones"
								  }
							  	]
							  },
							  {
							  	"name": "BatchCommand_CommandTemplate",
							  	"association": "Self.BatchCommand_CommandTemplate",
							  	"end": [
								  {
								  	"role": "BatchCommand_CommandTemplate_Source",
								  	"entitySet": "BatchCommands"
								  },
								  {
								  	"role": "BatchCommand_CommandTemplate_Target",
								  	"entitySet": "CommandTemplates"
								  }
							  	]
							  },
							  {
							  	"name": "BatchCommand_Parent",
							  	"association": "Self.BatchCommand_Parent",
							  	"end": [
								  {
								  	"role": "BatchCommand_Parent_Source",
								  	"entitySet": "BatchCommands"
								  },
								  {
								  	"role": "BatchCommand_Parent_Target",
								  	"entitySet": "Batches"
								  }
							  	]
							  },
							  {
							  	"name": "Batch_Zone",
							  	"association": "Self.Batch_Zone",
							  	"end": [
								  {
								  	"role": "Batch_Zone_Source",
								  	"entitySet": "Batches"
								  },
								  {
								  	"role": "Batch_Zone_Target",
								  	"entitySet": "Zones"
								  }
							  	]
							  },
							  {
							  	"name": "ZoneCommand_CommandTemplate",
							  	"association": "Self.ZoneCommand_CommandTemplate",
							  	"end": [
								  {
								  	"role": "ZoneCommand_CommandTemplate_Source",
								  	"entitySet": "ZoneCommands"
								  },
								  {
								  	"role": "ZoneCommand_CommandTemplate_Target",
								  	"entitySet": "CommandTemplates"
								  }
							  	]
							  },
							  {
							  	"name": "ZoneCommand_Parent",
							  	"association": "Self.ZoneCommand_Parent",
							  	"end": [
								  {
								  	"role": "ZoneCommand_Parent_Source",
								  	"entitySet": "ZoneCommands"
								  },
								  {
								  	"role": "ZoneCommand_Parent_Target",
								  	"entitySet": "Zones"
								  }
							  	]
							  },
							  {
							  	"name": "GroupCommand_CommandTemplate",
							  	"association": "Self.GroupCommand_CommandTemplate",
							  	"end": [
								  {
								  	"role": "GroupCommand_CommandTemplate_Source",
								  	"entitySet": "GroupCommands"
								  },
								  {
								  	"role": "GroupCommand_CommandTemplate_Target",
								  	"entitySet": "CommandTemplates"
								  }
							  	]
							  },
							  {
							  	"name": "GroupCommand_Parent",
							  	"association": "Self.GroupCommand_Parent",
							  	"end": [
								  {
								  	"role": "GroupCommand_Parent_Source",
								  	"entitySet": "GroupCommands"
								  },
								  {
								  	"role": "GroupCommand_Parent_Target",
								  	"entitySet": "Groups"
								  }
							  	]
							  },
							  {
							  	"name": "RuntimeGroup_Zone",
							  	"association": "Self.RuntimeGroup_Zone",
							  	"end": [
								  {
								  	"role": "RuntimeGroup_Zone_Source",
								  	"entitySet": "Groups"
								  },
								  {
								  	"role": "RuntimeGroup_Zone_Target",
								  	"entitySet": "Zones"
								  }
							  	]
							  },
							  {
							  	"name": "RuntimeZoneClearance_Clearance",
							  	"association": "Self.RuntimeZoneClearance_Clearance",
							  	"end": [
								  {
								  	"role": "RuntimeZoneClearance_Clearance_Source",
								  	"entitySet": "ZoneClearances"
								  },
								  {
								  	"role": "RuntimeZoneClearance_Clearance_Target",
								  	"entitySet": "Clearances"
								  }
							  	]
							  },
							  {
							  	"name": "ZoneClearanceCommand_CommandTemplate",
							  	"association": "Self.ZoneClearanceCommand_CommandTemplate",
							  	"end": [
								  {
								  	"role": "ZoneClearanceCommand_CommandTemplate_Source",
								  	"entitySet": "ZoneClearanceCommands"
								  },
								  {
								  	"role": "ZoneClearanceCommand_CommandTemplate_Target",
								  	"entitySet": "CommandTemplates"
								  }
							  	]
							  },
							  {
							  	"name": "ZoneClearanceCommand_Parent",
							  	"association": "Self.ZoneClearanceCommand_Parent",
							  	"end": [
								  {
								  	"role": "ZoneClearanceCommand_Parent_Source",
								  	"entitySet": "ZoneClearanceCommands"
								  },
								  {
								  	"role": "ZoneClearanceCommand_Parent_Target",
								  	"entitySet": "ZoneClearances"
								  }
							  	]
							  },
							  {
							  	"name": "SignatureCommand_CommandTemplate",
							  	"association": "Self.SignatureCommand_CommandTemplate",
							  	"end": [
								  {
								  	"role": "SignatureCommand_CommandTemplate_Source",
								  	"entitySet": "SignatureCommands"
								  },
								  {
								  	"role": "SignatureCommand_CommandTemplate_Target",
								  	"entitySet": "CommandTemplates"
								  }
							  	]
							  },
							  {
							  	"name": "SignatureCommand_Parent",
							  	"association": "Self.SignatureCommand_Parent",
							  	"end": [
								  {
								  	"role": "SignatureCommand_Parent_Source",
								  	"entitySet": "SignatureCommands"
								  },
								  {
								  	"role": "SignatureCommand_Parent_Target",
								  	"entitySet": "Signatures"
								  }
							  	]
							  },
							  {
							  	"name": "RuntimeSignature_Group",
							  	"association": "Self.RuntimeSignature_Group",
							  	"end": [
								  {
								  	"role": "RuntimeSignature_Group_Source",
								  	"entitySet": "Signatures"
								  },
								  {
								  	"role": "RuntimeSignature_Group_Target",
								  	"entitySet": "Groups"
								  }
							  	]
							  },
							  {
							  	"name": "RuntimeSignature_ZoneClearance",
							  	"association": "Self.RuntimeSignature_ZoneClearance",
							  	"end": [
								  {
								  	"role": "RuntimeSignature_ZoneClearance_Source",
								  	"entitySet": "Signatures"
								  },
								  {
								  	"role": "RuntimeSignature_ZoneClearance_Target",
								  	"entitySet": "ZoneClearances"
								  }
							  	]
							  },
							  {
							  	"name": "RuntimeZoneClearance_Zone",
							  	"association": "Self.RuntimeZoneClearance_Zone",
							  	"end": [
								  {
								  	"role": "RuntimeZoneClearance_Zone_Source",
								  	"entitySet": "ZoneClearances"
								  },
								  {
								  	"role": "RuntimeZoneClearance_Zone_Target",
								  	"entitySet": "Zones"
								  }
							  	]
							  },
							  {
							  	"name": "RuntimeCommandClearance_Zone",
							  	"association": "Self.RuntimeCommandClearance_Zone",
							  	"end": [
								  {
								  	"role": "RuntimeCommandClearance_Zone_Source",
								  	"entitySet": "CommandClearances"
								  },
								  {
								  	"role": "RuntimeCommandClearance_Zone_Target",
								  	"entitySet": "Zones"
								  }
							  	]
							  },
							  {
							  	"name": "ClearanceCommand_CommandTemplate",
							  	"association": "Self.ClearanceCommand_CommandTemplate",
							  	"end": [
								  {
								  	"role": "ClearanceCommand_CommandTemplate_Source",
								  	"entitySet": "ClearanceCommands"
								  },
								  {
								  	"role": "ClearanceCommand_CommandTemplate_Target",
								  	"entitySet": "CommandTemplates"
								  }
							  	]
							  },
							  {
							  	"name": "ClearanceCommand_Parent",
							  	"association": "Self.ClearanceCommand_Parent",
							  	"end": [
								  {
								  	"role": "ClearanceCommand_Parent_Source",
								  	"entitySet": "ClearanceCommands"
								  },
								  {
								  	"role": "ClearanceCommand_Parent_Target",
								  	"entitySet": "Clearances"
								  }
							  	]
							  },
							  {
							  	"name": "RuntimeCommandTemplate_Clearance",
							  	"association": "Self.RuntimeCommandTemplate_Clearance",
							  	"end": [
								  {
								  	"role": "RuntimeCommandTemplate_Clearance_Source",
								  	"entitySet": "CommandTemplates"
								  },
								  {
								  	"role": "RuntimeCommandTemplate_Clearance_Target",
								  	"entitySet": "Clearances"
								  }
							  	]
							  },
							  {
							  	"name": "RuntimeCommandTemplate_Command",
							  	"association": "Self.RuntimeCommandTemplate_Command",
							  	"end": [
								  {
								  	"role": "RuntimeCommandTemplate_Command_Source",
								  	"entitySet": "CommandTemplates"
								  },
								  {
								  	"role": "RuntimeCommandTemplate_Command_Target",
								  	"entitySet": "Commands"
								  }
							  	]
							  },
							  {
							  	"name": "RuntimeCommandInstance_Command",
							  	"association": "Self.RuntimeCommandInstance_Command",
							  	"end": [
								  {
								  	"role": "RuntimeCommandInstance_Command_Source",
								  	"entitySet": "CommandInstances"
								  },
								  {
								  	"role": "RuntimeCommandInstance_Command_Target",
								  	"entitySet": "Commands"
								  }
							  	]
							  },
							  {
							  	"name": "RuntimeCommandInstance_CommandTemplate",
							  	"association": "Self.RuntimeCommandInstance_CommandTemplate",
							  	"end": [
								  {
								  	"role": "RuntimeCommandInstance_CommandTemplate_Source",
								  	"entitySet": "CommandInstances"
								  },
								  {
								  	"role": "RuntimeCommandInstance_CommandTemplate_Target",
								  	"entitySet": "CommandTemplates"
								  }
							  	]
							  },
							  {
							  	"name": "RuntimeCommandInstanceSignature_Command",
							  	"association": "Self.RuntimeCommandInstanceSignature_Command",
							  	"end": [
								  {
								  	"role": "RuntimeCommandInstanceSignature_Command_Source",
								  	"entitySet": "CommandInstanceSignatures"
								  },
								  {
								  	"role": "RuntimeCommandInstanceSignature_Command_Target",
								  	"entitySet": "CommandInstances"
								  }
							  	]
							  },
							  {
							  	"name": "RuntimeCommandInstanceSignature_Signature",
							  	"association": "Self.RuntimeCommandInstanceSignature_Signature",
							  	"end": [
								  {
								  	"role": "RuntimeCommandInstanceSignature_Signature_Source",
								  	"entitySet": "CommandInstanceSignatures"
								  },
								  {
								  	"role": "RuntimeCommandInstanceSignature_Signature_Target",
								  	"entitySet": "Signatures"
								  }
							  	]
							  },
							  {
							  	"name": "RuntimeCommandInstanceValue_Command",
							  	"association": "Self.RuntimeCommandInstanceValue_Command",
							  	"end": [
								  {
								  	"role": "RuntimeCommandInstanceValue_Command_Source",
								  	"entitySet": "CommandInstanceValues"
								  },
								  {
								  	"role": "RuntimeCommandInstanceValue_Command_Target",
								  	"entitySet": "CommandInstances"
								  }
							  	]
							  },
							  {
							  	"name": "RuntimeCommandInstanceValueData_CommandInstanceValue",
							  	"association": "Self.RuntimeCommandInstanceValueData_CommandInstanceValue",
							  	"end": [
								  {
								  	"role": "RuntimeCommandInstanceValueData_CommandInstanceValue_Source",
								  	"entitySet": "CommandInstanceValueData"
								  },
								  {
								  	"role": "RuntimeCommandInstanceValueData_CommandInstanceValue_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "RuntimeCommandInstance_Zone",
							  	"association": "Self.RuntimeCommandInstance_Zone",
							  	"end": [
								  {
								  	"role": "RuntimeCommandInstance_Zone_Source",
								  	"entitySet": "CommandInstances"
								  },
								  {
								  	"role": "RuntimeCommandInstance_Zone_Target",
								  	"entitySet": "Zones"
								  }
							  	]
							  },
							  {
							  	"name": "RuntimeCommandTemplateSignature_Command",
							  	"association": "Self.RuntimeCommandTemplateSignature_Command",
							  	"end": [
								  {
								  	"role": "RuntimeCommandTemplateSignature_Command_Source",
								  	"entitySet": "CommandTemplateSignatures"
								  },
								  {
								  	"role": "RuntimeCommandTemplateSignature_Command_Target",
								  	"entitySet": "CommandTemplates"
								  }
							  	]
							  },
							  {
							  	"name": "RuntimeCommandTemplateSignature_Signature",
							  	"association": "Self.RuntimeCommandTemplateSignature_Signature",
							  	"end": [
								  {
								  	"role": "RuntimeCommandTemplateSignature_Signature_Source",
								  	"entitySet": "CommandTemplateSignatures"
								  },
								  {
								  	"role": "RuntimeCommandTemplateSignature_Signature_Target",
								  	"entitySet": "Signatures"
								  }
							  	]
							  },
							  {
							  	"name": "RuntimeCommandTemplateValue_Command",
							  	"association": "Self.RuntimeCommandTemplateValue_Command",
							  	"end": [
								  {
								  	"role": "RuntimeCommandTemplateValue_Command_Source",
								  	"entitySet": "CommandTemplateValues"
								  },
								  {
								  	"role": "RuntimeCommandTemplateValue_Command_Target",
								  	"entitySet": "CommandTemplates"
								  }
							  	]
							  },
							  {
							  	"name": "RuntimeCommandTemplateValueData_CommandTemplateValue",
							  	"association": "Self.RuntimeCommandTemplateValueData_CommandTemplateValue",
							  	"end": [
								  {
								  	"role": "RuntimeCommandTemplateValueData_CommandTemplateValue_Source",
								  	"entitySet": "CommandTemplateValueData"
								  },
								  {
								  	"role": "RuntimeCommandTemplateValueData_CommandTemplateValue_Target",
								  	"entitySet": "CommandTemplateValues"
								  }
							  	]
							  },
							  {
							  	"name": "RuntimeCommandTemplate_Zone",
							  	"association": "Self.RuntimeCommandTemplate_Zone",
							  	"end": [
								  {
								  	"role": "RuntimeCommandTemplate_Zone_Target",
								  	"entitySet": "Zones"
								  },
								  {
								  	"role": "RuntimeCommandTemplate_Zone_Source",
								  	"entitySet": "CommandTemplates"
								  }
							  	]
							  },
							  {
							  	"name": "AlarmCommand_CommandTemplate",
							  	"association": "Self.AlarmCommand_CommandTemplate",
							  	"end": [
								  {
								  	"role": "AlarmCommand_CommandTemplate_Source",
								  	"entitySet": "AlarmCommands"
								  },
								  {
								  	"role": "AlarmCommand_CommandTemplate_Target",
								  	"entitySet": "CommandTemplates"
								  }
							  	]
							  }
							]
						},
						"entityType": [
						  {
						  	"name": "AlarmCommand",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.Runtime.Database.AlarmCommand, SiGyl.Models.Areas.Runtime, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
						  	"key": {
						  		"propertyRef": {
						  			"name": "Id"
						  		}
						  	},
						  	"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "CommandTemplateId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ParentId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Type",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
						  	],
						  	"navigationProperty": [
							  {
							  	"name": "CommandTemplate",
							  	"relationship": "Self.AlarmCommand_CommandTemplate",
							  	"fromRole": "AlarmCommand_CommandTemplate_Source",
							  	"toRole": "AlarmCommand_CommandTemplate_Target"
							  },
							  {
							  	"name": "Parent",
							  	"relationship": "Self.RuntimeAlarm_Commands",
							  	"fromRole": "RuntimeAlarm_Commands_Target",
							  	"toRole": "RuntimeAlarm_Commands_Source"
							  }
						  	],
						  	"interModelRelations": [],
						  	"histories": [],
						  	"commonName": "AlarmCommand",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "RuntimeCommandTemplate",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.Runtime.Security.RuntimeCommandTemplate, SiGyl.Models.Areas.Runtime, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
						  	"key": {
						  		"propertyRef": {
						  			"name": "Id"
						  		}
						  	},
						  	"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "CommandId",
							  	"type": "Edm.Int32"
							  },
							  {
							  	"name": "ClearanceId",
							  	"type": "Edm.Int32"
							  },
							  {
							  	"name": "ZoneId",
							  	"type": "Edm.Int32"
							  },
							  {
							  	"name": "Type",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Error",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Tag",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "IsCompleting",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "IsComplete",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "IsCancel",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "IsEnabled",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ConfigurationParentId",
							  	"type": "Edm.Int32"
							  },
							  {
							  	"name": "Comment",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Name",
							  	"type": "Edm.String",
							  	"maxLength": "256",
							  	"fixedLength": "false",
							  	"unicode": "true",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Description",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
						  	],
						  	"navigationProperty": [
							  {
							  	"name": "Clearance",
							  	"relationship": "Self.RuntimeCommandTemplate_Clearance",
							  	"fromRole": "RuntimeCommandTemplate_Clearance_Source",
							  	"toRole": "RuntimeCommandTemplate_Clearance_Target"
							  },
							  {
							  	"name": "Command",
							  	"relationship": "Self.RuntimeCommandTemplate_Command",
							  	"fromRole": "RuntimeCommandTemplate_Command_Source",
							  	"toRole": "RuntimeCommandTemplate_Command_Target"
							  },
							  {
							  	"name": "Instances",
							  	"relationship": "Self.RuntimeCommandInstance_CommandTemplate",
							  	"fromRole": "RuntimeCommandInstance_CommandTemplate_Target",
							  	"toRole": "RuntimeCommandInstance_CommandTemplate_Source"
							  },
							  {
							  	"name": "Signatures",
							  	"relationship": "Self.RuntimeCommandTemplateSignature_Command",
							  	"fromRole": "RuntimeCommandTemplateSignature_Command_Target",
							  	"toRole": "RuntimeCommandTemplateSignature_Command_Source"
							  },
							  {
							  	"name": "Values",
							  	"relationship": "Self.RuntimeCommandTemplateValue_Command",
							  	"fromRole": "RuntimeCommandTemplateValue_Command_Target",
							  	"toRole": "RuntimeCommandTemplateValue_Command_Source"
							  },
							  {
							  	"name": "Zone",
							  	"relationship": "Self.RuntimeCommandTemplate_Zone",
							  	"fromRole": "RuntimeCommandTemplate_Zone_Source",
							  	"toRole": "RuntimeCommandTemplate_Zone_Target"
							  }
						  	],
						  	"interModelRelations": [],
						  	"histories": [],
						  	"commonName": "RuntimeCommandTemplate",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "RuntimeClearance",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.Runtime.Security.RuntimeClearance, SiGyl.Models.Areas.Runtime, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
						  	"key": {
						  		"propertyRef": {
						  			"name": "Id"
						  		}
						  	},
						  	"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "SiteId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ConfigurationId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ConfigurationParentId",
							  	"type": "Edm.Int32"
							  },
							  {
							  	"name": "Comment",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Name",
							  	"type": "Edm.String",
							  	"maxLength": "256",
							  	"fixedLength": "false",
							  	"unicode": "true",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Description",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
						  	],
						  	"navigationProperty": [
							  {
							  	"name": "CommandClearances",
							  	"relationship": "Self.RuntimeCommandClearance_Clearance",
							  	"fromRole": "RuntimeCommandClearance_Clearance_Target",
							  	"toRole": "RuntimeCommandClearance_Clearance_Source"
							  },
							  {
							  	"name": "Commands",
							  	"relationship": "Self.ClearanceCommand_Parent",
							  	"fromRole": "ClearanceCommand_Parent_Target",
							  	"toRole": "ClearanceCommand_Parent_Source"
							  },
							  {
							  	"name": "Site",
							  	"relationship": "Self.RuntimeSite_Clearances",
							  	"fromRole": "RuntimeSite_Clearances_Target",
							  	"toRole": "RuntimeSite_Clearances_Source"
							  },
							  {
							  	"name": "ZoneClearances",
							  	"relationship": "Self.RuntimeZoneClearance_Clearance",
							  	"fromRole": "RuntimeZoneClearance_Clearance_Target",
							  	"toRole": "RuntimeZoneClearance_Clearance_Source"
							  }
						  	],
						  	"interModelRelations": [
							  {
							  	"name": "Clearance",
							  	"model": "configuration",
							  	"key": "ConfigurationId",
							  	"foreignKey": "Id"
							  }
						  	],
						  	"histories": [
							  {
							  	"name": "HistoryClearance"
							  }
						  	],
						  	"commonName": "RuntimeClearance",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "RuntimeCommandClearance",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.Runtime.Security.RuntimeCommandClearance, SiGyl.Models.Areas.Runtime, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
						  	"key": {
						  		"propertyRef": {
						  			"name": "Id"
						  		}
						  	},
						  	"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "ClearanceId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ZoneId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "CommandId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ConfigurationId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ConfigurationParentId",
							  	"type": "Edm.Int32"
							  },
							  {
							  	"name": "Comment",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Name",
							  	"type": "Edm.String",
							  	"maxLength": "256",
							  	"fixedLength": "false",
							  	"unicode": "true",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Description",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
						  	],
						  	"navigationProperty": [
							  {
							  	"name": "Clearance",
							  	"relationship": "Self.RuntimeCommandClearance_Clearance",
							  	"fromRole": "RuntimeCommandClearance_Clearance_Source",
							  	"toRole": "RuntimeCommandClearance_Clearance_Target"
							  },
							  {
							  	"name": "Command",
							  	"relationship": "Self.RuntimeCommandClearance_Command",
							  	"fromRole": "RuntimeCommandClearance_Command_Source",
							  	"toRole": "RuntimeCommandClearance_Command_Target"
							  },
							  {
							  	"name": "Commands",
							  	"relationship": "Self.CommandClearanceCommand_Parent",
							  	"fromRole": "CommandClearanceCommand_Parent_Target",
							  	"toRole": "CommandClearanceCommand_Parent_Source"
							  },
							  {
							  	"name": "Zone",
							  	"relationship": "Self.RuntimeCommandClearance_Zone",
							  	"fromRole": "RuntimeCommandClearance_Zone_Source",
							  	"toRole": "RuntimeCommandClearance_Zone_Target"
							  }
						  	],
						  	"interModelRelations": [
							  {
							  	"name": "CommandClearance",
							  	"model": "configuration",
							  	"key": "ConfigurationId",
							  	"foreignKey": "Id"
							  }
						  	],
						  	"histories": [
							  {
							  	"name": "HistoryCommandClearance"
							  }
						  	],
						  	"commonName": "RuntimeCommandClearance",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "RuntimeCommand",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.Runtime.Security.RuntimeCommand, SiGyl.Models.Areas.Runtime, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
						  	"key": {
						  		"propertyRef": {
						  			"name": "Id"
						  		}
						  	},
						  	"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "ConfigurationId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ConfigurationParentId",
							  	"type": "Edm.Int32"
							  },
							  {
							  	"name": "Comment",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Name",
							  	"type": "Edm.String",
							  	"maxLength": "256",
							  	"fixedLength": "false",
							  	"unicode": "true",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Description",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
						  	],
						  	"navigationProperty": {
						  		"name": "Commands",
						  		"relationship": "Self.CommandCommand_Parent",
						  		"fromRole": "CommandCommand_Parent_Target",
						  		"toRole": "CommandCommand_Parent_Source"
						  	},
						  	"interModelRelations": [
							  {
							  	"name": "Command",
							  	"model": "configuration",
							  	"key": "ConfigurationId",
							  	"foreignKey": "Id"
							  }
						  	],
						  	"histories": [
							  {
							  	"name": "HistoryCommand"
							  }
						  	],
						  	"commonName": "RuntimeCommand",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "CommandCommand",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.Runtime.Security.CommandCommand, SiGyl.Models.Areas.Runtime, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
						  	"key": {
						  		"propertyRef": {
						  			"name": "Id"
						  		}
						  	},
						  	"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "CommandTemplateId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ParentId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Type",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
						  	],
						  	"navigationProperty": [
							  {
							  	"name": "CommandTemplate",
							  	"relationship": "Self.CommandCommand_CommandTemplate",
							  	"fromRole": "CommandCommand_CommandTemplate_Source",
							  	"toRole": "CommandCommand_CommandTemplate_Target"
							  },
							  {
							  	"name": "Parent",
							  	"relationship": "Self.CommandCommand_Parent",
							  	"fromRole": "CommandCommand_Parent_Source",
							  	"toRole": "CommandCommand_Parent_Target"
							  }
						  	],
						  	"interModelRelations": [],
						  	"histories": [],
						  	"commonName": "CommandCommand",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "CommandClearanceCommand",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.Runtime.Security.CommandClearanceCommand, SiGyl.Models.Areas.Runtime, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
						  	"key": {
						  		"propertyRef": {
						  			"name": "Id"
						  		}
						  	},
						  	"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "CommandTemplateId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ParentId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Type",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
						  	],
						  	"navigationProperty": [
							  {
							  	"name": "CommandTemplate",
							  	"relationship": "Self.CommandClearanceCommand_CommandTemplate",
							  	"fromRole": "CommandClearanceCommand_CommandTemplate_Source",
							  	"toRole": "CommandClearanceCommand_CommandTemplate_Target"
							  },
							  {
							  	"name": "Parent",
							  	"relationship": "Self.CommandClearanceCommand_Parent",
							  	"fromRole": "CommandClearanceCommand_Parent_Source",
							  	"toRole": "CommandClearanceCommand_Parent_Target"
							  }
						  	],
						  	"interModelRelations": [],
						  	"histories": [],
						  	"commonName": "CommandClearanceCommand",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "RuntimeZone",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.Runtime.Equipment.RuntimeZone, SiGyl.Models.Areas.Runtime, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
						  	"key": {
						  		"propertyRef": {
						  			"name": "Id"
						  		}
						  	},
						  	"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "SiteId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "OpcState",
							  	"type": "Edm.Self.OpcState",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Reconnect",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ConfigurationId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ConfigurationParentId",
							  	"type": "Edm.Int32"
							  },
							  {
							  	"name": "Comment",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Name",
							  	"type": "Edm.String",
							  	"maxLength": "256",
							  	"fixedLength": "false",
							  	"unicode": "true",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Description",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
						  	],
						  	"navigationProperty": [
							  {
							  	"name": "Batches",
							  	"relationship": "Self.Batch_Zone",
							  	"fromRole": "Batch_Zone_Target",
							  	"toRole": "Batch_Zone_Source"
							  },
							  {
							  	"name": "CommandClearances",
							  	"relationship": "Self.RuntimeCommandClearance_Zone",
							  	"fromRole": "RuntimeCommandClearance_Zone_Target",
							  	"toRole": "RuntimeCommandClearance_Zone_Source"
							  },
							  {
							  	"name": "Commands",
							  	"relationship": "Self.ZoneCommand_Parent",
							  	"fromRole": "ZoneCommand_Parent_Target",
							  	"toRole": "ZoneCommand_Parent_Source"
							  },
							  {
							  	"name": "Groups",
							  	"relationship": "Self.RuntimeGroup_Zone",
							  	"fromRole": "RuntimeGroup_Zone_Target",
							  	"toRole": "RuntimeGroup_Zone_Source"
							  },
							  {
							  	"name": "Site",
							  	"relationship": "Self.RuntimeSite_Zones",
							  	"fromRole": "RuntimeSite_Zones_Target",
							  	"toRole": "RuntimeSite_Zones_Source"
							  },
							  {
							  	"name": "Units",
							  	"relationship": "Self.RuntimeUnit_Zone",
							  	"fromRole": "RuntimeUnit_Zone_Target",
							  	"toRole": "RuntimeUnit_Zone_Source"
							  },
							  {
							  	"name": "ZoneClearances",
							  	"relationship": "Self.RuntimeZoneClearance_Zone",
							  	"fromRole": "RuntimeZoneClearance_Zone_Target",
							  	"toRole": "RuntimeZoneClearance_Zone_Source"
							  }
						  	],
						  	"interModelRelations": [
							  {
							  	"name": "Zone",
							  	"model": "configuration",
							  	"key": "ConfigurationId",
							  	"foreignKey": "Id"
							  }
						  	],
						  	"histories": [
							  {
							  	"name": "HistoryZone"
							  }
						  	],
						  	"commonName": "RuntimeZone",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "Batch",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.Runtime.Batches.Batch, SiGyl.Models.Areas.Runtime, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
						  	"key": {
						  		"propertyRef": {
						  			"name": "Id"
						  		}
						  	},
						  	"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "ZoneId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "FormulaId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "FormulaPath",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Index",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UnitProcedureCount",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "State",
							  	"type": "Edm.Self.BatchState",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ConfigurationParentId",
							  	"type": "Edm.Int32"
							  },
							  {
							  	"name": "Comment",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Name",
							  	"type": "Edm.String",
							  	"maxLength": "256",
							  	"fixedLength": "false",
							  	"unicode": "true",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Description",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
						  	],
						  	"navigationProperty": [
							  {
							  	"name": "AllocatedUnits",
							  	"relationship": "Self.RuntimeUnit_AllocatedBatch",
							  	"fromRole": "RuntimeUnit_AllocatedBatch_Target",
							  	"toRole": "RuntimeUnit_AllocatedBatch_Source"
							  },
							  {
							  	"name": "Commands",
							  	"relationship": "Self.BatchCommand_Parent",
							  	"fromRole": "BatchCommand_Parent_Target",
							  	"toRole": "BatchCommand_Parent_Source"
							  },
							  {
							  	"name": "UnitProcedures",
							  	"relationship": "Self.RuntimeUnitProcedure_Batch",
							  	"fromRole": "RuntimeUnitProcedure_Batch_Target",
							  	"toRole": "RuntimeUnitProcedure_Batch_Source"
							  },
							  {
							  	"name": "Zone",
							  	"relationship": "Self.Batch_Zone",
							  	"fromRole": "Batch_Zone_Source",
							  	"toRole": "Batch_Zone_Target"
							  }
						  	],
						  	"interModelRelations": [],
						  	"histories": [
							  {
							  	"name": "HistoryBatch"
							  }
						  	],
						  	"commonName": "Batch",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "RuntimeUnit",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.Runtime.Equipment.RuntimeUnit, SiGyl.Models.Areas.Runtime, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
						  	"key": {
						  		"propertyRef": {
						  			"name": "Id"
						  		}
						  	},
						  	"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "ZoneId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Exception",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "IsFaulted",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "InterfaceState",
							  	"type": "Edm.Self.UnitInterfaceState",
							  	"nullable": "false"
							  },
							  {
							  	"name": "InterfaceError",
							  	"type": "Edm.Self.UnitInterfaceError",
							  	"nullable": "false"
							  },
							  {
							  	"name": "BatchIndex",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "AllocatedBatchId",
							  	"type": "Edm.Int32"
							  },
							  {
							  	"name": "ParameterDownloadCount",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ReportUploadCount",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "OperationIndex",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "AllocatedUnitProcedureId",
							  	"type": "Edm.Int32"
							  },
							  {
							  	"name": "AllocatedStepId",
							  	"type": "Edm.Int32"
							  },
							  {
							  	"name": "ConfigurationId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ConfigurationParentId",
							  	"type": "Edm.Int32"
							  },
							  {
							  	"name": "Comment",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Name",
							  	"type": "Edm.String",
							  	"maxLength": "256",
							  	"fixedLength": "false",
							  	"unicode": "true",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Description",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
						  	],
						  	"navigationProperty": [
							  {
							  	"name": "Alarms",
							  	"relationship": "Self.RuntimeAlarm_Unit",
							  	"fromRole": "RuntimeAlarm_Unit_Target",
							  	"toRole": "RuntimeAlarm_Unit_Source"
							  },
							  {
							  	"name": "AllocatedBatch",
							  	"relationship": "Self.RuntimeUnit_AllocatedBatch",
							  	"fromRole": "RuntimeUnit_AllocatedBatch_Source",
							  	"toRole": "RuntimeUnit_AllocatedBatch_Target"
							  },
							  {
							  	"name": "AllocatedStep",
							  	"relationship": "Self.RuntimeUnit_AllocatedStep",
							  	"fromRole": "RuntimeUnit_AllocatedStep_Source",
							  	"toRole": "RuntimeUnit_AllocatedStep_Target"
							  },
							  {
							  	"name": "AllocatedUnitProcedure",
							  	"relationship": "Self.RuntimeUnit_AllocatedUnitProcedure",
							  	"fromRole": "RuntimeUnit_AllocatedUnitProcedure_Source",
							  	"toRole": "RuntimeUnit_AllocatedUnitProcedure_Target"
							  },
							  {
							  	"name": "BoolParameterNodes",
							  	"relationship": "Self.RuntimeBoolParameterNode_Unit",
							  	"fromRole": "RuntimeBoolParameterNode_Unit_Target",
							  	"toRole": "RuntimeBoolParameterNode_Unit_Source"
							  },
							  {
							  	"name": "CommandNodes",
							  	"relationship": "Self.RuntimeCommandNode_Unit",
							  	"fromRole": "RuntimeCommandNode_Unit_Target",
							  	"toRole": "RuntimeCommandNode_Unit_Source"
							  },
							  {
							  	"name": "Commands",
							  	"relationship": "Self.UnitCommand_Parent",
							  	"fromRole": "UnitCommand_Parent_Target",
							  	"toRole": "UnitCommand_Parent_Source"
							  },
							  {
							  	"name": "DataLogNodes",
							  	"relationship": "Self.RuntimeDataLogNode_Unit",
							  	"fromRole": "RuntimeDataLogNode_Unit_Target",
							  	"toRole": "RuntimeDataLogNode_Unit_Source"
							  },
							  {
							  	"name": "DeviceInstances",
							  	"relationship": "Self.RuntimeDeviceInstance_Unit",
							  	"fromRole": "RuntimeDeviceInstance_Unit_Target",
							  	"toRole": "RuntimeDeviceInstance_Unit_Source"
							  },
							  {
							  	"name": "DoubleParameterNodes",
							  	"relationship": "Self.RuntimeDoubleParameterNode_Unit",
							  	"fromRole": "RuntimeDoubleParameterNode_Unit_Target",
							  	"toRole": "RuntimeDoubleParameterNode_Unit_Source"
							  },
							  {
							  	"name": "IntegerParameterNodes",
							  	"relationship": "Self.RuntimeIntegerParameterNode_Unit",
							  	"fromRole": "RuntimeIntegerParameterNode_Unit_Target",
							  	"toRole": "RuntimeIntegerParameterNode_Unit_Source"
							  },
							  {
							  	"name": "NodePages",
							  	"relationship": "Self.RuntimeNodePage_Unit",
							  	"fromRole": "RuntimeNodePage_Unit_Target",
							  	"toRole": "RuntimeNodePage_Unit_Source"
							  },
							  {
							  	"name": "Operations",
							  	"relationship": "Self.RuntimeOperation_Unit",
							  	"fromRole": "RuntimeOperation_Unit_Target",
							  	"toRole": "RuntimeOperation_Unit_Source"
							  },
							  {
							  	"name": "ReportNodes",
							  	"relationship": "Self.RuntimeReportNode_Unit",
							  	"fromRole": "RuntimeReportNode_Unit_Target",
							  	"toRole": "RuntimeReportNode_Unit_Source"
							  },
							  {
							  	"name": "StateNodes",
							  	"relationship": "Self.RuntimeStateNode_Unit",
							  	"fromRole": "RuntimeStateNode_Unit_Target",
							  	"toRole": "RuntimeStateNode_Unit_Source"
							  },
							  {
							  	"name": "StringParameterNodes",
							  	"relationship": "Self.RuntimeStringParameterNode_Unit",
							  	"fromRole": "RuntimeStringParameterNode_Unit_Target",
							  	"toRole": "RuntimeStringParameterNode_Unit_Source"
							  },
							  {
							  	"name": "UnitProcedures",
							  	"relationship": "Self.RuntimeUnitProcedure_Unit",
							  	"fromRole": "RuntimeUnitProcedure_Unit_Target",
							  	"toRole": "RuntimeUnitProcedure_Unit_Source"
							  },
							  {
							  	"name": "Zone",
							  	"relationship": "Self.RuntimeUnit_Zone",
							  	"fromRole": "RuntimeUnit_Zone_Source",
							  	"toRole": "RuntimeUnit_Zone_Target"
							  }
						  	],
						  	"interModelRelations": [
							  {
							  	"name": "Unit",
							  	"model": "configuration",
							  	"key": "ConfigurationId",
							  	"foreignKey": "Id"
							  }
						  	],
						  	"histories": [
							  {
							  	"name": "HistoryUnit"
							  }
						  	],
						  	"commonName": "Unit",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "RuntimeAlarm",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.Runtime.Database.RuntimeAlarm, SiGyl.Models.Areas.Runtime, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
						  	"key": {
						  		"propertyRef": {
						  			"name": "Id"
						  		}
						  	},
						  	"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "UnitId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "AlarmSeverityId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "IsActive",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "IsHandshake",
							  	"type": "Edm.Boolean"
							  },
							  {
							  	"name": "IsAcknowledge",
							  	"type": "Edm.Boolean"
							  },
							  {
							  	"name": "IsAcknowledged",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "AlarmTime",
							  	"type": "Edm.DateTime"
							  },
							  {
							  	"name": "ConfigurationId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ConfigurationParentId",
							  	"type": "Edm.Int32"
							  },
							  {
							  	"name": "Comment",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Name",
							  	"type": "Edm.String",
							  	"maxLength": "256",
							  	"fixedLength": "false",
							  	"unicode": "true",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Description",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
						  	],
						  	"navigationProperty": [
							  {
							  	"name": "AlarmSeverity",
							  	"relationship": "Self.RuntimeAlarm_AlarmSeverity",
							  	"fromRole": "RuntimeAlarm_AlarmSeverity_Source",
							  	"toRole": "RuntimeAlarm_AlarmSeverity_Target"
							  },
							  {
							  	"name": "Commands",
							  	"relationship": "Self.RuntimeAlarm_Commands",
							  	"fromRole": "RuntimeAlarm_Commands_Source",
							  	"toRole": "RuntimeAlarm_Commands_Target"
							  },
							  {
							  	"name": "Unit",
							  	"relationship": "Self.RuntimeAlarm_Unit",
							  	"fromRole": "RuntimeAlarm_Unit_Source",
							  	"toRole": "RuntimeAlarm_Unit_Target"
							  },
							  {
							  	"name": "Values",
							  	"relationship": "Self.RuntimeAlarmValue_Alarm",
							  	"fromRole": "RuntimeAlarmValue_Alarm_Target",
							  	"toRole": "RuntimeAlarmValue_Alarm_Source"
							  }
						  	],
						  	"interModelRelations": [
							  {
							  	"name": "Alarm",
							  	"model": "configuration",
							  	"key": "ConfigurationId",
							  	"foreignKey": "Id"
							  }
						  	],
						  	"histories": [
							  {
							  	"name": "HistoryAlarm"
							  }
						  	],
						  	"commonName": "RuntimeAlarm",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "RuntimeAlarmSeverity",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.Runtime.Database.RuntimeAlarmSeverity, SiGyl.Models.Areas.Runtime, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
						  	"key": {
						  		"propertyRef": {
						  			"name": "Id"
						  		}
						  	},
						  	"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "SiteId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Index",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Colour",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "ConfigurationId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ConfigurationParentId",
							  	"type": "Edm.Int32"
							  },
							  {
							  	"name": "Comment",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Name",
							  	"type": "Edm.String",
							  	"maxLength": "256",
							  	"fixedLength": "false",
							  	"unicode": "true",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Description",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
						  	],
						  	"navigationProperty": [
							  {
							  	"name": "Alarms",
							  	"relationship": "Self.RuntimeAlarm_AlarmSeverity",
							  	"fromRole": "RuntimeAlarm_AlarmSeverity_Target",
							  	"toRole": "RuntimeAlarm_AlarmSeverity_Source"
							  },
							  {
							  	"name": "Commands",
							  	"relationship": "Self.AlarmSeverityCommand_Parent",
							  	"fromRole": "AlarmSeverityCommand_Parent_Target",
							  	"toRole": "AlarmSeverityCommand_Parent_Source"
							  },
							  {
							  	"name": "Site",
							  	"relationship": "Self.RuntimeSite_AlarmSeverities",
							  	"fromRole": "RuntimeSite_AlarmSeverities_Target",
							  	"toRole": "RuntimeSite_AlarmSeverities_Source"
							  }
						  	],
						  	"interModelRelations": [
							  {
							  	"name": "AlarmSeverity",
							  	"model": "configuration",
							  	"key": "ConfigurationId",
							  	"foreignKey": "Id"
							  }
						  	],
						  	"histories": [
							  {
							  	"name": "HistoryAlarmSeverity"
							  }
						  	],
						  	"commonName": "RuntimeAlarmSeverity",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "AlarmSeverityCommand",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.Runtime.Database.AlarmSeverityCommand, SiGyl.Models.Areas.Runtime, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
						  	"key": {
						  		"propertyRef": {
						  			"name": "Id"
						  		}
						  	},
						  	"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "CommandTemplateId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ParentId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Type",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
						  	],
						  	"navigationProperty": [
							  {
							  	"name": "CommandTemplate",
							  	"relationship": "Self.AlarmSeverityCommand_CommandTemplate",
							  	"fromRole": "AlarmSeverityCommand_CommandTemplate_Source",
							  	"toRole": "AlarmSeverityCommand_CommandTemplate_Target"
							  },
							  {
							  	"name": "Parent",
							  	"relationship": "Self.AlarmSeverityCommand_Parent",
							  	"fromRole": "AlarmSeverityCommand_Parent_Source",
							  	"toRole": "AlarmSeverityCommand_Parent_Target"
							  }
						  	],
						  	"interModelRelations": [],
						  	"histories": [],
						  	"commonName": "AlarmSeverityCommand",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "RuntimeSite",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.Runtime.Organisation.RuntimeSite, SiGyl.Models.Areas.Runtime, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
						  	"key": {
						  		"propertyRef": {
						  			"name": "Id"
						  		}
						  	},
						  	"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "EnterpriseId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ConfigurationId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ConfigurationParentId",
							  	"type": "Edm.Int32"
							  },
							  {
							  	"name": "Comment",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Name",
							  	"type": "Edm.String",
							  	"maxLength": "256",
							  	"fixedLength": "false",
							  	"unicode": "true",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Description",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
						  	],
						  	"navigationProperty": [
							  {
							  	"name": "AlarmSeverities",
							  	"relationship": "Self.RuntimeSite_AlarmSeverities",
							  	"fromRole": "RuntimeSite_AlarmSeverities_Source",
							  	"toRole": "RuntimeSite_AlarmSeverities_Target"
							  },
							  {
							  	"name": "Clearances",
							  	"relationship": "Self.RuntimeSite_Clearances",
							  	"fromRole": "RuntimeSite_Clearances_Source",
							  	"toRole": "RuntimeSite_Clearances_Target"
							  },
							  {
							  	"name": "Commands",
							  	"relationship": "Self.SiteCommand_Parent",
							  	"fromRole": "SiteCommand_Parent_Target",
							  	"toRole": "SiteCommand_Parent_Source"
							  },
							  {
							  	"name": "Devices",
							  	"relationship": "Self.RuntimeDevice_Site",
							  	"fromRole": "RuntimeDevice_Site_Target",
							  	"toRole": "RuntimeDevice_Site_Source"
							  },
							  {
							  	"name": "Enterprise",
							  	"relationship": "Self.RuntimeEnterprise_Sites",
							  	"fromRole": "RuntimeEnterprise_Sites_Target",
							  	"toRole": "RuntimeEnterprise_Sites_Source"
							  },
							  {
							  	"name": "Zones",
							  	"relationship": "Self.RuntimeSite_Zones",
							  	"fromRole": "RuntimeSite_Zones_Source",
							  	"toRole": "RuntimeSite_Zones_Target"
							  }
						  	],
						  	"interModelRelations": [
							  {
							  	"name": "Site",
							  	"model": "configuration",
							  	"key": "ConfigurationId",
							  	"foreignKey": "Id"
							  }
						  	],
						  	"histories": [
							  {
							  	"name": "HistorySite"
							  }
						  	],
						  	"commonName": "RuntimeSite",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "SiteCommand",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.Runtime.Organisation.SiteCommand, SiGyl.Models.Areas.Runtime, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
						  	"key": {
						  		"propertyRef": {
						  			"name": "Id"
						  		}
						  	},
						  	"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "CommandTemplateId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ParentId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Type",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
						  	],
						  	"navigationProperty": [
							  {
							  	"name": "CommandTemplate",
							  	"relationship": "Self.SiteCommand_CommandTemplate",
							  	"fromRole": "SiteCommand_CommandTemplate_Source",
							  	"toRole": "SiteCommand_CommandTemplate_Target"
							  },
							  {
							  	"name": "Parent",
							  	"relationship": "Self.SiteCommand_Parent",
							  	"fromRole": "SiteCommand_Parent_Source",
							  	"toRole": "SiteCommand_Parent_Target"
							  }
						  	],
						  	"interModelRelations": [],
						  	"histories": [],
						  	"commonName": "SiteCommand",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "RuntimeDevice",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.Runtime.Equipment.Devices.RuntimeDevice, SiGyl.Models.Areas.Runtime, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
						  	"key": {
						  		"propertyRef": {
						  			"name": "Id"
						  		}
						  	},
						  	"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "SiteId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Display",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "ConfigurationId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ConfigurationParentId",
							  	"type": "Edm.Int32"
							  },
							  {
							  	"name": "Comment",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Name",
							  	"type": "Edm.String",
							  	"maxLength": "256",
							  	"fixedLength": "false",
							  	"unicode": "true",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Description",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
						  	],
						  	"navigationProperty": [
							  {
							  	"name": "Commands",
							  	"relationship": "Self.DeviceCommand_Parent",
							  	"fromRole": "DeviceCommand_Parent_Target",
							  	"toRole": "DeviceCommand_Parent_Source"
							  },
							  {
							  	"name": "DeviceDisplays",
							  	"relationship": "Self.RuntimeDeviceDisplay_Device",
							  	"fromRole": "RuntimeDeviceDisplay_Device_Target",
							  	"toRole": "RuntimeDeviceDisplay_Device_Source"
							  },
							  {
							  	"name": "DeviceInstances",
							  	"relationship": "Self.RuntimeDeviceInstance_Device",
							  	"fromRole": "RuntimeDeviceInstance_Device_Target",
							  	"toRole": "RuntimeDeviceInstance_Device_Source"
							  },
							  {
							  	"name": "Site",
							  	"relationship": "Self.RuntimeDevice_Site",
							  	"fromRole": "RuntimeDevice_Site_Source",
							  	"toRole": "RuntimeDevice_Site_Target"
							  }
						  	],
						  	"interModelRelations": [
							  {
							  	"name": "Device",
							  	"model": "configuration",
							  	"key": "ConfigurationId",
							  	"foreignKey": "Id"
							  }
						  	],
						  	"histories": [
							  {
							  	"name": "HistoryDevice"
							  }
						  	],
						  	"commonName": "Device",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "DeviceCommand",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.Runtime.Equipment.Devices.DeviceCommand, SiGyl.Models.Areas.Runtime, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
						  	"key": {
						  		"propertyRef": {
						  			"name": "Id"
						  		}
						  	},
						  	"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "CommandTemplateId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ParentId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Type",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
						  	],
						  	"navigationProperty": [
							  {
							  	"name": "CommandTemplate",
							  	"relationship": "Self.DeviceCommand_CommandTemplate",
							  	"fromRole": "DeviceCommand_CommandTemplate_Source",
							  	"toRole": "DeviceCommand_CommandTemplate_Target"
							  },
							  {
							  	"name": "Parent",
							  	"relationship": "Self.DeviceCommand_Parent",
							  	"fromRole": "DeviceCommand_Parent_Source",
							  	"toRole": "DeviceCommand_Parent_Target"
							  }
						  	],
						  	"interModelRelations": [],
						  	"histories": [],
						  	"commonName": "DeviceCommand",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "RuntimeDeviceDisplay",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.Runtime.Equipment.Devices.RuntimeDeviceDisplay, SiGyl.Models.Areas.Runtime, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
						  	"key": {
						  		"propertyRef": {
						  			"name": "Id"
						  		}
						  	},
						  	"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "Display",
							  	"type": "Edm.String",
							  	"maxLength": "50000",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Index",
							  	"type": "Edm.Double",
							  	"nullable": "false"
							  },
							  {
							  	"name": "X",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Y",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "MinScale",
							  	"type": "Edm.Double"
							  },
							  {
							  	"name": "MaxScale",
							  	"type": "Edm.Double"
							  },
							  {
							  	"name": "DeviceId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ConfigurationId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ConfigurationParentId",
							  	"type": "Edm.Int32"
							  },
							  {
							  	"name": "Comment",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Name",
							  	"type": "Edm.String",
							  	"maxLength": "256",
							  	"fixedLength": "false",
							  	"unicode": "true",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Description",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
						  	],
						  	"navigationProperty": [
							  {
							  	"name": "Commands",
							  	"relationship": "Self.DeviceDisplayCommand_Parent",
							  	"fromRole": "DeviceDisplayCommand_Parent_Target",
							  	"toRole": "DeviceDisplayCommand_Parent_Source"
							  },
							  {
							  	"name": "Device",
							  	"relationship": "Self.RuntimeDeviceDisplay_Device",
							  	"fromRole": "RuntimeDeviceDisplay_Device_Source",
							  	"toRole": "RuntimeDeviceDisplay_Device_Target"
							  }
						  	],
						  	"interModelRelations": [
							  {
							  	"name": "DeviceDisplay",
							  	"model": "configuration",
							  	"key": "ConfigurationId",
							  	"foreignKey": "Id"
							  }
						  	],
						  	"histories": [
							  {
							  	"name": "HistoryDeviceDisplay"
							  }
						  	],
						  	"commonName": "Device display",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "DeviceDisplayCommand",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.Runtime.Equipment.Devices.DeviceDisplayCommand, SiGyl.Models.Areas.Runtime, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
						  	"key": {
						  		"propertyRef": {
						  			"name": "Id"
						  		}
						  	},
						  	"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "CommandTemplateId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ParentId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Type",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
						  	],
						  	"navigationProperty": [
							  {
							  	"name": "CommandTemplate",
							  	"relationship": "Self.DeviceDisplayCommand_CommandTemplate",
							  	"fromRole": "DeviceDisplayCommand_CommandTemplate_Source",
							  	"toRole": "DeviceDisplayCommand_CommandTemplate_Target"
							  },
							  {
							  	"name": "Parent",
							  	"relationship": "Self.DeviceDisplayCommand_Parent",
							  	"fromRole": "DeviceDisplayCommand_Parent_Source",
							  	"toRole": "DeviceDisplayCommand_Parent_Target"
							  }
						  	],
						  	"interModelRelations": [],
						  	"histories": [],
						  	"commonName": "DeviceDisplayCommand",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "RuntimeDeviceInstance",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.Runtime.Equipment.Devices.RuntimeDeviceInstance, SiGyl.Models.Areas.Runtime, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
						  	"key": {
						  		"propertyRef": {
						  			"name": "Id"
						  		}
						  	},
						  	"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "DeviceId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UnitId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Index",
							  	"type": "Edm.Double",
							  	"nullable": "false"
							  },
							  {
							  	"name": "X",
							  	"type": "Edm.Double",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Y",
							  	"type": "Edm.Double",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Rotate",
							  	"type": "Edm.Double",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Scale",
							  	"type": "Edm.Double",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ConfigurationId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ConfigurationParentId",
							  	"type": "Edm.Int32"
							  },
							  {
							  	"name": "Comment",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Name",
							  	"type": "Edm.String",
							  	"maxLength": "256",
							  	"fixedLength": "false",
							  	"unicode": "true",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Description",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
						  	],
						  	"navigationProperty": [
							  {
							  	"name": "Commands",
							  	"relationship": "Self.DeviceInstanceCommand_Parent",
							  	"fromRole": "DeviceInstanceCommand_Parent_Target",
							  	"toRole": "DeviceInstanceCommand_Parent_Source"
							  },
							  {
							  	"name": "Device",
							  	"relationship": "Self.RuntimeDeviceInstance_Device",
							  	"fromRole": "RuntimeDeviceInstance_Device_Source",
							  	"toRole": "RuntimeDeviceInstance_Device_Target"
							  },
							  {
							  	"name": "DeviceInstanceDisplays",
							  	"relationship": "Self.RuntimeDeviceInstanceDisplay_DeviceInstance",
							  	"fromRole": "RuntimeDeviceInstanceDisplay_DeviceInstance_Target",
							  	"toRole": "RuntimeDeviceInstanceDisplay_DeviceInstance_Source"
							  },
							  {
							  	"name": "DeviceInstanceTags",
							  	"relationship": "Self.RuntimeDeviceInstanceTag_DeviceInstance",
							  	"fromRole": "RuntimeDeviceInstanceTag_DeviceInstance_Target",
							  	"toRole": "RuntimeDeviceInstanceTag_DeviceInstance_Source"
							  },
							  {
							  	"name": "Unit",
							  	"relationship": "Self.RuntimeDeviceInstance_Unit",
							  	"fromRole": "RuntimeDeviceInstance_Unit_Source",
							  	"toRole": "RuntimeDeviceInstance_Unit_Target"
							  }
						  	],
						  	"interModelRelations": [
							  {
							  	"name": "DeviceInstance",
							  	"model": "configuration",
							  	"key": "ConfigurationId",
							  	"foreignKey": "Id"
							  }
						  	],
						  	"histories": [
							  {
							  	"name": "HistoryDeviceInstance"
							  }
						  	],
						  	"commonName": "Device instance",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "DeviceInstanceCommand",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.Runtime.Equipment.Devices.DeviceInstanceCommand, SiGyl.Models.Areas.Runtime, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
						  	"key": {
						  		"propertyRef": {
						  			"name": "Id"
						  		}
						  	},
						  	"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "CommandTemplateId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ParentId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Type",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
						  	],
						  	"navigationProperty": [
							  {
							  	"name": "CommandTemplate",
							  	"relationship": "Self.DeviceInstanceCommand_CommandTemplate",
							  	"fromRole": "DeviceInstanceCommand_CommandTemplate_Source",
							  	"toRole": "DeviceInstanceCommand_CommandTemplate_Target"
							  },
							  {
							  	"name": "Parent",
							  	"relationship": "Self.DeviceInstanceCommand_Parent",
							  	"fromRole": "DeviceInstanceCommand_Parent_Source",
							  	"toRole": "DeviceInstanceCommand_Parent_Target"
							  }
						  	],
						  	"interModelRelations": [],
						  	"histories": [],
						  	"commonName": "DeviceInstanceCommand",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "RuntimeDeviceInstanceDisplay",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.Runtime.Equipment.Devices.RuntimeDeviceInstanceDisplay, SiGyl.Models.Areas.Runtime, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
						  	"key": {
						  		"propertyRef": {
						  			"name": "Id"
						  		}
						  	},
						  	"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "DeviceInstanceId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "DeviceDisplayId",
							  	"type": "Edm.Int32"
							  },
							  {
							  	"name": "Display",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Index",
							  	"type": "Edm.Double"
							  },
							  {
							  	"name": "X",
							  	"type": "Edm.Double"
							  },
							  {
							  	"name": "Y",
							  	"type": "Edm.Double"
							  },
							  {
							  	"name": "Scale",
							  	"type": "Edm.Double",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Rotate",
							  	"type": "Edm.Double",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Include",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "MinScale",
							  	"type": "Edm.Double"
							  },
							  {
							  	"name": "MaxScale",
							  	"type": "Edm.Double"
							  },
							  {
							  	"name": "ConfigurationId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ConfigurationParentId",
							  	"type": "Edm.Int32"
							  },
							  {
							  	"name": "Comment",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Name",
							  	"type": "Edm.String",
							  	"maxLength": "256",
							  	"fixedLength": "false",
							  	"unicode": "true",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Description",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
						  	],
						  	"navigationProperty": [
							  {
							  	"name": "Commands",
							  	"relationship": "Self.DeviceInstanceDisplayCommand_Parent",
							  	"fromRole": "DeviceInstanceDisplayCommand_Parent_Target",
							  	"toRole": "DeviceInstanceDisplayCommand_Parent_Source"
							  },
							  {
							  	"name": "DeviceDisplay",
							  	"relationship": "Self.RuntimeDeviceInstanceDisplay_DeviceDisplay",
							  	"fromRole": "RuntimeDeviceInstanceDisplay_DeviceDisplay_Source",
							  	"toRole": "RuntimeDeviceInstanceDisplay_DeviceDisplay_Target"
							  },
							  {
							  	"name": "DeviceInstance",
							  	"relationship": "Self.RuntimeDeviceInstanceDisplay_DeviceInstance",
							  	"fromRole": "RuntimeDeviceInstanceDisplay_DeviceInstance_Source",
							  	"toRole": "RuntimeDeviceInstanceDisplay_DeviceInstance_Target"
							  }
						  	],
						  	"interModelRelations": [
							  {
							  	"name": "DeviceInstanceDisplay",
							  	"model": "configuration",
							  	"key": "ConfigurationId",
							  	"foreignKey": "Id"
							  }
						  	],
						  	"histories": [
							  {
							  	"name": "HistoryDeviceInstanceDisplay"
							  }
						  	],
						  	"commonName": "Device instance display",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "DeviceInstanceDisplayCommand",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.Runtime.Equipment.Devices.DeviceInstanceDisplayCommand, SiGyl.Models.Areas.Runtime, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
						  	"key": {
						  		"propertyRef": {
						  			"name": "Id"
						  		}
						  	},
						  	"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "CommandTemplateId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ParentId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Type",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
						  	],
						  	"navigationProperty": [
							  {
							  	"name": "CommandTemplate",
							  	"relationship": "Self.DeviceInstanceDisplayCommand_CommandTemplate",
							  	"fromRole": "DeviceInstanceDisplayCommand_CommandTemplate_Source",
							  	"toRole": "DeviceInstanceDisplayCommand_CommandTemplate_Target"
							  },
							  {
							  	"name": "Parent",
							  	"relationship": "Self.DeviceInstanceDisplayCommand_Parent",
							  	"fromRole": "DeviceInstanceDisplayCommand_Parent_Source",
							  	"toRole": "DeviceInstanceDisplayCommand_Parent_Target"
							  }
						  	],
						  	"interModelRelations": [],
						  	"histories": [],
						  	"commonName": "DeviceInstanceDisplayCommand",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "RuntimeDeviceInstanceTag",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.Runtime.Equipment.Devices.RuntimeDeviceInstanceTag, SiGyl.Models.Areas.Runtime, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
						  	"key": {
						  		"propertyRef": {
						  			"name": "Id"
						  		}
						  	},
						  	"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "DeviceInstanceId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "NodeId",
							  	"type": "Edm.Int32"
							  },
							  {
							  	"name": "ConfigurationId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ConfigurationParentId",
							  	"type": "Edm.Int32"
							  },
							  {
							  	"name": "Comment",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Name",
							  	"type": "Edm.String",
							  	"maxLength": "256",
							  	"fixedLength": "false",
							  	"unicode": "true",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Description",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
						  	],
						  	"navigationProperty": [
							  {
							  	"name": "Commands",
							  	"relationship": "Self.DeviceInstanceTagCommand_Parent",
							  	"fromRole": "DeviceInstanceTagCommand_Parent_Target",
							  	"toRole": "DeviceInstanceTagCommand_Parent_Source"
							  },
							  {
							  	"name": "DeviceInstance",
							  	"relationship": "Self.RuntimeDeviceInstanceTag_DeviceInstance",
							  	"fromRole": "RuntimeDeviceInstanceTag_DeviceInstance_Source",
							  	"toRole": "RuntimeDeviceInstanceTag_DeviceInstance_Target"
							  }
						  	],
						  	"interModelRelations": [
							  {
							  	"name": "DeviceInstanceTag",
							  	"model": "configuration",
							  	"key": "ConfigurationId",
							  	"foreignKey": "Id"
							  }
						  	],
						  	"histories": [
							  {
							  	"name": "HistoryDeviceInstanceTag"
							  }
						  	],
						  	"commonName": "Device instance tag",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "DeviceInstanceTagCommand",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.Runtime.Equipment.Devices.DeviceInstanceTagCommand, SiGyl.Models.Areas.Runtime, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
						  	"key": {
						  		"propertyRef": {
						  			"name": "Id"
						  		}
						  	},
						  	"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "CommandTemplateId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ParentId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Type",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
						  	],
						  	"navigationProperty": [
							  {
							  	"name": "CommandTemplate",
							  	"relationship": "Self.DeviceInstanceTagCommand_CommandTemplate",
							  	"fromRole": "DeviceInstanceTagCommand_CommandTemplate_Source",
							  	"toRole": "DeviceInstanceTagCommand_CommandTemplate_Target"
							  },
							  {
							  	"name": "Parent",
							  	"relationship": "Self.DeviceInstanceTagCommand_Parent",
							  	"fromRole": "DeviceInstanceTagCommand_Parent_Source",
							  	"toRole": "DeviceInstanceTagCommand_Parent_Target"
							  }
						  	],
						  	"interModelRelations": [],
						  	"histories": [],
						  	"commonName": "DeviceInstanceTagCommand",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "RuntimeEnterprise",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.Runtime.Organisation.RuntimeEnterprise, SiGyl.Models.Areas.Runtime, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
						  	"key": {
						  		"propertyRef": {
						  			"name": "Id"
						  		}
						  	},
						  	"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "ApplicationId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ConfigurationId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ConfigurationParentId",
							  	"type": "Edm.Int32"
							  },
							  {
							  	"name": "Comment",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Name",
							  	"type": "Edm.String",
							  	"maxLength": "256",
							  	"fixedLength": "false",
							  	"unicode": "true",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Description",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
						  	],
						  	"navigationProperty": [
							  {
							  	"name": "Application",
							  	"relationship": "Self.RuntimeApplication_Enterprises",
							  	"fromRole": "RuntimeApplication_Enterprises_Target",
							  	"toRole": "RuntimeApplication_Enterprises_Source"
							  },
							  {
							  	"name": "Commands",
							  	"relationship": "Self.EnterpriseCommand_Parent",
							  	"fromRole": "EnterpriseCommand_Parent_Target",
							  	"toRole": "EnterpriseCommand_Parent_Source"
							  },
							  {
							  	"name": "Sites",
							  	"relationship": "Self.RuntimeEnterprise_Sites",
							  	"fromRole": "RuntimeEnterprise_Sites_Source",
							  	"toRole": "RuntimeEnterprise_Sites_Target"
							  }
						  	],
						  	"interModelRelations": [
							  {
							  	"name": "Enterprise",
							  	"model": "configuration",
							  	"key": "ConfigurationId",
							  	"foreignKey": "Id"
							  }
						  	],
						  	"histories": [
							  {
							  	"name": "HistoryEnterprise"
							  }
						  	],
						  	"commonName": "RuntimeEnterprise",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "RuntimeApplication",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.Runtime.Sys.RuntimeApplication, SiGyl.Models.Areas.Runtime, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
						  	"key": {
						  		"propertyRef": {
						  			"name": "Id"
						  		}
						  	},
						  	"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "ConfigurationId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ConfigurationParentId",
							  	"type": "Edm.Int32"
							  },
							  {
							  	"name": "Comment",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Name",
							  	"type": "Edm.String",
							  	"maxLength": "256",
							  	"fixedLength": "false",
							  	"unicode": "true",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Description",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
						  	],
						  	"navigationProperty": [
							  {
							  	"name": "Commands",
							  	"relationship": "Self.ApplicationCommand_Parent",
							  	"fromRole": "ApplicationCommand_Parent_Target",
							  	"toRole": "ApplicationCommand_Parent_Source"
							  },
							  {
							  	"name": "Enterprises",
							  	"relationship": "Self.RuntimeApplication_Enterprises",
							  	"fromRole": "RuntimeApplication_Enterprises_Source",
							  	"toRole": "RuntimeApplication_Enterprises_Target"
							  }
						  	],
						  	"interModelRelations": [
							  {
							  	"name": "Application",
							  	"model": "configuration",
							  	"key": "ConfigurationId",
							  	"foreignKey": "Id"
							  }
						  	],
						  	"histories": [
							  {
							  	"name": "HistoryApplication"
							  }
						  	],
						  	"commonName": "RuntimeApplication",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "ApplicationCommand",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.Runtime.Sys.ApplicationCommand, SiGyl.Models.Areas.Runtime, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
						  	"key": {
						  		"propertyRef": {
						  			"name": "Id"
						  		}
						  	},
						  	"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "CommandTemplateId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ParentId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Type",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
						  	],
						  	"navigationProperty": [
							  {
							  	"name": "CommandTemplate",
							  	"relationship": "Self.ApplicationCommand_CommandTemplate",
							  	"fromRole": "ApplicationCommand_CommandTemplate_Source",
							  	"toRole": "ApplicationCommand_CommandTemplate_Target"
							  },
							  {
							  	"name": "Parent",
							  	"relationship": "Self.ApplicationCommand_Parent",
							  	"fromRole": "ApplicationCommand_Parent_Source",
							  	"toRole": "ApplicationCommand_Parent_Target"
							  }
						  	],
						  	"interModelRelations": [],
						  	"histories": [],
						  	"commonName": "ApplicationCommand",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "EnterpriseCommand",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.Runtime.Organisation.EnterpriseCommand, SiGyl.Models.Areas.Runtime, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
						  	"key": {
						  		"propertyRef": {
						  			"name": "Id"
						  		}
						  	},
						  	"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "CommandTemplateId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ParentId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Type",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
						  	],
						  	"navigationProperty": [
							  {
							  	"name": "CommandTemplate",
							  	"relationship": "Self.EnterpriseCommand_CommandTemplate",
							  	"fromRole": "EnterpriseCommand_CommandTemplate_Source",
							  	"toRole": "EnterpriseCommand_CommandTemplate_Target"
							  },
							  {
							  	"name": "Parent",
							  	"relationship": "Self.EnterpriseCommand_Parent",
							  	"fromRole": "EnterpriseCommand_Parent_Source",
							  	"toRole": "EnterpriseCommand_Parent_Target"
							  }
						  	],
						  	"interModelRelations": [],
						  	"histories": [],
						  	"commonName": "EnterpriseCommand",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "RuntimeAlarmValue",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.Runtime.Database.RuntimeAlarmValue, SiGyl.Models.Areas.Runtime, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
						  	"key": {
						  		"propertyRef": {
						  			"name": "Id"
						  		}
						  	},
						  	"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "SetValue",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Value",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Index",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "AlarmId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "State",
							  	"type": "Edm.Self.UnitNodeState",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Error",
							  	"type": "Edm.Self.UnitNodeError",
							  	"nullable": "false"
							  },
							  {
							  	"name": "NodeId",
							  	"type": "Edm.Int32"
							  },
							  {
							  	"name": "ConfigurationId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ConfigurationParentId",
							  	"type": "Edm.Int32"
							  },
							  {
							  	"name": "Comment",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Name",
							  	"type": "Edm.String",
							  	"maxLength": "256",
							  	"fixedLength": "false",
							  	"unicode": "true",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Description",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
						  	],
						  	"navigationProperty": [
							  {
							  	"name": "Alarm",
							  	"relationship": "Self.RuntimeAlarmValue_Alarm",
							  	"fromRole": "RuntimeAlarmValue_Alarm_Source",
							  	"toRole": "RuntimeAlarmValue_Alarm_Target"
							  },
							  {
							  	"name": "Commands",
							  	"relationship": "Self.AlarmValueCommand_Parent",
							  	"fromRole": "AlarmValueCommand_Parent_Target",
							  	"toRole": "AlarmValueCommand_Parent_Source"
							  }
						  	],
						  	"interModelRelations": [
							  {
							  	"name": "AlarmValue",
							  	"model": "configuration",
							  	"key": "ConfigurationId",
							  	"foreignKey": "Id"
							  }
						  	],
						  	"histories": [
							  {
							  	"name": "HistoryAlarmValue"
							  }
						  	],
						  	"commonName": "RuntimeAlarmValue",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "AlarmValueCommand",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.Runtime.Database.AlarmValueCommand, SiGyl.Models.Areas.Runtime, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
						  	"key": {
						  		"propertyRef": {
						  			"name": "Id"
						  		}
						  	},
						  	"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "CommandTemplateId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ParentId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Type",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
						  	],
						  	"navigationProperty": [
							  {
							  	"name": "CommandTemplate",
							  	"relationship": "Self.AlarmValueCommand_CommandTemplate",
							  	"fromRole": "AlarmValueCommand_CommandTemplate_Source",
							  	"toRole": "AlarmValueCommand_CommandTemplate_Target"
							  },
							  {
							  	"name": "Parent",
							  	"relationship": "Self.AlarmValueCommand_Parent",
							  	"fromRole": "AlarmValueCommand_Parent_Source",
							  	"toRole": "AlarmValueCommand_Parent_Target"
							  }
						  	],
						  	"interModelRelations": [],
						  	"histories": [],
						  	"commonName": "AlarmValueCommand",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "Step",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.Runtime.Batches.Step, SiGyl.Models.Areas.Runtime, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
						  	"key": {
						  		"propertyRef": {
						  			"name": "Id"
						  		}
						  	},
						  	"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "Index",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UnitProcedureId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "OperationId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "OperationIndex",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Started",
							  	"type": "Edm.DateTime"
							  },
							  {
							  	"name": "Completed",
							  	"type": "Edm.DateTime"
							  },
							  {
							  	"name": "FormulaCount",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "State",
							  	"type": "Edm.Self.StepState",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UnitId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ConfigurationParentId",
							  	"type": "Edm.Int32"
							  },
							  {
							  	"name": "Comment",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Name",
							  	"type": "Edm.String",
							  	"maxLength": "256",
							  	"fixedLength": "false",
							  	"unicode": "true",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Description",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
						  	],
						  	"navigationProperty": [
							  {
							  	"name": "BoolStepFormulae",
							  	"relationship": "Self.BoolStepFormula_Step",
							  	"fromRole": "BoolStepFormula_Step_Target",
							  	"toRole": "BoolStepFormula_Step_Source"
							  },
							  {
							  	"name": "Commands",
							  	"relationship": "Self.StepCommand_Parent",
							  	"fromRole": "StepCommand_Parent_Target",
							  	"toRole": "StepCommand_Parent_Source"
							  },
							  {
							  	"name": "DoubleStepFormulae",
							  	"relationship": "Self.DoubleStepFormula_Step",
							  	"fromRole": "DoubleStepFormula_Step_Target",
							  	"toRole": "DoubleStepFormula_Step_Source"
							  },
							  {
							  	"name": "IntegerStepFormulae",
							  	"relationship": "Self.IntegerStepFormula_Step",
							  	"fromRole": "IntegerStepFormula_Step_Target",
							  	"toRole": "IntegerStepFormula_Step_Source"
							  },
							  {
							  	"name": "Operation",
							  	"relationship": "Self.Step_Operation",
							  	"fromRole": "Step_Operation_Source",
							  	"toRole": "Step_Operation_Target"
							  },
							  {
							  	"name": "StepReports",
							  	"relationship": "Self.StepReport_Step",
							  	"fromRole": "StepReport_Step_Target",
							  	"toRole": "StepReport_Step_Source"
							  },
							  {
							  	"name": "StringStepFormulae",
							  	"relationship": "Self.StringStepFormula_Step",
							  	"fromRole": "StringStepFormula_Step_Target",
							  	"toRole": "StringStepFormula_Step_Source"
							  },
							  {
							  	"name": "UnitProcedure",
							  	"relationship": "Self.Step_UnitProcedure",
							  	"fromRole": "Step_UnitProcedure_Source",
							  	"toRole": "Step_UnitProcedure_Target"
							  }
						  	],
						  	"interModelRelations": [],
						  	"histories": [
							  {
							  	"name": "HistoryStep"
							  }
						  	],
						  	"commonName": "Step",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "BoolStepFormula",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.Runtime.Batches.Formulae.BoolStepFormula, SiGyl.Models.Areas.Runtime, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
						  	"key": {
						  		"propertyRef": {
						  			"name": "Id"
						  		}
						  	},
						  	"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "StepId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Value",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "State",
							  	"type": "Edm.Self.StepFormulaState",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Error",
							  	"type": "Edm.Self.StepFormulaError",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Index",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "DisplayRow",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "DisplayColumn",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Uom",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "IsRowTitle",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ParameterId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ConfigurationId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ConfigurationParentId",
							  	"type": "Edm.Int32"
							  },
							  {
							  	"name": "Comment",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Name",
							  	"type": "Edm.String",
							  	"maxLength": "256",
							  	"fixedLength": "false",
							  	"unicode": "true",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Description",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
						  	],
						  	"navigationProperty": [
							  {
							  	"name": "Commands",
							  	"relationship": "Self.BoolStepFormulaCommand_Parent",
							  	"fromRole": "BoolStepFormulaCommand_Parent_Target",
							  	"toRole": "BoolStepFormulaCommand_Parent_Source"
							  },
							  {
							  	"name": "Parameter",
							  	"relationship": "Self.BoolStepFormula_Parameter",
							  	"fromRole": "BoolStepFormula_Parameter_Source",
							  	"toRole": "BoolStepFormula_Parameter_Target"
							  },
							  {
							  	"name": "Step",
							  	"relationship": "Self.BoolStepFormula_Step",
							  	"fromRole": "BoolStepFormula_Step_Source",
							  	"toRole": "BoolStepFormula_Step_Target"
							  }
						  	],
						  	"interModelRelations": [],
						  	"histories": [
							  {
							  	"name": "HistoryBoolStepFormula"
							  }
						  	],
						  	"commonName": "BoolStepFormula",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "BoolStepFormulaCommand",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.Runtime.Batches.Formulae.BoolStepFormulaCommand, SiGyl.Models.Areas.Runtime, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
						  	"key": {
						  		"propertyRef": {
						  			"name": "Id"
						  		}
						  	},
						  	"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "CommandTemplateId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ParentId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Type",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
						  	],
						  	"navigationProperty": [
							  {
							  	"name": "CommandTemplate",
							  	"relationship": "Self.BoolStepFormulaCommand_CommandTemplate",
							  	"fromRole": "BoolStepFormulaCommand_CommandTemplate_Source",
							  	"toRole": "BoolStepFormulaCommand_CommandTemplate_Target"
							  },
							  {
							  	"name": "Parent",
							  	"relationship": "Self.BoolStepFormulaCommand_Parent",
							  	"fromRole": "BoolStepFormulaCommand_Parent_Source",
							  	"toRole": "BoolStepFormulaCommand_Parent_Target"
							  }
						  	],
						  	"interModelRelations": [],
						  	"histories": [],
						  	"commonName": "BoolStepFormulaCommand",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "RuntimeBoolParameter",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.Runtime.Equipment.Parameters.RuntimeBoolParameter, SiGyl.Models.Areas.Runtime, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
						  	"key": {
						  		"propertyRef": {
						  			"name": "Id"
						  		}
						  	},
						  	"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "OperationId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Value",
							  	"type": "Edm.Boolean"
							  },
							  {
							  	"name": "SetValue",
							  	"type": "Edm.Boolean"
							  },
							  {
							  	"name": "Index",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "DisplayRow",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "DisplayColumn",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Uom",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "IsRowTitle",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "NodeId",
							  	"type": "Edm.Int32"
							  },
							  {
							  	"name": "ParameterId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "State",
							  	"type": "Edm.Self.UnitNodeState",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Error",
							  	"type": "Edm.Self.UnitNodeError",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ConfigurationId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ConfigurationParentId",
							  	"type": "Edm.Int32"
							  },
							  {
							  	"name": "Comment",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Name",
							  	"type": "Edm.String",
							  	"maxLength": "256",
							  	"fixedLength": "false",
							  	"unicode": "true",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Description",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
						  	],
						  	"navigationProperty": [
							  {
							  	"name": "Commands",
							  	"relationship": "Self.BoolParameterCommand_Parent",
							  	"fromRole": "BoolParameterCommand_Parent_Target",
							  	"toRole": "BoolParameterCommand_Parent_Source"
							  },
							  {
							  	"name": "Enumerations",
							  	"relationship": "Self.RuntimeBoolEnumeration_Parameter",
							  	"fromRole": "RuntimeBoolEnumeration_Parameter_Target",
							  	"toRole": "RuntimeBoolEnumeration_Parameter_Source"
							  },
							  {
							  	"name": "Operation",
							  	"relationship": "Self.RuntimeOperation_BoolParameters",
							  	"fromRole": "RuntimeOperation_BoolParameters_Target",
							  	"toRole": "RuntimeOperation_BoolParameters_Source"
							  },
							  {
							  	"name": "StepFormulae",
							  	"relationship": "Self.BoolStepFormula_Parameter",
							  	"fromRole": "BoolStepFormula_Parameter_Target",
							  	"toRole": "BoolStepFormula_Parameter_Source"
							  }
						  	],
						  	"interModelRelations": [
							  {
							  	"name": "BoolParameter",
							  	"model": "configuration",
							  	"key": "ConfigurationId",
							  	"foreignKey": "Id"
							  }
						  	],
						  	"histories": [
							  {
							  	"name": "HistoryBoolParameter"
							  }
						  	],
						  	"commonName": "RuntimeBoolParameter",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "BoolParameterCommand",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.Runtime.Equipment.Parameters.BoolParameterCommand, SiGyl.Models.Areas.Runtime, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
						  	"key": {
						  		"propertyRef": {
						  			"name": "Id"
						  		}
						  	},
						  	"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "CommandTemplateId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ParentId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Type",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
						  	],
						  	"navigationProperty": [
							  {
							  	"name": "CommandTemplate",
							  	"relationship": "Self.BoolParameterCommand_CommandTemplate",
							  	"fromRole": "BoolParameterCommand_CommandTemplate_Source",
							  	"toRole": "BoolParameterCommand_CommandTemplate_Target"
							  },
							  {
							  	"name": "Parent",
							  	"relationship": "Self.BoolParameterCommand_Parent",
							  	"fromRole": "BoolParameterCommand_Parent_Source",
							  	"toRole": "BoolParameterCommand_Parent_Target"
							  }
						  	],
						  	"interModelRelations": [],
						  	"histories": [],
						  	"commonName": "BoolParameterCommand",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "RuntimeBoolEnumeration",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.Runtime.Equipment.Parameters.Enumerations.RuntimeBoolEnumeration, SiGyl.Models.Areas.Runtime, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
						  	"key": {
						  		"propertyRef": {
						  			"name": "Id"
						  		}
						  	},
						  	"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "Index",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ParameterId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Value",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Exception",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "ConfigurationId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ConfigurationParentId",
							  	"type": "Edm.Int32"
							  },
							  {
							  	"name": "Comment",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Name",
							  	"type": "Edm.String",
							  	"maxLength": "256",
							  	"fixedLength": "false",
							  	"unicode": "true",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Description",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
						  	],
						  	"navigationProperty": [
							  {
							  	"name": "Commands",
							  	"relationship": "Self.BoolEnumerationCommand_Parent",
							  	"fromRole": "BoolEnumerationCommand_Parent_Target",
							  	"toRole": "BoolEnumerationCommand_Parent_Source"
							  },
							  {
							  	"name": "Parameter",
							  	"relationship": "Self.RuntimeBoolEnumeration_Parameter",
							  	"fromRole": "RuntimeBoolEnumeration_Parameter_Source",
							  	"toRole": "RuntimeBoolEnumeration_Parameter_Target"
							  }
						  	],
						  	"interModelRelations": [
							  {
							  	"name": "BoolEnumeration",
							  	"model": "configuration",
							  	"key": "ConfigurationId",
							  	"foreignKey": "Id"
							  }
						  	],
						  	"histories": [
							  {
							  	"name": "HistoryBoolEnumeration"
							  }
						  	],
						  	"commonName": "Bool enumeration",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "BoolEnumerationCommand",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.Runtime.Equipment.Parameters.Enumerations.BoolEnumerationCommand, SiGyl.Models.Areas.Runtime, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
						  	"key": {
						  		"propertyRef": {
						  			"name": "Id"
						  		}
						  	},
						  	"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "CommandTemplateId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ParentId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Type",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
						  	],
						  	"navigationProperty": [
							  {
							  	"name": "CommandTemplate",
							  	"relationship": "Self.BoolEnumerationCommand_CommandTemplate",
							  	"fromRole": "BoolEnumerationCommand_CommandTemplate_Source",
							  	"toRole": "BoolEnumerationCommand_CommandTemplate_Target"
							  },
							  {
							  	"name": "Parent",
							  	"relationship": "Self.BoolEnumerationCommand_Parent",
							  	"fromRole": "BoolEnumerationCommand_Parent_Source",
							  	"toRole": "BoolEnumerationCommand_Parent_Target"
							  }
						  	],
						  	"interModelRelations": [],
						  	"histories": [],
						  	"commonName": "BoolEnumerationCommand",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "RuntimeOperation",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.Runtime.Equipment.RuntimeOperation, SiGyl.Models.Areas.Runtime, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
						  	"key": {
						  		"propertyRef": {
						  			"name": "Id"
						  		}
						  	},
						  	"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "Index",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UnitId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Exception",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "ConfigurationId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ConfigurationParentId",
							  	"type": "Edm.Int32"
							  },
							  {
							  	"name": "Comment",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Name",
							  	"type": "Edm.String",
							  	"maxLength": "256",
							  	"fixedLength": "false",
							  	"unicode": "true",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Description",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
						  	],
						  	"navigationProperty": [
							  {
							  	"name": "BoolParameters",
							  	"relationship": "Self.RuntimeOperation_BoolParameters",
							  	"fromRole": "RuntimeOperation_BoolParameters_Source",
							  	"toRole": "RuntimeOperation_BoolParameters_Target"
							  },
							  {
							  	"name": "Commands",
							  	"relationship": "Self.OperationCommand_Parent",
							  	"fromRole": "OperationCommand_Parent_Target",
							  	"toRole": "OperationCommand_Parent_Source"
							  },
							  {
							  	"name": "DoubleParameters",
							  	"relationship": "Self.RuntimeDoubleParameter_Operation",
							  	"fromRole": "RuntimeDoubleParameter_Operation_Target",
							  	"toRole": "RuntimeDoubleParameter_Operation_Source"
							  },
							  {
							  	"name": "IntegerParameters",
							  	"relationship": "Self.RuntimeIntegerParameter_Operation",
							  	"fromRole": "RuntimeIntegerParameter_Operation_Target",
							  	"toRole": "RuntimeIntegerParameter_Operation_Source"
							  },
							  {
							  	"name": "Reports",
							  	"relationship": "Self.RuntimeReport_Operation",
							  	"fromRole": "RuntimeReport_Operation_Target",
							  	"toRole": "RuntimeReport_Operation_Source"
							  },
							  {
							  	"name": "Steps",
							  	"relationship": "Self.Step_Operation",
							  	"fromRole": "Step_Operation_Target",
							  	"toRole": "Step_Operation_Source"
							  },
							  {
							  	"name": "StringParameters",
							  	"relationship": "Self.RuntimeStringParameter_Operation",
							  	"fromRole": "RuntimeStringParameter_Operation_Target",
							  	"toRole": "RuntimeStringParameter_Operation_Source"
							  },
							  {
							  	"name": "Unit",
							  	"relationship": "Self.RuntimeOperation_Unit",
							  	"fromRole": "RuntimeOperation_Unit_Source",
							  	"toRole": "RuntimeOperation_Unit_Target"
							  }
						  	],
						  	"interModelRelations": [
							  {
							  	"name": "Operation",
							  	"model": "configuration",
							  	"key": "ConfigurationId",
							  	"foreignKey": "Id"
							  }
						  	],
						  	"histories": [
							  {
							  	"name": "HistoryOperation"
							  }
						  	],
						  	"commonName": "Operation",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "OperationCommand",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.Runtime.Equipment.OperationCommand, SiGyl.Models.Areas.Runtime, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
						  	"key": {
						  		"propertyRef": {
						  			"name": "Id"
						  		}
						  	},
						  	"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "CommandTemplateId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ParentId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Type",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
						  	],
						  	"navigationProperty": [
							  {
							  	"name": "CommandTemplate",
							  	"relationship": "Self.OperationCommand_CommandTemplate",
							  	"fromRole": "OperationCommand_CommandTemplate_Source",
							  	"toRole": "OperationCommand_CommandTemplate_Target"
							  },
							  {
							  	"name": "Parent",
							  	"relationship": "Self.OperationCommand_Parent",
							  	"fromRole": "OperationCommand_Parent_Source",
							  	"toRole": "OperationCommand_Parent_Target"
							  }
						  	],
						  	"interModelRelations": [],
						  	"histories": [],
						  	"commonName": "OperationCommand",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "RuntimeDoubleParameter",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.Runtime.Equipment.Parameters.RuntimeDoubleParameter, SiGyl.Models.Areas.Runtime, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
						  	"key": {
						  		"propertyRef": {
						  			"name": "Id"
						  		}
						  	},
						  	"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "OperationId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Value",
							  	"type": "Edm.Double"
							  },
							  {
							  	"name": "SetValue",
							  	"type": "Edm.Double"
							  },
							  {
							  	"name": "Index",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "DisplayRow",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "DisplayColumn",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Uom",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "IsRowTitle",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "NodeId",
							  	"type": "Edm.Int32"
							  },
							  {
							  	"name": "ParameterId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "State",
							  	"type": "Edm.Self.UnitNodeState",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Error",
							  	"type": "Edm.Self.UnitNodeError",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ConfigurationId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ConfigurationParentId",
							  	"type": "Edm.Int32"
							  },
							  {
							  	"name": "Comment",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Name",
							  	"type": "Edm.String",
							  	"maxLength": "256",
							  	"fixedLength": "false",
							  	"unicode": "true",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Description",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
						  	],
						  	"navigationProperty": [
							  {
							  	"name": "Commands",
							  	"relationship": "Self.DoubleParameterCommand_Parent",
							  	"fromRole": "DoubleParameterCommand_Parent_Target",
							  	"toRole": "DoubleParameterCommand_Parent_Source"
							  },
							  {
							  	"name": "Operation",
							  	"relationship": "Self.RuntimeDoubleParameter_Operation",
							  	"fromRole": "RuntimeDoubleParameter_Operation_Source",
							  	"toRole": "RuntimeDoubleParameter_Operation_Target"
							  },
							  {
							  	"name": "StepFormulae",
							  	"relationship": "Self.DoubleStepFormula_Parameter",
							  	"fromRole": "DoubleStepFormula_Parameter_Target",
							  	"toRole": "DoubleStepFormula_Parameter_Source"
							  }
						  	],
						  	"interModelRelations": [
							  {
							  	"name": "DoubleParameter",
							  	"model": "configuration",
							  	"key": "ConfigurationId",
							  	"foreignKey": "Id"
							  }
						  	],
						  	"histories": [
							  {
							  	"name": "HistoryDoubleParameter"
							  }
						  	],
						  	"commonName": "RuntimeDoubleParameter",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "DoubleParameterCommand",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.Runtime.Equipment.Parameters.DoubleParameterCommand, SiGyl.Models.Areas.Runtime, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
						  	"key": {
						  		"propertyRef": {
						  			"name": "Id"
						  		}
						  	},
						  	"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "CommandTemplateId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ParentId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Type",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
						  	],
						  	"navigationProperty": [
							  {
							  	"name": "CommandTemplate",
							  	"relationship": "Self.DoubleParameterCommand_CommandTemplate",
							  	"fromRole": "DoubleParameterCommand_CommandTemplate_Source",
							  	"toRole": "DoubleParameterCommand_CommandTemplate_Target"
							  },
							  {
							  	"name": "Parent",
							  	"relationship": "Self.DoubleParameterCommand_Parent",
							  	"fromRole": "DoubleParameterCommand_Parent_Source",
							  	"toRole": "DoubleParameterCommand_Parent_Target"
							  }
						  	],
						  	"interModelRelations": [],
						  	"histories": [],
						  	"commonName": "DoubleParameterCommand",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "DoubleStepFormula",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.Runtime.Batches.Formulae.DoubleStepFormula, SiGyl.Models.Areas.Runtime, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
						  	"key": {
						  		"propertyRef": {
						  			"name": "Id"
						  		}
						  	},
						  	"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "StepId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Value",
							  	"type": "Edm.Double",
							  	"nullable": "false"
							  },
							  {
							  	"name": "State",
							  	"type": "Edm.Self.StepFormulaState",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Error",
							  	"type": "Edm.Self.StepFormulaError",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Index",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "DisplayRow",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "DisplayColumn",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Uom",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "IsRowTitle",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ParameterId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ConfigurationId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ConfigurationParentId",
							  	"type": "Edm.Int32"
							  },
							  {
							  	"name": "Comment",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Name",
							  	"type": "Edm.String",
							  	"maxLength": "256",
							  	"fixedLength": "false",
							  	"unicode": "true",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Description",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
						  	],
						  	"navigationProperty": [
							  {
							  	"name": "Commands",
							  	"relationship": "Self.DoubleStepFormulaCommand_Parent",
							  	"fromRole": "DoubleStepFormulaCommand_Parent_Target",
							  	"toRole": "DoubleStepFormulaCommand_Parent_Source"
							  },
							  {
							  	"name": "Parameter",
							  	"relationship": "Self.DoubleStepFormula_Parameter",
							  	"fromRole": "DoubleStepFormula_Parameter_Source",
							  	"toRole": "DoubleStepFormula_Parameter_Target"
							  },
							  {
							  	"name": "Step",
							  	"relationship": "Self.DoubleStepFormula_Step",
							  	"fromRole": "DoubleStepFormula_Step_Source",
							  	"toRole": "DoubleStepFormula_Step_Target"
							  }
						  	],
						  	"interModelRelations": [],
						  	"histories": [
							  {
							  	"name": "HistoryDoubleStepFormula"
							  }
						  	],
						  	"commonName": "DoubleStepFormula",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "DoubleStepFormulaCommand",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.Runtime.Batches.Formulae.DoubleStepFormulaCommand, SiGyl.Models.Areas.Runtime, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
						  	"key": {
						  		"propertyRef": {
						  			"name": "Id"
						  		}
						  	},
						  	"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "CommandTemplateId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ParentId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Type",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
						  	],
						  	"navigationProperty": [
							  {
							  	"name": "CommandTemplate",
							  	"relationship": "Self.DoubleStepFormulaCommand_CommandTemplate",
							  	"fromRole": "DoubleStepFormulaCommand_CommandTemplate_Source",
							  	"toRole": "DoubleStepFormulaCommand_CommandTemplate_Target"
							  },
							  {
							  	"name": "Parent",
							  	"relationship": "Self.DoubleStepFormulaCommand_Parent",
							  	"fromRole": "DoubleStepFormulaCommand_Parent_Source",
							  	"toRole": "DoubleStepFormulaCommand_Parent_Target"
							  }
						  	],
						  	"interModelRelations": [],
						  	"histories": [],
						  	"commonName": "DoubleStepFormulaCommand",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "RuntimeIntegerParameter",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.Runtime.Equipment.Parameters.RuntimeIntegerParameter, SiGyl.Models.Areas.Runtime, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
						  	"key": {
						  		"propertyRef": {
						  			"name": "Id"
						  		}
						  	},
						  	"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "OperationId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Value",
							  	"type": "Edm.Int32"
							  },
							  {
							  	"name": "SetValue",
							  	"type": "Edm.Int32"
							  },
							  {
							  	"name": "Index",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "DisplayRow",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "DisplayColumn",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Uom",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "IsRowTitle",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "NodeId",
							  	"type": "Edm.Int32"
							  },
							  {
							  	"name": "ParameterId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "State",
							  	"type": "Edm.Self.UnitNodeState",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Error",
							  	"type": "Edm.Self.UnitNodeError",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ConfigurationId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ConfigurationParentId",
							  	"type": "Edm.Int32"
							  },
							  {
							  	"name": "Comment",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Name",
							  	"type": "Edm.String",
							  	"maxLength": "256",
							  	"fixedLength": "false",
							  	"unicode": "true",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Description",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
						  	],
						  	"navigationProperty": [
							  {
							  	"name": "Commands",
							  	"relationship": "Self.IntegerParameterCommand_Parent",
							  	"fromRole": "IntegerParameterCommand_Parent_Target",
							  	"toRole": "IntegerParameterCommand_Parent_Source"
							  },
							  {
							  	"name": "Enumerations",
							  	"relationship": "Self.RuntimeIntegerEnumeration_Parameter",
							  	"fromRole": "RuntimeIntegerEnumeration_Parameter_Target",
							  	"toRole": "RuntimeIntegerEnumeration_Parameter_Source"
							  },
							  {
							  	"name": "Operation",
							  	"relationship": "Self.RuntimeIntegerParameter_Operation",
							  	"fromRole": "RuntimeIntegerParameter_Operation_Source",
							  	"toRole": "RuntimeIntegerParameter_Operation_Target"
							  },
							  {
							  	"name": "StepFormulae",
							  	"relationship": "Self.IntegerStepFormula_Parameter",
							  	"fromRole": "IntegerStepFormula_Parameter_Target",
							  	"toRole": "IntegerStepFormula_Parameter_Source"
							  }
						  	],
						  	"interModelRelations": [
							  {
							  	"name": "IntegerParameter",
							  	"model": "configuration",
							  	"key": "ConfigurationId",
							  	"foreignKey": "Id"
							  }
						  	],
						  	"histories": [
							  {
							  	"name": "HistoryIntegerParameter"
							  }
						  	],
						  	"commonName": "RuntimeIntegerParameter",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "IntegerParameterCommand",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.Runtime.Equipment.Parameters.IntegerParameterCommand, SiGyl.Models.Areas.Runtime, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
						  	"key": {
						  		"propertyRef": {
						  			"name": "Id"
						  		}
						  	},
						  	"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "CommandTemplateId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ParentId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Type",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
						  	],
						  	"navigationProperty": [
							  {
							  	"name": "CommandTemplate",
							  	"relationship": "Self.IntegerParameterCommand_CommandTemplate",
							  	"fromRole": "IntegerParameterCommand_CommandTemplate_Source",
							  	"toRole": "IntegerParameterCommand_CommandTemplate_Target"
							  },
							  {
							  	"name": "Parent",
							  	"relationship": "Self.IntegerParameterCommand_Parent",
							  	"fromRole": "IntegerParameterCommand_Parent_Source",
							  	"toRole": "IntegerParameterCommand_Parent_Target"
							  }
						  	],
						  	"interModelRelations": [],
						  	"histories": [],
						  	"commonName": "IntegerParameterCommand",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "RuntimeIntegerEnumeration",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.Runtime.Equipment.Parameters.Enumerations.RuntimeIntegerEnumeration, SiGyl.Models.Areas.Runtime, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
						  	"key": {
						  		"propertyRef": {
						  			"name": "Id"
						  		}
						  	},
						  	"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "Index",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ParameterId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Value",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Exception",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "ConfigurationId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ConfigurationParentId",
							  	"type": "Edm.Int32"
							  },
							  {
							  	"name": "Comment",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Name",
							  	"type": "Edm.String",
							  	"maxLength": "256",
							  	"fixedLength": "false",
							  	"unicode": "true",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Description",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
						  	],
						  	"navigationProperty": [
							  {
							  	"name": "Commands",
							  	"relationship": "Self.IntegerEnumerationCommand_Parent",
							  	"fromRole": "IntegerEnumerationCommand_Parent_Target",
							  	"toRole": "IntegerEnumerationCommand_Parent_Source"
							  },
							  {
							  	"name": "Parameter",
							  	"relationship": "Self.RuntimeIntegerEnumeration_Parameter",
							  	"fromRole": "RuntimeIntegerEnumeration_Parameter_Source",
							  	"toRole": "RuntimeIntegerEnumeration_Parameter_Target"
							  }
						  	],
						  	"interModelRelations": [
							  {
							  	"name": "IntegerEnumeration",
							  	"model": "configuration",
							  	"key": "ConfigurationId",
							  	"foreignKey": "Id"
							  }
						  	],
						  	"histories": [
							  {
							  	"name": "HistoryIntegerEnumeration"
							  }
						  	],
						  	"commonName": "Integer enumeration",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "IntegerEnumerationCommand",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.Runtime.Equipment.Parameters.Enumerations.IntegerEnumerationCommand, SiGyl.Models.Areas.Runtime, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
						  	"key": {
						  		"propertyRef": {
						  			"name": "Id"
						  		}
						  	},
						  	"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "CommandTemplateId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ParentId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Type",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
						  	],
						  	"navigationProperty": [
							  {
							  	"name": "CommandTemplate",
							  	"relationship": "Self.IntegerEnumerationCommand_CommandTemplate",
							  	"fromRole": "IntegerEnumerationCommand_CommandTemplate_Source",
							  	"toRole": "IntegerEnumerationCommand_CommandTemplate_Target"
							  },
							  {
							  	"name": "Parent",
							  	"relationship": "Self.IntegerEnumerationCommand_Parent",
							  	"fromRole": "IntegerEnumerationCommand_Parent_Source",
							  	"toRole": "IntegerEnumerationCommand_Parent_Target"
							  }
						  	],
						  	"interModelRelations": [],
						  	"histories": [],
						  	"commonName": "IntegerEnumerationCommand",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "IntegerStepFormula",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.Runtime.Batches.Formulae.IntegerStepFormula, SiGyl.Models.Areas.Runtime, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
						  	"key": {
						  		"propertyRef": {
						  			"name": "Id"
						  		}
						  	},
						  	"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "StepId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Value",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "State",
							  	"type": "Edm.Self.StepFormulaState",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Error",
							  	"type": "Edm.Self.StepFormulaError",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Index",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "DisplayRow",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "DisplayColumn",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Uom",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "IsRowTitle",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ParameterId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ConfigurationId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ConfigurationParentId",
							  	"type": "Edm.Int32"
							  },
							  {
							  	"name": "Comment",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Name",
							  	"type": "Edm.String",
							  	"maxLength": "256",
							  	"fixedLength": "false",
							  	"unicode": "true",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Description",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
						  	],
						  	"navigationProperty": [
							  {
							  	"name": "Commands",
							  	"relationship": "Self.IntegerStepFormulaCommand_Parent",
							  	"fromRole": "IntegerStepFormulaCommand_Parent_Target",
							  	"toRole": "IntegerStepFormulaCommand_Parent_Source"
							  },
							  {
							  	"name": "Parameter",
							  	"relationship": "Self.IntegerStepFormula_Parameter",
							  	"fromRole": "IntegerStepFormula_Parameter_Source",
							  	"toRole": "IntegerStepFormula_Parameter_Target"
							  },
							  {
							  	"name": "Step",
							  	"relationship": "Self.IntegerStepFormula_Step",
							  	"fromRole": "IntegerStepFormula_Step_Source",
							  	"toRole": "IntegerStepFormula_Step_Target"
							  }
						  	],
						  	"interModelRelations": [],
						  	"histories": [
							  {
							  	"name": "HistoryIntegerStepFormula"
							  }
						  	],
						  	"commonName": "IntegerStepFormula",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "IntegerStepFormulaCommand",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.Runtime.Batches.Formulae.IntegerStepFormulaCommand, SiGyl.Models.Areas.Runtime, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
						  	"key": {
						  		"propertyRef": {
						  			"name": "Id"
						  		}
						  	},
						  	"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "CommandTemplateId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ParentId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Type",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
						  	],
						  	"navigationProperty": [
							  {
							  	"name": "CommandTemplate",
							  	"relationship": "Self.IntegerStepFormulaCommand_CommandTemplate",
							  	"fromRole": "IntegerStepFormulaCommand_CommandTemplate_Source",
							  	"toRole": "IntegerStepFormulaCommand_CommandTemplate_Target"
							  },
							  {
							  	"name": "Parent",
							  	"relationship": "Self.IntegerStepFormulaCommand_Parent",
							  	"fromRole": "IntegerStepFormulaCommand_Parent_Source",
							  	"toRole": "IntegerStepFormulaCommand_Parent_Target"
							  }
						  	],
						  	"interModelRelations": [],
						  	"histories": [],
						  	"commonName": "IntegerStepFormulaCommand",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "RuntimeReport",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.Runtime.Equipment.Parameters.RuntimeReport, SiGyl.Models.Areas.Runtime, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
						  	"key": {
						  		"propertyRef": {
						  			"name": "Id"
						  		}
						  	},
						  	"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "OperationId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Value",
							  	"type": "Edm.Double"
							  },
							  {
							  	"name": "SetValue",
							  	"type": "Edm.Double"
							  },
							  {
							  	"name": "Index",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "DisplayRow",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "DisplayColumn",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Uom",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "IsRowTitle",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "NodeId",
							  	"type": "Edm.Int32"
							  },
							  {
							  	"name": "ParameterId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "State",
							  	"type": "Edm.Self.UnitNodeState",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Error",
							  	"type": "Edm.Self.UnitNodeError",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ConfigurationId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ConfigurationParentId",
							  	"type": "Edm.Int32"
							  },
							  {
							  	"name": "Comment",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Name",
							  	"type": "Edm.String",
							  	"maxLength": "256",
							  	"fixedLength": "false",
							  	"unicode": "true",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Description",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
						  	],
						  	"navigationProperty": [
							  {
							  	"name": "Commands",
							  	"relationship": "Self.ReportCommand_Parent",
							  	"fromRole": "ReportCommand_Parent_Target",
							  	"toRole": "ReportCommand_Parent_Source"
							  },
							  {
							  	"name": "Operation",
							  	"relationship": "Self.RuntimeReport_Operation",
							  	"fromRole": "RuntimeReport_Operation_Source",
							  	"toRole": "RuntimeReport_Operation_Target"
							  },
							  {
							  	"name": "StepFormulae",
							  	"relationship": "Self.StepReport_Parameter",
							  	"fromRole": "StepReport_Parameter_Target",
							  	"toRole": "StepReport_Parameter_Source"
							  }
						  	],
						  	"interModelRelations": [
							  {
							  	"name": "Report",
							  	"model": "configuration",
							  	"key": "ConfigurationId",
							  	"foreignKey": "Id"
							  }
						  	],
						  	"histories": [
							  {
							  	"name": "HistoryReport"
							  }
						  	],
						  	"commonName": "RuntimeReport",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "ReportCommand",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.Runtime.Equipment.Parameters.ReportCommand, SiGyl.Models.Areas.Runtime, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
						  	"key": {
						  		"propertyRef": {
						  			"name": "Id"
						  		}
						  	},
						  	"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "CommandTemplateId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ParentId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Type",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
						  	],
						  	"navigationProperty": [
							  {
							  	"name": "CommandTemplate",
							  	"relationship": "Self.ReportCommand_CommandTemplate",
							  	"fromRole": "ReportCommand_CommandTemplate_Source",
							  	"toRole": "ReportCommand_CommandTemplate_Target"
							  },
							  {
							  	"name": "Parent",
							  	"relationship": "Self.ReportCommand_Parent",
							  	"fromRole": "ReportCommand_Parent_Source",
							  	"toRole": "ReportCommand_Parent_Target"
							  }
						  	],
						  	"interModelRelations": [],
						  	"histories": [],
						  	"commonName": "ReportCommand",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "StepReport",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.Runtime.Batches.Formulae.StepReport, SiGyl.Models.Areas.Runtime, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
						  	"key": {
						  		"propertyRef": {
						  			"name": "Id"
						  		}
						  	},
						  	"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "StepId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Value",
							  	"type": "Edm.Double",
							  	"nullable": "false"
							  },
							  {
							  	"name": "State",
							  	"type": "Edm.Self.StepFormulaState",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Error",
							  	"type": "Edm.Self.StepFormulaError",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Index",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "DisplayRow",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "DisplayColumn",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Uom",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "IsRowTitle",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ParameterId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ConfigurationId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ConfigurationParentId",
							  	"type": "Edm.Int32"
							  },
							  {
							  	"name": "Comment",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Name",
							  	"type": "Edm.String",
							  	"maxLength": "256",
							  	"fixedLength": "false",
							  	"unicode": "true",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Description",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
						  	],
						  	"navigationProperty": [
							  {
							  	"name": "Commands",
							  	"relationship": "Self.StepReportCommand_Parent",
							  	"fromRole": "StepReportCommand_Parent_Target",
							  	"toRole": "StepReportCommand_Parent_Source"
							  },
							  {
							  	"name": "Parameter",
							  	"relationship": "Self.StepReport_Parameter",
							  	"fromRole": "StepReport_Parameter_Source",
							  	"toRole": "StepReport_Parameter_Target"
							  },
							  {
							  	"name": "Step",
							  	"relationship": "Self.StepReport_Step",
							  	"fromRole": "StepReport_Step_Source",
							  	"toRole": "StepReport_Step_Target"
							  }
						  	],
						  	"interModelRelations": [],
						  	"histories": [
							  {
							  	"name": "HistoryStepReport"
							  }
						  	],
						  	"commonName": "StepReport",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "StepReportCommand",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.Runtime.Batches.Formulae.StepReportCommand, SiGyl.Models.Areas.Runtime, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
						  	"key": {
						  		"propertyRef": {
						  			"name": "Id"
						  		}
						  	},
						  	"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "CommandTemplateId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ParentId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Type",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
						  	],
						  	"navigationProperty": [
							  {
							  	"name": "CommandTemplate",
							  	"relationship": "Self.StepReportCommand_CommandTemplate",
							  	"fromRole": "StepReportCommand_CommandTemplate_Source",
							  	"toRole": "StepReportCommand_CommandTemplate_Target"
							  },
							  {
							  	"name": "Parent",
							  	"relationship": "Self.StepReportCommand_Parent",
							  	"fromRole": "StepReportCommand_Parent_Source",
							  	"toRole": "StepReportCommand_Parent_Target"
							  }
						  	],
						  	"interModelRelations": [],
						  	"histories": [],
						  	"commonName": "StepReportCommand",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "RuntimeStringParameter",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.Runtime.Equipment.Parameters.RuntimeStringParameter, SiGyl.Models.Areas.Runtime, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
						  	"key": {
						  		"propertyRef": {
						  			"name": "Id"
						  		}
						  	},
						  	"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "OperationId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Value",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "SetValue",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Index",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "DisplayRow",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "DisplayColumn",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Uom",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "IsRowTitle",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "NodeId",
							  	"type": "Edm.Int32"
							  },
							  {
							  	"name": "ParameterId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "State",
							  	"type": "Edm.Self.UnitNodeState",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Error",
							  	"type": "Edm.Self.UnitNodeError",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ConfigurationId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ConfigurationParentId",
							  	"type": "Edm.Int32"
							  },
							  {
							  	"name": "Comment",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Name",
							  	"type": "Edm.String",
							  	"maxLength": "256",
							  	"fixedLength": "false",
							  	"unicode": "true",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Description",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
						  	],
						  	"navigationProperty": [
							  {
							  	"name": "Commands",
							  	"relationship": "Self.StringParameterCommand_Parent",
							  	"fromRole": "StringParameterCommand_Parent_Target",
							  	"toRole": "StringParameterCommand_Parent_Source"
							  },
							  {
							  	"name": "Operation",
							  	"relationship": "Self.RuntimeStringParameter_Operation",
							  	"fromRole": "RuntimeStringParameter_Operation_Source",
							  	"toRole": "RuntimeStringParameter_Operation_Target"
							  },
							  {
							  	"name": "StepFormulae",
							  	"relationship": "Self.StringStepFormula_Parameter",
							  	"fromRole": "StringStepFormula_Parameter_Target",
							  	"toRole": "StringStepFormula_Parameter_Source"
							  }
						  	],
						  	"interModelRelations": [
							  {
							  	"name": "StringParameter",
							  	"model": "configuration",
							  	"key": "ConfigurationId",
							  	"foreignKey": "Id"
							  }
						  	],
						  	"histories": [
							  {
							  	"name": "HistoryStringParameter"
							  }
						  	],
						  	"commonName": "RuntimeStringParameter",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "StringParameterCommand",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.Runtime.Equipment.Parameters.StringParameterCommand, SiGyl.Models.Areas.Runtime, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
						  	"key": {
						  		"propertyRef": {
						  			"name": "Id"
						  		}
						  	},
						  	"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "CommandTemplateId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ParentId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Type",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
						  	],
						  	"navigationProperty": [
							  {
							  	"name": "CommandTemplate",
							  	"relationship": "Self.StringParameterCommand_CommandTemplate",
							  	"fromRole": "StringParameterCommand_CommandTemplate_Source",
							  	"toRole": "StringParameterCommand_CommandTemplate_Target"
							  },
							  {
							  	"name": "Parent",
							  	"relationship": "Self.StringParameterCommand_Parent",
							  	"fromRole": "StringParameterCommand_Parent_Source",
							  	"toRole": "StringParameterCommand_Parent_Target"
							  }
						  	],
						  	"interModelRelations": [],
						  	"histories": [],
						  	"commonName": "StringParameterCommand",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "StringStepFormula",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.Runtime.Batches.Formulae.StringStepFormula, SiGyl.Models.Areas.Runtime, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
						  	"key": {
						  		"propertyRef": {
						  			"name": "Id"
						  		}
						  	},
						  	"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "StepId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Value",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "State",
							  	"type": "Edm.Self.StepFormulaState",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Error",
							  	"type": "Edm.Self.StepFormulaError",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Index",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "DisplayRow",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "DisplayColumn",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Uom",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "IsRowTitle",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ParameterId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ConfigurationId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ConfigurationParentId",
							  	"type": "Edm.Int32"
							  },
							  {
							  	"name": "Comment",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Name",
							  	"type": "Edm.String",
							  	"maxLength": "256",
							  	"fixedLength": "false",
							  	"unicode": "true",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Description",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
						  	],
						  	"navigationProperty": [
							  {
							  	"name": "Commands",
							  	"relationship": "Self.StringStepFormulaCommand_Parent",
							  	"fromRole": "StringStepFormulaCommand_Parent_Target",
							  	"toRole": "StringStepFormulaCommand_Parent_Source"
							  },
							  {
							  	"name": "Parameter",
							  	"relationship": "Self.StringStepFormula_Parameter",
							  	"fromRole": "StringStepFormula_Parameter_Source",
							  	"toRole": "StringStepFormula_Parameter_Target"
							  },
							  {
							  	"name": "Step",
							  	"relationship": "Self.StringStepFormula_Step",
							  	"fromRole": "StringStepFormula_Step_Source",
							  	"toRole": "StringStepFormula_Step_Target"
							  }
						  	],
						  	"interModelRelations": [],
						  	"histories": [
							  {
							  	"name": "HistoryStringStepFormula"
							  }
						  	],
						  	"commonName": "StringStepFormula",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "StringStepFormulaCommand",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.Runtime.Batches.Formulae.StringStepFormulaCommand, SiGyl.Models.Areas.Runtime, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
						  	"key": {
						  		"propertyRef": {
						  			"name": "Id"
						  		}
						  	},
						  	"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "CommandTemplateId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ParentId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Type",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
						  	],
						  	"navigationProperty": [
							  {
							  	"name": "CommandTemplate",
							  	"relationship": "Self.StringStepFormulaCommand_CommandTemplate",
							  	"fromRole": "StringStepFormulaCommand_CommandTemplate_Source",
							  	"toRole": "StringStepFormulaCommand_CommandTemplate_Target"
							  },
							  {
							  	"name": "Parent",
							  	"relationship": "Self.StringStepFormulaCommand_Parent",
							  	"fromRole": "StringStepFormulaCommand_Parent_Source",
							  	"toRole": "StringStepFormulaCommand_Parent_Target"
							  }
						  	],
						  	"interModelRelations": [],
						  	"histories": [],
						  	"commonName": "StringStepFormulaCommand",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "StepCommand",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.Runtime.Batches.StepCommand, SiGyl.Models.Areas.Runtime, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
						  	"key": {
						  		"propertyRef": {
						  			"name": "Id"
						  		}
						  	},
						  	"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "CommandTemplateId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ParentId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Type",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
						  	],
						  	"navigationProperty": [
							  {
							  	"name": "CommandTemplate",
							  	"relationship": "Self.StepCommand_CommandTemplate",
							  	"fromRole": "StepCommand_CommandTemplate_Source",
							  	"toRole": "StepCommand_CommandTemplate_Target"
							  },
							  {
							  	"name": "Parent",
							  	"relationship": "Self.StepCommand_Parent",
							  	"fromRole": "StepCommand_Parent_Source",
							  	"toRole": "StepCommand_Parent_Target"
							  }
						  	],
						  	"interModelRelations": [],
						  	"histories": [],
						  	"commonName": "StepCommand",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "RuntimeUnitProcedure",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.Runtime.Batches.RuntimeUnitProcedure, SiGyl.Models.Areas.Runtime, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
						  	"key": {
						  		"propertyRef": {
						  			"name": "Id"
						  		}
						  	},
						  	"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "BatchId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Started",
							  	"type": "Edm.DateTime"
							  },
							  {
							  	"name": "Completed",
							  	"type": "Edm.DateTime"
							  },
							  {
							  	"name": "UnitId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Index",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "State",
							  	"type": "Edm.Self.UnitProcedureState",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Mode",
							  	"type": "Edm.Self.UnitProcedureMode",
							  	"nullable": "false"
							  },
							  {
							  	"name": "AllocatedStepId",
							  	"type": "Edm.Int32"
							  },
							  {
							  	"name": "StepCount",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ConfigurationId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ConfigurationParentId",
							  	"type": "Edm.Int32"
							  },
							  {
							  	"name": "Comment",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Name",
							  	"type": "Edm.String",
							  	"maxLength": "256",
							  	"fixedLength": "false",
							  	"unicode": "true",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Description",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
						  	],
						  	"navigationProperty": [
							  {
							  	"name": "AllocatedStep",
							  	"relationship": "Self.RuntimeUnitProcedure_AllocatedStep",
							  	"fromRole": "RuntimeUnitProcedure_AllocatedStep_Source",
							  	"toRole": "RuntimeUnitProcedure_AllocatedStep_Target"
							  },
							  {
							  	"name": "Batch",
							  	"relationship": "Self.RuntimeUnitProcedure_Batch",
							  	"fromRole": "RuntimeUnitProcedure_Batch_Source",
							  	"toRole": "RuntimeUnitProcedure_Batch_Target"
							  },
							  {
							  	"name": "Commands",
							  	"relationship": "Self.UnitProcedureCommand_Parent",
							  	"fromRole": "UnitProcedureCommand_Parent_Target",
							  	"toRole": "UnitProcedureCommand_Parent_Source"
							  },
							  {
							  	"name": "Steps",
							  	"relationship": "Self.Step_UnitProcedure",
							  	"fromRole": "Step_UnitProcedure_Target",
							  	"toRole": "Step_UnitProcedure_Source"
							  },
							  {
							  	"name": "Unit",
							  	"relationship": "Self.RuntimeUnitProcedure_Unit",
							  	"fromRole": "RuntimeUnitProcedure_Unit_Source",
							  	"toRole": "RuntimeUnitProcedure_Unit_Target"
							  }
						  	],
						  	"interModelRelations": [],
						  	"histories": [
							  {
							  	"name": "HistoryUnitProcedure"
							  }
						  	],
						  	"commonName": "RuntimeUnitProcedure",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "UnitProcedureCommand",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.Runtime.Batches.UnitProcedureCommand, SiGyl.Models.Areas.Runtime, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
						  	"key": {
						  		"propertyRef": {
						  			"name": "Id"
						  		}
						  	},
						  	"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "CommandTemplateId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ParentId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Type",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
						  	],
						  	"navigationProperty": [
							  {
							  	"name": "CommandTemplate",
							  	"relationship": "Self.UnitProcedureCommand_CommandTemplate",
							  	"fromRole": "UnitProcedureCommand_CommandTemplate_Source",
							  	"toRole": "UnitProcedureCommand_CommandTemplate_Target"
							  },
							  {
							  	"name": "Parent",
							  	"relationship": "Self.UnitProcedureCommand_Parent",
							  	"fromRole": "UnitProcedureCommand_Parent_Source",
							  	"toRole": "UnitProcedureCommand_Parent_Target"
							  }
						  	],
						  	"interModelRelations": [],
						  	"histories": [],
						  	"commonName": "UnitProcedureCommand",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "RuntimeBoolParameterNode",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.Runtime.Equipment.Nodes.RuntimeBoolParameterNode, SiGyl.Models.Areas.Runtime, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
						  	"key": {
						  		"propertyRef": {
						  			"name": "Id"
						  		}
						  	},
						  	"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "InitialDownload",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UnitId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Value",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "SetValue",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "State",
							  	"type": "Edm.Self.UnitNodeState",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Error",
							  	"type": "Edm.Self.UnitNodeError",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Index",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "NodeId",
							  	"type": "Edm.Int32"
							  },
							  {
							  	"name": "ConfigurationId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ConfigurationParentId",
							  	"type": "Edm.Int32"
							  },
							  {
							  	"name": "Comment",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Name",
							  	"type": "Edm.String",
							  	"maxLength": "256",
							  	"fixedLength": "false",
							  	"unicode": "true",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Description",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
						  	],
						  	"navigationProperty": [
							  {
							  	"name": "Commands",
							  	"relationship": "Self.BoolParameterNodeCommand_Parent",
							  	"fromRole": "BoolParameterNodeCommand_Parent_Target",
							  	"toRole": "BoolParameterNodeCommand_Parent_Source"
							  },
							  {
							  	"name": "Unit",
							  	"relationship": "Self.RuntimeBoolParameterNode_Unit",
							  	"fromRole": "RuntimeBoolParameterNode_Unit_Source",
							  	"toRole": "RuntimeBoolParameterNode_Unit_Target"
							  }
						  	],
						  	"interModelRelations": [
							  {
							  	"name": "BoolParameterNode",
							  	"model": "configuration",
							  	"key": "ConfigurationId",
							  	"foreignKey": "Id"
							  }
						  	],
						  	"histories": [
							  {
							  	"name": "HistoryBoolParameterNode"
							  }
						  	],
						  	"commonName": "Bool parameter node",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "BoolParameterNodeCommand",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.Runtime.Equipment.Nodes.BoolParameterNodeCommand, SiGyl.Models.Areas.Runtime, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
						  	"key": {
						  		"propertyRef": {
						  			"name": "Id"
						  		}
						  	},
						  	"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "CommandTemplateId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ParentId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Type",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
						  	],
						  	"navigationProperty": [
							  {
							  	"name": "CommandTemplate",
							  	"relationship": "Self.BoolParameterNodeCommand_CommandTemplate",
							  	"fromRole": "BoolParameterNodeCommand_CommandTemplate_Source",
							  	"toRole": "BoolParameterNodeCommand_CommandTemplate_Target"
							  },
							  {
							  	"name": "Parent",
							  	"relationship": "Self.BoolParameterNodeCommand_Parent",
							  	"fromRole": "BoolParameterNodeCommand_Parent_Source",
							  	"toRole": "BoolParameterNodeCommand_Parent_Target"
							  }
						  	],
						  	"interModelRelations": [],
						  	"histories": [],
						  	"commonName": "BoolParameterNodeCommand",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "RuntimeCommandNode",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.Runtime.Equipment.Nodes.RuntimeCommandNode, SiGyl.Models.Areas.Runtime, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
						  	"key": {
						  		"propertyRef": {
						  			"name": "Id"
						  		}
						  	},
						  	"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "IsPermitted",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UnitId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Value",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "SetValue",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "State",
							  	"type": "Edm.Self.UnitNodeState",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Error",
							  	"type": "Edm.Self.UnitNodeError",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Index",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "NodeId",
							  	"type": "Edm.Int32"
							  },
							  {
							  	"name": "ConfigurationId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ConfigurationParentId",
							  	"type": "Edm.Int32"
							  },
							  {
							  	"name": "Comment",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Name",
							  	"type": "Edm.String",
							  	"maxLength": "256",
							  	"fixedLength": "false",
							  	"unicode": "true",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Description",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
						  	],
						  	"navigationProperty": [
							  {
							  	"name": "Commands",
							  	"relationship": "Self.CommandNodeCommand_Parent",
							  	"fromRole": "CommandNodeCommand_Parent_Target",
							  	"toRole": "CommandNodeCommand_Parent_Source"
							  },
							  {
							  	"name": "Unit",
							  	"relationship": "Self.RuntimeCommandNode_Unit",
							  	"fromRole": "RuntimeCommandNode_Unit_Source",
							  	"toRole": "RuntimeCommandNode_Unit_Target"
							  }
						  	],
						  	"interModelRelations": [
							  {
							  	"name": "CommandNode",
							  	"model": "configuration",
							  	"key": "ConfigurationId",
							  	"foreignKey": "Id"
							  }
						  	],
						  	"histories": [
							  {
							  	"name": "HistoryCommandNode"
							  }
						  	],
						  	"commonName": "Command node",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "CommandNodeCommand",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.Runtime.Equipment.Nodes.CommandNodeCommand, SiGyl.Models.Areas.Runtime, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
						  	"key": {
						  		"propertyRef": {
						  			"name": "Id"
						  		}
						  	},
						  	"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "CommandTemplateId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ParentId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Type",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
						  	],
						  	"navigationProperty": [
							  {
							  	"name": "CommandTemplate",
							  	"relationship": "Self.CommandNodeCommand_CommandTemplate",
							  	"fromRole": "CommandNodeCommand_CommandTemplate_Source",
							  	"toRole": "CommandNodeCommand_CommandTemplate_Target"
							  },
							  {
							  	"name": "Parent",
							  	"relationship": "Self.CommandNodeCommand_Parent",
							  	"fromRole": "CommandNodeCommand_Parent_Source",
							  	"toRole": "CommandNodeCommand_Parent_Target"
							  }
						  	],
						  	"interModelRelations": [],
						  	"histories": [],
						  	"commonName": "CommandNodeCommand",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "UnitCommand",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.Runtime.Equipment.UnitCommand, SiGyl.Models.Areas.Runtime, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
						  	"key": {
						  		"propertyRef": {
						  			"name": "Id"
						  		}
						  	},
						  	"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "CommandTemplateId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ParentId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Type",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
						  	],
						  	"navigationProperty": [
							  {
							  	"name": "CommandTemplate",
							  	"relationship": "Self.UnitCommand_CommandTemplate",
							  	"fromRole": "UnitCommand_CommandTemplate_Source",
							  	"toRole": "UnitCommand_CommandTemplate_Target"
							  },
							  {
							  	"name": "Parent",
							  	"relationship": "Self.UnitCommand_Parent",
							  	"fromRole": "UnitCommand_Parent_Source",
							  	"toRole": "UnitCommand_Parent_Target"
							  }
						  	],
						  	"interModelRelations": [],
						  	"histories": [],
						  	"commonName": "UnitCommand",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "RuntimeDataLogNode",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.Runtime.Equipment.Nodes.RuntimeDataLogNode, SiGyl.Models.Areas.Runtime, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
						  	"key": {
						  		"propertyRef": {
						  			"name": "Id"
						  		}
						  	},
						  	"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "Colour",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "UnitId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Value",
							  	"type": "Edm.Double"
							  },
							  {
							  	"name": "SetValue",
							  	"type": "Edm.Double"
							  },
							  {
							  	"name": "State",
							  	"type": "Edm.Self.UnitNodeState",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Error",
							  	"type": "Edm.Self.UnitNodeError",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Index",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "NodeId",
							  	"type": "Edm.Int32"
							  },
							  {
							  	"name": "ConfigurationId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ConfigurationParentId",
							  	"type": "Edm.Int32"
							  },
							  {
							  	"name": "Comment",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Name",
							  	"type": "Edm.String",
							  	"maxLength": "256",
							  	"fixedLength": "false",
							  	"unicode": "true",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Description",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
						  	],
						  	"navigationProperty": [
							  {
							  	"name": "Commands",
							  	"relationship": "Self.DataLogNodeCommand_Parent",
							  	"fromRole": "DataLogNodeCommand_Parent_Target",
							  	"toRole": "DataLogNodeCommand_Parent_Source"
							  },
							  {
							  	"name": "Unit",
							  	"relationship": "Self.RuntimeDataLogNode_Unit",
							  	"fromRole": "RuntimeDataLogNode_Unit_Source",
							  	"toRole": "RuntimeDataLogNode_Unit_Target"
							  }
						  	],
						  	"interModelRelations": [
							  {
							  	"name": "DataLogNode",
							  	"model": "configuration",
							  	"key": "ConfigurationId",
							  	"foreignKey": "Id"
							  }
						  	],
						  	"histories": [
							  {
							  	"name": "HistoryDataLogNode"
							  }
						  	],
						  	"commonName": "RuntimeDataLogNode",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "DataLogNodeCommand",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.Runtime.Equipment.Nodes.DataLogNodeCommand, SiGyl.Models.Areas.Runtime, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
						  	"key": {
						  		"propertyRef": {
						  			"name": "Id"
						  		}
						  	},
						  	"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "CommandTemplateId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ParentId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Type",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
						  	],
						  	"navigationProperty": [
							  {
							  	"name": "CommandTemplate",
							  	"relationship": "Self.DataLogNodeCommand_CommandTemplate",
							  	"fromRole": "DataLogNodeCommand_CommandTemplate_Source",
							  	"toRole": "DataLogNodeCommand_CommandTemplate_Target"
							  },
							  {
							  	"name": "Parent",
							  	"relationship": "Self.DataLogNodeCommand_Parent",
							  	"fromRole": "DataLogNodeCommand_Parent_Source",
							  	"toRole": "DataLogNodeCommand_Parent_Target"
							  }
						  	],
						  	"interModelRelations": [],
						  	"histories": [],
						  	"commonName": "DataLogNodeCommand",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "RuntimeDoubleParameterNode",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.Runtime.Equipment.Nodes.RuntimeDoubleParameterNode, SiGyl.Models.Areas.Runtime, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
						  	"key": {
						  		"propertyRef": {
						  			"name": "Id"
						  		}
						  	},
						  	"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "InitialDownload",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UnitId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Value",
							  	"type": "Edm.Double",
							  	"nullable": "false"
							  },
							  {
							  	"name": "SetValue",
							  	"type": "Edm.Double",
							  	"nullable": "false"
							  },
							  {
							  	"name": "State",
							  	"type": "Edm.Self.UnitNodeState",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Error",
							  	"type": "Edm.Self.UnitNodeError",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Index",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "NodeId",
							  	"type": "Edm.Int32"
							  },
							  {
							  	"name": "ConfigurationId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ConfigurationParentId",
							  	"type": "Edm.Int32"
							  },
							  {
							  	"name": "Comment",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Name",
							  	"type": "Edm.String",
							  	"maxLength": "256",
							  	"fixedLength": "false",
							  	"unicode": "true",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Description",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
						  	],
						  	"navigationProperty": [
							  {
							  	"name": "Commands",
							  	"relationship": "Self.DoubleParameterNodeCommand_Parent",
							  	"fromRole": "DoubleParameterNodeCommand_Parent_Target",
							  	"toRole": "DoubleParameterNodeCommand_Parent_Source"
							  },
							  {
							  	"name": "Unit",
							  	"relationship": "Self.RuntimeDoubleParameterNode_Unit",
							  	"fromRole": "RuntimeDoubleParameterNode_Unit_Source",
							  	"toRole": "RuntimeDoubleParameterNode_Unit_Target"
							  }
						  	],
						  	"interModelRelations": [
							  {
							  	"name": "DoubleParameterNode",
							  	"model": "configuration",
							  	"key": "ConfigurationId",
							  	"foreignKey": "Id"
							  }
						  	],
						  	"histories": [
							  {
							  	"name": "HistoryDoubleParameterNode"
							  }
						  	],
						  	"commonName": "RuntimeDoubleParameterNode",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "DoubleParameterNodeCommand",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.Runtime.Equipment.Nodes.DoubleParameterNodeCommand, SiGyl.Models.Areas.Runtime, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
						  	"key": {
						  		"propertyRef": {
						  			"name": "Id"
						  		}
						  	},
						  	"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "CommandTemplateId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ParentId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Type",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
						  	],
						  	"navigationProperty": [
							  {
							  	"name": "CommandTemplate",
							  	"relationship": "Self.DoubleParameterNodeCommand_CommandTemplate",
							  	"fromRole": "DoubleParameterNodeCommand_CommandTemplate_Source",
							  	"toRole": "DoubleParameterNodeCommand_CommandTemplate_Target"
							  },
							  {
							  	"name": "Parent",
							  	"relationship": "Self.DoubleParameterNodeCommand_Parent",
							  	"fromRole": "DoubleParameterNodeCommand_Parent_Source",
							  	"toRole": "DoubleParameterNodeCommand_Parent_Target"
							  }
						  	],
						  	"interModelRelations": [],
						  	"histories": [],
						  	"commonName": "DoubleParameterNodeCommand",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "RuntimeIntegerParameterNode",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.Runtime.Equipment.Nodes.RuntimeIntegerParameterNode, SiGyl.Models.Areas.Runtime, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
						  	"key": {
						  		"propertyRef": {
						  			"name": "Id"
						  		}
						  	},
						  	"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "InitialDownload",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UnitId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Value",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "SetValue",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "State",
							  	"type": "Edm.Self.UnitNodeState",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Error",
							  	"type": "Edm.Self.UnitNodeError",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Index",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "NodeId",
							  	"type": "Edm.Int32"
							  },
							  {
							  	"name": "ConfigurationId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ConfigurationParentId",
							  	"type": "Edm.Int32"
							  },
							  {
							  	"name": "Comment",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Name",
							  	"type": "Edm.String",
							  	"maxLength": "256",
							  	"fixedLength": "false",
							  	"unicode": "true",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Description",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
						  	],
						  	"navigationProperty": [
							  {
							  	"name": "Commands",
							  	"relationship": "Self.IntegerParameterNodeCommand_Parent",
							  	"fromRole": "IntegerParameterNodeCommand_Parent_Target",
							  	"toRole": "IntegerParameterNodeCommand_Parent_Source"
							  },
							  {
							  	"name": "Unit",
							  	"relationship": "Self.RuntimeIntegerParameterNode_Unit",
							  	"fromRole": "RuntimeIntegerParameterNode_Unit_Source",
							  	"toRole": "RuntimeIntegerParameterNode_Unit_Target"
							  }
						  	],
						  	"interModelRelations": [
							  {
							  	"name": "IntegerParameterNode",
							  	"model": "configuration",
							  	"key": "ConfigurationId",
							  	"foreignKey": "Id"
							  }
						  	],
						  	"histories": [
							  {
							  	"name": "HistoryIntegerParameterNode"
							  }
						  	],
						  	"commonName": "RuntimeIntegerParameterNode",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "IntegerParameterNodeCommand",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.Runtime.Equipment.Nodes.IntegerParameterNodeCommand, SiGyl.Models.Areas.Runtime, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
						  	"key": {
						  		"propertyRef": {
						  			"name": "Id"
						  		}
						  	},
						  	"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "CommandTemplateId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ParentId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Type",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
						  	],
						  	"navigationProperty": [
							  {
							  	"name": "CommandTemplate",
							  	"relationship": "Self.IntegerParameterNodeCommand_CommandTemplate",
							  	"fromRole": "IntegerParameterNodeCommand_CommandTemplate_Source",
							  	"toRole": "IntegerParameterNodeCommand_CommandTemplate_Target"
							  },
							  {
							  	"name": "Parent",
							  	"relationship": "Self.IntegerParameterNodeCommand_Parent",
							  	"fromRole": "IntegerParameterNodeCommand_Parent_Source",
							  	"toRole": "IntegerParameterNodeCommand_Parent_Target"
							  }
						  	],
						  	"interModelRelations": [],
						  	"histories": [],
						  	"commonName": "IntegerParameterNodeCommand",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "RuntimeNodePage",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.Runtime.Equipment.NodePages.RuntimeNodePage, SiGyl.Models.Areas.Runtime, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
						  	"key": {
						  		"propertyRef": {
						  			"name": "Id"
						  		}
						  	},
						  	"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "UnitId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ConfigurationId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ConfigurationParentId",
							  	"type": "Edm.Int32"
							  },
							  {
							  	"name": "Comment",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Name",
							  	"type": "Edm.String",
							  	"maxLength": "256",
							  	"fixedLength": "false",
							  	"unicode": "true",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Description",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
						  	],
						  	"navigationProperty": [
							  {
							  	"name": "Commands",
							  	"relationship": "Self.NodePageCommand_Parent",
							  	"fromRole": "NodePageCommand_Parent_Target",
							  	"toRole": "NodePageCommand_Parent_Source"
							  },
							  {
							  	"name": "NodePageItems",
							  	"relationship": "Self.RuntimeNodePageItem_NodePage",
							  	"fromRole": "RuntimeNodePageItem_NodePage_Target",
							  	"toRole": "RuntimeNodePageItem_NodePage_Source"
							  },
							  {
							  	"name": "Unit",
							  	"relationship": "Self.RuntimeNodePage_Unit",
							  	"fromRole": "RuntimeNodePage_Unit_Source",
							  	"toRole": "RuntimeNodePage_Unit_Target"
							  }
						  	],
						  	"interModelRelations": [
							  {
							  	"name": "NodePage",
							  	"model": "configuration",
							  	"key": "ConfigurationId",
							  	"foreignKey": "Id"
							  }
						  	],
						  	"histories": [
							  {
							  	"name": "HistoryNodePage"
							  }
						  	],
						  	"commonName": "Node page",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "NodePageCommand",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.Runtime.Equipment.NodePages.NodePageCommand, SiGyl.Models.Areas.Runtime, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
						  	"key": {
						  		"propertyRef": {
						  			"name": "Id"
						  		}
						  	},
						  	"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "CommandTemplateId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ParentId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Type",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
						  	],
						  	"navigationProperty": [
							  {
							  	"name": "CommandTemplate",
							  	"relationship": "Self.NodePageCommand_CommandTemplate",
							  	"fromRole": "NodePageCommand_CommandTemplate_Source",
							  	"toRole": "NodePageCommand_CommandTemplate_Target"
							  },
							  {
							  	"name": "Parent",
							  	"relationship": "Self.NodePageCommand_Parent",
							  	"fromRole": "NodePageCommand_Parent_Source",
							  	"toRole": "NodePageCommand_Parent_Target"
							  }
						  	],
						  	"interModelRelations": [],
						  	"histories": [],
						  	"commonName": "NodePageCommand",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "RuntimeNodePageItem",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.Runtime.Equipment.NodePages.RuntimeNodePageItem, SiGyl.Models.Areas.Runtime, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
						  	"key": {
						  		"propertyRef": {
						  			"name": "Id"
						  		}
						  	},
						  	"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "NodePageId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Value",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "SetValue",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "State",
							  	"type": "Edm.Self.UnitNodeState",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Error",
							  	"type": "Edm.Self.UnitNodeError",
							  	"nullable": "false"
							  },
							  {
							  	"name": "DataType",
							  	"type": "Edm.Self.DataType",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Index",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "NodeId",
							  	"type": "Edm.Int32"
							  },
							  {
							  	"name": "ConfigurationId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ConfigurationParentId",
							  	"type": "Edm.Int32"
							  },
							  {
							  	"name": "Comment",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Name",
							  	"type": "Edm.String",
							  	"maxLength": "256",
							  	"fixedLength": "false",
							  	"unicode": "true",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Description",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
						  	],
						  	"navigationProperty": [
							  {
							  	"name": "Commands",
							  	"relationship": "Self.NodePageItemCommand_Parent",
							  	"fromRole": "NodePageItemCommand_Parent_Target",
							  	"toRole": "NodePageItemCommand_Parent_Source"
							  },
							  {
							  	"name": "NodePage",
							  	"relationship": "Self.RuntimeNodePageItem_NodePage",
							  	"fromRole": "RuntimeNodePageItem_NodePage_Source",
							  	"toRole": "RuntimeNodePageItem_NodePage_Target"
							  }
						  	],
						  	"interModelRelations": [
							  {
							  	"name": "NodePageItem",
							  	"model": "configuration",
							  	"key": "ConfigurationId",
							  	"foreignKey": "Id"
							  }
						  	],
						  	"histories": [
							  {
							  	"name": "HistoryNodePageItem"
							  }
						  	],
						  	"commonName": "Node page item",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "NodePageItemCommand",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.Runtime.Equipment.NodePages.NodePageItemCommand, SiGyl.Models.Areas.Runtime, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
						  	"key": {
						  		"propertyRef": {
						  			"name": "Id"
						  		}
						  	},
						  	"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "CommandTemplateId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ParentId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Type",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
						  	],
						  	"navigationProperty": [
							  {
							  	"name": "CommandTemplate",
							  	"relationship": "Self.NodePageItemCommand_CommandTemplate",
							  	"fromRole": "NodePageItemCommand_CommandTemplate_Source",
							  	"toRole": "NodePageItemCommand_CommandTemplate_Target"
							  },
							  {
							  	"name": "Parent",
							  	"relationship": "Self.NodePageItemCommand_Parent",
							  	"fromRole": "NodePageItemCommand_Parent_Source",
							  	"toRole": "NodePageItemCommand_Parent_Target"
							  }
						  	],
						  	"interModelRelations": [],
						  	"histories": [],
						  	"commonName": "NodePageItemCommand",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "RuntimeReportNode",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.Runtime.Equipment.Nodes.RuntimeReportNode, SiGyl.Models.Areas.Runtime, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
						  	"key": {
						  		"propertyRef": {
						  			"name": "Id"
						  		}
						  	},
						  	"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "FinalUpload",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UnitId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Value",
							  	"type": "Edm.Double",
							  	"nullable": "false"
							  },
							  {
							  	"name": "SetValue",
							  	"type": "Edm.Double",
							  	"nullable": "false"
							  },
							  {
							  	"name": "State",
							  	"type": "Edm.Self.UnitNodeState",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Error",
							  	"type": "Edm.Self.UnitNodeError",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Index",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "NodeId",
							  	"type": "Edm.Int32"
							  },
							  {
							  	"name": "ConfigurationId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ConfigurationParentId",
							  	"type": "Edm.Int32"
							  },
							  {
							  	"name": "Comment",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Name",
							  	"type": "Edm.String",
							  	"maxLength": "256",
							  	"fixedLength": "false",
							  	"unicode": "true",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Description",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
						  	],
						  	"navigationProperty": [
							  {
							  	"name": "Commands",
							  	"relationship": "Self.ReportNodeCommand_Parent",
							  	"fromRole": "ReportNodeCommand_Parent_Target",
							  	"toRole": "ReportNodeCommand_Parent_Source"
							  },
							  {
							  	"name": "Unit",
							  	"relationship": "Self.RuntimeReportNode_Unit",
							  	"fromRole": "RuntimeReportNode_Unit_Source",
							  	"toRole": "RuntimeReportNode_Unit_Target"
							  }
						  	],
						  	"interModelRelations": [
							  {
							  	"name": "ReportNode",
							  	"model": "configuration",
							  	"key": "ConfigurationId",
							  	"foreignKey": "Id"
							  }
						  	],
						  	"histories": [
							  {
							  	"name": "HistoryReportNode"
							  }
						  	],
						  	"commonName": "RuntimeReportNode",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "ReportNodeCommand",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.Runtime.Equipment.Nodes.ReportNodeCommand, SiGyl.Models.Areas.Runtime, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
						  	"key": {
						  		"propertyRef": {
						  			"name": "Id"
						  		}
						  	},
						  	"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "CommandTemplateId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ParentId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Type",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
						  	],
						  	"navigationProperty": [
							  {
							  	"name": "CommandTemplate",
							  	"relationship": "Self.ReportNodeCommand_CommandTemplate",
							  	"fromRole": "ReportNodeCommand_CommandTemplate_Source",
							  	"toRole": "ReportNodeCommand_CommandTemplate_Target"
							  },
							  {
							  	"name": "Parent",
							  	"relationship": "Self.ReportNodeCommand_Parent",
							  	"fromRole": "ReportNodeCommand_Parent_Source",
							  	"toRole": "ReportNodeCommand_Parent_Target"
							  }
						  	],
						  	"interModelRelations": [],
						  	"histories": [],
						  	"commonName": "ReportNodeCommand",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "RuntimeStateNode",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.Runtime.Equipment.Nodes.RuntimeStateNode, SiGyl.Models.Areas.Runtime, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
						  	"key": {
						  		"propertyRef": {
						  			"name": "Id"
						  		}
						  	},
						  	"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "Colour",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "UnitId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Value",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "SetValue",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "State",
							  	"type": "Edm.Self.UnitNodeState",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Error",
							  	"type": "Edm.Self.UnitNodeError",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Index",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "NodeId",
							  	"type": "Edm.Int32"
							  },
							  {
							  	"name": "ConfigurationId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ConfigurationParentId",
							  	"type": "Edm.Int32"
							  },
							  {
							  	"name": "Comment",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Name",
							  	"type": "Edm.String",
							  	"maxLength": "256",
							  	"fixedLength": "false",
							  	"unicode": "true",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Description",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
						  	],
						  	"navigationProperty": [
							  {
							  	"name": "Commands",
							  	"relationship": "Self.StateNodeCommand_Parent",
							  	"fromRole": "StateNodeCommand_Parent_Target",
							  	"toRole": "StateNodeCommand_Parent_Source"
							  },
							  {
							  	"name": "Unit",
							  	"relationship": "Self.RuntimeStateNode_Unit",
							  	"fromRole": "RuntimeStateNode_Unit_Source",
							  	"toRole": "RuntimeStateNode_Unit_Target"
							  }
						  	],
						  	"interModelRelations": [
							  {
							  	"name": "StateNode",
							  	"model": "configuration",
							  	"key": "ConfigurationId",
							  	"foreignKey": "Id"
							  }
						  	],
						  	"histories": [
							  {
							  	"name": "HistoryStateNode"
							  }
						  	],
						  	"commonName": "RuntimeStateNode",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "StateNodeCommand",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.Runtime.Equipment.Nodes.StateNodeCommand, SiGyl.Models.Areas.Runtime, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
						  	"key": {
						  		"propertyRef": {
						  			"name": "Id"
						  		}
						  	},
						  	"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "CommandTemplateId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ParentId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Type",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
						  	],
						  	"navigationProperty": [
							  {
							  	"name": "CommandTemplate",
							  	"relationship": "Self.StateNodeCommand_CommandTemplate",
							  	"fromRole": "StateNodeCommand_CommandTemplate_Source",
							  	"toRole": "StateNodeCommand_CommandTemplate_Target"
							  },
							  {
							  	"name": "Parent",
							  	"relationship": "Self.StateNodeCommand_Parent",
							  	"fromRole": "StateNodeCommand_Parent_Source",
							  	"toRole": "StateNodeCommand_Parent_Target"
							  }
						  	],
						  	"interModelRelations": [],
						  	"histories": [],
						  	"commonName": "StateNodeCommand",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "RuntimeStringParameterNode",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.Runtime.Equipment.Nodes.RuntimeStringParameterNode, SiGyl.Models.Areas.Runtime, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
						  	"key": {
						  		"propertyRef": {
						  			"name": "Id"
						  		}
						  	},
						  	"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "InitialDownload",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UnitId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Value",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "SetValue",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "State",
							  	"type": "Edm.Self.UnitNodeState",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Error",
							  	"type": "Edm.Self.UnitNodeError",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Index",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "NodeId",
							  	"type": "Edm.Int32"
							  },
							  {
							  	"name": "ConfigurationId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ConfigurationParentId",
							  	"type": "Edm.Int32"
							  },
							  {
							  	"name": "Comment",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Name",
							  	"type": "Edm.String",
							  	"maxLength": "256",
							  	"fixedLength": "false",
							  	"unicode": "true",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Description",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
						  	],
						  	"navigationProperty": [
							  {
							  	"name": "Commands",
							  	"relationship": "Self.StringParameterNodeCommand_Parent",
							  	"fromRole": "StringParameterNodeCommand_Parent_Target",
							  	"toRole": "StringParameterNodeCommand_Parent_Source"
							  },
							  {
							  	"name": "Unit",
							  	"relationship": "Self.RuntimeStringParameterNode_Unit",
							  	"fromRole": "RuntimeStringParameterNode_Unit_Source",
							  	"toRole": "RuntimeStringParameterNode_Unit_Target"
							  }
						  	],
						  	"interModelRelations": [
							  {
							  	"name": "StringParameterNode",
							  	"model": "configuration",
							  	"key": "ConfigurationId",
							  	"foreignKey": "Id"
							  }
						  	],
						  	"histories": [
							  {
							  	"name": "HistoryStringParameterNode"
							  }
						  	],
						  	"commonName": "RuntimeStringParameterNode",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "StringParameterNodeCommand",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.Runtime.Equipment.Nodes.StringParameterNodeCommand, SiGyl.Models.Areas.Runtime, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
						  	"key": {
						  		"propertyRef": {
						  			"name": "Id"
						  		}
						  	},
						  	"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "CommandTemplateId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ParentId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Type",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
						  	],
						  	"navigationProperty": [
							  {
							  	"name": "CommandTemplate",
							  	"relationship": "Self.StringParameterNodeCommand_CommandTemplate",
							  	"fromRole": "StringParameterNodeCommand_CommandTemplate_Source",
							  	"toRole": "StringParameterNodeCommand_CommandTemplate_Target"
							  },
							  {
							  	"name": "Parent",
							  	"relationship": "Self.StringParameterNodeCommand_Parent",
							  	"fromRole": "StringParameterNodeCommand_Parent_Source",
							  	"toRole": "StringParameterNodeCommand_Parent_Target"
							  }
						  	],
						  	"interModelRelations": [],
						  	"histories": [],
						  	"commonName": "StringParameterNodeCommand",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "BatchCommand",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.Runtime.Batches.BatchCommand, SiGyl.Models.Areas.Runtime, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
						  	"key": {
						  		"propertyRef": {
						  			"name": "Id"
						  		}
						  	},
						  	"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "CommandTemplateId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ParentId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Type",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
						  	],
						  	"navigationProperty": [
							  {
							  	"name": "CommandTemplate",
							  	"relationship": "Self.BatchCommand_CommandTemplate",
							  	"fromRole": "BatchCommand_CommandTemplate_Source",
							  	"toRole": "BatchCommand_CommandTemplate_Target"
							  },
							  {
							  	"name": "Parent",
							  	"relationship": "Self.BatchCommand_Parent",
							  	"fromRole": "BatchCommand_Parent_Source",
							  	"toRole": "BatchCommand_Parent_Target"
							  }
						  	],
						  	"interModelRelations": [],
						  	"histories": [],
						  	"commonName": "BatchCommand",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "ZoneCommand",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.Runtime.Equipment.ZoneCommand, SiGyl.Models.Areas.Runtime, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
						  	"key": {
						  		"propertyRef": {
						  			"name": "Id"
						  		}
						  	},
						  	"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "CommandTemplateId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ParentId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Type",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
						  	],
						  	"navigationProperty": [
							  {
							  	"name": "CommandTemplate",
							  	"relationship": "Self.ZoneCommand_CommandTemplate",
							  	"fromRole": "ZoneCommand_CommandTemplate_Source",
							  	"toRole": "ZoneCommand_CommandTemplate_Target"
							  },
							  {
							  	"name": "Parent",
							  	"relationship": "Self.ZoneCommand_Parent",
							  	"fromRole": "ZoneCommand_Parent_Source",
							  	"toRole": "ZoneCommand_Parent_Target"
							  }
						  	],
						  	"interModelRelations": [],
						  	"histories": [],
						  	"commonName": "ZoneCommand",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "RuntimeGroup",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.Runtime.Security.RuntimeGroup, SiGyl.Models.Areas.Runtime, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
						  	"key": {
						  		"propertyRef": {
						  			"name": "Id"
						  		}
						  	},
						  	"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "ZoneId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Index",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ConfigurationId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ConfigurationParentId",
							  	"type": "Edm.Int32"
							  },
							  {
							  	"name": "Comment",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Name",
							  	"type": "Edm.String",
							  	"maxLength": "256",
							  	"fixedLength": "false",
							  	"unicode": "true",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Description",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
						  	],
						  	"navigationProperty": [
							  {
							  	"name": "Commands",
							  	"relationship": "Self.GroupCommand_Parent",
							  	"fromRole": "GroupCommand_Parent_Target",
							  	"toRole": "GroupCommand_Parent_Source"
							  },
							  {
							  	"name": "Zone",
							  	"relationship": "Self.RuntimeGroup_Zone",
							  	"fromRole": "RuntimeGroup_Zone_Source",
							  	"toRole": "RuntimeGroup_Zone_Target"
							  }
						  	],
						  	"interModelRelations": [
							  {
							  	"name": "Group",
							  	"model": "configuration",
							  	"key": "ConfigurationId",
							  	"foreignKey": "Id"
							  }
						  	],
						  	"histories": [
							  {
							  	"name": "HistoryGroup"
							  }
						  	],
						  	"commonName": "RuntimeGroup",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "GroupCommand",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.Runtime.Security.GroupCommand, SiGyl.Models.Areas.Runtime, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
						  	"key": {
						  		"propertyRef": {
						  			"name": "Id"
						  		}
						  	},
						  	"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "CommandTemplateId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ParentId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Type",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
						  	],
						  	"navigationProperty": [
							  {
							  	"name": "CommandTemplate",
							  	"relationship": "Self.GroupCommand_CommandTemplate",
							  	"fromRole": "GroupCommand_CommandTemplate_Source",
							  	"toRole": "GroupCommand_CommandTemplate_Target"
							  },
							  {
							  	"name": "Parent",
							  	"relationship": "Self.GroupCommand_Parent",
							  	"fromRole": "GroupCommand_Parent_Source",
							  	"toRole": "GroupCommand_Parent_Target"
							  }
						  	],
						  	"interModelRelations": [],
						  	"histories": [],
						  	"commonName": "GroupCommand",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "RuntimeZoneClearance",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.Runtime.Security.RuntimeZoneClearance, SiGyl.Models.Areas.Runtime, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
						  	"key": {
						  		"propertyRef": {
						  			"name": "Id"
						  		}
						  	},
						  	"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "ClearanceId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ZoneId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ConfigurationId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ConfigurationParentId",
							  	"type": "Edm.Int32"
							  },
							  {
							  	"name": "Comment",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Name",
							  	"type": "Edm.String",
							  	"maxLength": "256",
							  	"fixedLength": "false",
							  	"unicode": "true",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Description",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
						  	],
						  	"navigationProperty": [
							  {
							  	"name": "Clearance",
							  	"relationship": "Self.RuntimeZoneClearance_Clearance",
							  	"fromRole": "RuntimeZoneClearance_Clearance_Source",
							  	"toRole": "RuntimeZoneClearance_Clearance_Target"
							  },
							  {
							  	"name": "Commands",
							  	"relationship": "Self.ZoneClearanceCommand_Parent",
							  	"fromRole": "ZoneClearanceCommand_Parent_Target",
							  	"toRole": "ZoneClearanceCommand_Parent_Source"
							  },
							  {
							  	"name": "Signatures",
							  	"relationship": "Self.RuntimeSignature_ZoneClearance",
							  	"fromRole": "RuntimeSignature_ZoneClearance_Target",
							  	"toRole": "RuntimeSignature_ZoneClearance_Source"
							  },
							  {
							  	"name": "Zone",
							  	"relationship": "Self.RuntimeZoneClearance_Zone",
							  	"fromRole": "RuntimeZoneClearance_Zone_Source",
							  	"toRole": "RuntimeZoneClearance_Zone_Target"
							  }
						  	],
						  	"interModelRelations": [
							  {
							  	"name": "ZoneClearance",
							  	"model": "configuration",
							  	"key": "ConfigurationId",
							  	"foreignKey": "Id"
							  }
						  	],
						  	"histories": [
							  {
							  	"name": "HistoryZoneClearance"
							  }
						  	],
						  	"commonName": "RuntimeZoneClearance",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "ZoneClearanceCommand",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.Runtime.Security.ZoneClearanceCommand, SiGyl.Models.Areas.Runtime, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
						  	"key": {
						  		"propertyRef": {
						  			"name": "Id"
						  		}
						  	},
						  	"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "CommandTemplateId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ParentId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Type",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
						  	],
						  	"navigationProperty": [
							  {
							  	"name": "CommandTemplate",
							  	"relationship": "Self.ZoneClearanceCommand_CommandTemplate",
							  	"fromRole": "ZoneClearanceCommand_CommandTemplate_Source",
							  	"toRole": "ZoneClearanceCommand_CommandTemplate_Target"
							  },
							  {
							  	"name": "Parent",
							  	"relationship": "Self.ZoneClearanceCommand_Parent",
							  	"fromRole": "ZoneClearanceCommand_Parent_Source",
							  	"toRole": "ZoneClearanceCommand_Parent_Target"
							  }
						  	],
						  	"interModelRelations": [],
						  	"histories": [],
						  	"commonName": "ZoneClearanceCommand",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "RuntimeSignature",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.Runtime.Security.RuntimeSignature, SiGyl.Models.Areas.Runtime, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
						  	"key": {
						  		"propertyRef": {
						  			"name": "Id"
						  		}
						  	},
						  	"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "ZoneClearanceId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "GroupId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Index",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ConfigurationId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ConfigurationParentId",
							  	"type": "Edm.Int32"
							  },
							  {
							  	"name": "Comment",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Name",
							  	"type": "Edm.String",
							  	"maxLength": "256",
							  	"fixedLength": "false",
							  	"unicode": "true",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Description",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
						  	],
						  	"navigationProperty": [
							  {
							  	"name": "Commands",
							  	"relationship": "Self.SignatureCommand_Parent",
							  	"fromRole": "SignatureCommand_Parent_Target",
							  	"toRole": "SignatureCommand_Parent_Source"
							  },
							  {
							  	"name": "Group",
							  	"relationship": "Self.RuntimeSignature_Group",
							  	"fromRole": "RuntimeSignature_Group_Source",
							  	"toRole": "RuntimeSignature_Group_Target"
							  },
							  {
							  	"name": "ZoneClearance",
							  	"relationship": "Self.RuntimeSignature_ZoneClearance",
							  	"fromRole": "RuntimeSignature_ZoneClearance_Source",
							  	"toRole": "RuntimeSignature_ZoneClearance_Target"
							  }
						  	],
						  	"interModelRelations": [
							  {
							  	"name": "Signature",
							  	"model": "configuration",
							  	"key": "ConfigurationId",
							  	"foreignKey": "Id"
							  }
						  	],
						  	"histories": [
							  {
							  	"name": "HistorySignature"
							  }
						  	],
						  	"commonName": "RuntimeSignature",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "SignatureCommand",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.Runtime.Security.SignatureCommand, SiGyl.Models.Areas.Runtime, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
						  	"key": {
						  		"propertyRef": {
						  			"name": "Id"
						  		}
						  	},
						  	"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "CommandTemplateId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ParentId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Type",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
						  	],
						  	"navigationProperty": [
							  {
							  	"name": "CommandTemplate",
							  	"relationship": "Self.SignatureCommand_CommandTemplate",
							  	"fromRole": "SignatureCommand_CommandTemplate_Source",
							  	"toRole": "SignatureCommand_CommandTemplate_Target"
							  },
							  {
							  	"name": "Parent",
							  	"relationship": "Self.SignatureCommand_Parent",
							  	"fromRole": "SignatureCommand_Parent_Source",
							  	"toRole": "SignatureCommand_Parent_Target"
							  }
						  	],
						  	"interModelRelations": [],
						  	"histories": [],
						  	"commonName": "SignatureCommand",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "ClearanceCommand",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.Runtime.Security.ClearanceCommand, SiGyl.Models.Areas.Runtime, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
						  	"key": {
						  		"propertyRef": {
						  			"name": "Id"
						  		}
						  	},
						  	"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "CommandTemplateId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ParentId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Type",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
						  	],
						  	"navigationProperty": [
							  {
							  	"name": "CommandTemplate",
							  	"relationship": "Self.ClearanceCommand_CommandTemplate",
							  	"fromRole": "ClearanceCommand_CommandTemplate_Source",
							  	"toRole": "ClearanceCommand_CommandTemplate_Target"
							  },
							  {
							  	"name": "Parent",
							  	"relationship": "Self.ClearanceCommand_Parent",
							  	"fromRole": "ClearanceCommand_Parent_Source",
							  	"toRole": "ClearanceCommand_Parent_Target"
							  }
						  	],
						  	"interModelRelations": [],
						  	"histories": [],
						  	"commonName": "ClearanceCommand",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "RuntimeCommandInstance",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.Runtime.Security.RuntimeCommandInstance, SiGyl.Models.Areas.Runtime, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
						  	"key": {
						  		"propertyRef": {
						  			"name": "Id"
						  		}
						  	},
						  	"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "CommandId",
							  	"type": "Edm.Int32"
							  },
							  {
							  	"name": "CommandTemplateId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ParentId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ZoneId",
							  	"type": "Edm.Int32"
							  },
							  {
							  	"name": "Type",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Error",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Tag",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "IsCompleting",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "IsComplete",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "IsCancel",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "IsEnabled",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ConfigurationParentId",
							  	"type": "Edm.Int32"
							  },
							  {
							  	"name": "Comment",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Name",
							  	"type": "Edm.String",
							  	"maxLength": "256",
							  	"fixedLength": "false",
							  	"unicode": "true",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Description",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
						  	],
						  	"navigationProperty": [
							  {
							  	"name": "Command",
							  	"relationship": "Self.RuntimeCommandInstance_Command",
							  	"fromRole": "RuntimeCommandInstance_Command_Source",
							  	"toRole": "RuntimeCommandInstance_Command_Target"
							  },
							  {
							  	"name": "CommandTemplate",
							  	"relationship": "Self.RuntimeCommandInstance_CommandTemplate",
							  	"fromRole": "RuntimeCommandInstance_CommandTemplate_Source",
							  	"toRole": "RuntimeCommandInstance_CommandTemplate_Target"
							  },
							  {
							  	"name": "Signatures",
							  	"relationship": "Self.RuntimeCommandInstanceSignature_Command",
							  	"fromRole": "RuntimeCommandInstanceSignature_Command_Target",
							  	"toRole": "RuntimeCommandInstanceSignature_Command_Source"
							  },
							  {
							  	"name": "Values",
							  	"relationship": "Self.RuntimeCommandInstanceValue_Command",
							  	"fromRole": "RuntimeCommandInstanceValue_Command_Target",
							  	"toRole": "RuntimeCommandInstanceValue_Command_Source"
							  },
							  {
							  	"name": "Zone",
							  	"relationship": "Self.RuntimeCommandInstance_Zone",
							  	"fromRole": "RuntimeCommandInstance_Zone_Source",
							  	"toRole": "RuntimeCommandInstance_Zone_Target"
							  }
						  	],
						  	"interModelRelations": [],
						  	"histories": [
							  {
							  	"name": "HistoryCommandInstance"
							  }
						  	],
						  	"commonName": "RuntimeCommandInstance",
						  	"flexibleRelations": [
							  {
							  	"name": "Parent",
							  	"relatedTypeProperty": "Type",
							  	"idProperty": "ParentId"
							  }
						  	]
						  },
						  {
						  	"name": "RuntimeCommandInstanceSignature",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.Runtime.Security.RuntimeCommandInstanceSignature, SiGyl.Models.Areas.Runtime, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
						  	"key": {
						  		"propertyRef": {
						  			"name": "Id"
						  		}
						  	},
						  	"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "CommandId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "SignatureId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "CanComplete",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "CanCancel",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "IsComplete",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserName",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "ConfigurationParentId",
							  	"type": "Edm.Int32"
							  },
							  {
							  	"name": "Comment",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Name",
							  	"type": "Edm.String",
							  	"maxLength": "256",
							  	"fixedLength": "false",
							  	"unicode": "true",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Description",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
						  	],
						  	"navigationProperty": [
							  {
							  	"name": "Command",
							  	"relationship": "Self.RuntimeCommandInstanceSignature_Command",
							  	"fromRole": "RuntimeCommandInstanceSignature_Command_Source",
							  	"toRole": "RuntimeCommandInstanceSignature_Command_Target"
							  },
							  {
							  	"name": "Signature",
							  	"relationship": "Self.RuntimeCommandInstanceSignature_Signature",
							  	"fromRole": "RuntimeCommandInstanceSignature_Signature_Source",
							  	"toRole": "RuntimeCommandInstanceSignature_Signature_Target"
							  }
						  	],
						  	"interModelRelations": [],
						  	"histories": [
							  {
							  	"name": "HistoryCommandInstanceSignature"
							  }
						  	],
						  	"commonName": "RuntimeCommandInstanceSignature",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "RuntimeCommandInstanceValue",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.Runtime.Security.RuntimeCommandInstanceValue, SiGyl.Models.Areas.Runtime, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
						  	"key": {
						  		"propertyRef": {
						  			"name": "Id"
						  		}
						  	},
						  	"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "CommandId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "IsEdit",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "IsFixed",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "IsComplete",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "IsSelect",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Index",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "NewValue",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "CurrentValue",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Comment",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Name",
							  	"type": "Edm.String",
							  	"maxLength": "256",
							  	"fixedLength": "false",
							  	"unicode": "true",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Description",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
						  	],
						  	"navigationProperty": [
							  {
							  	"name": "Command",
							  	"relationship": "Self.RuntimeCommandInstanceValue_Command",
							  	"fromRole": "RuntimeCommandInstanceValue_Command_Source",
							  	"toRole": "RuntimeCommandInstanceValue_Command_Target"
							  },
							  {
							  	"name": "Data",
							  	"relationship": "Self.RuntimeCommandInstanceValueData_CommandInstanceValue",
							  	"fromRole": "RuntimeCommandInstanceValueData_CommandInstanceValue_Target",
							  	"toRole": "RuntimeCommandInstanceValueData_CommandInstanceValue_Source"
							  }
						  	],
						  	"interModelRelations": [],
						  	"histories": [
							  {
							  	"name": "HistoryCommandInstanceValue"
							  }
						  	],
						  	"commonName": "RuntimeCommandInstanceValue",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "RuntimeCommandInstanceValueData",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.Runtime.Security.RuntimeCommandInstanceValueData, SiGyl.Models.Areas.Runtime, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
						  	"key": {
						  		"propertyRef": {
						  			"name": "Id"
						  		}
						  	},
						  	"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "CommandInstanceValueId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Index",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Comment",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Name",
							  	"type": "Edm.String",
							  	"maxLength": "256",
							  	"fixedLength": "false",
							  	"unicode": "true",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Description",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
						  	],
						  	"navigationProperty": {
						  		"name": "CommandInstanceValue",
						  		"relationship": "Self.RuntimeCommandInstanceValueData_CommandInstanceValue",
						  		"fromRole": "RuntimeCommandInstanceValueData_CommandInstanceValue_Source",
						  		"toRole": "RuntimeCommandInstanceValueData_CommandInstanceValue_Target"
						  	},
						  	"interModelRelations": [],
						  	"histories": [],
						  	"commonName": "RuntimeCommandInstanceValueData",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "RuntimeCommandTemplateSignature",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.Runtime.Security.RuntimeCommandTemplateSignature, SiGyl.Models.Areas.Runtime, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
						  	"key": {
						  		"propertyRef": {
						  			"name": "Id"
						  		}
						  	},
						  	"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "CommandId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "SignatureId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "CanComplete",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "CanCancel",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "IsComplete",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserName",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "ConfigurationParentId",
							  	"type": "Edm.Int32"
							  },
							  {
							  	"name": "Comment",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Name",
							  	"type": "Edm.String",
							  	"maxLength": "256",
							  	"fixedLength": "false",
							  	"unicode": "true",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Description",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
						  	],
						  	"navigationProperty": [
							  {
							  	"name": "Command",
							  	"relationship": "Self.RuntimeCommandTemplateSignature_Command",
							  	"fromRole": "RuntimeCommandTemplateSignature_Command_Source",
							  	"toRole": "RuntimeCommandTemplateSignature_Command_Target"
							  },
							  {
							  	"name": "Signature",
							  	"relationship": "Self.RuntimeCommandTemplateSignature_Signature",
							  	"fromRole": "RuntimeCommandTemplateSignature_Signature_Source",
							  	"toRole": "RuntimeCommandTemplateSignature_Signature_Target"
							  }
						  	],
						  	"interModelRelations": [],
						  	"histories": [],
						  	"commonName": "RuntimeCommandTemplateSignature",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "RuntimeCommandTemplateValue",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.Runtime.Security.RuntimeCommandTemplateValue, SiGyl.Models.Areas.Runtime, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
						  	"key": {
						  		"propertyRef": {
						  			"name": "Id"
						  		}
						  	},
						  	"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "CommandId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "IsEdit",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "IsFixed",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "IsComplete",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "IsSelect",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Index",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "NewValue",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "CurrentValue",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Comment",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Name",
							  	"type": "Edm.String",
							  	"maxLength": "256",
							  	"fixedLength": "false",
							  	"unicode": "true",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Description",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
						  	],
						  	"navigationProperty": [
							  {
							  	"name": "Command",
							  	"relationship": "Self.RuntimeCommandTemplateValue_Command",
							  	"fromRole": "RuntimeCommandTemplateValue_Command_Source",
							  	"toRole": "RuntimeCommandTemplateValue_Command_Target"
							  },
							  {
							  	"name": "Data",
							  	"relationship": "Self.RuntimeCommandTemplateValueData_CommandTemplateValue",
							  	"fromRole": "RuntimeCommandTemplateValueData_CommandTemplateValue_Target",
							  	"toRole": "RuntimeCommandTemplateValueData_CommandTemplateValue_Source"
							  }
						  	],
						  	"interModelRelations": [],
						  	"histories": [],
						  	"commonName": "RuntimeCommandTemplateValue",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "RuntimeCommandTemplateValueData",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.Runtime.Security.RuntimeCommandTemplateValueData, SiGyl.Models.Areas.Runtime, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
						  	"key": {
						  		"propertyRef": {
						  			"name": "Id"
						  		}
						  	},
						  	"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "CommandTemplateValueId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Index",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Comment",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Name",
							  	"type": "Edm.String",
							  	"maxLength": "256",
							  	"fixedLength": "false",
							  	"unicode": "true",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Description",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
						  	],
						  	"navigationProperty": {
						  		"name": "CommandTemplateValue",
						  		"relationship": "Self.RuntimeCommandTemplateValueData_CommandTemplateValue",
						  		"fromRole": "RuntimeCommandTemplateValueData_CommandTemplateValue_Source",
						  		"toRole": "RuntimeCommandTemplateValueData_CommandTemplateValue_Target"
						  	},
						  	"interModelRelations": [],
						  	"histories": [],
						  	"commonName": "RuntimeCommandTemplateValueData",
						  	"flexibleRelations": []
						  }
						]
					}
				}
			}
		};

	});

}).call(this);
