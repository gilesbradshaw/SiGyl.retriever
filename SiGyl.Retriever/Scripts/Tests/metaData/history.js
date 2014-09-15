(function () {
	define([], function () {
		return {
			getMe: function () {
				return {
					"schema": {
						"namespace": "SiGyl.Models.Areas.History",
						"alias": "Self",
						"annotation:UseStrongSpatialTypes": "false",
						"xmlns:annotation": "http://schemas.microsoft.com/ado/2009/02/edm/annotation",
						"xmlns:customannotation": "http://schemas.microsoft.com/ado/2013/11/edm/customannotation",
						"xmlns": "http://schemas.microsoft.com/ado/2009/11/edm",
						"cSpaceOSpaceMapping": "[[\"SiGyl.Models.Areas.History.HistoryAlarmCommand\",\"SiGyl.Models.Areas.History.Database.HistoryAlarmCommand\"],[\"SiGyl.Models.Areas.History.HistoryAlarm\",\"SiGyl.Models.Areas.History.Database.HistoryAlarm\"],[\"SiGyl.Models.Areas.History.AlarmOccurrence\",\"SiGyl.Models.Areas.History.Database.AlarmOccurrence\"],[\"SiGyl.Models.Areas.History.HistoryCommandInstanceValue\",\"SiGyl.Models.Areas.History.Security.HistoryCommandInstanceValue\"],[\"SiGyl.Models.Areas.History.HistoryCommandInstance\",\"SiGyl.Models.Areas.History.Security.HistoryCommandInstance\"],[\"SiGyl.Models.Areas.History.HistoryCommand\",\"SiGyl.Models.Areas.History.Security.HistoryCommand\"],[\"SiGyl.Models.Areas.History.HistoryCommandCommand\",\"SiGyl.Models.Areas.History.Security.HistoryCommandCommand\"],[\"SiGyl.Models.Areas.History.HistoryCommandInstanceSignature\",\"SiGyl.Models.Areas.History.Security.HistoryCommandInstanceSignature\"],[\"SiGyl.Models.Areas.History.HistorySignature\",\"SiGyl.Models.Areas.History.Security.HistorySignature\"],[\"SiGyl.Models.Areas.History.HistoryGroup\",\"SiGyl.Models.Areas.History.Security.HistoryGroup\"],[\"SiGyl.Models.Areas.History.HistoryZone\",\"SiGyl.Models.Areas.History.Equipment.HistoryZone\"],[\"SiGyl.Models.Areas.History.HistoryBatch\",\"SiGyl.Models.Areas.History.Batches.HistoryBatch\"],[\"SiGyl.Models.Areas.History.HistoryBatchCommand\",\"SiGyl.Models.Areas.History.Batches.HistoryBatchCommand\"],[\"SiGyl.Models.Areas.History.HistoryBatchState\",\"SiGyl.Models.Areas.History.Batches.HistoryBatchState\"],[\"SiGyl.Models.Areas.History.HistoryUnitProcedure\",\"SiGyl.Models.Areas.History.Batches.HistoryUnitProcedure\"],[\"SiGyl.Models.Areas.History.HistoryUnitProcedureCommand\",\"SiGyl.Models.Areas.History.Batches.HistoryUnitProcedureCommand\"],[\"SiGyl.Models.Areas.History.HistoryUnitProcedureState\",\"SiGyl.Models.Areas.History.Batches.HistoryUnitProcedureState\"],[\"SiGyl.Models.Areas.History.HistoryStep\",\"SiGyl.Models.Areas.History.Batches.HistoryStep\"],[\"SiGyl.Models.Areas.History.HistoryBoolStepFormula\",\"SiGyl.Models.Areas.History.Batches.Formulae.HistoryBoolStepFormula\"],[\"SiGyl.Models.Areas.History.HistoryBoolStepFormulaCommand\",\"SiGyl.Models.Areas.History.Batches.Formulae.HistoryBoolStepFormulaCommand\"],[\"SiGyl.Models.Areas.History.HistoryBoolParameter\",\"SiGyl.Models.Areas.History.Equipment.Parameters.HistoryBoolParameter\"],[\"SiGyl.Models.Areas.History.HistoryBoolParameterCommand\",\"SiGyl.Models.Areas.History.Equipment.Parameters.HistoryBoolParameterCommand\"],[\"SiGyl.Models.Areas.History.HistoryBoolEnumeration\",\"SiGyl.Models.Areas.History.Equipment.Parameters.Enumerations.HistoryBoolEnumeration\"],[\"SiGyl.Models.Areas.History.HistoryBoolEnumerationCommand\",\"SiGyl.Models.Areas.History.Equipment.Parameters.Enumerations.HistoryBoolEnumerationCommand\"],[\"SiGyl.Models.Areas.History.HistoryOperation\",\"SiGyl.Models.Areas.History.Equipment.HistoryOperation\"],[\"SiGyl.Models.Areas.History.HistoryOperationCommand\",\"SiGyl.Models.Areas.History.Equipment.HistoryOperationCommand\"],[\"SiGyl.Models.Areas.History.HistoryDoubleParameter\",\"SiGyl.Models.Areas.History.Equipment.Parameters.HistoryDoubleParameter\"],[\"SiGyl.Models.Areas.History.HistoryDoubleParameterCommand\",\"SiGyl.Models.Areas.History.Equipment.Parameters.HistoryDoubleParameterCommand\"],[\"SiGyl.Models.Areas.History.HistoryDoubleParameterState\",\"SiGyl.Models.Areas.History.Equipment.Parameters.HistoryDoubleParameterState\"],[\"SiGyl.Models.Areas.History.HistoryDoubleStepFormula\",\"SiGyl.Models.Areas.History.Batches.Formulae.HistoryDoubleStepFormula\"],[\"SiGyl.Models.Areas.History.HistoryDoubleStepFormulaCommand\",\"SiGyl.Models.Areas.History.Batches.Formulae.HistoryDoubleStepFormulaCommand\"],[\"SiGyl.Models.Areas.History.HistoryDoubleStepFormulaState\",\"SiGyl.Models.Areas.History.Batches.Formulae.HistoryDoubleStepFormulaState\"],[\"SiGyl.Models.Areas.History.HistoryDoubleStepFormulaValue\",\"SiGyl.Models.Areas.History.Batches.Formulae.HistoryDoubleStepFormulaValue\"],[\"SiGyl.Models.Areas.History.HistoryDoubleParameterValue\",\"SiGyl.Models.Areas.History.Equipment.Parameters.HistoryDoubleParameterValue\"],[\"SiGyl.Models.Areas.History.HistoryIntegerParameter\",\"SiGyl.Models.Areas.History.Equipment.Parameters.HistoryIntegerParameter\"],[\"SiGyl.Models.Areas.History.HistoryIntegerParameterCommand\",\"SiGyl.Models.Areas.History.Equipment.Parameters.HistoryIntegerParameterCommand\"],[\"SiGyl.Models.Areas.History.HistoryIntegerEnumeration\",\"SiGyl.Models.Areas.History.Equipment.Parameters.Enumerations.HistoryIntegerEnumeration\"],[\"SiGyl.Models.Areas.History.HistoryIntegerEnumerationCommand\",\"SiGyl.Models.Areas.History.Equipment.Parameters.Enumerations.HistoryIntegerEnumerationCommand\"],[\"SiGyl.Models.Areas.History.HistoryIntegerParameterState\",\"SiGyl.Models.Areas.History.Equipment.Parameters.HistoryIntegerParameterState\"],[\"SiGyl.Models.Areas.History.HistoryIntegerStepFormula\",\"SiGyl.Models.Areas.History.Batches.Formulae.HistoryIntegerStepFormula\"],[\"SiGyl.Models.Areas.History.HistoryIntegerStepFormulaCommand\",\"SiGyl.Models.Areas.History.Batches.Formulae.HistoryIntegerStepFormulaCommand\"],[\"SiGyl.Models.Areas.History.HistoryIntegerStepFormulaState\",\"SiGyl.Models.Areas.History.Batches.Formulae.HistoryIntegerStepFormulaState\"],[\"SiGyl.Models.Areas.History.HistoryIntegerStepFormulaValue\",\"SiGyl.Models.Areas.History.Batches.Formulae.HistoryIntegerStepFormulaValue\"],[\"SiGyl.Models.Areas.History.HistoryIntegerParameterValue\",\"SiGyl.Models.Areas.History.Equipment.Parameters.HistoryIntegerParameterValue\"],[\"SiGyl.Models.Areas.History.HistoryReport\",\"SiGyl.Models.Areas.History.Equipment.Parameters.HistoryReport\"],[\"SiGyl.Models.Areas.History.HistoryReportCommand\",\"SiGyl.Models.Areas.History.Equipment.Parameters.HistoryReportCommand\"],[\"SiGyl.Models.Areas.History.HistoryReportState\",\"SiGyl.Models.Areas.History.Equipment.Parameters.HistoryReportState\"],[\"SiGyl.Models.Areas.History.HistoryStepReport\",\"SiGyl.Models.Areas.History.Batches.Formulae.HistoryStepReport\"],[\"SiGyl.Models.Areas.History.HistoryStepReportCommand\",\"SiGyl.Models.Areas.History.Batches.Formulae.HistoryStepReportCommand\"],[\"SiGyl.Models.Areas.History.HistoryStepReportState\",\"SiGyl.Models.Areas.History.Batches.Formulae.HistoryStepReportState\"],[\"SiGyl.Models.Areas.History.HistoryStepReportValue\",\"SiGyl.Models.Areas.History.Batches.Formulae.HistoryStepReportValue\"],[\"SiGyl.Models.Areas.History.HistoryReportValue\",\"SiGyl.Models.Areas.History.Equipment.Parameters.HistoryReportValue\"],[\"SiGyl.Models.Areas.History.HistoryStringParameter\",\"SiGyl.Models.Areas.History.Equipment.Parameters.HistoryStringParameter\"],[\"SiGyl.Models.Areas.History.HistoryStringParameterCommand\",\"SiGyl.Models.Areas.History.Equipment.Parameters.HistoryStringParameterCommand\"],[\"SiGyl.Models.Areas.History.HistoryStringParameterState\",\"SiGyl.Models.Areas.History.Equipment.Parameters.HistoryStringParameterState\"],[\"SiGyl.Models.Areas.History.HistoryStringStepFormula\",\"SiGyl.Models.Areas.History.Batches.Formulae.HistoryStringStepFormula\"],[\"SiGyl.Models.Areas.History.HistoryStringStepFormulaCommand\",\"SiGyl.Models.Areas.History.Batches.Formulae.HistoryStringStepFormulaCommand\"],[\"SiGyl.Models.Areas.History.HistoryStringStepFormulaState\",\"SiGyl.Models.Areas.History.Batches.Formulae.HistoryStringStepFormulaState\"],[\"SiGyl.Models.Areas.History.HistoryStringStepFormulaValue\",\"SiGyl.Models.Areas.History.Batches.Formulae.HistoryStringStepFormulaValue\"],[\"SiGyl.Models.Areas.History.HistoryStringParameterValue\",\"SiGyl.Models.Areas.History.Equipment.Parameters.HistoryStringParameterValue\"],[\"SiGyl.Models.Areas.History.HistoryUnit\",\"SiGyl.Models.Areas.History.Equipment.HistoryUnit\"],[\"SiGyl.Models.Areas.History.HistoryBoolParameterNode\",\"SiGyl.Models.Areas.History.Equipment.Nodes.HistoryBoolParameterNode\"],[\"SiGyl.Models.Areas.History.HistoryBoolParameterNodeCommand\",\"SiGyl.Models.Areas.History.Equipment.Nodes.HistoryBoolParameterNodeCommand\"],[\"SiGyl.Models.Areas.History.HistoryBoolParameterNodeState\",\"SiGyl.Models.Areas.History.Equipment.Nodes.HistoryBoolParameterNodeState\"],[\"SiGyl.Models.Areas.History.HistoryBoolParameterNodeValue\",\"SiGyl.Models.Areas.History.Equipment.Nodes.HistoryBoolParameterNodeValue\"],[\"SiGyl.Models.Areas.History.HistoryCommandNode\",\"SiGyl.Models.Areas.History.Equipment.Nodes.HistoryCommandNode\"],[\"SiGyl.Models.Areas.History.HistoryCommandNodeCommand\",\"SiGyl.Models.Areas.History.Equipment.Nodes.HistoryCommandNodeCommand\"],[\"SiGyl.Models.Areas.History.HistoryCommandNodeState\",\"SiGyl.Models.Areas.History.Equipment.Nodes.HistoryCommandNodeState\"],[\"SiGyl.Models.Areas.History.HistoryCommandNodeValue\",\"SiGyl.Models.Areas.History.Equipment.Nodes.HistoryCommandNodeValue\"],[\"SiGyl.Models.Areas.History.HistoryUnitCommand\",\"SiGyl.Models.Areas.History.Equipment.HistoryUnitCommand\"],[\"SiGyl.Models.Areas.History.HistoryDataLogNode\",\"SiGyl.Models.Areas.History.Equipment.Nodes.HistoryDataLogNode\"],[\"SiGyl.Models.Areas.History.HistoryDataLogNodeCommand\",\"SiGyl.Models.Areas.History.Equipment.Nodes.HistoryDataLogNodeCommand\"],[\"SiGyl.Models.Areas.History.HistoryDataLogNodeState\",\"SiGyl.Models.Areas.History.Equipment.Nodes.HistoryDataLogNodeState\"],[\"SiGyl.Models.Areas.History.HistoryDataLogNodeValue\",\"SiGyl.Models.Areas.History.Equipment.Nodes.HistoryDataLogNodeValue\"],[\"SiGyl.Models.Areas.History.HistoryDeviceInstance\",\"SiGyl.Models.Areas.History.Equipment.Devices.HistoryDeviceInstance\"],[\"SiGyl.Models.Areas.History.HistoryDevice\",\"SiGyl.Models.Areas.History.Equipment.Devices.HistoryDevice\"],[\"SiGyl.Models.Areas.History.HistoryDeviceDisplay\",\"SiGyl.Models.Areas.History.Equipment.Devices.HistoryDeviceDisplay\"],[\"SiGyl.Models.Areas.History.HistorySite\",\"SiGyl.Models.Areas.History.Organisation.HistorySite\"],[\"SiGyl.Models.Areas.History.HistoryAlarmSeverity\",\"SiGyl.Models.Areas.History.Database.HistoryAlarmSeverity\"],[\"SiGyl.Models.Areas.History.HistoryAlarmSeverityCommand\",\"SiGyl.Models.Areas.History.Database.HistoryAlarmSeverityCommand\"],[\"SiGyl.Models.Areas.History.HistoryClearance\",\"SiGyl.Models.Areas.History.Security.HistoryClearance\"],[\"SiGyl.Models.Areas.History.HistorySiteCommand\",\"SiGyl.Models.Areas.History.Organisation.HistorySiteCommand\"],[\"SiGyl.Models.Areas.History.HistoryEnterprise\",\"SiGyl.Models.Areas.History.Organisation.HistoryEnterprise\"],[\"SiGyl.Models.Areas.History.HistoryApplication\",\"SiGyl.Models.Areas.History.Sys.HistoryApplication\"],[\"SiGyl.Models.Areas.History.HistoryApplicationCommand\",\"SiGyl.Models.Areas.History.Sys.HistoryApplicationCommand\"],[\"SiGyl.Models.Areas.History.HistoryEnterpriseCommand\",\"SiGyl.Models.Areas.History.Organisation.HistoryEnterpriseCommand\"],[\"SiGyl.Models.Areas.History.HistoryDeviceInstanceDisplay\",\"SiGyl.Models.Areas.History.Equipment.Devices.HistoryDeviceInstanceDisplay\"],[\"SiGyl.Models.Areas.History.HistoryDeviceInstanceTag\",\"SiGyl.Models.Areas.History.Equipment.Devices.HistoryDeviceInstanceTag\"],[\"SiGyl.Models.Areas.History.HistoryDoubleParameterNode\",\"SiGyl.Models.Areas.History.Equipment.Nodes.HistoryDoubleParameterNode\"],[\"SiGyl.Models.Areas.History.HistoryDoubleParameterNodeCommand\",\"SiGyl.Models.Areas.History.Equipment.Nodes.HistoryDoubleParameterNodeCommand\"],[\"SiGyl.Models.Areas.History.HistoryDoubleParameterNodeState\",\"SiGyl.Models.Areas.History.Equipment.Nodes.HistoryDoubleParameterNodeState\"],[\"SiGyl.Models.Areas.History.HistoryDoubleParameterNodeValue\",\"SiGyl.Models.Areas.History.Equipment.Nodes.HistoryDoubleParameterNodeValue\"],[\"SiGyl.Models.Areas.History.HistoryIntegerParameterNode\",\"SiGyl.Models.Areas.History.Equipment.Nodes.HistoryIntegerParameterNode\"],[\"SiGyl.Models.Areas.History.HistoryIntegerParameterNodeCommand\",\"SiGyl.Models.Areas.History.Equipment.Nodes.HistoryIntegerParameterNodeCommand\"],[\"SiGyl.Models.Areas.History.HistoryIntegerParameterNodeState\",\"SiGyl.Models.Areas.History.Equipment.Nodes.HistoryIntegerParameterNodeState\"],[\"SiGyl.Models.Areas.History.HistoryIntegerParameterNodeValue\",\"SiGyl.Models.Areas.History.Equipment.Nodes.HistoryIntegerParameterNodeValue\"],[\"SiGyl.Models.Areas.History.HistoryUnitInterface\",\"SiGyl.Models.Areas.History.Equipment.HistoryUnitInterface\"],[\"SiGyl.Models.Areas.History.HistoryNodePage\",\"SiGyl.Models.Areas.History.Equipment.NodePages.HistoryNodePage\"],[\"SiGyl.Models.Areas.History.HistoryNodePageCommand\",\"SiGyl.Models.Areas.History.Equipment.NodePages.HistoryNodePageCommand\"],[\"SiGyl.Models.Areas.History.HistoryNodePageItem\",\"SiGyl.Models.Areas.History.Equipment.NodePages.HistoryNodePageItem\"],[\"SiGyl.Models.Areas.History.HistoryNodePageItemCommand\",\"SiGyl.Models.Areas.History.Equipment.NodePages.HistoryNodePageItemCommand\"],[\"SiGyl.Models.Areas.History.HistoryNodePageItemState\",\"SiGyl.Models.Areas.History.Equipment.NodePages.HistoryNodePageItemState\"],[\"SiGyl.Models.Areas.History.HistoryReportNode\",\"SiGyl.Models.Areas.History.Equipment.Nodes.HistoryReportNode\"],[\"SiGyl.Models.Areas.History.HistoryReportNodeCommand\",\"SiGyl.Models.Areas.History.Equipment.Nodes.HistoryReportNodeCommand\"],[\"SiGyl.Models.Areas.History.HistoryReportNodeState\",\"SiGyl.Models.Areas.History.Equipment.Nodes.HistoryReportNodeState\"],[\"SiGyl.Models.Areas.History.HistoryReportNodeValue\",\"SiGyl.Models.Areas.History.Equipment.Nodes.HistoryReportNodeValue\"],[\"SiGyl.Models.Areas.History.HistoryStateNode\",\"SiGyl.Models.Areas.History.Equipment.Nodes.HistoryStateNode\"],[\"SiGyl.Models.Areas.History.HistoryStateNodeCommand\",\"SiGyl.Models.Areas.History.Equipment.Nodes.HistoryStateNodeCommand\"],[\"SiGyl.Models.Areas.History.HistoryStateNodeState\",\"SiGyl.Models.Areas.History.Equipment.Nodes.HistoryStateNodeState\"],[\"SiGyl.Models.Areas.History.HistoryStateNodeValue\",\"SiGyl.Models.Areas.History.Equipment.Nodes.HistoryStateNodeValue\"],[\"SiGyl.Models.Areas.History.HistoryUnitState\",\"SiGyl.Models.Areas.History.Equipment.HistoryUnitState\"],[\"SiGyl.Models.Areas.History.HistoryStringParameterNode\",\"SiGyl.Models.Areas.History.Equipment.Nodes.HistoryStringParameterNode\"],[\"SiGyl.Models.Areas.History.HistoryStringParameterNodeCommand\",\"SiGyl.Models.Areas.History.Equipment.Nodes.HistoryStringParameterNodeCommand\"],[\"SiGyl.Models.Areas.History.HistoryStringParameterNodeState\",\"SiGyl.Models.Areas.History.Equipment.Nodes.HistoryStringParameterNodeState\"],[\"SiGyl.Models.Areas.History.HistoryStringParameterNodeValue\",\"SiGyl.Models.Areas.History.Equipment.Nodes.HistoryStringParameterNodeValue\"],[\"SiGyl.Models.Areas.History.HistoryBoolParameterState\",\"SiGyl.Models.Areas.History.Equipment.Parameters.HistoryBoolParameterState\"],[\"SiGyl.Models.Areas.History.HistoryBoolParameterValue\",\"SiGyl.Models.Areas.History.Equipment.Parameters.HistoryBoolParameterValue\"],[\"SiGyl.Models.Areas.History.HistoryBoolStepFormulaState\",\"SiGyl.Models.Areas.History.Batches.Formulae.HistoryBoolStepFormulaState\"],[\"SiGyl.Models.Areas.History.HistoryBoolStepFormulaValue\",\"SiGyl.Models.Areas.History.Batches.Formulae.HistoryBoolStepFormulaValue\"],[\"SiGyl.Models.Areas.History.HistoryStepCommand\",\"SiGyl.Models.Areas.History.Batches.HistoryStepCommand\"],[\"SiGyl.Models.Areas.History.HistoryStepState\",\"SiGyl.Models.Areas.History.Batches.HistoryStepState\"],[\"SiGyl.Models.Areas.History.HistoryCommandClearance\",\"SiGyl.Models.Areas.History.Security.HistoryCommandClearance\"],[\"SiGyl.Models.Areas.History.HistoryZoneCommand\",\"SiGyl.Models.Areas.History.Equipment.HistoryZoneCommand\"],[\"SiGyl.Models.Areas.History.HistoryZoneClearance\",\"SiGyl.Models.Areas.History.Security.HistoryZoneClearance\"],[\"SiGyl.Models.Areas.History.HistoryAlarmValue\",\"SiGyl.Models.Areas.History.Database.HistoryAlarmValue\"],[\"SiGyl.Models.Areas.History.HistoryAlarmValueCommand\",\"SiGyl.Models.Areas.History.Database.HistoryAlarmValueCommand\"],[\"SiGyl.Models.Areas.History.HistoryAlarmValueValue\",\"SiGyl.Models.Areas.History.Database.HistoryAlarmValueValue\"],[\"SiGyl.Models.Areas.History.HistoryClearanceCommand\",\"SiGyl.Models.Areas.History.Security.HistoryClearanceCommand\"],[\"SiGyl.Models.Areas.History.HistoryCommandClearanceCommand\",\"SiGyl.Models.Areas.History.Security.HistoryCommandClearanceCommand\"],[\"SiGyl.Models.Areas.History.HistoryDeviceCommand\",\"SiGyl.Models.Areas.History.Equipment.Devices.HistoryDeviceCommand\"],[\"SiGyl.Models.Areas.History.HistoryDeviceDisplayCommand\",\"SiGyl.Models.Areas.History.Equipment.Devices.HistoryDeviceDisplayCommand\"],[\"SiGyl.Models.Areas.History.HistoryDeviceInstanceCommand\",\"SiGyl.Models.Areas.History.Equipment.Devices.HistoryDeviceInstanceCommand\"],[\"SiGyl.Models.Areas.History.HistoryDeviceInstanceDisplayCommand\",\"SiGyl.Models.Areas.History.Equipment.Devices.HistoryDeviceInstanceDisplayCommand\"],[\"SiGyl.Models.Areas.History.HistoryDeviceInstanceTagCommand\",\"SiGyl.Models.Areas.History.Equipment.Devices.HistoryDeviceInstanceTagCommand\"],[\"SiGyl.Models.Areas.History.HistoryGroupCommand\",\"SiGyl.Models.Areas.History.Security.HistoryGroupCommand\"],[\"SiGyl.Models.Areas.History.HistorySignatureCommand\",\"SiGyl.Models.Areas.History.Security.HistorySignatureCommand\"],[\"SiGyl.Models.Areas.History.HistoryZoneClearanceCommand\",\"SiGyl.Models.Areas.History.Security.HistoryZoneClearanceCommand\"]]",
						"enumType": [
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
						  }
						],
						"association": [
						  {
						  	"name": "AlarmOccurrence_Alarm",
						  	"end": [
							  {
							  	"role": "AlarmOccurrence_Alarm_Source",
							  	"type": "Edm.Self.AlarmOccurrence",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "AlarmOccurrence_Alarm_Target",
							  	"type": "Edm.Self.HistoryAlarm",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "AlarmOccurrence_Alarm_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "AlarmOccurrence_Alarm_Source",
						  			"propertyRef": {
						  				"name": "AlarmId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryCommandCommand_Command",
						  	"end": [
							  {
							  	"role": "HistoryCommandCommand_Command_Source",
							  	"type": "Edm.Self.HistoryCommandCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryCommandCommand_Command_Target",
							  	"type": "Edm.Self.HistoryCommand",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryCommandCommand_Command_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryCommandCommand_Command_Source",
						  			"propertyRef": {
						  				"name": "CommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryCommandCommand_CommandInstance",
						  	"end": [
							  {
							  	"role": "HistoryCommandCommand_CommandInstance_Target",
							  	"type": "Edm.Self.HistoryCommandInstance",
							  	"multiplicity": "1"
							  },
							  {
							  	"role": "HistoryCommandCommand_CommandInstance_Source",
							  	"type": "Edm.Self.HistoryCommandCommand",
							  	"multiplicity": "1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryCommandCommand_CommandInstance_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryCommandCommand_CommandInstance_Source",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryCommandCommand_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryCommandCommand_MyCommand_Source",
							  	"type": "Edm.Self.HistoryCommandCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryCommandCommand_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryCommandCommand_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryCommandCommand_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryCommand_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryCommand_MyCommand_Source",
							  	"type": "Edm.Self.HistoryCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryCommand_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryCommand_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryCommand_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryCommandInstance_Command",
						  	"end": [
							  {
							  	"role": "HistoryCommandInstance_Command_Source",
							  	"type": "Edm.Self.HistoryCommandInstance",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryCommandInstance_Command_Target",
							  	"type": "Edm.Self.HistoryCommand",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryCommandInstance_Command_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryCommandInstance_Command_Source",
						  			"propertyRef": {
						  				"name": "CommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryCommandInstance_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryCommandInstance_MyCommand_Source",
							  	"type": "Edm.Self.HistoryCommandInstance",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryCommandInstance_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryCommandInstance_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryCommandInstance_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryCommandInstanceSignature_Command",
						  	"end": [
							  {
							  	"role": "HistoryCommandInstanceSignature_Command_Source",
							  	"type": "Edm.Self.HistoryCommandInstanceSignature",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryCommandInstanceSignature_Command_Target",
							  	"type": "Edm.Self.HistoryCommandInstance",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryCommandInstanceSignature_Command_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryCommandInstanceSignature_Command_Source",
						  			"propertyRef": {
						  				"name": "CommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryCommandInstanceSignature_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryCommandInstanceSignature_MyCommand_Source",
							  	"type": "Edm.Self.HistoryCommandInstanceSignature",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryCommandInstanceSignature_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryCommandInstanceSignature_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryCommandInstanceSignature_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryGroup_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryGroup_MyCommand_Source",
							  	"type": "Edm.Self.HistoryGroup",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryGroup_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryGroup_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryGroup_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryBatchCommand_Batch",
						  	"end": [
							  {
							  	"role": "HistoryBatchCommand_Batch_Source",
							  	"type": "Edm.Self.HistoryBatchCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryBatchCommand_Batch_Target",
							  	"type": "Edm.Self.HistoryBatch",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryBatchCommand_Batch_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryBatchCommand_Batch_Source",
						  			"propertyRef": {
						  				"name": "BatchId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryBatchCommand_CommandInstance",
						  	"end": [
							  {
							  	"role": "HistoryBatchCommand_CommandInstance_Source",
							  	"type": "Edm.Self.HistoryBatchCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryBatchCommand_CommandInstance_Target",
							  	"type": "Edm.Self.HistoryCommandInstance",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryBatchCommand_CommandInstance_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryBatchCommand_CommandInstance_Source",
						  			"propertyRef": {
						  				"name": "CommandInstanceId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryBatchCommand_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryBatchCommand_MyCommand_Source",
							  	"type": "Edm.Self.HistoryBatchCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryBatchCommand_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryBatchCommand_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryBatchCommand_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryBatch_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryBatch_MyCommand_Source",
							  	"type": "Edm.Self.HistoryBatch",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryBatch_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryBatch_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryBatch_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryBatchState_Batch",
						  	"end": [
							  {
							  	"role": "HistoryBatchState_Batch_Source",
							  	"type": "Edm.Self.HistoryBatchState",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryBatchState_Batch_Target",
							  	"type": "Edm.Self.HistoryBatch",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryBatchState_Batch_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryBatchState_Batch_Source",
						  			"propertyRef": {
						  				"name": "BatchId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryBatchState_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryBatchState_MyCommand_Source",
							  	"type": "Edm.Self.HistoryBatchState",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryBatchState_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryBatchState_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryBatchState_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryUnitProcedure_Batch",
						  	"end": [
							  {
							  	"role": "HistoryUnitProcedure_Batch_Source",
							  	"type": "Edm.Self.HistoryUnitProcedure",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryUnitProcedure_Batch_Target",
							  	"type": "Edm.Self.HistoryBatch",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryUnitProcedure_Batch_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryUnitProcedure_Batch_Source",
						  			"propertyRef": {
						  				"name": "BatchId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryUnitProcedureCommand_CommandInstance",
						  	"end": [
							  {
							  	"role": "HistoryUnitProcedureCommand_CommandInstance_Source",
							  	"type": "Edm.Self.HistoryUnitProcedureCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryUnitProcedureCommand_CommandInstance_Target",
							  	"type": "Edm.Self.HistoryCommandInstance",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryUnitProcedureCommand_CommandInstance_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryUnitProcedureCommand_CommandInstance_Source",
						  			"propertyRef": {
						  				"name": "CommandInstanceId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryUnitProcedureCommand_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryUnitProcedureCommand_MyCommand_Source",
							  	"type": "Edm.Self.HistoryUnitProcedureCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryUnitProcedureCommand_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryUnitProcedureCommand_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryUnitProcedureCommand_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryUnitProcedureCommand_UnitProcedure",
						  	"end": [
							  {
							  	"role": "HistoryUnitProcedureCommand_UnitProcedure_Source",
							  	"type": "Edm.Self.HistoryUnitProcedureCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryUnitProcedureCommand_UnitProcedure_Target",
							  	"type": "Edm.Self.HistoryUnitProcedure",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryUnitProcedureCommand_UnitProcedure_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryUnitProcedureCommand_UnitProcedure_Source",
						  			"propertyRef": {
						  				"name": "UnitProcedureId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryUnitProcedure_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryUnitProcedure_MyCommand_Source",
							  	"type": "Edm.Self.HistoryUnitProcedure",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryUnitProcedure_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryUnitProcedure_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryUnitProcedure_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryUnitProcedureState_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryUnitProcedureState_MyCommand_Source",
							  	"type": "Edm.Self.HistoryUnitProcedureState",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryUnitProcedureState_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryUnitProcedureState_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryUnitProcedureState_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryUnitProcedureState_UnitProcedure",
						  	"end": [
							  {
							  	"role": "HistoryUnitProcedureState_UnitProcedure_Source",
							  	"type": "Edm.Self.HistoryUnitProcedureState",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryUnitProcedureState_UnitProcedure_Target",
							  	"type": "Edm.Self.HistoryUnitProcedure",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryUnitProcedureState_UnitProcedure_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryUnitProcedureState_UnitProcedure_Source",
						  			"propertyRef": {
						  				"name": "UnitProcedureId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryBoolStepFormulaCommand_CommandInstance",
						  	"end": [
							  {
							  	"role": "HistoryBoolStepFormulaCommand_CommandInstance_Source",
							  	"type": "Edm.Self.HistoryBoolStepFormulaCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryBoolStepFormulaCommand_CommandInstance_Target",
							  	"type": "Edm.Self.HistoryCommandInstance",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryBoolStepFormulaCommand_CommandInstance_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryBoolStepFormulaCommand_CommandInstance_Source",
						  			"propertyRef": {
						  				"name": "CommandInstanceId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryBoolStepFormulaCommand_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryBoolStepFormulaCommand_MyCommand_Source",
							  	"type": "Edm.Self.HistoryBoolStepFormulaCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryBoolStepFormulaCommand_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryBoolStepFormulaCommand_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryBoolStepFormulaCommand_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryBoolStepFormulaCommand_StepFormula",
						  	"end": [
							  {
							  	"role": "HistoryBoolStepFormulaCommand_StepFormula_Source",
							  	"type": "Edm.Self.HistoryBoolStepFormulaCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryBoolStepFormulaCommand_StepFormula_Target",
							  	"type": "Edm.Self.HistoryBoolStepFormula",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryBoolStepFormulaCommand_StepFormula_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryBoolStepFormulaCommand_StepFormula_Source",
						  			"propertyRef": {
						  				"name": "StepFormulaId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryBoolStepFormula_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryBoolStepFormula_MyCommand_Source",
							  	"type": "Edm.Self.HistoryBoolStepFormula",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryBoolStepFormula_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryBoolStepFormula_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryBoolStepFormula_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryBoolParameterCommand_CommandInstance",
						  	"end": [
							  {
							  	"role": "HistoryBoolParameterCommand_CommandInstance_Source",
							  	"type": "Edm.Self.HistoryBoolParameterCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryBoolParameterCommand_CommandInstance_Target",
							  	"type": "Edm.Self.HistoryCommandInstance",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryBoolParameterCommand_CommandInstance_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryBoolParameterCommand_CommandInstance_Source",
						  			"propertyRef": {
						  				"name": "CommandInstanceId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryBoolParameterCommand_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryBoolParameterCommand_MyCommand_Source",
							  	"type": "Edm.Self.HistoryBoolParameterCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryBoolParameterCommand_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryBoolParameterCommand_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryBoolParameterCommand_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryBoolParameterCommand_Parameter",
						  	"end": [
							  {
							  	"role": "HistoryBoolParameterCommand_Parameter_Source",
							  	"type": "Edm.Self.HistoryBoolParameterCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryBoolParameterCommand_Parameter_Target",
							  	"type": "Edm.Self.HistoryBoolParameter",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryBoolParameterCommand_Parameter_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryBoolParameterCommand_Parameter_Source",
						  			"propertyRef": {
						  				"name": "ParameterId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryBoolEnumerationCommand_CommandInstance",
						  	"end": [
							  {
							  	"role": "HistoryBoolEnumerationCommand_CommandInstance_Source",
							  	"type": "Edm.Self.HistoryBoolEnumerationCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryBoolEnumerationCommand_CommandInstance_Target",
							  	"type": "Edm.Self.HistoryCommandInstance",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryBoolEnumerationCommand_CommandInstance_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryBoolEnumerationCommand_CommandInstance_Source",
						  			"propertyRef": {
						  				"name": "CommandInstanceId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryBoolEnumerationCommand_Enumeration",
						  	"end": [
							  {
							  	"role": "HistoryBoolEnumerationCommand_Enumeration_Source",
							  	"type": "Edm.Self.HistoryBoolEnumerationCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryBoolEnumerationCommand_Enumeration_Target",
							  	"type": "Edm.Self.HistoryBoolEnumeration",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryBoolEnumerationCommand_Enumeration_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryBoolEnumerationCommand_Enumeration_Source",
						  			"propertyRef": {
						  				"name": "EnumerationId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryBoolEnumerationCommand_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryBoolEnumerationCommand_MyCommand_Source",
							  	"type": "Edm.Self.HistoryBoolEnumerationCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryBoolEnumerationCommand_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryBoolEnumerationCommand_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryBoolEnumerationCommand_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryBoolEnumeration_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryBoolEnumeration_MyCommand_Source",
							  	"type": "Edm.Self.HistoryBoolEnumeration",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryBoolEnumeration_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryBoolEnumeration_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryBoolEnumeration_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryBoolEnumeration_Parameter",
						  	"end": [
							  {
							  	"role": "HistoryBoolEnumeration_Parameter_Source",
							  	"type": "Edm.Self.HistoryBoolEnumeration",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryBoolEnumeration_Parameter_Target",
							  	"type": "Edm.Self.HistoryBoolParameter",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryBoolEnumeration_Parameter_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryBoolEnumeration_Parameter_Source",
						  			"propertyRef": {
						  				"name": "ParameterId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryBoolParameter_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryBoolParameter_MyCommand_Source",
							  	"type": "Edm.Self.HistoryBoolParameter",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryBoolParameter_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryBoolParameter_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryBoolParameter_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryOperation_BoolParameters",
						  	"end": [
							  {
							  	"role": "HistoryOperation_BoolParameters_Source",
							  	"type": "Edm.Self.HistoryOperation",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  },
							  {
							  	"role": "HistoryOperation_BoolParameters_Target",
							  	"type": "Edm.Self.HistoryBoolParameter",
							  	"multiplicity": "*"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryOperation_BoolParameters_Source",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryOperation_BoolParameters_Target",
						  			"propertyRef": {
						  				"name": "OperationId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryOperationCommand_CommandInstance",
						  	"end": [
							  {
							  	"role": "HistoryOperationCommand_CommandInstance_Source",
							  	"type": "Edm.Self.HistoryOperationCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryOperationCommand_CommandInstance_Target",
							  	"type": "Edm.Self.HistoryCommandInstance",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryOperationCommand_CommandInstance_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryOperationCommand_CommandInstance_Source",
						  			"propertyRef": {
						  				"name": "CommandInstanceId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryOperationCommand_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryOperationCommand_MyCommand_Source",
							  	"type": "Edm.Self.HistoryOperationCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryOperationCommand_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryOperationCommand_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryOperationCommand_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryOperationCommand_Operation",
						  	"end": [
							  {
							  	"role": "HistoryOperationCommand_Operation_Source",
							  	"type": "Edm.Self.HistoryOperationCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryOperationCommand_Operation_Target",
							  	"type": "Edm.Self.HistoryOperation",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryOperationCommand_Operation_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryOperationCommand_Operation_Source",
						  			"propertyRef": {
						  				"name": "OperationId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryDoubleParameterCommand_CommandInstance",
						  	"end": [
							  {
							  	"role": "HistoryDoubleParameterCommand_CommandInstance_Source",
							  	"type": "Edm.Self.HistoryDoubleParameterCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryDoubleParameterCommand_CommandInstance_Target",
							  	"type": "Edm.Self.HistoryCommandInstance",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryDoubleParameterCommand_CommandInstance_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryDoubleParameterCommand_CommandInstance_Source",
						  			"propertyRef": {
						  				"name": "CommandInstanceId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryDoubleParameterCommand_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryDoubleParameterCommand_MyCommand_Source",
							  	"type": "Edm.Self.HistoryDoubleParameterCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryDoubleParameterCommand_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryDoubleParameterCommand_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryDoubleParameterCommand_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryDoubleParameterCommand_Parameter",
						  	"end": [
							  {
							  	"role": "HistoryDoubleParameterCommand_Parameter_Source",
							  	"type": "Edm.Self.HistoryDoubleParameterCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryDoubleParameterCommand_Parameter_Target",
							  	"type": "Edm.Self.HistoryDoubleParameter",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryDoubleParameterCommand_Parameter_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryDoubleParameterCommand_Parameter_Source",
						  			"propertyRef": {
						  				"name": "ParameterId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryDoubleParameter_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryDoubleParameter_MyCommand_Source",
							  	"type": "Edm.Self.HistoryDoubleParameter",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryDoubleParameter_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryDoubleParameter_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryDoubleParameter_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryDoubleParameter_Operation",
						  	"end": [
							  {
							  	"role": "HistoryDoubleParameter_Operation_Source",
							  	"type": "Edm.Self.HistoryDoubleParameter",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryDoubleParameter_Operation_Target",
							  	"type": "Edm.Self.HistoryOperation",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryDoubleParameter_Operation_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryDoubleParameter_Operation_Source",
						  			"propertyRef": {
						  				"name": "OperationId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryDoubleParameterState_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryDoubleParameterState_MyCommand_Source",
							  	"type": "Edm.Self.HistoryDoubleParameterState",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryDoubleParameterState_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryDoubleParameterState_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryDoubleParameterState_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryDoubleParameterState_Parameter",
						  	"end": [
							  {
							  	"role": "HistoryDoubleParameterState_Parameter_Source",
							  	"type": "Edm.Self.HistoryDoubleParameterState",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryDoubleParameterState_Parameter_Target",
							  	"type": "Edm.Self.HistoryDoubleParameter",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryDoubleParameterState_Parameter_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryDoubleParameterState_Parameter_Source",
						  			"propertyRef": {
						  				"name": "ParameterId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryDoubleStepFormulaCommand_CommandInstance",
						  	"end": [
							  {
							  	"role": "HistoryDoubleStepFormulaCommand_CommandInstance_Source",
							  	"type": "Edm.Self.HistoryDoubleStepFormulaCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryDoubleStepFormulaCommand_CommandInstance_Target",
							  	"type": "Edm.Self.HistoryCommandInstance",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryDoubleStepFormulaCommand_CommandInstance_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryDoubleStepFormulaCommand_CommandInstance_Source",
						  			"propertyRef": {
						  				"name": "CommandInstanceId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryDoubleStepFormulaCommand_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryDoubleStepFormulaCommand_MyCommand_Source",
							  	"type": "Edm.Self.HistoryDoubleStepFormulaCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryDoubleStepFormulaCommand_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryDoubleStepFormulaCommand_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryDoubleStepFormulaCommand_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryDoubleStepFormulaCommand_StepFormula",
						  	"end": [
							  {
							  	"role": "HistoryDoubleStepFormulaCommand_StepFormula_Source",
							  	"type": "Edm.Self.HistoryDoubleStepFormulaCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryDoubleStepFormulaCommand_StepFormula_Target",
							  	"type": "Edm.Self.HistoryDoubleStepFormula",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryDoubleStepFormulaCommand_StepFormula_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryDoubleStepFormulaCommand_StepFormula_Source",
						  			"propertyRef": {
						  				"name": "StepFormulaId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryDoubleStepFormula_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryDoubleStepFormula_MyCommand_Source",
							  	"type": "Edm.Self.HistoryDoubleStepFormula",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryDoubleStepFormula_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryDoubleStepFormula_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryDoubleStepFormula_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryDoubleStepFormula_Parameter",
						  	"end": [
							  {
							  	"role": "HistoryDoubleStepFormula_Parameter_Source",
							  	"type": "Edm.Self.HistoryDoubleStepFormula",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryDoubleStepFormula_Parameter_Target",
							  	"type": "Edm.Self.HistoryDoubleParameter",
							  	"multiplicity": "1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryDoubleStepFormula_Parameter_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryDoubleStepFormula_Parameter_Source",
						  			"propertyRef": {
						  				"name": "ParameterId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryDoubleStepFormulaState_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryDoubleStepFormulaState_MyCommand_Source",
							  	"type": "Edm.Self.HistoryDoubleStepFormulaState",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryDoubleStepFormulaState_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryDoubleStepFormulaState_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryDoubleStepFormulaState_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryDoubleStepFormulaState_StepFormula",
						  	"end": [
							  {
							  	"role": "HistoryDoubleStepFormulaState_StepFormula_Source",
							  	"type": "Edm.Self.HistoryDoubleStepFormulaState",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryDoubleStepFormulaState_StepFormula_Target",
							  	"type": "Edm.Self.HistoryDoubleStepFormula",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryDoubleStepFormulaState_StepFormula_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryDoubleStepFormulaState_StepFormula_Source",
						  			"propertyRef": {
						  				"name": "StepFormulaId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryDoubleStepFormula_Step",
						  	"end": [
							  {
							  	"role": "HistoryDoubleStepFormula_Step_Source",
							  	"type": "Edm.Self.HistoryDoubleStepFormula",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryDoubleStepFormula_Step_Target",
							  	"type": "Edm.Self.HistoryStep",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryDoubleStepFormula_Step_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryDoubleStepFormula_Step_Source",
						  			"propertyRef": {
						  				"name": "StepId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryDoubleStepFormulaValue_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryDoubleStepFormulaValue_MyCommand_Source",
							  	"type": "Edm.Self.HistoryDoubleStepFormulaValue",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryDoubleStepFormulaValue_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryDoubleStepFormulaValue_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryDoubleStepFormulaValue_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryDoubleStepFormulaValue_StepFormula",
						  	"end": [
							  {
							  	"role": "HistoryDoubleStepFormulaValue_StepFormula_Source",
							  	"type": "Edm.Self.HistoryDoubleStepFormulaValue",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryDoubleStepFormulaValue_StepFormula_Target",
							  	"type": "Edm.Self.HistoryDoubleStepFormula",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryDoubleStepFormulaValue_StepFormula_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryDoubleStepFormulaValue_StepFormula_Source",
						  			"propertyRef": {
						  				"name": "StepFormulaId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryDoubleParameterValue_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryDoubleParameterValue_MyCommand_Source",
							  	"type": "Edm.Self.HistoryDoubleParameterValue",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryDoubleParameterValue_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryDoubleParameterValue_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryDoubleParameterValue_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryDoubleParameterValue_Parameter",
						  	"end": [
							  {
							  	"role": "HistoryDoubleParameterValue_Parameter_Source",
							  	"type": "Edm.Self.HistoryDoubleParameterValue",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryDoubleParameterValue_Parameter_Target",
							  	"type": "Edm.Self.HistoryDoubleParameter",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryDoubleParameterValue_Parameter_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryDoubleParameterValue_Parameter_Source",
						  			"propertyRef": {
						  				"name": "ParameterId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryIntegerParameterCommand_CommandInstance",
						  	"end": [
							  {
							  	"role": "HistoryIntegerParameterCommand_CommandInstance_Source",
							  	"type": "Edm.Self.HistoryIntegerParameterCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryIntegerParameterCommand_CommandInstance_Target",
							  	"type": "Edm.Self.HistoryCommandInstance",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryIntegerParameterCommand_CommandInstance_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryIntegerParameterCommand_CommandInstance_Source",
						  			"propertyRef": {
						  				"name": "CommandInstanceId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryIntegerParameterCommand_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryIntegerParameterCommand_MyCommand_Source",
							  	"type": "Edm.Self.HistoryIntegerParameterCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryIntegerParameterCommand_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryIntegerParameterCommand_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryIntegerParameterCommand_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryIntegerParameterCommand_Parameter",
						  	"end": [
							  {
							  	"role": "HistoryIntegerParameterCommand_Parameter_Source",
							  	"type": "Edm.Self.HistoryIntegerParameterCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryIntegerParameterCommand_Parameter_Target",
							  	"type": "Edm.Self.HistoryIntegerParameter",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryIntegerParameterCommand_Parameter_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryIntegerParameterCommand_Parameter_Source",
						  			"propertyRef": {
						  				"name": "ParameterId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryIntegerEnumerationCommand_CommandInstance",
						  	"end": [
							  {
							  	"role": "HistoryIntegerEnumerationCommand_CommandInstance_Source",
							  	"type": "Edm.Self.HistoryIntegerEnumerationCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryIntegerEnumerationCommand_CommandInstance_Target",
							  	"type": "Edm.Self.HistoryCommandInstance",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryIntegerEnumerationCommand_CommandInstance_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryIntegerEnumerationCommand_CommandInstance_Source",
						  			"propertyRef": {
						  				"name": "CommandInstanceId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryIntegerEnumerationCommand_Enumeration",
						  	"end": [
							  {
							  	"role": "HistoryIntegerEnumerationCommand_Enumeration_Source",
							  	"type": "Edm.Self.HistoryIntegerEnumerationCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryIntegerEnumerationCommand_Enumeration_Target",
							  	"type": "Edm.Self.HistoryIntegerEnumeration",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryIntegerEnumerationCommand_Enumeration_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryIntegerEnumerationCommand_Enumeration_Source",
						  			"propertyRef": {
						  				"name": "EnumerationId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryIntegerEnumerationCommand_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryIntegerEnumerationCommand_MyCommand_Source",
							  	"type": "Edm.Self.HistoryIntegerEnumerationCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryIntegerEnumerationCommand_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryIntegerEnumerationCommand_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryIntegerEnumerationCommand_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryIntegerEnumeration_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryIntegerEnumeration_MyCommand_Source",
							  	"type": "Edm.Self.HistoryIntegerEnumeration",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryIntegerEnumeration_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryIntegerEnumeration_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryIntegerEnumeration_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryIntegerEnumeration_Parameter",
						  	"end": [
							  {
							  	"role": "HistoryIntegerEnumeration_Parameter_Source",
							  	"type": "Edm.Self.HistoryIntegerEnumeration",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryIntegerEnumeration_Parameter_Target",
							  	"type": "Edm.Self.HistoryIntegerParameter",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryIntegerEnumeration_Parameter_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryIntegerEnumeration_Parameter_Source",
						  			"propertyRef": {
						  				"name": "ParameterId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryIntegerParameter_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryIntegerParameter_MyCommand_Source",
							  	"type": "Edm.Self.HistoryIntegerParameter",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryIntegerParameter_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryIntegerParameter_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryIntegerParameter_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryIntegerParameter_Operation",
						  	"end": [
							  {
							  	"role": "HistoryIntegerParameter_Operation_Source",
							  	"type": "Edm.Self.HistoryIntegerParameter",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryIntegerParameter_Operation_Target",
							  	"type": "Edm.Self.HistoryOperation",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryIntegerParameter_Operation_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryIntegerParameter_Operation_Source",
						  			"propertyRef": {
						  				"name": "OperationId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryIntegerParameterState_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryIntegerParameterState_MyCommand_Source",
							  	"type": "Edm.Self.HistoryIntegerParameterState",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryIntegerParameterState_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryIntegerParameterState_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryIntegerParameterState_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryIntegerParameterState_Parameter",
						  	"end": [
							  {
							  	"role": "HistoryIntegerParameterState_Parameter_Source",
							  	"type": "Edm.Self.HistoryIntegerParameterState",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryIntegerParameterState_Parameter_Target",
							  	"type": "Edm.Self.HistoryIntegerParameter",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryIntegerParameterState_Parameter_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryIntegerParameterState_Parameter_Source",
						  			"propertyRef": {
						  				"name": "ParameterId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryIntegerStepFormulaCommand_CommandInstance",
						  	"end": [
							  {
							  	"role": "HistoryIntegerStepFormulaCommand_CommandInstance_Source",
							  	"type": "Edm.Self.HistoryIntegerStepFormulaCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryIntegerStepFormulaCommand_CommandInstance_Target",
							  	"type": "Edm.Self.HistoryCommandInstance",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryIntegerStepFormulaCommand_CommandInstance_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryIntegerStepFormulaCommand_CommandInstance_Source",
						  			"propertyRef": {
						  				"name": "CommandInstanceId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryIntegerStepFormulaCommand_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryIntegerStepFormulaCommand_MyCommand_Source",
							  	"type": "Edm.Self.HistoryIntegerStepFormulaCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryIntegerStepFormulaCommand_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryIntegerStepFormulaCommand_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryIntegerStepFormulaCommand_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryIntegerStepFormulaCommand_StepFormula",
						  	"end": [
							  {
							  	"role": "HistoryIntegerStepFormulaCommand_StepFormula_Source",
							  	"type": "Edm.Self.HistoryIntegerStepFormulaCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryIntegerStepFormulaCommand_StepFormula_Target",
							  	"type": "Edm.Self.HistoryIntegerStepFormula",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryIntegerStepFormulaCommand_StepFormula_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryIntegerStepFormulaCommand_StepFormula_Source",
						  			"propertyRef": {
						  				"name": "StepFormulaId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryIntegerStepFormula_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryIntegerStepFormula_MyCommand_Source",
							  	"type": "Edm.Self.HistoryIntegerStepFormula",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryIntegerStepFormula_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryIntegerStepFormula_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryIntegerStepFormula_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryIntegerStepFormula_Parameter",
						  	"end": [
							  {
							  	"role": "HistoryIntegerStepFormula_Parameter_Source",
							  	"type": "Edm.Self.HistoryIntegerStepFormula",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryIntegerStepFormula_Parameter_Target",
							  	"type": "Edm.Self.HistoryIntegerParameter",
							  	"multiplicity": "1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryIntegerStepFormula_Parameter_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryIntegerStepFormula_Parameter_Source",
						  			"propertyRef": {
						  				"name": "ParameterId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryIntegerStepFormulaState_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryIntegerStepFormulaState_MyCommand_Source",
							  	"type": "Edm.Self.HistoryIntegerStepFormulaState",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryIntegerStepFormulaState_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryIntegerStepFormulaState_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryIntegerStepFormulaState_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryIntegerStepFormulaState_StepFormula",
						  	"end": [
							  {
							  	"role": "HistoryIntegerStepFormulaState_StepFormula_Source",
							  	"type": "Edm.Self.HistoryIntegerStepFormulaState",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryIntegerStepFormulaState_StepFormula_Target",
							  	"type": "Edm.Self.HistoryIntegerStepFormula",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryIntegerStepFormulaState_StepFormula_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryIntegerStepFormulaState_StepFormula_Source",
						  			"propertyRef": {
						  				"name": "StepFormulaId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryIntegerStepFormula_Step",
						  	"end": [
							  {
							  	"role": "HistoryIntegerStepFormula_Step_Source",
							  	"type": "Edm.Self.HistoryIntegerStepFormula",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryIntegerStepFormula_Step_Target",
							  	"type": "Edm.Self.HistoryStep",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryIntegerStepFormula_Step_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryIntegerStepFormula_Step_Source",
						  			"propertyRef": {
						  				"name": "StepId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryIntegerStepFormulaValue_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryIntegerStepFormulaValue_MyCommand_Source",
							  	"type": "Edm.Self.HistoryIntegerStepFormulaValue",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryIntegerStepFormulaValue_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryIntegerStepFormulaValue_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryIntegerStepFormulaValue_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryIntegerStepFormulaValue_StepFormula",
						  	"end": [
							  {
							  	"role": "HistoryIntegerStepFormulaValue_StepFormula_Source",
							  	"type": "Edm.Self.HistoryIntegerStepFormulaValue",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryIntegerStepFormulaValue_StepFormula_Target",
							  	"type": "Edm.Self.HistoryIntegerStepFormula",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryIntegerStepFormulaValue_StepFormula_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryIntegerStepFormulaValue_StepFormula_Source",
						  			"propertyRef": {
						  				"name": "StepFormulaId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryIntegerParameterValue_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryIntegerParameterValue_MyCommand_Source",
							  	"type": "Edm.Self.HistoryIntegerParameterValue",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryIntegerParameterValue_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryIntegerParameterValue_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryIntegerParameterValue_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryIntegerParameterValue_Parameter",
						  	"end": [
							  {
							  	"role": "HistoryIntegerParameterValue_Parameter_Source",
							  	"type": "Edm.Self.HistoryIntegerParameterValue",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryIntegerParameterValue_Parameter_Target",
							  	"type": "Edm.Self.HistoryIntegerParameter",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryIntegerParameterValue_Parameter_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryIntegerParameterValue_Parameter_Source",
						  			"propertyRef": {
						  				"name": "ParameterId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryOperation_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryOperation_MyCommand_Source",
							  	"type": "Edm.Self.HistoryOperation",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryOperation_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryOperation_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryOperation_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryReportCommand_CommandInstance",
						  	"end": [
							  {
							  	"role": "HistoryReportCommand_CommandInstance_Source",
							  	"type": "Edm.Self.HistoryReportCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryReportCommand_CommandInstance_Target",
							  	"type": "Edm.Self.HistoryCommandInstance",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryReportCommand_CommandInstance_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryReportCommand_CommandInstance_Source",
						  			"propertyRef": {
						  				"name": "CommandInstanceId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryReportCommand_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryReportCommand_MyCommand_Source",
							  	"type": "Edm.Self.HistoryReportCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryReportCommand_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryReportCommand_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryReportCommand_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryReportCommand_Parameter",
						  	"end": [
							  {
							  	"role": "HistoryReportCommand_Parameter_Source",
							  	"type": "Edm.Self.HistoryReportCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryReportCommand_Parameter_Target",
							  	"type": "Edm.Self.HistoryReport",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryReportCommand_Parameter_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryReportCommand_Parameter_Source",
						  			"propertyRef": {
						  				"name": "ParameterId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryReport_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryReport_MyCommand_Source",
							  	"type": "Edm.Self.HistoryReport",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryReport_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryReport_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryReport_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryReport_Operation",
						  	"end": [
							  {
							  	"role": "HistoryReport_Operation_Source",
							  	"type": "Edm.Self.HistoryReport",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryReport_Operation_Target",
							  	"type": "Edm.Self.HistoryOperation",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryReport_Operation_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryReport_Operation_Source",
						  			"propertyRef": {
						  				"name": "OperationId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryReportState_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryReportState_MyCommand_Source",
							  	"type": "Edm.Self.HistoryReportState",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryReportState_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryReportState_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryReportState_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryReportState_Parameter",
						  	"end": [
							  {
							  	"role": "HistoryReportState_Parameter_Source",
							  	"type": "Edm.Self.HistoryReportState",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryReportState_Parameter_Target",
							  	"type": "Edm.Self.HistoryReport",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryReportState_Parameter_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryReportState_Parameter_Source",
						  			"propertyRef": {
						  				"name": "ParameterId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryStepReportCommand_CommandInstance",
						  	"end": [
							  {
							  	"role": "HistoryStepReportCommand_CommandInstance_Source",
							  	"type": "Edm.Self.HistoryStepReportCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryStepReportCommand_CommandInstance_Target",
							  	"type": "Edm.Self.HistoryCommandInstance",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryStepReportCommand_CommandInstance_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryStepReportCommand_CommandInstance_Source",
						  			"propertyRef": {
						  				"name": "CommandInstanceId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryStepReportCommand_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryStepReportCommand_MyCommand_Source",
							  	"type": "Edm.Self.HistoryStepReportCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryStepReportCommand_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryStepReportCommand_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryStepReportCommand_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryStepReportCommand_StepFormula",
						  	"end": [
							  {
							  	"role": "HistoryStepReportCommand_StepFormula_Source",
							  	"type": "Edm.Self.HistoryStepReportCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryStepReportCommand_StepFormula_Target",
							  	"type": "Edm.Self.HistoryStepReport",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryStepReportCommand_StepFormula_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryStepReportCommand_StepFormula_Source",
						  			"propertyRef": {
						  				"name": "StepFormulaId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryStepReport_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryStepReport_MyCommand_Source",
							  	"type": "Edm.Self.HistoryStepReport",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryStepReport_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryStepReport_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryStepReport_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryStepReport_Parameter",
						  	"end": [
							  {
							  	"role": "HistoryStepReport_Parameter_Source",
							  	"type": "Edm.Self.HistoryStepReport",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryStepReport_Parameter_Target",
							  	"type": "Edm.Self.HistoryReport",
							  	"multiplicity": "1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryStepReport_Parameter_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryStepReport_Parameter_Source",
						  			"propertyRef": {
						  				"name": "ParameterId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryStepReportState_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryStepReportState_MyCommand_Source",
							  	"type": "Edm.Self.HistoryStepReportState",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryStepReportState_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryStepReportState_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryStepReportState_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryStepReportState_StepFormula",
						  	"end": [
							  {
							  	"role": "HistoryStepReportState_StepFormula_Source",
							  	"type": "Edm.Self.HistoryStepReportState",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryStepReportState_StepFormula_Target",
							  	"type": "Edm.Self.HistoryStepReport",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryStepReportState_StepFormula_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryStepReportState_StepFormula_Source",
						  			"propertyRef": {
						  				"name": "StepFormulaId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryStepReport_Step",
						  	"end": [
							  {
							  	"role": "HistoryStepReport_Step_Source",
							  	"type": "Edm.Self.HistoryStepReport",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryStepReport_Step_Target",
							  	"type": "Edm.Self.HistoryStep",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryStepReport_Step_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryStepReport_Step_Source",
						  			"propertyRef": {
						  				"name": "StepId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryStepReportValue_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryStepReportValue_MyCommand_Source",
							  	"type": "Edm.Self.HistoryStepReportValue",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryStepReportValue_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryStepReportValue_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryStepReportValue_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryStepReportValue_StepFormula",
						  	"end": [
							  {
							  	"role": "HistoryStepReportValue_StepFormula_Source",
							  	"type": "Edm.Self.HistoryStepReportValue",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryStepReportValue_StepFormula_Target",
							  	"type": "Edm.Self.HistoryStepReport",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryStepReportValue_StepFormula_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryStepReportValue_StepFormula_Source",
						  			"propertyRef": {
						  				"name": "StepFormulaId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryReportValue_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryReportValue_MyCommand_Source",
							  	"type": "Edm.Self.HistoryReportValue",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryReportValue_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryReportValue_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryReportValue_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryReportValue_Parameter",
						  	"end": [
							  {
							  	"role": "HistoryReportValue_Parameter_Source",
							  	"type": "Edm.Self.HistoryReportValue",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryReportValue_Parameter_Target",
							  	"type": "Edm.Self.HistoryReport",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryReportValue_Parameter_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryReportValue_Parameter_Source",
						  			"propertyRef": {
						  				"name": "ParameterId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryStringParameterCommand_CommandInstance",
						  	"end": [
							  {
							  	"role": "HistoryStringParameterCommand_CommandInstance_Source",
							  	"type": "Edm.Self.HistoryStringParameterCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryStringParameterCommand_CommandInstance_Target",
							  	"type": "Edm.Self.HistoryCommandInstance",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryStringParameterCommand_CommandInstance_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryStringParameterCommand_CommandInstance_Source",
						  			"propertyRef": {
						  				"name": "CommandInstanceId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryStringParameterCommand_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryStringParameterCommand_MyCommand_Source",
							  	"type": "Edm.Self.HistoryStringParameterCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryStringParameterCommand_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryStringParameterCommand_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryStringParameterCommand_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryStringParameterCommand_Parameter",
						  	"end": [
							  {
							  	"role": "HistoryStringParameterCommand_Parameter_Source",
							  	"type": "Edm.Self.HistoryStringParameterCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryStringParameterCommand_Parameter_Target",
							  	"type": "Edm.Self.HistoryStringParameter",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryStringParameterCommand_Parameter_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryStringParameterCommand_Parameter_Source",
						  			"propertyRef": {
						  				"name": "ParameterId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryStringParameter_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryStringParameter_MyCommand_Source",
							  	"type": "Edm.Self.HistoryStringParameter",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryStringParameter_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryStringParameter_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryStringParameter_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryStringParameter_Operation",
						  	"end": [
							  {
							  	"role": "HistoryStringParameter_Operation_Source",
							  	"type": "Edm.Self.HistoryStringParameter",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryStringParameter_Operation_Target",
							  	"type": "Edm.Self.HistoryOperation",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryStringParameter_Operation_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryStringParameter_Operation_Source",
						  			"propertyRef": {
						  				"name": "OperationId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryStringParameterState_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryStringParameterState_MyCommand_Source",
							  	"type": "Edm.Self.HistoryStringParameterState",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryStringParameterState_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryStringParameterState_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryStringParameterState_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryStringParameterState_Parameter",
						  	"end": [
							  {
							  	"role": "HistoryStringParameterState_Parameter_Source",
							  	"type": "Edm.Self.HistoryStringParameterState",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryStringParameterState_Parameter_Target",
							  	"type": "Edm.Self.HistoryStringParameter",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryStringParameterState_Parameter_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryStringParameterState_Parameter_Source",
						  			"propertyRef": {
						  				"name": "ParameterId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryStringStepFormulaCommand_CommandInstance",
						  	"end": [
							  {
							  	"role": "HistoryStringStepFormulaCommand_CommandInstance_Source",
							  	"type": "Edm.Self.HistoryStringStepFormulaCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryStringStepFormulaCommand_CommandInstance_Target",
							  	"type": "Edm.Self.HistoryCommandInstance",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryStringStepFormulaCommand_CommandInstance_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryStringStepFormulaCommand_CommandInstance_Source",
						  			"propertyRef": {
						  				"name": "CommandInstanceId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryStringStepFormulaCommand_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryStringStepFormulaCommand_MyCommand_Source",
							  	"type": "Edm.Self.HistoryStringStepFormulaCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryStringStepFormulaCommand_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryStringStepFormulaCommand_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryStringStepFormulaCommand_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryStringStepFormulaCommand_StepFormula",
						  	"end": [
							  {
							  	"role": "HistoryStringStepFormulaCommand_StepFormula_Source",
							  	"type": "Edm.Self.HistoryStringStepFormulaCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryStringStepFormulaCommand_StepFormula_Target",
							  	"type": "Edm.Self.HistoryStringStepFormula",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryStringStepFormulaCommand_StepFormula_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryStringStepFormulaCommand_StepFormula_Source",
						  			"propertyRef": {
						  				"name": "StepFormulaId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryStringStepFormula_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryStringStepFormula_MyCommand_Source",
							  	"type": "Edm.Self.HistoryStringStepFormula",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryStringStepFormula_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryStringStepFormula_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryStringStepFormula_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryStringStepFormula_Parameter",
						  	"end": [
							  {
							  	"role": "HistoryStringStepFormula_Parameter_Source",
							  	"type": "Edm.Self.HistoryStringStepFormula",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryStringStepFormula_Parameter_Target",
							  	"type": "Edm.Self.HistoryStringParameter",
							  	"multiplicity": "1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryStringStepFormula_Parameter_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryStringStepFormula_Parameter_Source",
						  			"propertyRef": {
						  				"name": "ParameterId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryStringStepFormulaState_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryStringStepFormulaState_MyCommand_Source",
							  	"type": "Edm.Self.HistoryStringStepFormulaState",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryStringStepFormulaState_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryStringStepFormulaState_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryStringStepFormulaState_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryStringStepFormulaState_StepFormula",
						  	"end": [
							  {
							  	"role": "HistoryStringStepFormulaState_StepFormula_Source",
							  	"type": "Edm.Self.HistoryStringStepFormulaState",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryStringStepFormulaState_StepFormula_Target",
							  	"type": "Edm.Self.HistoryStringStepFormula",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryStringStepFormulaState_StepFormula_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryStringStepFormulaState_StepFormula_Source",
						  			"propertyRef": {
						  				"name": "StepFormulaId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryStringStepFormula_Step",
						  	"end": [
							  {
							  	"role": "HistoryStringStepFormula_Step_Source",
							  	"type": "Edm.Self.HistoryStringStepFormula",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryStringStepFormula_Step_Target",
							  	"type": "Edm.Self.HistoryStep",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryStringStepFormula_Step_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryStringStepFormula_Step_Source",
						  			"propertyRef": {
						  				"name": "StepId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryStringStepFormulaValue_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryStringStepFormulaValue_MyCommand_Source",
							  	"type": "Edm.Self.HistoryStringStepFormulaValue",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryStringStepFormulaValue_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryStringStepFormulaValue_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryStringStepFormulaValue_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryStringStepFormulaValue_StepFormula",
						  	"end": [
							  {
							  	"role": "HistoryStringStepFormulaValue_StepFormula_Source",
							  	"type": "Edm.Self.HistoryStringStepFormulaValue",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryStringStepFormulaValue_StepFormula_Target",
							  	"type": "Edm.Self.HistoryStringStepFormula",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryStringStepFormulaValue_StepFormula_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryStringStepFormulaValue_StepFormula_Source",
						  			"propertyRef": {
						  				"name": "StepFormulaId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryStringParameterValue_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryStringParameterValue_MyCommand_Source",
							  	"type": "Edm.Self.HistoryStringParameterValue",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryStringParameterValue_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryStringParameterValue_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryStringParameterValue_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryStringParameterValue_Parameter",
						  	"end": [
							  {
							  	"role": "HistoryStringParameterValue_Parameter_Source",
							  	"type": "Edm.Self.HistoryStringParameterValue",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryStringParameterValue_Parameter_Target",
							  	"type": "Edm.Self.HistoryStringParameter",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryStringParameterValue_Parameter_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryStringParameterValue_Parameter_Source",
						  			"propertyRef": {
						  				"name": "ParameterId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryUnit_Alarms",
						  	"end": [
							  {
							  	"role": "HistoryUnit_Alarms_Source",
							  	"type": "Edm.Self.HistoryUnit",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  },
							  {
							  	"role": "HistoryUnit_Alarms_Target",
							  	"type": "Edm.Self.HistoryAlarm",
							  	"multiplicity": "*"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryUnit_Alarms_Source",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryUnit_Alarms_Target",
						  			"propertyRef": {
						  				"name": "UnitId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryBoolParameterNodeCommand_CommandInstance",
						  	"end": [
							  {
							  	"role": "HistoryBoolParameterNodeCommand_CommandInstance_Source",
							  	"type": "Edm.Self.HistoryBoolParameterNodeCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryBoolParameterNodeCommand_CommandInstance_Target",
							  	"type": "Edm.Self.HistoryCommandInstance",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryBoolParameterNodeCommand_CommandInstance_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryBoolParameterNodeCommand_CommandInstance_Source",
						  			"propertyRef": {
						  				"name": "CommandInstanceId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryBoolParameterNodeCommand_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryBoolParameterNodeCommand_MyCommand_Source",
							  	"type": "Edm.Self.HistoryBoolParameterNodeCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryBoolParameterNodeCommand_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryBoolParameterNodeCommand_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryBoolParameterNodeCommand_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryBoolParameterNodeCommand_UnitNode",
						  	"end": [
							  {
							  	"role": "HistoryBoolParameterNodeCommand_UnitNode_Source",
							  	"type": "Edm.Self.HistoryBoolParameterNodeCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryBoolParameterNodeCommand_UnitNode_Target",
							  	"type": "Edm.Self.HistoryBoolParameterNode",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryBoolParameterNodeCommand_UnitNode_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryBoolParameterNodeCommand_UnitNode_Source",
						  			"propertyRef": {
						  				"name": "UnitNodeId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryBoolParameterNode_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryBoolParameterNode_MyCommand_Source",
							  	"type": "Edm.Self.HistoryBoolParameterNode",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryBoolParameterNode_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryBoolParameterNode_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryBoolParameterNode_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryBoolParameterNodeState_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryBoolParameterNodeState_MyCommand_Source",
							  	"type": "Edm.Self.HistoryBoolParameterNodeState",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryBoolParameterNodeState_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryBoolParameterNodeState_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryBoolParameterNodeState_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryBoolParameterNodeState_UnitNode",
						  	"end": [
							  {
							  	"role": "HistoryBoolParameterNodeState_UnitNode_Source",
							  	"type": "Edm.Self.HistoryBoolParameterNodeState",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryBoolParameterNodeState_UnitNode_Target",
							  	"type": "Edm.Self.HistoryBoolParameterNode",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryBoolParameterNodeState_UnitNode_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryBoolParameterNodeState_UnitNode_Source",
						  			"propertyRef": {
						  				"name": "UnitNodeId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryBoolParameterNode_Unit",
						  	"end": [
							  {
							  	"role": "HistoryBoolParameterNode_Unit_Source",
							  	"type": "Edm.Self.HistoryBoolParameterNode",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryBoolParameterNode_Unit_Target",
							  	"type": "Edm.Self.HistoryUnit",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryBoolParameterNode_Unit_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryBoolParameterNode_Unit_Source",
						  			"propertyRef": {
						  				"name": "UnitId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryBoolParameterNodeValue_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryBoolParameterNodeValue_MyCommand_Source",
							  	"type": "Edm.Self.HistoryBoolParameterNodeValue",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryBoolParameterNodeValue_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryBoolParameterNodeValue_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryBoolParameterNodeValue_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryBoolParameterNodeValue_UnitNode",
						  	"end": [
							  {
							  	"role": "HistoryBoolParameterNodeValue_UnitNode_Source",
							  	"type": "Edm.Self.HistoryBoolParameterNodeValue",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryBoolParameterNodeValue_UnitNode_Target",
							  	"type": "Edm.Self.HistoryBoolParameterNode",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryBoolParameterNodeValue_UnitNode_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryBoolParameterNodeValue_UnitNode_Source",
						  			"propertyRef": {
						  				"name": "UnitNodeId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryCommandNodeCommand_CommandInstance",
						  	"end": [
							  {
							  	"role": "HistoryCommandNodeCommand_CommandInstance_Source",
							  	"type": "Edm.Self.HistoryCommandNodeCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryCommandNodeCommand_CommandInstance_Target",
							  	"type": "Edm.Self.HistoryCommandInstance",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryCommandNodeCommand_CommandInstance_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryCommandNodeCommand_CommandInstance_Source",
						  			"propertyRef": {
						  				"name": "CommandInstanceId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryCommandNodeCommand_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryCommandNodeCommand_MyCommand_Source",
							  	"type": "Edm.Self.HistoryCommandNodeCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryCommandNodeCommand_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryCommandNodeCommand_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryCommandNodeCommand_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryCommandNodeCommand_UnitNode",
						  	"end": [
							  {
							  	"role": "HistoryCommandNodeCommand_UnitNode_Source",
							  	"type": "Edm.Self.HistoryCommandNodeCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryCommandNodeCommand_UnitNode_Target",
							  	"type": "Edm.Self.HistoryCommandNode",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryCommandNodeCommand_UnitNode_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryCommandNodeCommand_UnitNode_Source",
						  			"propertyRef": {
						  				"name": "UnitNodeId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryCommandNode_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryCommandNode_MyCommand_Source",
							  	"type": "Edm.Self.HistoryCommandNode",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryCommandNode_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryCommandNode_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryCommandNode_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryCommandNodeState_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryCommandNodeState_MyCommand_Source",
							  	"type": "Edm.Self.HistoryCommandNodeState",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryCommandNodeState_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryCommandNodeState_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryCommandNodeState_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryCommandNodeState_UnitNode",
						  	"end": [
							  {
							  	"role": "HistoryCommandNodeState_UnitNode_Source",
							  	"type": "Edm.Self.HistoryCommandNodeState",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryCommandNodeState_UnitNode_Target",
							  	"type": "Edm.Self.HistoryCommandNode",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryCommandNodeState_UnitNode_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryCommandNodeState_UnitNode_Source",
						  			"propertyRef": {
						  				"name": "UnitNodeId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryCommandNode_Unit",
						  	"end": [
							  {
							  	"role": "HistoryCommandNode_Unit_Source",
							  	"type": "Edm.Self.HistoryCommandNode",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryCommandNode_Unit_Target",
							  	"type": "Edm.Self.HistoryUnit",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryCommandNode_Unit_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryCommandNode_Unit_Source",
						  			"propertyRef": {
						  				"name": "UnitId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryCommandNodeValue_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryCommandNodeValue_MyCommand_Source",
							  	"type": "Edm.Self.HistoryCommandNodeValue",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryCommandNodeValue_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryCommandNodeValue_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryCommandNodeValue_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryCommandNodeValue_UnitNode",
						  	"end": [
							  {
							  	"role": "HistoryCommandNodeValue_UnitNode_Source",
							  	"type": "Edm.Self.HistoryCommandNodeValue",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryCommandNodeValue_UnitNode_Target",
							  	"type": "Edm.Self.HistoryCommandNode",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryCommandNodeValue_UnitNode_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryCommandNodeValue_UnitNode_Source",
						  			"propertyRef": {
						  				"name": "UnitNodeId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryUnitCommand_CommandInstance",
						  	"end": [
							  {
							  	"role": "HistoryUnitCommand_CommandInstance_Source",
							  	"type": "Edm.Self.HistoryUnitCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryUnitCommand_CommandInstance_Target",
							  	"type": "Edm.Self.HistoryCommandInstance",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryUnitCommand_CommandInstance_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryUnitCommand_CommandInstance_Source",
						  			"propertyRef": {
						  				"name": "CommandInstanceId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryUnitCommand_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryUnitCommand_MyCommand_Source",
							  	"type": "Edm.Self.HistoryUnitCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryUnitCommand_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryUnitCommand_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryUnitCommand_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryUnitCommand_Unit",
						  	"end": [
							  {
							  	"role": "HistoryUnitCommand_Unit_Source",
							  	"type": "Edm.Self.HistoryUnitCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryUnitCommand_Unit_Target",
							  	"type": "Edm.Self.HistoryUnit",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryUnitCommand_Unit_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryUnitCommand_Unit_Source",
						  			"propertyRef": {
						  				"name": "UnitId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryDataLogNodeCommand_CommandInstance",
						  	"end": [
							  {
							  	"role": "HistoryDataLogNodeCommand_CommandInstance_Source",
							  	"type": "Edm.Self.HistoryDataLogNodeCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryDataLogNodeCommand_CommandInstance_Target",
							  	"type": "Edm.Self.HistoryCommandInstance",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryDataLogNodeCommand_CommandInstance_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryDataLogNodeCommand_CommandInstance_Source",
						  			"propertyRef": {
						  				"name": "CommandInstanceId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryDataLogNodeCommand_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryDataLogNodeCommand_MyCommand_Source",
							  	"type": "Edm.Self.HistoryDataLogNodeCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryDataLogNodeCommand_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryDataLogNodeCommand_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryDataLogNodeCommand_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryDataLogNodeCommand_UnitNode",
						  	"end": [
							  {
							  	"role": "HistoryDataLogNodeCommand_UnitNode_Source",
							  	"type": "Edm.Self.HistoryDataLogNodeCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryDataLogNodeCommand_UnitNode_Target",
							  	"type": "Edm.Self.HistoryDataLogNode",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryDataLogNodeCommand_UnitNode_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryDataLogNodeCommand_UnitNode_Source",
						  			"propertyRef": {
						  				"name": "UnitNodeId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryDataLogNode_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryDataLogNode_MyCommand_Source",
							  	"type": "Edm.Self.HistoryDataLogNode",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryDataLogNode_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryDataLogNode_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryDataLogNode_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryDataLogNodeState_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryDataLogNodeState_MyCommand_Source",
							  	"type": "Edm.Self.HistoryDataLogNodeState",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryDataLogNodeState_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryDataLogNodeState_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryDataLogNodeState_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryDataLogNodeState_UnitNode",
						  	"end": [
							  {
							  	"role": "HistoryDataLogNodeState_UnitNode_Source",
							  	"type": "Edm.Self.HistoryDataLogNodeState",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryDataLogNodeState_UnitNode_Target",
							  	"type": "Edm.Self.HistoryDataLogNode",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryDataLogNodeState_UnitNode_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryDataLogNodeState_UnitNode_Source",
						  			"propertyRef": {
						  				"name": "UnitNodeId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryDataLogNode_Unit",
						  	"end": [
							  {
							  	"role": "HistoryDataLogNode_Unit_Source",
							  	"type": "Edm.Self.HistoryDataLogNode",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryDataLogNode_Unit_Target",
							  	"type": "Edm.Self.HistoryUnit",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryDataLogNode_Unit_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryDataLogNode_Unit_Source",
						  			"propertyRef": {
						  				"name": "UnitId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryDataLogNodeValue_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryDataLogNodeValue_MyCommand_Source",
							  	"type": "Edm.Self.HistoryDataLogNodeValue",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryDataLogNodeValue_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryDataLogNodeValue_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryDataLogNodeValue_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryDataLogNodeValue_UnitNode",
						  	"end": [
							  {
							  	"role": "HistoryDataLogNodeValue_UnitNode_Source",
							  	"type": "Edm.Self.HistoryDataLogNodeValue",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryDataLogNodeValue_UnitNode_Target",
							  	"type": "Edm.Self.HistoryDataLogNode",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryDataLogNodeValue_UnitNode_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryDataLogNodeValue_UnitNode_Source",
						  			"propertyRef": {
						  				"name": "UnitNodeId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryDeviceDisplay_Device",
						  	"end": [
							  {
							  	"role": "HistoryDeviceDisplay_Device_Source",
							  	"type": "Edm.Self.HistoryDeviceDisplay",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryDeviceDisplay_Device_Target",
							  	"type": "Edm.Self.HistoryDevice",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryDeviceDisplay_Device_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryDeviceDisplay_Device_Source",
						  			"propertyRef": {
						  				"name": "DeviceId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryDeviceDisplay_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryDeviceDisplay_MyCommand_Source",
							  	"type": "Edm.Self.HistoryDeviceDisplay",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryDeviceDisplay_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryDeviceDisplay_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryDeviceDisplay_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryDevice_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryDevice_MyCommand_Source",
							  	"type": "Edm.Self.HistoryDevice",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryDevice_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryDevice_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryDevice_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryAlarmSeverity_Alarms",
						  	"end": [
							  {
							  	"role": "HistoryAlarmSeverity_Alarms_Source",
							  	"type": "Edm.Self.HistoryAlarmSeverity",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  },
							  {
							  	"role": "HistoryAlarmSeverity_Alarms_Target",
							  	"type": "Edm.Self.HistoryAlarm",
							  	"multiplicity": "*"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryAlarmSeverity_Alarms_Source",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryAlarmSeverity_Alarms_Target",
						  			"propertyRef": {
						  				"name": "AlarmSeverityId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryAlarmSeverityCommand_AlarmSeverity",
						  	"end": [
							  {
							  	"role": "HistoryAlarmSeverityCommand_AlarmSeverity_Source",
							  	"type": "Edm.Self.HistoryAlarmSeverityCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryAlarmSeverityCommand_AlarmSeverity_Target",
							  	"type": "Edm.Self.HistoryAlarmSeverity",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryAlarmSeverityCommand_AlarmSeverity_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryAlarmSeverityCommand_AlarmSeverity_Source",
						  			"propertyRef": {
						  				"name": "AlarmSeverityId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryAlarmSeverityCommand_CommandInstance",
						  	"end": [
							  {
							  	"role": "HistoryAlarmSeverityCommand_CommandInstance_Source",
							  	"type": "Edm.Self.HistoryAlarmSeverityCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryAlarmSeverityCommand_CommandInstance_Target",
							  	"type": "Edm.Self.HistoryCommandInstance",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryAlarmSeverityCommand_CommandInstance_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryAlarmSeverityCommand_CommandInstance_Source",
						  			"propertyRef": {
						  				"name": "CommandInstanceId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryAlarmSeverityCommand_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryAlarmSeverityCommand_MyCommand_Source",
							  	"type": "Edm.Self.HistoryAlarmSeverityCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryAlarmSeverityCommand_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryAlarmSeverityCommand_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryAlarmSeverityCommand_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryAlarmSeverity_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryAlarmSeverity_MyCommand_Source",
							  	"type": "Edm.Self.HistoryAlarmSeverity",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryAlarmSeverity_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryAlarmSeverity_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryAlarmSeverity_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryAlarmSeverity_Site",
						  	"end": [
							  {
							  	"role": "HistoryAlarmSeverity_Site_Source",
							  	"type": "Edm.Self.HistoryAlarmSeverity",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryAlarmSeverity_Site_Target",
							  	"type": "Edm.Self.HistorySite",
							  	"multiplicity": "1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryAlarmSeverity_Site_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryAlarmSeverity_Site_Source",
						  			"propertyRef": {
						  				"name": "SiteId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryClearance_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryClearance_MyCommand_Source",
							  	"type": "Edm.Self.HistoryClearance",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryClearance_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryClearance_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryClearance_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryClearance_Site",
						  	"end": [
							  {
							  	"role": "HistoryClearance_Site_Source",
							  	"type": "Edm.Self.HistoryClearance",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryClearance_Site_Target",
							  	"type": "Edm.Self.HistorySite",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryClearance_Site_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryClearance_Site_Source",
						  			"propertyRef": {
						  				"name": "SiteId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistorySiteCommand_CommandInstance",
						  	"end": [
							  {
							  	"role": "HistorySiteCommand_CommandInstance_Source",
							  	"type": "Edm.Self.HistorySiteCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistorySiteCommand_CommandInstance_Target",
							  	"type": "Edm.Self.HistoryCommandInstance",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistorySiteCommand_CommandInstance_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistorySiteCommand_CommandInstance_Source",
						  			"propertyRef": {
						  				"name": "CommandInstanceId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistorySiteCommand_MyCommand",
						  	"end": [
							  {
							  	"role": "HistorySiteCommand_MyCommand_Source",
							  	"type": "Edm.Self.HistorySiteCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistorySiteCommand_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistorySiteCommand_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistorySiteCommand_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistorySiteCommand_Site",
						  	"end": [
							  {
							  	"role": "HistorySiteCommand_Site_Source",
							  	"type": "Edm.Self.HistorySiteCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistorySiteCommand_Site_Target",
							  	"type": "Edm.Self.HistorySite",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistorySiteCommand_Site_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistorySiteCommand_Site_Source",
						  			"propertyRef": {
						  				"name": "SiteId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistorySite_Devices",
						  	"end": [
							  {
							  	"role": "HistorySite_Devices_Source",
							  	"type": "Edm.Self.HistorySite",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  },
							  {
							  	"role": "HistorySite_Devices_Target",
							  	"type": "Edm.Self.HistoryDevice",
							  	"multiplicity": "*"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistorySite_Devices_Source",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistorySite_Devices_Target",
						  			"propertyRef": {
						  				"name": "SiteId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryApplicationCommand_Application",
						  	"end": [
							  {
							  	"role": "HistoryApplicationCommand_Application_Source",
							  	"type": "Edm.Self.HistoryApplicationCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryApplicationCommand_Application_Target",
							  	"type": "Edm.Self.HistoryApplication",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryApplicationCommand_Application_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryApplicationCommand_Application_Source",
						  			"propertyRef": {
						  				"name": "ApplicationId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryApplicationCommand_CommandInstance",
						  	"end": [
							  {
							  	"role": "HistoryApplicationCommand_CommandInstance_Source",
							  	"type": "Edm.Self.HistoryApplicationCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryApplicationCommand_CommandInstance_Target",
							  	"type": "Edm.Self.HistoryCommandInstance",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryApplicationCommand_CommandInstance_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryApplicationCommand_CommandInstance_Source",
						  			"propertyRef": {
						  				"name": "CommandInstanceId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryApplicationCommand_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryApplicationCommand_MyCommand_Source",
							  	"type": "Edm.Self.HistoryApplicationCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryApplicationCommand_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryApplicationCommand_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryApplicationCommand_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryApplication_Enterprises",
						  	"end": [
							  {
							  	"role": "HistoryApplication_Enterprises_Source",
							  	"type": "Edm.Self.HistoryApplication",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  },
							  {
							  	"role": "HistoryApplication_Enterprises_Target",
							  	"type": "Edm.Self.HistoryEnterprise",
							  	"multiplicity": "*"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryApplication_Enterprises_Source",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryApplication_Enterprises_Target",
						  			"propertyRef": {
						  				"name": "ApplicationId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryApplication_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryApplication_MyCommand_Source",
							  	"type": "Edm.Self.HistoryApplication",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryApplication_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryApplication_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryApplication_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryEnterpriseCommand_CommandInstance",
						  	"end": [
							  {
							  	"role": "HistoryEnterpriseCommand_CommandInstance_Source",
							  	"type": "Edm.Self.HistoryEnterpriseCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryEnterpriseCommand_CommandInstance_Target",
							  	"type": "Edm.Self.HistoryCommandInstance",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryEnterpriseCommand_CommandInstance_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryEnterpriseCommand_CommandInstance_Source",
						  			"propertyRef": {
						  				"name": "CommandInstanceId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryEnterpriseCommand_Enterprise",
						  	"end": [
							  {
							  	"role": "HistoryEnterpriseCommand_Enterprise_Source",
							  	"type": "Edm.Self.HistoryEnterpriseCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryEnterpriseCommand_Enterprise_Target",
							  	"type": "Edm.Self.HistoryEnterprise",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryEnterpriseCommand_Enterprise_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryEnterpriseCommand_Enterprise_Source",
						  			"propertyRef": {
						  				"name": "EnterpriseId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryEnterpriseCommand_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryEnterpriseCommand_MyCommand_Source",
							  	"type": "Edm.Self.HistoryEnterpriseCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryEnterpriseCommand_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryEnterpriseCommand_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryEnterpriseCommand_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryEnterprise_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryEnterprise_MyCommand_Source",
							  	"type": "Edm.Self.HistoryEnterprise",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryEnterprise_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryEnterprise_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryEnterprise_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryEnterprise_Sites",
						  	"end": [
							  {
							  	"role": "HistoryEnterprise_Sites_Source",
							  	"type": "Edm.Self.HistoryEnterprise",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  },
							  {
							  	"role": "HistoryEnterprise_Sites_Target",
							  	"type": "Edm.Self.HistorySite",
							  	"multiplicity": "*"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryEnterprise_Sites_Source",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryEnterprise_Sites_Target",
						  			"propertyRef": {
						  				"name": "EnterpriseId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistorySite_MyCommand",
						  	"end": [
							  {
							  	"role": "HistorySite_MyCommand_Source",
							  	"type": "Edm.Self.HistorySite",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistorySite_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistorySite_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistorySite_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistorySite_Zones",
						  	"end": [
							  {
							  	"role": "HistorySite_Zones_Source",
							  	"type": "Edm.Self.HistorySite",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  },
							  {
							  	"role": "HistorySite_Zones_Target",
							  	"type": "Edm.Self.HistoryZone",
							  	"multiplicity": "*"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistorySite_Zones_Source",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistorySite_Zones_Target",
						  			"propertyRef": {
						  				"name": "SiteId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryDeviceInstance_Device",
						  	"end": [
							  {
							  	"role": "HistoryDeviceInstance_Device_Source",
							  	"type": "Edm.Self.HistoryDeviceInstance",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryDeviceInstance_Device_Target",
							  	"type": "Edm.Self.HistoryDevice",
							  	"multiplicity": "1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryDeviceInstance_Device_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryDeviceInstance_Device_Source",
						  			"propertyRef": {
						  				"name": "DeviceId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryDeviceInstanceDisplay_DeviceInstance",
						  	"end": [
							  {
							  	"role": "HistoryDeviceInstanceDisplay_DeviceInstance_Source",
							  	"type": "Edm.Self.HistoryDeviceInstanceDisplay",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryDeviceInstanceDisplay_DeviceInstance_Target",
							  	"type": "Edm.Self.HistoryDeviceInstance",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryDeviceInstanceDisplay_DeviceInstance_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryDeviceInstanceDisplay_DeviceInstance_Source",
						  			"propertyRef": {
						  				"name": "DeviceInstanceId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryDeviceInstanceDisplay_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryDeviceInstanceDisplay_MyCommand_Source",
							  	"type": "Edm.Self.HistoryDeviceInstanceDisplay",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryDeviceInstanceDisplay_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryDeviceInstanceDisplay_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryDeviceInstanceDisplay_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryDeviceInstanceTag_DeviceInstance",
						  	"end": [
							  {
							  	"role": "HistoryDeviceInstanceTag_DeviceInstance_Source",
							  	"type": "Edm.Self.HistoryDeviceInstanceTag",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryDeviceInstanceTag_DeviceInstance_Target",
							  	"type": "Edm.Self.HistoryDeviceInstance",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryDeviceInstanceTag_DeviceInstance_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryDeviceInstanceTag_DeviceInstance_Source",
						  			"propertyRef": {
						  				"name": "DeviceInstanceId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryDeviceInstanceTag_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryDeviceInstanceTag_MyCommand_Source",
							  	"type": "Edm.Self.HistoryDeviceInstanceTag",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryDeviceInstanceTag_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryDeviceInstanceTag_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryDeviceInstanceTag_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryDeviceInstance_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryDeviceInstance_MyCommand_Source",
							  	"type": "Edm.Self.HistoryDeviceInstance",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryDeviceInstance_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryDeviceInstance_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryDeviceInstance_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryDeviceInstance_Unit",
						  	"end": [
							  {
							  	"role": "HistoryDeviceInstance_Unit_Source",
							  	"type": "Edm.Self.HistoryDeviceInstance",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryDeviceInstance_Unit_Target",
							  	"type": "Edm.Self.HistoryUnit",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryDeviceInstance_Unit_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryDeviceInstance_Unit_Source",
						  			"propertyRef": {
						  				"name": "UnitId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryDoubleParameterNodeCommand_CommandInstance",
						  	"end": [
							  {
							  	"role": "HistoryDoubleParameterNodeCommand_CommandInstance_Source",
							  	"type": "Edm.Self.HistoryDoubleParameterNodeCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryDoubleParameterNodeCommand_CommandInstance_Target",
							  	"type": "Edm.Self.HistoryCommandInstance",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryDoubleParameterNodeCommand_CommandInstance_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryDoubleParameterNodeCommand_CommandInstance_Source",
						  			"propertyRef": {
						  				"name": "CommandInstanceId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryDoubleParameterNodeCommand_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryDoubleParameterNodeCommand_MyCommand_Source",
							  	"type": "Edm.Self.HistoryDoubleParameterNodeCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryDoubleParameterNodeCommand_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryDoubleParameterNodeCommand_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryDoubleParameterNodeCommand_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryDoubleParameterNodeCommand_UnitNode",
						  	"end": [
							  {
							  	"role": "HistoryDoubleParameterNodeCommand_UnitNode_Source",
							  	"type": "Edm.Self.HistoryDoubleParameterNodeCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryDoubleParameterNodeCommand_UnitNode_Target",
							  	"type": "Edm.Self.HistoryDoubleParameterNode",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryDoubleParameterNodeCommand_UnitNode_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryDoubleParameterNodeCommand_UnitNode_Source",
						  			"propertyRef": {
						  				"name": "UnitNodeId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryDoubleParameterNode_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryDoubleParameterNode_MyCommand_Source",
							  	"type": "Edm.Self.HistoryDoubleParameterNode",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryDoubleParameterNode_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryDoubleParameterNode_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryDoubleParameterNode_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryDoubleParameterNodeState_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryDoubleParameterNodeState_MyCommand_Source",
							  	"type": "Edm.Self.HistoryDoubleParameterNodeState",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryDoubleParameterNodeState_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryDoubleParameterNodeState_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryDoubleParameterNodeState_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryDoubleParameterNodeState_UnitNode",
						  	"end": [
							  {
							  	"role": "HistoryDoubleParameterNodeState_UnitNode_Source",
							  	"type": "Edm.Self.HistoryDoubleParameterNodeState",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryDoubleParameterNodeState_UnitNode_Target",
							  	"type": "Edm.Self.HistoryDoubleParameterNode",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryDoubleParameterNodeState_UnitNode_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryDoubleParameterNodeState_UnitNode_Source",
						  			"propertyRef": {
						  				"name": "UnitNodeId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryDoubleParameterNode_Unit",
						  	"end": [
							  {
							  	"role": "HistoryDoubleParameterNode_Unit_Source",
							  	"type": "Edm.Self.HistoryDoubleParameterNode",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryDoubleParameterNode_Unit_Target",
							  	"type": "Edm.Self.HistoryUnit",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryDoubleParameterNode_Unit_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryDoubleParameterNode_Unit_Source",
						  			"propertyRef": {
						  				"name": "UnitId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryDoubleParameterNodeValue_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryDoubleParameterNodeValue_MyCommand_Source",
							  	"type": "Edm.Self.HistoryDoubleParameterNodeValue",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryDoubleParameterNodeValue_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryDoubleParameterNodeValue_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryDoubleParameterNodeValue_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryDoubleParameterNodeValue_UnitNode",
						  	"end": [
							  {
							  	"role": "HistoryDoubleParameterNodeValue_UnitNode_Source",
							  	"type": "Edm.Self.HistoryDoubleParameterNodeValue",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryDoubleParameterNodeValue_UnitNode_Target",
							  	"type": "Edm.Self.HistoryDoubleParameterNode",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryDoubleParameterNodeValue_UnitNode_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryDoubleParameterNodeValue_UnitNode_Source",
						  			"propertyRef": {
						  				"name": "UnitNodeId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryIntegerParameterNodeCommand_CommandInstance",
						  	"end": [
							  {
							  	"role": "HistoryIntegerParameterNodeCommand_CommandInstance_Source",
							  	"type": "Edm.Self.HistoryIntegerParameterNodeCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryIntegerParameterNodeCommand_CommandInstance_Target",
							  	"type": "Edm.Self.HistoryCommandInstance",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryIntegerParameterNodeCommand_CommandInstance_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryIntegerParameterNodeCommand_CommandInstance_Source",
						  			"propertyRef": {
						  				"name": "CommandInstanceId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryIntegerParameterNodeCommand_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryIntegerParameterNodeCommand_MyCommand_Source",
							  	"type": "Edm.Self.HistoryIntegerParameterNodeCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryIntegerParameterNodeCommand_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryIntegerParameterNodeCommand_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryIntegerParameterNodeCommand_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryIntegerParameterNodeCommand_UnitNode",
						  	"end": [
							  {
							  	"role": "HistoryIntegerParameterNodeCommand_UnitNode_Source",
							  	"type": "Edm.Self.HistoryIntegerParameterNodeCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryIntegerParameterNodeCommand_UnitNode_Target",
							  	"type": "Edm.Self.HistoryIntegerParameterNode",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryIntegerParameterNodeCommand_UnitNode_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryIntegerParameterNodeCommand_UnitNode_Source",
						  			"propertyRef": {
						  				"name": "UnitNodeId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryIntegerParameterNode_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryIntegerParameterNode_MyCommand_Source",
							  	"type": "Edm.Self.HistoryIntegerParameterNode",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryIntegerParameterNode_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryIntegerParameterNode_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryIntegerParameterNode_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryIntegerParameterNodeState_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryIntegerParameterNodeState_MyCommand_Source",
							  	"type": "Edm.Self.HistoryIntegerParameterNodeState",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryIntegerParameterNodeState_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryIntegerParameterNodeState_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryIntegerParameterNodeState_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryIntegerParameterNodeState_UnitNode",
						  	"end": [
							  {
							  	"role": "HistoryIntegerParameterNodeState_UnitNode_Source",
							  	"type": "Edm.Self.HistoryIntegerParameterNodeState",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryIntegerParameterNodeState_UnitNode_Target",
							  	"type": "Edm.Self.HistoryIntegerParameterNode",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryIntegerParameterNodeState_UnitNode_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryIntegerParameterNodeState_UnitNode_Source",
						  			"propertyRef": {
						  				"name": "UnitNodeId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryIntegerParameterNode_Unit",
						  	"end": [
							  {
							  	"role": "HistoryIntegerParameterNode_Unit_Source",
							  	"type": "Edm.Self.HistoryIntegerParameterNode",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryIntegerParameterNode_Unit_Target",
							  	"type": "Edm.Self.HistoryUnit",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryIntegerParameterNode_Unit_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryIntegerParameterNode_Unit_Source",
						  			"propertyRef": {
						  				"name": "UnitId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryIntegerParameterNodeValue_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryIntegerParameterNodeValue_MyCommand_Source",
							  	"type": "Edm.Self.HistoryIntegerParameterNodeValue",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryIntegerParameterNodeValue_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryIntegerParameterNodeValue_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryIntegerParameterNodeValue_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryIntegerParameterNodeValue_UnitNode",
						  	"end": [
							  {
							  	"role": "HistoryIntegerParameterNodeValue_UnitNode_Source",
							  	"type": "Edm.Self.HistoryIntegerParameterNodeValue",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryIntegerParameterNodeValue_UnitNode_Target",
							  	"type": "Edm.Self.HistoryIntegerParameterNode",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryIntegerParameterNodeValue_UnitNode_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryIntegerParameterNodeValue_UnitNode_Source",
						  			"propertyRef": {
						  				"name": "UnitNodeId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryUnitInterface_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryUnitInterface_MyCommand_Source",
							  	"type": "Edm.Self.HistoryUnitInterface",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryUnitInterface_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryUnitInterface_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryUnitInterface_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryUnitInterface_Unit",
						  	"end": [
							  {
							  	"role": "HistoryUnitInterface_Unit_Source",
							  	"type": "Edm.Self.HistoryUnitInterface",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryUnitInterface_Unit_Target",
							  	"type": "Edm.Self.HistoryUnit",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryUnitInterface_Unit_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryUnitInterface_Unit_Source",
						  			"propertyRef": {
						  				"name": "UnitId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryUnit_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryUnit_MyCommand_Source",
							  	"type": "Edm.Self.HistoryUnit",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryUnit_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryUnit_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryUnit_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryNodePageCommand_CommandInstance",
						  	"end": [
							  {
							  	"role": "HistoryNodePageCommand_CommandInstance_Source",
							  	"type": "Edm.Self.HistoryNodePageCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryNodePageCommand_CommandInstance_Target",
							  	"type": "Edm.Self.HistoryCommandInstance",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryNodePageCommand_CommandInstance_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryNodePageCommand_CommandInstance_Source",
						  			"propertyRef": {
						  				"name": "CommandInstanceId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryNodePageCommand_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryNodePageCommand_MyCommand_Source",
							  	"type": "Edm.Self.HistoryNodePageCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryNodePageCommand_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryNodePageCommand_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryNodePageCommand_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryNodePageCommand_NodePage",
						  	"end": [
							  {
							  	"role": "HistoryNodePageCommand_NodePage_Source",
							  	"type": "Edm.Self.HistoryNodePageCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryNodePageCommand_NodePage_Target",
							  	"type": "Edm.Self.HistoryNodePage",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryNodePageCommand_NodePage_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryNodePageCommand_NodePage_Source",
						  			"propertyRef": {
						  				"name": "NodePageId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryNodePage_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryNodePage_MyCommand_Source",
							  	"type": "Edm.Self.HistoryNodePage",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryNodePage_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryNodePage_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryNodePage_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryNodePageItemCommand_CommandInstance",
						  	"end": [
							  {
							  	"role": "HistoryNodePageItemCommand_CommandInstance_Source",
							  	"type": "Edm.Self.HistoryNodePageItemCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryNodePageItemCommand_CommandInstance_Target",
							  	"type": "Edm.Self.HistoryCommandInstance",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryNodePageItemCommand_CommandInstance_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryNodePageItemCommand_CommandInstance_Source",
						  			"propertyRef": {
						  				"name": "CommandInstanceId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryNodePageItemCommand_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryNodePageItemCommand_MyCommand_Source",
							  	"type": "Edm.Self.HistoryNodePageItemCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryNodePageItemCommand_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryNodePageItemCommand_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryNodePageItemCommand_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryNodePageItemCommand_NodePageItem",
						  	"end": [
							  {
							  	"role": "HistoryNodePageItemCommand_NodePageItem_Source",
							  	"type": "Edm.Self.HistoryNodePageItemCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryNodePageItemCommand_NodePageItem_Target",
							  	"type": "Edm.Self.HistoryNodePageItem",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryNodePageItemCommand_NodePageItem_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryNodePageItemCommand_NodePageItem_Source",
						  			"propertyRef": {
						  				"name": "NodePageItemId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryNodePageItem_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryNodePageItem_MyCommand_Source",
							  	"type": "Edm.Self.HistoryNodePageItem",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryNodePageItem_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryNodePageItem_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryNodePageItem_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryNodePageItem_NodePage",
						  	"end": [
							  {
							  	"role": "HistoryNodePageItem_NodePage_Source",
							  	"type": "Edm.Self.HistoryNodePageItem",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryNodePageItem_NodePage_Target",
							  	"type": "Edm.Self.HistoryNodePage",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryNodePageItem_NodePage_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryNodePageItem_NodePage_Source",
						  			"propertyRef": {
						  				"name": "NodePageId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryNodePageItemState_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryNodePageItemState_MyCommand_Source",
							  	"type": "Edm.Self.HistoryNodePageItemState",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryNodePageItemState_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryNodePageItemState_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryNodePageItemState_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryNodePageItemState_NodePageItem",
						  	"end": [
							  {
							  	"role": "HistoryNodePageItemState_NodePageItem_Source",
							  	"type": "Edm.Self.HistoryNodePageItemState",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryNodePageItemState_NodePageItem_Target",
							  	"type": "Edm.Self.HistoryNodePageItem",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryNodePageItemState_NodePageItem_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryNodePageItemState_NodePageItem_Source",
						  			"propertyRef": {
						  				"name": "NodePageItemId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryNodePage_Unit",
						  	"end": [
							  {
							  	"role": "HistoryNodePage_Unit_Source",
							  	"type": "Edm.Self.HistoryNodePage",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryNodePage_Unit_Target",
							  	"type": "Edm.Self.HistoryUnit",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryNodePage_Unit_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryNodePage_Unit_Source",
						  			"propertyRef": {
						  				"name": "UnitId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryUnit_Operations",
						  	"end": [
							  {
							  	"role": "HistoryUnit_Operations_Source",
							  	"type": "Edm.Self.HistoryUnit",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  },
							  {
							  	"role": "HistoryUnit_Operations_Target",
							  	"type": "Edm.Self.HistoryOperation",
							  	"multiplicity": "*"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryUnit_Operations_Source",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryUnit_Operations_Target",
						  			"propertyRef": {
						  				"name": "UnitId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryReportNodeCommand_CommandInstance",
						  	"end": [
							  {
							  	"role": "HistoryReportNodeCommand_CommandInstance_Source",
							  	"type": "Edm.Self.HistoryReportNodeCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryReportNodeCommand_CommandInstance_Target",
							  	"type": "Edm.Self.HistoryCommandInstance",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryReportNodeCommand_CommandInstance_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryReportNodeCommand_CommandInstance_Source",
						  			"propertyRef": {
						  				"name": "CommandInstanceId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryReportNodeCommand_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryReportNodeCommand_MyCommand_Source",
							  	"type": "Edm.Self.HistoryReportNodeCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryReportNodeCommand_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryReportNodeCommand_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryReportNodeCommand_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryReportNodeCommand_UnitNode",
						  	"end": [
							  {
							  	"role": "HistoryReportNodeCommand_UnitNode_Source",
							  	"type": "Edm.Self.HistoryReportNodeCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryReportNodeCommand_UnitNode_Target",
							  	"type": "Edm.Self.HistoryReportNode",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryReportNodeCommand_UnitNode_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryReportNodeCommand_UnitNode_Source",
						  			"propertyRef": {
						  				"name": "UnitNodeId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryReportNode_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryReportNode_MyCommand_Source",
							  	"type": "Edm.Self.HistoryReportNode",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryReportNode_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryReportNode_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryReportNode_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryReportNodeState_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryReportNodeState_MyCommand_Source",
							  	"type": "Edm.Self.HistoryReportNodeState",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryReportNodeState_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryReportNodeState_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryReportNodeState_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryReportNodeState_UnitNode",
						  	"end": [
							  {
							  	"role": "HistoryReportNodeState_UnitNode_Source",
							  	"type": "Edm.Self.HistoryReportNodeState",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryReportNodeState_UnitNode_Target",
							  	"type": "Edm.Self.HistoryReportNode",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryReportNodeState_UnitNode_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryReportNodeState_UnitNode_Source",
						  			"propertyRef": {
						  				"name": "UnitNodeId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryReportNode_Unit",
						  	"end": [
							  {
							  	"role": "HistoryReportNode_Unit_Source",
							  	"type": "Edm.Self.HistoryReportNode",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryReportNode_Unit_Target",
							  	"type": "Edm.Self.HistoryUnit",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryReportNode_Unit_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryReportNode_Unit_Source",
						  			"propertyRef": {
						  				"name": "UnitId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryReportNodeValue_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryReportNodeValue_MyCommand_Source",
							  	"type": "Edm.Self.HistoryReportNodeValue",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryReportNodeValue_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryReportNodeValue_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryReportNodeValue_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryReportNodeValue_UnitNode",
						  	"end": [
							  {
							  	"role": "HistoryReportNodeValue_UnitNode_Source",
							  	"type": "Edm.Self.HistoryReportNodeValue",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryReportNodeValue_UnitNode_Target",
							  	"type": "Edm.Self.HistoryReportNode",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryReportNodeValue_UnitNode_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryReportNodeValue_UnitNode_Source",
						  			"propertyRef": {
						  				"name": "UnitNodeId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryStateNodeCommand_CommandInstance",
						  	"end": [
							  {
							  	"role": "HistoryStateNodeCommand_CommandInstance_Source",
							  	"type": "Edm.Self.HistoryStateNodeCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryStateNodeCommand_CommandInstance_Target",
							  	"type": "Edm.Self.HistoryCommandInstance",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryStateNodeCommand_CommandInstance_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryStateNodeCommand_CommandInstance_Source",
						  			"propertyRef": {
						  				"name": "CommandInstanceId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryStateNodeCommand_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryStateNodeCommand_MyCommand_Source",
							  	"type": "Edm.Self.HistoryStateNodeCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryStateNodeCommand_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryStateNodeCommand_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryStateNodeCommand_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryStateNodeCommand_UnitNode",
						  	"end": [
							  {
							  	"role": "HistoryStateNodeCommand_UnitNode_Source",
							  	"type": "Edm.Self.HistoryStateNodeCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryStateNodeCommand_UnitNode_Target",
							  	"type": "Edm.Self.HistoryStateNode",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryStateNodeCommand_UnitNode_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryStateNodeCommand_UnitNode_Source",
						  			"propertyRef": {
						  				"name": "UnitNodeId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryStateNode_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryStateNode_MyCommand_Source",
							  	"type": "Edm.Self.HistoryStateNode",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryStateNode_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryStateNode_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryStateNode_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryStateNodeState_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryStateNodeState_MyCommand_Source",
							  	"type": "Edm.Self.HistoryStateNodeState",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryStateNodeState_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryStateNodeState_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryStateNodeState_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryStateNodeState_UnitNode",
						  	"end": [
							  {
							  	"role": "HistoryStateNodeState_UnitNode_Source",
							  	"type": "Edm.Self.HistoryStateNodeState",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryStateNodeState_UnitNode_Target",
							  	"type": "Edm.Self.HistoryStateNode",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryStateNodeState_UnitNode_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryStateNodeState_UnitNode_Source",
						  			"propertyRef": {
						  				"name": "UnitNodeId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryStateNode_Unit",
						  	"end": [
							  {
							  	"role": "HistoryStateNode_Unit_Source",
							  	"type": "Edm.Self.HistoryStateNode",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryStateNode_Unit_Target",
							  	"type": "Edm.Self.HistoryUnit",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryStateNode_Unit_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryStateNode_Unit_Source",
						  			"propertyRef": {
						  				"name": "UnitId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryStateNodeValue_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryStateNodeValue_MyCommand_Source",
							  	"type": "Edm.Self.HistoryStateNodeValue",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryStateNodeValue_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryStateNodeValue_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryStateNodeValue_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryStateNodeValue_UnitNode",
						  	"end": [
							  {
							  	"role": "HistoryStateNodeValue_UnitNode_Source",
							  	"type": "Edm.Self.HistoryStateNodeValue",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryStateNodeValue_UnitNode_Target",
							  	"type": "Edm.Self.HistoryStateNode",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryStateNodeValue_UnitNode_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryStateNodeValue_UnitNode_Source",
						  			"propertyRef": {
						  				"name": "UnitNodeId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryUnitState_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryUnitState_MyCommand_Source",
							  	"type": "Edm.Self.HistoryUnitState",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryUnitState_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryUnitState_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryUnitState_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryUnitState_Unit",
						  	"end": [
							  {
							  	"role": "HistoryUnitState_Unit_Source",
							  	"type": "Edm.Self.HistoryUnitState",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryUnitState_Unit_Target",
							  	"type": "Edm.Self.HistoryUnit",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryUnitState_Unit_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryUnitState_Unit_Source",
						  			"propertyRef": {
						  				"name": "UnitId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryStringParameterNodeCommand_CommandInstance",
						  	"end": [
							  {
							  	"role": "HistoryStringParameterNodeCommand_CommandInstance_Source",
							  	"type": "Edm.Self.HistoryStringParameterNodeCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryStringParameterNodeCommand_CommandInstance_Target",
							  	"type": "Edm.Self.HistoryCommandInstance",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryStringParameterNodeCommand_CommandInstance_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryStringParameterNodeCommand_CommandInstance_Source",
						  			"propertyRef": {
						  				"name": "CommandInstanceId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryStringParameterNodeCommand_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryStringParameterNodeCommand_MyCommand_Source",
							  	"type": "Edm.Self.HistoryStringParameterNodeCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryStringParameterNodeCommand_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryStringParameterNodeCommand_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryStringParameterNodeCommand_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryStringParameterNodeCommand_UnitNode",
						  	"end": [
							  {
							  	"role": "HistoryStringParameterNodeCommand_UnitNode_Source",
							  	"type": "Edm.Self.HistoryStringParameterNodeCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryStringParameterNodeCommand_UnitNode_Target",
							  	"type": "Edm.Self.HistoryStringParameterNode",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryStringParameterNodeCommand_UnitNode_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryStringParameterNodeCommand_UnitNode_Source",
						  			"propertyRef": {
						  				"name": "UnitNodeId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryStringParameterNode_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryStringParameterNode_MyCommand_Source",
							  	"type": "Edm.Self.HistoryStringParameterNode",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryStringParameterNode_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryStringParameterNode_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryStringParameterNode_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryStringParameterNodeState_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryStringParameterNodeState_MyCommand_Source",
							  	"type": "Edm.Self.HistoryStringParameterNodeState",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryStringParameterNodeState_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryStringParameterNodeState_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryStringParameterNodeState_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryStringParameterNodeState_UnitNode",
						  	"end": [
							  {
							  	"role": "HistoryStringParameterNodeState_UnitNode_Source",
							  	"type": "Edm.Self.HistoryStringParameterNodeState",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryStringParameterNodeState_UnitNode_Target",
							  	"type": "Edm.Self.HistoryStringParameterNode",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryStringParameterNodeState_UnitNode_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryStringParameterNodeState_UnitNode_Source",
						  			"propertyRef": {
						  				"name": "UnitNodeId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryStringParameterNode_Unit",
						  	"end": [
							  {
							  	"role": "HistoryStringParameterNode_Unit_Source",
							  	"type": "Edm.Self.HistoryStringParameterNode",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryStringParameterNode_Unit_Target",
							  	"type": "Edm.Self.HistoryUnit",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryStringParameterNode_Unit_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryStringParameterNode_Unit_Source",
						  			"propertyRef": {
						  				"name": "UnitId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryStringParameterNodeValue_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryStringParameterNodeValue_MyCommand_Source",
							  	"type": "Edm.Self.HistoryStringParameterNodeValue",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryStringParameterNodeValue_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryStringParameterNodeValue_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryStringParameterNodeValue_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryStringParameterNodeValue_UnitNode",
						  	"end": [
							  {
							  	"role": "HistoryStringParameterNodeValue_UnitNode_Source",
							  	"type": "Edm.Self.HistoryStringParameterNodeValue",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryStringParameterNodeValue_UnitNode_Target",
							  	"type": "Edm.Self.HistoryStringParameterNode",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryStringParameterNodeValue_UnitNode_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryStringParameterNodeValue_UnitNode_Source",
						  			"propertyRef": {
						  				"name": "UnitNodeId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryUnit_Zone",
						  	"end": [
							  {
							  	"role": "HistoryUnit_Zone_Source",
							  	"type": "Edm.Self.HistoryUnit",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryUnit_Zone_Target",
							  	"type": "Edm.Self.HistoryZone",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryUnit_Zone_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryUnit_Zone_Source",
						  			"propertyRef": {
						  				"name": "ZoneId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryBoolParameterState_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryBoolParameterState_MyCommand_Source",
							  	"type": "Edm.Self.HistoryBoolParameterState",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryBoolParameterState_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryBoolParameterState_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryBoolParameterState_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryBoolParameterState_Parameter",
						  	"end": [
							  {
							  	"role": "HistoryBoolParameterState_Parameter_Source",
							  	"type": "Edm.Self.HistoryBoolParameterState",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryBoolParameterState_Parameter_Target",
							  	"type": "Edm.Self.HistoryBoolParameter",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryBoolParameterState_Parameter_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryBoolParameterState_Parameter_Source",
						  			"propertyRef": {
						  				"name": "ParameterId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryBoolParameterValue_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryBoolParameterValue_MyCommand_Source",
							  	"type": "Edm.Self.HistoryBoolParameterValue",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryBoolParameterValue_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryBoolParameterValue_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryBoolParameterValue_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryBoolParameterValue_Parameter",
						  	"end": [
							  {
							  	"role": "HistoryBoolParameterValue_Parameter_Source",
							  	"type": "Edm.Self.HistoryBoolParameterValue",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryBoolParameterValue_Parameter_Target",
							  	"type": "Edm.Self.HistoryBoolParameter",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryBoolParameterValue_Parameter_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryBoolParameterValue_Parameter_Source",
						  			"propertyRef": {
						  				"name": "ParameterId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryBoolStepFormula_Parameter",
						  	"end": [
							  {
							  	"role": "HistoryBoolStepFormula_Parameter_Source",
							  	"type": "Edm.Self.HistoryBoolStepFormula",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryBoolStepFormula_Parameter_Target",
							  	"type": "Edm.Self.HistoryBoolParameter",
							  	"multiplicity": "1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryBoolStepFormula_Parameter_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryBoolStepFormula_Parameter_Source",
						  			"propertyRef": {
						  				"name": "ParameterId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryBoolStepFormulaState_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryBoolStepFormulaState_MyCommand_Source",
							  	"type": "Edm.Self.HistoryBoolStepFormulaState",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryBoolStepFormulaState_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryBoolStepFormulaState_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryBoolStepFormulaState_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryBoolStepFormulaState_StepFormula",
						  	"end": [
							  {
							  	"role": "HistoryBoolStepFormulaState_StepFormula_Source",
							  	"type": "Edm.Self.HistoryBoolStepFormulaState",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryBoolStepFormulaState_StepFormula_Target",
							  	"type": "Edm.Self.HistoryBoolStepFormula",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryBoolStepFormulaState_StepFormula_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryBoolStepFormulaState_StepFormula_Source",
						  			"propertyRef": {
						  				"name": "StepFormulaId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryBoolStepFormula_Step",
						  	"end": [
							  {
							  	"role": "HistoryBoolStepFormula_Step_Source",
							  	"type": "Edm.Self.HistoryBoolStepFormula",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryBoolStepFormula_Step_Target",
							  	"type": "Edm.Self.HistoryStep",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryBoolStepFormula_Step_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryBoolStepFormula_Step_Source",
						  			"propertyRef": {
						  				"name": "StepId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryBoolStepFormulaValue_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryBoolStepFormulaValue_MyCommand_Source",
							  	"type": "Edm.Self.HistoryBoolStepFormulaValue",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryBoolStepFormulaValue_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryBoolStepFormulaValue_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryBoolStepFormulaValue_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryBoolStepFormulaValue_StepFormula",
						  	"end": [
							  {
							  	"role": "HistoryBoolStepFormulaValue_StepFormula_Source",
							  	"type": "Edm.Self.HistoryBoolStepFormulaValue",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryBoolStepFormulaValue_StepFormula_Target",
							  	"type": "Edm.Self.HistoryBoolStepFormula",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryBoolStepFormulaValue_StepFormula_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryBoolStepFormulaValue_StepFormula_Source",
						  			"propertyRef": {
						  				"name": "StepFormulaId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryStepCommand_CommandInstance",
						  	"end": [
							  {
							  	"role": "HistoryStepCommand_CommandInstance_Source",
							  	"type": "Edm.Self.HistoryStepCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryStepCommand_CommandInstance_Target",
							  	"type": "Edm.Self.HistoryCommandInstance",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryStepCommand_CommandInstance_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryStepCommand_CommandInstance_Source",
						  			"propertyRef": {
						  				"name": "CommandInstanceId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryStepCommand_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryStepCommand_MyCommand_Source",
							  	"type": "Edm.Self.HistoryStepCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryStepCommand_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryStepCommand_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryStepCommand_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryStepCommand_Step",
						  	"end": [
							  {
							  	"role": "HistoryStepCommand_Step_Source",
							  	"type": "Edm.Self.HistoryStepCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryStepCommand_Step_Target",
							  	"type": "Edm.Self.HistoryStep",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryStepCommand_Step_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryStepCommand_Step_Source",
						  			"propertyRef": {
						  				"name": "StepId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryStep_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryStep_MyCommand_Source",
							  	"type": "Edm.Self.HistoryStep",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryStep_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryStep_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryStep_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryStep_Operation",
						  	"end": [
							  {
							  	"role": "HistoryStep_Operation_Source",
							  	"type": "Edm.Self.HistoryStep",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryStep_Operation_Target",
							  	"type": "Edm.Self.HistoryOperation",
							  	"multiplicity": "1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryStep_Operation_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryStep_Operation_Source",
						  			"propertyRef": {
						  				"name": "OperationId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryStepState_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryStepState_MyCommand_Source",
							  	"type": "Edm.Self.HistoryStepState",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryStepState_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryStepState_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryStepState_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryStepState_Step",
						  	"end": [
							  {
							  	"role": "HistoryStepState_Step_Source",
							  	"type": "Edm.Self.HistoryStepState",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryStepState_Step_Target",
							  	"type": "Edm.Self.HistoryStep",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryStepState_Step_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryStepState_Step_Source",
						  			"propertyRef": {
						  				"name": "StepId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryStep_UnitProcedure",
						  	"end": [
							  {
							  	"role": "HistoryStep_UnitProcedure_Source",
							  	"type": "Edm.Self.HistoryStep",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryStep_UnitProcedure_Target",
							  	"type": "Edm.Self.HistoryUnitProcedure",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryStep_UnitProcedure_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryStep_UnitProcedure_Source",
						  			"propertyRef": {
						  				"name": "UnitProcedureId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryUnitProcedure_Unit",
						  	"end": [
							  {
							  	"role": "HistoryUnitProcedure_Unit_Source",
							  	"type": "Edm.Self.HistoryUnitProcedure",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryUnitProcedure_Unit_Target",
							  	"type": "Edm.Self.HistoryUnit",
							  	"multiplicity": "1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryUnitProcedure_Unit_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryUnitProcedure_Unit_Source",
						  			"propertyRef": {
						  				"name": "UnitId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryBatch_Zone",
						  	"end": [
							  {
							  	"role": "HistoryBatch_Zone_Source",
							  	"type": "Edm.Self.HistoryBatch",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryBatch_Zone_Target",
							  	"type": "Edm.Self.HistoryZone",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryBatch_Zone_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryBatch_Zone_Source",
						  			"propertyRef": {
						  				"name": "ZoneId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryCommandClearance_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryCommandClearance_MyCommand_Source",
							  	"type": "Edm.Self.HistoryCommandClearance",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryCommandClearance_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryCommandClearance_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryCommandClearance_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryCommandClearance_Zone",
						  	"end": [
							  {
							  	"role": "HistoryCommandClearance_Zone_Source",
							  	"type": "Edm.Self.HistoryCommandClearance",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryCommandClearance_Zone_Target",
							  	"type": "Edm.Self.HistoryZone",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryCommandClearance_Zone_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryCommandClearance_Zone_Source",
						  			"propertyRef": {
						  				"name": "ZoneId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryZoneCommand_CommandInstance",
						  	"end": [
							  {
							  	"role": "HistoryZoneCommand_CommandInstance_Source",
							  	"type": "Edm.Self.HistoryZoneCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryZoneCommand_CommandInstance_Target",
							  	"type": "Edm.Self.HistoryCommandInstance",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryZoneCommand_CommandInstance_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryZoneCommand_CommandInstance_Source",
						  			"propertyRef": {
						  				"name": "CommandInstanceId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryZoneCommand_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryZoneCommand_MyCommand_Source",
							  	"type": "Edm.Self.HistoryZoneCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryZoneCommand_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryZoneCommand_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryZoneCommand_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryZoneCommand_Zone",
						  	"end": [
							  {
							  	"role": "HistoryZoneCommand_Zone_Source",
							  	"type": "Edm.Self.HistoryZoneCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryZoneCommand_Zone_Target",
							  	"type": "Edm.Self.HistoryZone",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryZoneCommand_Zone_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryZoneCommand_Zone_Source",
						  			"propertyRef": {
						  				"name": "ZoneId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryZone_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryZone_MyCommand_Source",
							  	"type": "Edm.Self.HistoryZone",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryZone_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryZone_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryZone_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryZoneClearance_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryZoneClearance_MyCommand_Source",
							  	"type": "Edm.Self.HistoryZoneClearance",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryZoneClearance_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryZoneClearance_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryZoneClearance_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryZoneClearance_Signatures",
						  	"end": [
							  {
							  	"role": "HistoryZoneClearance_Signatures_Source",
							  	"type": "Edm.Self.HistoryZoneClearance",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  },
							  {
							  	"role": "HistoryZoneClearance_Signatures_Target",
							  	"type": "Edm.Self.HistorySignature",
							  	"multiplicity": "*"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryZoneClearance_Signatures_Source",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryZoneClearance_Signatures_Target",
						  			"propertyRef": {
						  				"name": "ZoneClearanceId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryZoneClearance_Zone",
						  	"end": [
							  {
							  	"role": "HistoryZoneClearance_Zone_Source",
							  	"type": "Edm.Self.HistoryZoneClearance",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryZoneClearance_Zone_Target",
							  	"type": "Edm.Self.HistoryZone",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryZoneClearance_Zone_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryZoneClearance_Zone_Source",
						  			"propertyRef": {
						  				"name": "ZoneId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryGroup_Zone",
						  	"end": [
							  {
							  	"role": "HistoryGroup_Zone_Source",
							  	"type": "Edm.Self.HistoryGroup",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryGroup_Zone_Target",
							  	"type": "Edm.Self.HistoryZone",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryGroup_Zone_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryGroup_Zone_Source",
						  			"propertyRef": {
						  				"name": "ZoneId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistorySignature_Group",
						  	"end": [
							  {
							  	"role": "HistorySignature_Group_Source",
							  	"type": "Edm.Self.HistorySignature",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistorySignature_Group_Target",
							  	"type": "Edm.Self.HistoryGroup",
							  	"multiplicity": "1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistorySignature_Group_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistorySignature_Group_Source",
						  			"propertyRef": {
						  				"name": "GroupId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistorySignature_MyCommand",
						  	"end": [
							  {
							  	"role": "HistorySignature_MyCommand_Source",
							  	"type": "Edm.Self.HistorySignature",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistorySignature_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistorySignature_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistorySignature_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryCommandInstanceSignature_Signature",
						  	"end": [
							  {
							  	"role": "HistoryCommandInstanceSignature_Signature_Source",
							  	"type": "Edm.Self.HistoryCommandInstanceSignature",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryCommandInstanceSignature_Signature_Target",
							  	"type": "Edm.Self.HistorySignature",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryCommandInstanceSignature_Signature_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryCommandInstanceSignature_Signature_Source",
						  			"propertyRef": {
						  				"name": "SignatureId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryCommandInstanceValue_Command",
						  	"end": [
							  {
							  	"role": "HistoryCommandInstanceValue_Command_Source",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryCommandInstanceValue_Command_Target",
							  	"type": "Edm.Self.HistoryCommandInstance",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryCommandInstanceValue_Command_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryCommandInstanceValue_Command_Source",
						  			"propertyRef": {
						  				"name": "CommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryCommandInstanceValue_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryCommandInstanceValue_MyCommand_Source",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryCommandInstanceValue_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryCommandInstanceValue_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryCommandInstanceValue_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "AlarmOccurrence_MyCommand",
						  	"end": [
							  {
							  	"role": "AlarmOccurrence_MyCommand_Source",
							  	"type": "Edm.Self.AlarmOccurrence",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "AlarmOccurrence_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "AlarmOccurrence_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "AlarmOccurrence_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryAlarm_Commands",
						  	"end": [
							  {
							  	"role": "HistoryAlarm_Commands_Source",
							  	"type": "Edm.Self.HistoryAlarm",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  },
							  {
							  	"role": "HistoryAlarm_Commands_Target",
							  	"type": "Edm.Self.HistoryAlarmCommand",
							  	"multiplicity": "*"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryAlarm_Commands_Source",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryAlarm_Commands_Target",
						  			"propertyRef": {
						  				"name": "AlarmId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryAlarm_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryAlarm_MyCommand_Source",
							  	"type": "Edm.Self.HistoryAlarm",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryAlarm_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryAlarm_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryAlarm_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryAlarmValue_Alarm",
						  	"end": [
							  {
							  	"role": "HistoryAlarmValue_Alarm_Source",
							  	"type": "Edm.Self.HistoryAlarmValue",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryAlarmValue_Alarm_Target",
							  	"type": "Edm.Self.HistoryAlarm",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryAlarmValue_Alarm_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryAlarmValue_Alarm_Source",
						  			"propertyRef": {
						  				"name": "AlarmId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryAlarmValueCommand_AlarmValue",
						  	"end": [
							  {
							  	"role": "HistoryAlarmValueCommand_AlarmValue_Source",
							  	"type": "Edm.Self.HistoryAlarmValueCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryAlarmValueCommand_AlarmValue_Target",
							  	"type": "Edm.Self.HistoryAlarmValue",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryAlarmValueCommand_AlarmValue_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryAlarmValueCommand_AlarmValue_Source",
						  			"propertyRef": {
						  				"name": "AlarmValueId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryAlarmValueCommand_CommandInstance",
						  	"end": [
							  {
							  	"role": "HistoryAlarmValueCommand_CommandInstance_Source",
							  	"type": "Edm.Self.HistoryAlarmValueCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryAlarmValueCommand_CommandInstance_Target",
							  	"type": "Edm.Self.HistoryCommandInstance",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryAlarmValueCommand_CommandInstance_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryAlarmValueCommand_CommandInstance_Source",
						  			"propertyRef": {
						  				"name": "CommandInstanceId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryAlarmValueCommand_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryAlarmValueCommand_MyCommand_Source",
							  	"type": "Edm.Self.HistoryAlarmValueCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryAlarmValueCommand_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryAlarmValueCommand_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryAlarmValueCommand_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryAlarmValue_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryAlarmValue_MyCommand_Source",
							  	"type": "Edm.Self.HistoryAlarmValue",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryAlarmValue_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryAlarmValue_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryAlarmValue_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryAlarmValueValue_AlarmValue",
						  	"end": [
							  {
							  	"role": "HistoryAlarmValueValue_AlarmValue_Source",
							  	"type": "Edm.Self.HistoryAlarmValueValue",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryAlarmValueValue_AlarmValue_Target",
							  	"type": "Edm.Self.HistoryAlarmValue",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryAlarmValueValue_AlarmValue_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryAlarmValueValue_AlarmValue_Source",
						  			"propertyRef": {
						  				"name": "AlarmValueId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryAlarmValueValue_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryAlarmValueValue_MyCommand_Source",
							  	"type": "Edm.Self.HistoryAlarmValueValue",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryAlarmValueValue_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryAlarmValueValue_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryAlarmValueValue_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryAlarmCommand_CommandInstance",
						  	"end": [
							  {
							  	"role": "HistoryAlarmCommand_CommandInstance_Source",
							  	"type": "Edm.Self.HistoryAlarmCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryAlarmCommand_CommandInstance_Target",
							  	"type": "Edm.Self.HistoryCommandInstance",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryAlarmCommand_CommandInstance_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryAlarmCommand_CommandInstance_Source",
						  			"propertyRef": {
						  				"name": "CommandInstanceId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryAlarmCommand_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryAlarmCommand_MyCommand_Source",
							  	"type": "Edm.Self.HistoryAlarmCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryAlarmCommand_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryAlarmCommand_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryAlarmCommand_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryClearanceCommand_Clearance",
						  	"end": [
							  {
							  	"role": "HistoryClearanceCommand_Clearance_Source",
							  	"type": "Edm.Self.HistoryClearanceCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryClearanceCommand_Clearance_Target",
							  	"type": "Edm.Self.HistoryClearance",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryClearanceCommand_Clearance_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryClearanceCommand_Clearance_Source",
						  			"propertyRef": {
						  				"name": "ClearanceId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryClearanceCommand_CommandInstance",
						  	"end": [
							  {
							  	"role": "HistoryClearanceCommand_CommandInstance_Source",
							  	"type": "Edm.Self.HistoryClearanceCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryClearanceCommand_CommandInstance_Target",
							  	"type": "Edm.Self.HistoryCommandInstance",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryClearanceCommand_CommandInstance_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryClearanceCommand_CommandInstance_Source",
						  			"propertyRef": {
						  				"name": "CommandInstanceId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryClearanceCommand_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryClearanceCommand_MyCommand_Source",
							  	"type": "Edm.Self.HistoryClearanceCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryClearanceCommand_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryClearanceCommand_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryClearanceCommand_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryCommandClearanceCommand_CommandClearance",
						  	"end": [
							  {
							  	"role": "HistoryCommandClearanceCommand_CommandClearance_Source",
							  	"type": "Edm.Self.HistoryCommandClearanceCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryCommandClearanceCommand_CommandClearance_Target",
							  	"type": "Edm.Self.HistoryCommandClearance",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryCommandClearanceCommand_CommandClearance_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryCommandClearanceCommand_CommandClearance_Source",
						  			"propertyRef": {
						  				"name": "CommandClearanceId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryCommandClearanceCommand_CommandInstance",
						  	"end": [
							  {
							  	"role": "HistoryCommandClearanceCommand_CommandInstance_Source",
							  	"type": "Edm.Self.HistoryCommandClearanceCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryCommandClearanceCommand_CommandInstance_Target",
							  	"type": "Edm.Self.HistoryCommandInstance",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryCommandClearanceCommand_CommandInstance_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryCommandClearanceCommand_CommandInstance_Source",
						  			"propertyRef": {
						  				"name": "CommandInstanceId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryCommandClearanceCommand_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryCommandClearanceCommand_MyCommand_Source",
							  	"type": "Edm.Self.HistoryCommandClearanceCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryCommandClearanceCommand_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryCommandClearanceCommand_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryCommandClearanceCommand_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryDeviceCommand_CommandInstance",
						  	"end": [
							  {
							  	"role": "HistoryDeviceCommand_CommandInstance_Source",
							  	"type": "Edm.Self.HistoryDeviceCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryDeviceCommand_CommandInstance_Target",
							  	"type": "Edm.Self.HistoryCommandInstance",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryDeviceCommand_CommandInstance_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryDeviceCommand_CommandInstance_Source",
						  			"propertyRef": {
						  				"name": "CommandInstanceId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryDeviceCommand_Device",
						  	"end": [
							  {
							  	"role": "HistoryDeviceCommand_Device_Source",
							  	"type": "Edm.Self.HistoryDeviceCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryDeviceCommand_Device_Target",
							  	"type": "Edm.Self.HistoryDevice",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryDeviceCommand_Device_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryDeviceCommand_Device_Source",
						  			"propertyRef": {
						  				"name": "DeviceId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryDeviceCommand_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryDeviceCommand_MyCommand_Source",
							  	"type": "Edm.Self.HistoryDeviceCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryDeviceCommand_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryDeviceCommand_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryDeviceCommand_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryDeviceDisplayCommand_CommandInstance",
						  	"end": [
							  {
							  	"role": "HistoryDeviceDisplayCommand_CommandInstance_Source",
							  	"type": "Edm.Self.HistoryDeviceDisplayCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryDeviceDisplayCommand_CommandInstance_Target",
							  	"type": "Edm.Self.HistoryCommandInstance",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryDeviceDisplayCommand_CommandInstance_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryDeviceDisplayCommand_CommandInstance_Source",
						  			"propertyRef": {
						  				"name": "CommandInstanceId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryDeviceDisplayCommand_DeviceDisplay",
						  	"end": [
							  {
							  	"role": "HistoryDeviceDisplayCommand_DeviceDisplay_Source",
							  	"type": "Edm.Self.HistoryDeviceDisplayCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryDeviceDisplayCommand_DeviceDisplay_Target",
							  	"type": "Edm.Self.HistoryDeviceDisplay",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryDeviceDisplayCommand_DeviceDisplay_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryDeviceDisplayCommand_DeviceDisplay_Source",
						  			"propertyRef": {
						  				"name": "DeviceDisplayId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryDeviceDisplayCommand_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryDeviceDisplayCommand_MyCommand_Source",
							  	"type": "Edm.Self.HistoryDeviceDisplayCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryDeviceDisplayCommand_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryDeviceDisplayCommand_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryDeviceDisplayCommand_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryDeviceInstanceCommand_CommandInstance",
						  	"end": [
							  {
							  	"role": "HistoryDeviceInstanceCommand_CommandInstance_Source",
							  	"type": "Edm.Self.HistoryDeviceInstanceCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryDeviceInstanceCommand_CommandInstance_Target",
							  	"type": "Edm.Self.HistoryCommandInstance",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryDeviceInstanceCommand_CommandInstance_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryDeviceInstanceCommand_CommandInstance_Source",
						  			"propertyRef": {
						  				"name": "CommandInstanceId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryDeviceInstanceCommand_DeviceInstance",
						  	"end": [
							  {
							  	"role": "HistoryDeviceInstanceCommand_DeviceInstance_Source",
							  	"type": "Edm.Self.HistoryDeviceInstanceCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryDeviceInstanceCommand_DeviceInstance_Target",
							  	"type": "Edm.Self.HistoryDeviceInstance",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryDeviceInstanceCommand_DeviceInstance_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryDeviceInstanceCommand_DeviceInstance_Source",
						  			"propertyRef": {
						  				"name": "DeviceInstanceId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryDeviceInstanceCommand_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryDeviceInstanceCommand_MyCommand_Source",
							  	"type": "Edm.Self.HistoryDeviceInstanceCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryDeviceInstanceCommand_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryDeviceInstanceCommand_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryDeviceInstanceCommand_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryDeviceInstanceDisplayCommand_CommandInstance",
						  	"end": [
							  {
							  	"role": "HistoryDeviceInstanceDisplayCommand_CommandInstance_Source",
							  	"type": "Edm.Self.HistoryDeviceInstanceDisplayCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryDeviceInstanceDisplayCommand_CommandInstance_Target",
							  	"type": "Edm.Self.HistoryCommandInstance",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryDeviceInstanceDisplayCommand_CommandInstance_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryDeviceInstanceDisplayCommand_CommandInstance_Source",
						  			"propertyRef": {
						  				"name": "CommandInstanceId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryDeviceInstanceDisplayCommand_DeviceInstanceDisplay",
						  	"end": [
							  {
							  	"role": "HistoryDeviceInstanceDisplayCommand_DeviceInstanceDisplay_Source",
							  	"type": "Edm.Self.HistoryDeviceInstanceDisplayCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryDeviceInstanceDisplayCommand_DeviceInstanceDisplay_Target",
							  	"type": "Edm.Self.HistoryDeviceInstanceDisplay",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryDeviceInstanceDisplayCommand_DeviceInstanceDisplay_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryDeviceInstanceDisplayCommand_DeviceInstanceDisplay_Source",
						  			"propertyRef": {
						  				"name": "DeviceInstanceDisplayId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryDeviceInstanceDisplayCommand_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryDeviceInstanceDisplayCommand_MyCommand_Source",
							  	"type": "Edm.Self.HistoryDeviceInstanceDisplayCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryDeviceInstanceDisplayCommand_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryDeviceInstanceDisplayCommand_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryDeviceInstanceDisplayCommand_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryDeviceInstanceTagCommand_CommandInstance",
						  	"end": [
							  {
							  	"role": "HistoryDeviceInstanceTagCommand_CommandInstance_Source",
							  	"type": "Edm.Self.HistoryDeviceInstanceTagCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryDeviceInstanceTagCommand_CommandInstance_Target",
							  	"type": "Edm.Self.HistoryCommandInstance",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryDeviceInstanceTagCommand_CommandInstance_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryDeviceInstanceTagCommand_CommandInstance_Source",
						  			"propertyRef": {
						  				"name": "CommandInstanceId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryDeviceInstanceTagCommand_DeviceInstanceTag",
						  	"end": [
							  {
							  	"role": "HistoryDeviceInstanceTagCommand_DeviceInstanceTag_Source",
							  	"type": "Edm.Self.HistoryDeviceInstanceTagCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryDeviceInstanceTagCommand_DeviceInstanceTag_Target",
							  	"type": "Edm.Self.HistoryDeviceInstanceTag",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryDeviceInstanceTagCommand_DeviceInstanceTag_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryDeviceInstanceTagCommand_DeviceInstanceTag_Source",
						  			"propertyRef": {
						  				"name": "DeviceInstanceTagId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryDeviceInstanceTagCommand_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryDeviceInstanceTagCommand_MyCommand_Source",
							  	"type": "Edm.Self.HistoryDeviceInstanceTagCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryDeviceInstanceTagCommand_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryDeviceInstanceTagCommand_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryDeviceInstanceTagCommand_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryGroupCommand_CommandInstance",
						  	"end": [
							  {
							  	"role": "HistoryGroupCommand_CommandInstance_Source",
							  	"type": "Edm.Self.HistoryGroupCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryGroupCommand_CommandInstance_Target",
							  	"type": "Edm.Self.HistoryCommandInstance",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryGroupCommand_CommandInstance_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryGroupCommand_CommandInstance_Source",
						  			"propertyRef": {
						  				"name": "CommandInstanceId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryGroupCommand_Group",
						  	"end": [
							  {
							  	"role": "HistoryGroupCommand_Group_Source",
							  	"type": "Edm.Self.HistoryGroupCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryGroupCommand_Group_Target",
							  	"type": "Edm.Self.HistoryGroup",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryGroupCommand_Group_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryGroupCommand_Group_Source",
						  			"propertyRef": {
						  				"name": "GroupId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryGroupCommand_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryGroupCommand_MyCommand_Source",
							  	"type": "Edm.Self.HistoryGroupCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryGroupCommand_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryGroupCommand_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryGroupCommand_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistorySignatureCommand_CommandInstance",
						  	"end": [
							  {
							  	"role": "HistorySignatureCommand_CommandInstance_Source",
							  	"type": "Edm.Self.HistorySignatureCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistorySignatureCommand_CommandInstance_Target",
							  	"type": "Edm.Self.HistoryCommandInstance",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistorySignatureCommand_CommandInstance_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistorySignatureCommand_CommandInstance_Source",
						  			"propertyRef": {
						  				"name": "CommandInstanceId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistorySignatureCommand_MyCommand",
						  	"end": [
							  {
							  	"role": "HistorySignatureCommand_MyCommand_Source",
							  	"type": "Edm.Self.HistorySignatureCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistorySignatureCommand_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistorySignatureCommand_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistorySignatureCommand_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistorySignatureCommand_Signature",
						  	"end": [
							  {
							  	"role": "HistorySignatureCommand_Signature_Source",
							  	"type": "Edm.Self.HistorySignatureCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistorySignatureCommand_Signature_Target",
							  	"type": "Edm.Self.HistorySignature",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistorySignatureCommand_Signature_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistorySignatureCommand_Signature_Source",
						  			"propertyRef": {
						  				"name": "SignatureId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryZoneClearanceCommand_CommandInstance",
						  	"end": [
							  {
							  	"role": "HistoryZoneClearanceCommand_CommandInstance_Source",
							  	"type": "Edm.Self.HistoryZoneClearanceCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryZoneClearanceCommand_CommandInstance_Target",
							  	"type": "Edm.Self.HistoryCommandInstance",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryZoneClearanceCommand_CommandInstance_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryZoneClearanceCommand_CommandInstance_Source",
						  			"propertyRef": {
						  				"name": "CommandInstanceId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryZoneClearanceCommand_MyCommand",
						  	"end": [
							  {
							  	"role": "HistoryZoneClearanceCommand_MyCommand_Source",
							  	"type": "Edm.Self.HistoryZoneClearanceCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryZoneClearanceCommand_MyCommand_Target",
							  	"type": "Edm.Self.HistoryCommandInstanceValue",
							  	"multiplicity": "0..1"
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryZoneClearanceCommand_MyCommand_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryZoneClearanceCommand_MyCommand_Source",
						  			"propertyRef": {
						  				"name": "MyCommandId"
						  			}
						  		}
						  	}
						  },
						  {
						  	"name": "HistoryZoneClearanceCommand_ZoneClearance",
						  	"end": [
							  {
							  	"role": "HistoryZoneClearanceCommand_ZoneClearance_Source",
							  	"type": "Edm.Self.HistoryZoneClearanceCommand",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "HistoryZoneClearanceCommand_ZoneClearance_Target",
							  	"type": "Edm.Self.HistoryZoneClearance",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
						  	],
						  	"referentialConstraint": {
						  		"principal": {
						  			"role": "HistoryZoneClearanceCommand_ZoneClearance_Target",
						  			"propertyRef": {
						  				"name": "Id"
						  			}
						  		},
						  		"dependent": {
						  			"role": "HistoryZoneClearanceCommand_ZoneClearance_Source",
						  			"propertyRef": {
						  				"name": "ZoneClearanceId"
						  			}
						  		}
						  	}
						  }
						],
						"entityContainer": {
							"name": "HistoryContext",
							"customannotation:UseClrTypes": "true",
							"entitySet": [
							  {
							  	"name": "AlarmCommands",
							  	"entityType": "Self.HistoryAlarmCommand"
							  },
							  {
							  	"name": "Alarms",
							  	"entityType": "Self.HistoryAlarm"
							  },
							  {
							  	"name": "AlarmOccurrences",
							  	"entityType": "Self.AlarmOccurrence"
							  },
							  {
							  	"name": "CommandInstanceValues",
							  	"entityType": "Self.HistoryCommandInstanceValue"
							  },
							  {
							  	"name": "CommandInstances",
							  	"entityType": "Self.HistoryCommandInstance"
							  },
							  {
							  	"name": "Commands",
							  	"entityType": "Self.HistoryCommand"
							  },
							  {
							  	"name": "CommandCommands",
							  	"entityType": "Self.HistoryCommandCommand"
							  },
							  {
							  	"name": "CommandInstanceSignatures",
							  	"entityType": "Self.HistoryCommandInstanceSignature"
							  },
							  {
							  	"name": "Signatures",
							  	"entityType": "Self.HistorySignature"
							  },
							  {
							  	"name": "Groups",
							  	"entityType": "Self.HistoryGroup"
							  },
							  {
							  	"name": "Zones",
							  	"entityType": "Self.HistoryZone"
							  },
							  {
							  	"name": "Batches",
							  	"entityType": "Self.HistoryBatch"
							  },
							  {
							  	"name": "BatchCommands",
							  	"entityType": "Self.HistoryBatchCommand"
							  },
							  {
							  	"name": "BatchStates",
							  	"entityType": "Self.HistoryBatchState"
							  },
							  {
							  	"name": "UnitProcedures",
							  	"entityType": "Self.HistoryUnitProcedure"
							  },
							  {
							  	"name": "UnitProcedureCommands",
							  	"entityType": "Self.HistoryUnitProcedureCommand"
							  },
							  {
							  	"name": "UnitProcedureStates",
							  	"entityType": "Self.HistoryUnitProcedureState"
							  },
							  {
							  	"name": "Steps",
							  	"entityType": "Self.HistoryStep"
							  },
							  {
							  	"name": "BoolStepFormulae",
							  	"entityType": "Self.HistoryBoolStepFormula"
							  },
							  {
							  	"name": "BoolStepFormulaCommands",
							  	"entityType": "Self.HistoryBoolStepFormulaCommand"
							  },
							  {
							  	"name": "BoolParameters",
							  	"entityType": "Self.HistoryBoolParameter"
							  },
							  {
							  	"name": "BoolParameterCommands",
							  	"entityType": "Self.HistoryBoolParameterCommand"
							  },
							  {
							  	"name": "BoolEnumerations",
							  	"entityType": "Self.HistoryBoolEnumeration"
							  },
							  {
							  	"name": "BoolEnumerationCommands",
							  	"entityType": "Self.HistoryBoolEnumerationCommand"
							  },
							  {
							  	"name": "Operations",
							  	"entityType": "Self.HistoryOperation"
							  },
							  {
							  	"name": "OperationCommands",
							  	"entityType": "Self.HistoryOperationCommand"
							  },
							  {
							  	"name": "DoubleParameters",
							  	"entityType": "Self.HistoryDoubleParameter"
							  },
							  {
							  	"name": "DoubleParameterCommands",
							  	"entityType": "Self.HistoryDoubleParameterCommand"
							  },
							  {
							  	"name": "DoubleParameterStates",
							  	"entityType": "Self.HistoryDoubleParameterState"
							  },
							  {
							  	"name": "DoubleStepFormulae",
							  	"entityType": "Self.HistoryDoubleStepFormula"
							  },
							  {
							  	"name": "DoubleStepFormulaCommands",
							  	"entityType": "Self.HistoryDoubleStepFormulaCommand"
							  },
							  {
							  	"name": "DoubleStepFormulaStates",
							  	"entityType": "Self.HistoryDoubleStepFormulaState"
							  },
							  {
							  	"name": "DoubleStepFormulaValues",
							  	"entityType": "Self.HistoryDoubleStepFormulaValue"
							  },
							  {
							  	"name": "DoubleParameterValues",
							  	"entityType": "Self.HistoryDoubleParameterValue"
							  },
							  {
							  	"name": "IntegerParameters",
							  	"entityType": "Self.HistoryIntegerParameter"
							  },
							  {
							  	"name": "IntegerParameterCommands",
							  	"entityType": "Self.HistoryIntegerParameterCommand"
							  },
							  {
							  	"name": "IntegerEnumerations",
							  	"entityType": "Self.HistoryIntegerEnumeration"
							  },
							  {
							  	"name": "IntegerEnumerationCommands",
							  	"entityType": "Self.HistoryIntegerEnumerationCommand"
							  },
							  {
							  	"name": "IntegerParameterStates",
							  	"entityType": "Self.HistoryIntegerParameterState"
							  },
							  {
							  	"name": "IntegerStepFormulae",
							  	"entityType": "Self.HistoryIntegerStepFormula"
							  },
							  {
							  	"name": "IntegerStepFormulaCommands",
							  	"entityType": "Self.HistoryIntegerStepFormulaCommand"
							  },
							  {
							  	"name": "IntegerStepFormulaStates",
							  	"entityType": "Self.HistoryIntegerStepFormulaState"
							  },
							  {
							  	"name": "IntegerStepFormulaValues",
							  	"entityType": "Self.HistoryIntegerStepFormulaValue"
							  },
							  {
							  	"name": "IntegerParameterValues",
							  	"entityType": "Self.HistoryIntegerParameterValue"
							  },
							  {
							  	"name": "Reports",
							  	"entityType": "Self.HistoryReport"
							  },
							  {
							  	"name": "ReportCommands",
							  	"entityType": "Self.HistoryReportCommand"
							  },
							  {
							  	"name": "ReportStates",
							  	"entityType": "Self.HistoryReportState"
							  },
							  {
							  	"name": "StepReports",
							  	"entityType": "Self.HistoryStepReport"
							  },
							  {
							  	"name": "StepReportCommands",
							  	"entityType": "Self.HistoryStepReportCommand"
							  },
							  {
							  	"name": "StepReportStates",
							  	"entityType": "Self.HistoryStepReportState"
							  },
							  {
							  	"name": "StepReportValues",
							  	"entityType": "Self.HistoryStepReportValue"
							  },
							  {
							  	"name": "ReportValues",
							  	"entityType": "Self.HistoryReportValue"
							  },
							  {
							  	"name": "StringParameters",
							  	"entityType": "Self.HistoryStringParameter"
							  },
							  {
							  	"name": "StringParameterCommands",
							  	"entityType": "Self.HistoryStringParameterCommand"
							  },
							  {
							  	"name": "StringParameterStates",
							  	"entityType": "Self.HistoryStringParameterState"
							  },
							  {
							  	"name": "StringStepFormulae",
							  	"entityType": "Self.HistoryStringStepFormula"
							  },
							  {
							  	"name": "StringStepFormulaCommands",
							  	"entityType": "Self.HistoryStringStepFormulaCommand"
							  },
							  {
							  	"name": "StringStepFormulaStates",
							  	"entityType": "Self.HistoryStringStepFormulaState"
							  },
							  {
							  	"name": "StringStepFormulaValues",
							  	"entityType": "Self.HistoryStringStepFormulaValue"
							  },
							  {
							  	"name": "StringParameterValues",
							  	"entityType": "Self.HistoryStringParameterValue"
							  },
							  {
							  	"name": "Units",
							  	"entityType": "Self.HistoryUnit"
							  },
							  {
							  	"name": "BoolParameterNodes",
							  	"entityType": "Self.HistoryBoolParameterNode"
							  },
							  {
							  	"name": "BoolParameterNodeCommands",
							  	"entityType": "Self.HistoryBoolParameterNodeCommand"
							  },
							  {
							  	"name": "BoolParameterNodeStates",
							  	"entityType": "Self.HistoryBoolParameterNodeState"
							  },
							  {
							  	"name": "BoolParameterNodeValues",
							  	"entityType": "Self.HistoryBoolParameterNodeValue"
							  },
							  {
							  	"name": "CommandNodes",
							  	"entityType": "Self.HistoryCommandNode"
							  },
							  {
							  	"name": "CommandNodeCommands",
							  	"entityType": "Self.HistoryCommandNodeCommand"
							  },
							  {
							  	"name": "CommandNodeStates",
							  	"entityType": "Self.HistoryCommandNodeState"
							  },
							  {
							  	"name": "CommandNodeValues",
							  	"entityType": "Self.HistoryCommandNodeValue"
							  },
							  {
							  	"name": "UnitCommands",
							  	"entityType": "Self.HistoryUnitCommand"
							  },
							  {
							  	"name": "DataLogNodes",
							  	"entityType": "Self.HistoryDataLogNode"
							  },
							  {
							  	"name": "DataLogNodeCommands",
							  	"entityType": "Self.HistoryDataLogNodeCommand"
							  },
							  {
							  	"name": "DataLogNodeStates",
							  	"entityType": "Self.HistoryDataLogNodeState"
							  },
							  {
							  	"name": "DataLogNodeValues",
							  	"entityType": "Self.HistoryDataLogNodeValue"
							  },
							  {
							  	"name": "DeviceInstances",
							  	"entityType": "Self.HistoryDeviceInstance"
							  },
							  {
							  	"name": "Devices",
							  	"entityType": "Self.HistoryDevice"
							  },
							  {
							  	"name": "DeviceDisplays",
							  	"entityType": "Self.HistoryDeviceDisplay"
							  },
							  {
							  	"name": "Sites",
							  	"entityType": "Self.HistorySite"
							  },
							  {
							  	"name": "AlarmSeverities",
							  	"entityType": "Self.HistoryAlarmSeverity"
							  },
							  {
							  	"name": "AlarmSeverityCommands",
							  	"entityType": "Self.HistoryAlarmSeverityCommand"
							  },
							  {
							  	"name": "Clearances",
							  	"entityType": "Self.HistoryClearance"
							  },
							  {
							  	"name": "SiteCommands",
							  	"entityType": "Self.HistorySiteCommand"
							  },
							  {
							  	"name": "Enterprises",
							  	"entityType": "Self.HistoryEnterprise"
							  },
							  {
							  	"name": "Applications",
							  	"entityType": "Self.HistoryApplication"
							  },
							  {
							  	"name": "ApplicationCommands",
							  	"entityType": "Self.HistoryApplicationCommand"
							  },
							  {
							  	"name": "EnterpriseCommands",
							  	"entityType": "Self.HistoryEnterpriseCommand"
							  },
							  {
							  	"name": "DeviceInstanceDisplays",
							  	"entityType": "Self.HistoryDeviceInstanceDisplay"
							  },
							  {
							  	"name": "DeviceInstanceTags",
							  	"entityType": "Self.HistoryDeviceInstanceTag"
							  },
							  {
							  	"name": "DoubleParameterNodes",
							  	"entityType": "Self.HistoryDoubleParameterNode"
							  },
							  {
							  	"name": "DoubleParameterNodeCommands",
							  	"entityType": "Self.HistoryDoubleParameterNodeCommand"
							  },
							  {
							  	"name": "DoubleParameterNodeStates",
							  	"entityType": "Self.HistoryDoubleParameterNodeState"
							  },
							  {
							  	"name": "DoubleParameterNodeValues",
							  	"entityType": "Self.HistoryDoubleParameterNodeValue"
							  },
							  {
							  	"name": "IntegerParameterNodes",
							  	"entityType": "Self.HistoryIntegerParameterNode"
							  },
							  {
							  	"name": "IntegerParameterNodeCommands",
							  	"entityType": "Self.HistoryIntegerParameterNodeCommand"
							  },
							  {
							  	"name": "IntegerParameterNodeStates",
							  	"entityType": "Self.HistoryIntegerParameterNodeState"
							  },
							  {
							  	"name": "IntegerParameterNodeValues",
							  	"entityType": "Self.HistoryIntegerParameterNodeValue"
							  },
							  {
							  	"name": "UnitInterfaces",
							  	"entityType": "Self.HistoryUnitInterface"
							  },
							  {
							  	"name": "NodePages",
							  	"entityType": "Self.HistoryNodePage"
							  },
							  {
							  	"name": "NodePageCommands",
							  	"entityType": "Self.HistoryNodePageCommand"
							  },
							  {
							  	"name": "NodePageItems",
							  	"entityType": "Self.HistoryNodePageItem"
							  },
							  {
							  	"name": "NodePageItemCommands",
							  	"entityType": "Self.HistoryNodePageItemCommand"
							  },
							  {
							  	"name": "NodePageItemStates",
							  	"entityType": "Self.HistoryNodePageItemState"
							  },
							  {
							  	"name": "ReportNodes",
							  	"entityType": "Self.HistoryReportNode"
							  },
							  {
							  	"name": "ReportNodeCommands",
							  	"entityType": "Self.HistoryReportNodeCommand"
							  },
							  {
							  	"name": "ReportNodeStates",
							  	"entityType": "Self.HistoryReportNodeState"
							  },
							  {
							  	"name": "ReportNodeValues",
							  	"entityType": "Self.HistoryReportNodeValue"
							  },
							  {
							  	"name": "StateNodes",
							  	"entityType": "Self.HistoryStateNode"
							  },
							  {
							  	"name": "StateNodeCommands",
							  	"entityType": "Self.HistoryStateNodeCommand"
							  },
							  {
							  	"name": "StateNodeStates",
							  	"entityType": "Self.HistoryStateNodeState"
							  },
							  {
							  	"name": "StateNodeValues",
							  	"entityType": "Self.HistoryStateNodeValue"
							  },
							  {
							  	"name": "UnitStates",
							  	"entityType": "Self.HistoryUnitState"
							  },
							  {
							  	"name": "StringParameterNodes",
							  	"entityType": "Self.HistoryStringParameterNode"
							  },
							  {
							  	"name": "StringParameterNodeCommands",
							  	"entityType": "Self.HistoryStringParameterNodeCommand"
							  },
							  {
							  	"name": "StringParameterNodeStates",
							  	"entityType": "Self.HistoryStringParameterNodeState"
							  },
							  {
							  	"name": "StringParameterNodeValues",
							  	"entityType": "Self.HistoryStringParameterNodeValue"
							  },
							  {
							  	"name": "BoolParameterStates",
							  	"entityType": "Self.HistoryBoolParameterState"
							  },
							  {
							  	"name": "BoolParameterValues",
							  	"entityType": "Self.HistoryBoolParameterValue"
							  },
							  {
							  	"name": "BoolStepFormulaStates",
							  	"entityType": "Self.HistoryBoolStepFormulaState"
							  },
							  {
							  	"name": "BoolStepFormulaValues",
							  	"entityType": "Self.HistoryBoolStepFormulaValue"
							  },
							  {
							  	"name": "StepCommands",
							  	"entityType": "Self.HistoryStepCommand"
							  },
							  {
							  	"name": "StepStates",
							  	"entityType": "Self.HistoryStepState"
							  },
							  {
							  	"name": "CommandClearances",
							  	"entityType": "Self.HistoryCommandClearance"
							  },
							  {
							  	"name": "ZoneCommands",
							  	"entityType": "Self.HistoryZoneCommand"
							  },
							  {
							  	"name": "ZoneClearances",
							  	"entityType": "Self.HistoryZoneClearance"
							  },
							  {
							  	"name": "AlarmValues",
							  	"entityType": "Self.HistoryAlarmValue"
							  },
							  {
							  	"name": "AlarmValueCommands",
							  	"entityType": "Self.HistoryAlarmValueCommand"
							  },
							  {
							  	"name": "AlarmValueValues",
							  	"entityType": "Self.HistoryAlarmValueValue"
							  },
							  {
							  	"name": "ClearanceCommands",
							  	"entityType": "Self.HistoryClearanceCommand"
							  },
							  {
							  	"name": "CommandClearanceCommands",
							  	"entityType": "Self.HistoryCommandClearanceCommand"
							  },
							  {
							  	"name": "DeviceCommands",
							  	"entityType": "Self.HistoryDeviceCommand"
							  },
							  {
							  	"name": "DeviceDisplayCommands",
							  	"entityType": "Self.HistoryDeviceDisplayCommand"
							  },
							  {
							  	"name": "DeviceInstanceCommands",
							  	"entityType": "Self.HistoryDeviceInstanceCommand"
							  },
							  {
							  	"name": "DeviceInstanceDisplayCommands",
							  	"entityType": "Self.HistoryDeviceInstanceDisplayCommand"
							  },
							  {
							  	"name": "DeviceInstanceTagCommands",
							  	"entityType": "Self.HistoryDeviceInstanceTagCommand"
							  },
							  {
							  	"name": "GroupCommands",
							  	"entityType": "Self.HistoryGroupCommand"
							  },
							  {
							  	"name": "SignatureCommands",
							  	"entityType": "Self.HistorySignatureCommand"
							  },
							  {
							  	"name": "ZoneClearanceCommands",
							  	"entityType": "Self.HistoryZoneClearanceCommand"
							  }
							],
							"associationSet": [
							  {
							  	"name": "AlarmOccurrence_Alarm",
							  	"association": "Self.AlarmOccurrence_Alarm",
							  	"end": [
								  {
								  	"role": "AlarmOccurrence_Alarm_Source",
								  	"entitySet": "AlarmOccurrences"
								  },
								  {
								  	"role": "AlarmOccurrence_Alarm_Target",
								  	"entitySet": "Alarms"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryCommandCommand_Command",
							  	"association": "Self.HistoryCommandCommand_Command",
							  	"end": [
								  {
								  	"role": "HistoryCommandCommand_Command_Source",
								  	"entitySet": "CommandCommands"
								  },
								  {
								  	"role": "HistoryCommandCommand_Command_Target",
								  	"entitySet": "Commands"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryCommandCommand_CommandInstance",
							  	"association": "Self.HistoryCommandCommand_CommandInstance",
							  	"end": [
								  {
								  	"role": "HistoryCommandCommand_CommandInstance_Target",
								  	"entitySet": "CommandInstances"
								  },
								  {
								  	"role": "HistoryCommandCommand_CommandInstance_Source",
								  	"entitySet": "CommandCommands"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryCommandCommand_MyCommand",
							  	"association": "Self.HistoryCommandCommand_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryCommandCommand_MyCommand_Source",
								  	"entitySet": "CommandCommands"
								  },
								  {
								  	"role": "HistoryCommandCommand_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryCommand_MyCommand",
							  	"association": "Self.HistoryCommand_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryCommand_MyCommand_Source",
								  	"entitySet": "Commands"
								  },
								  {
								  	"role": "HistoryCommand_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryCommandInstance_Command",
							  	"association": "Self.HistoryCommandInstance_Command",
							  	"end": [
								  {
								  	"role": "HistoryCommandInstance_Command_Source",
								  	"entitySet": "CommandInstances"
								  },
								  {
								  	"role": "HistoryCommandInstance_Command_Target",
								  	"entitySet": "Commands"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryCommandInstance_MyCommand",
							  	"association": "Self.HistoryCommandInstance_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryCommandInstance_MyCommand_Source",
								  	"entitySet": "CommandInstances"
								  },
								  {
								  	"role": "HistoryCommandInstance_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryCommandInstanceSignature_Command",
							  	"association": "Self.HistoryCommandInstanceSignature_Command",
							  	"end": [
								  {
								  	"role": "HistoryCommandInstanceSignature_Command_Source",
								  	"entitySet": "CommandInstanceSignatures"
								  },
								  {
								  	"role": "HistoryCommandInstanceSignature_Command_Target",
								  	"entitySet": "CommandInstances"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryCommandInstanceSignature_MyCommand",
							  	"association": "Self.HistoryCommandInstanceSignature_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryCommandInstanceSignature_MyCommand_Source",
								  	"entitySet": "CommandInstanceSignatures"
								  },
								  {
								  	"role": "HistoryCommandInstanceSignature_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryGroup_MyCommand",
							  	"association": "Self.HistoryGroup_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryGroup_MyCommand_Source",
								  	"entitySet": "Groups"
								  },
								  {
								  	"role": "HistoryGroup_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryBatchCommand_Batch",
							  	"association": "Self.HistoryBatchCommand_Batch",
							  	"end": [
								  {
								  	"role": "HistoryBatchCommand_Batch_Source",
								  	"entitySet": "BatchCommands"
								  },
								  {
								  	"role": "HistoryBatchCommand_Batch_Target",
								  	"entitySet": "Batches"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryBatchCommand_CommandInstance",
							  	"association": "Self.HistoryBatchCommand_CommandInstance",
							  	"end": [
								  {
								  	"role": "HistoryBatchCommand_CommandInstance_Source",
								  	"entitySet": "BatchCommands"
								  },
								  {
								  	"role": "HistoryBatchCommand_CommandInstance_Target",
								  	"entitySet": "CommandInstances"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryBatchCommand_MyCommand",
							  	"association": "Self.HistoryBatchCommand_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryBatchCommand_MyCommand_Source",
								  	"entitySet": "BatchCommands"
								  },
								  {
								  	"role": "HistoryBatchCommand_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryBatch_MyCommand",
							  	"association": "Self.HistoryBatch_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryBatch_MyCommand_Source",
								  	"entitySet": "Batches"
								  },
								  {
								  	"role": "HistoryBatch_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryBatchState_Batch",
							  	"association": "Self.HistoryBatchState_Batch",
							  	"end": [
								  {
								  	"role": "HistoryBatchState_Batch_Source",
								  	"entitySet": "BatchStates"
								  },
								  {
								  	"role": "HistoryBatchState_Batch_Target",
								  	"entitySet": "Batches"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryBatchState_MyCommand",
							  	"association": "Self.HistoryBatchState_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryBatchState_MyCommand_Source",
								  	"entitySet": "BatchStates"
								  },
								  {
								  	"role": "HistoryBatchState_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryUnitProcedure_Batch",
							  	"association": "Self.HistoryUnitProcedure_Batch",
							  	"end": [
								  {
								  	"role": "HistoryUnitProcedure_Batch_Source",
								  	"entitySet": "UnitProcedures"
								  },
								  {
								  	"role": "HistoryUnitProcedure_Batch_Target",
								  	"entitySet": "Batches"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryUnitProcedureCommand_CommandInstance",
							  	"association": "Self.HistoryUnitProcedureCommand_CommandInstance",
							  	"end": [
								  {
								  	"role": "HistoryUnitProcedureCommand_CommandInstance_Source",
								  	"entitySet": "UnitProcedureCommands"
								  },
								  {
								  	"role": "HistoryUnitProcedureCommand_CommandInstance_Target",
								  	"entitySet": "CommandInstances"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryUnitProcedureCommand_MyCommand",
							  	"association": "Self.HistoryUnitProcedureCommand_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryUnitProcedureCommand_MyCommand_Source",
								  	"entitySet": "UnitProcedureCommands"
								  },
								  {
								  	"role": "HistoryUnitProcedureCommand_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryUnitProcedureCommand_UnitProcedure",
							  	"association": "Self.HistoryUnitProcedureCommand_UnitProcedure",
							  	"end": [
								  {
								  	"role": "HistoryUnitProcedureCommand_UnitProcedure_Source",
								  	"entitySet": "UnitProcedureCommands"
								  },
								  {
								  	"role": "HistoryUnitProcedureCommand_UnitProcedure_Target",
								  	"entitySet": "UnitProcedures"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryUnitProcedure_MyCommand",
							  	"association": "Self.HistoryUnitProcedure_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryUnitProcedure_MyCommand_Source",
								  	"entitySet": "UnitProcedures"
								  },
								  {
								  	"role": "HistoryUnitProcedure_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryUnitProcedureState_MyCommand",
							  	"association": "Self.HistoryUnitProcedureState_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryUnitProcedureState_MyCommand_Source",
								  	"entitySet": "UnitProcedureStates"
								  },
								  {
								  	"role": "HistoryUnitProcedureState_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryUnitProcedureState_UnitProcedure",
							  	"association": "Self.HistoryUnitProcedureState_UnitProcedure",
							  	"end": [
								  {
								  	"role": "HistoryUnitProcedureState_UnitProcedure_Source",
								  	"entitySet": "UnitProcedureStates"
								  },
								  {
								  	"role": "HistoryUnitProcedureState_UnitProcedure_Target",
								  	"entitySet": "UnitProcedures"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryBoolStepFormulaCommand_CommandInstance",
							  	"association": "Self.HistoryBoolStepFormulaCommand_CommandInstance",
							  	"end": [
								  {
								  	"role": "HistoryBoolStepFormulaCommand_CommandInstance_Source",
								  	"entitySet": "BoolStepFormulaCommands"
								  },
								  {
								  	"role": "HistoryBoolStepFormulaCommand_CommandInstance_Target",
								  	"entitySet": "CommandInstances"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryBoolStepFormulaCommand_MyCommand",
							  	"association": "Self.HistoryBoolStepFormulaCommand_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryBoolStepFormulaCommand_MyCommand_Source",
								  	"entitySet": "BoolStepFormulaCommands"
								  },
								  {
								  	"role": "HistoryBoolStepFormulaCommand_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryBoolStepFormulaCommand_StepFormula",
							  	"association": "Self.HistoryBoolStepFormulaCommand_StepFormula",
							  	"end": [
								  {
								  	"role": "HistoryBoolStepFormulaCommand_StepFormula_Source",
								  	"entitySet": "BoolStepFormulaCommands"
								  },
								  {
								  	"role": "HistoryBoolStepFormulaCommand_StepFormula_Target",
								  	"entitySet": "BoolStepFormulae"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryBoolStepFormula_MyCommand",
							  	"association": "Self.HistoryBoolStepFormula_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryBoolStepFormula_MyCommand_Source",
								  	"entitySet": "BoolStepFormulae"
								  },
								  {
								  	"role": "HistoryBoolStepFormula_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryBoolParameterCommand_CommandInstance",
							  	"association": "Self.HistoryBoolParameterCommand_CommandInstance",
							  	"end": [
								  {
								  	"role": "HistoryBoolParameterCommand_CommandInstance_Source",
								  	"entitySet": "BoolParameterCommands"
								  },
								  {
								  	"role": "HistoryBoolParameterCommand_CommandInstance_Target",
								  	"entitySet": "CommandInstances"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryBoolParameterCommand_MyCommand",
							  	"association": "Self.HistoryBoolParameterCommand_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryBoolParameterCommand_MyCommand_Source",
								  	"entitySet": "BoolParameterCommands"
								  },
								  {
								  	"role": "HistoryBoolParameterCommand_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryBoolParameterCommand_Parameter",
							  	"association": "Self.HistoryBoolParameterCommand_Parameter",
							  	"end": [
								  {
								  	"role": "HistoryBoolParameterCommand_Parameter_Source",
								  	"entitySet": "BoolParameterCommands"
								  },
								  {
								  	"role": "HistoryBoolParameterCommand_Parameter_Target",
								  	"entitySet": "BoolParameters"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryBoolEnumerationCommand_CommandInstance",
							  	"association": "Self.HistoryBoolEnumerationCommand_CommandInstance",
							  	"end": [
								  {
								  	"role": "HistoryBoolEnumerationCommand_CommandInstance_Source",
								  	"entitySet": "BoolEnumerationCommands"
								  },
								  {
								  	"role": "HistoryBoolEnumerationCommand_CommandInstance_Target",
								  	"entitySet": "CommandInstances"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryBoolEnumerationCommand_Enumeration",
							  	"association": "Self.HistoryBoolEnumerationCommand_Enumeration",
							  	"end": [
								  {
								  	"role": "HistoryBoolEnumerationCommand_Enumeration_Source",
								  	"entitySet": "BoolEnumerationCommands"
								  },
								  {
								  	"role": "HistoryBoolEnumerationCommand_Enumeration_Target",
								  	"entitySet": "BoolEnumerations"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryBoolEnumerationCommand_MyCommand",
							  	"association": "Self.HistoryBoolEnumerationCommand_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryBoolEnumerationCommand_MyCommand_Source",
								  	"entitySet": "BoolEnumerationCommands"
								  },
								  {
								  	"role": "HistoryBoolEnumerationCommand_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryBoolEnumeration_MyCommand",
							  	"association": "Self.HistoryBoolEnumeration_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryBoolEnumeration_MyCommand_Source",
								  	"entitySet": "BoolEnumerations"
								  },
								  {
								  	"role": "HistoryBoolEnumeration_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryBoolEnumeration_Parameter",
							  	"association": "Self.HistoryBoolEnumeration_Parameter",
							  	"end": [
								  {
								  	"role": "HistoryBoolEnumeration_Parameter_Source",
								  	"entitySet": "BoolEnumerations"
								  },
								  {
								  	"role": "HistoryBoolEnumeration_Parameter_Target",
								  	"entitySet": "BoolParameters"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryBoolParameter_MyCommand",
							  	"association": "Self.HistoryBoolParameter_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryBoolParameter_MyCommand_Source",
								  	"entitySet": "BoolParameters"
								  },
								  {
								  	"role": "HistoryBoolParameter_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryOperation_BoolParameters",
							  	"association": "Self.HistoryOperation_BoolParameters",
							  	"end": [
								  {
								  	"role": "HistoryOperation_BoolParameters_Source",
								  	"entitySet": "Operations"
								  },
								  {
								  	"role": "HistoryOperation_BoolParameters_Target",
								  	"entitySet": "BoolParameters"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryOperationCommand_CommandInstance",
							  	"association": "Self.HistoryOperationCommand_CommandInstance",
							  	"end": [
								  {
								  	"role": "HistoryOperationCommand_CommandInstance_Source",
								  	"entitySet": "OperationCommands"
								  },
								  {
								  	"role": "HistoryOperationCommand_CommandInstance_Target",
								  	"entitySet": "CommandInstances"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryOperationCommand_MyCommand",
							  	"association": "Self.HistoryOperationCommand_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryOperationCommand_MyCommand_Source",
								  	"entitySet": "OperationCommands"
								  },
								  {
								  	"role": "HistoryOperationCommand_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryOperationCommand_Operation",
							  	"association": "Self.HistoryOperationCommand_Operation",
							  	"end": [
								  {
								  	"role": "HistoryOperationCommand_Operation_Source",
								  	"entitySet": "OperationCommands"
								  },
								  {
								  	"role": "HistoryOperationCommand_Operation_Target",
								  	"entitySet": "Operations"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryDoubleParameterCommand_CommandInstance",
							  	"association": "Self.HistoryDoubleParameterCommand_CommandInstance",
							  	"end": [
								  {
								  	"role": "HistoryDoubleParameterCommand_CommandInstance_Source",
								  	"entitySet": "DoubleParameterCommands"
								  },
								  {
								  	"role": "HistoryDoubleParameterCommand_CommandInstance_Target",
								  	"entitySet": "CommandInstances"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryDoubleParameterCommand_MyCommand",
							  	"association": "Self.HistoryDoubleParameterCommand_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryDoubleParameterCommand_MyCommand_Source",
								  	"entitySet": "DoubleParameterCommands"
								  },
								  {
								  	"role": "HistoryDoubleParameterCommand_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryDoubleParameterCommand_Parameter",
							  	"association": "Self.HistoryDoubleParameterCommand_Parameter",
							  	"end": [
								  {
								  	"role": "HistoryDoubleParameterCommand_Parameter_Source",
								  	"entitySet": "DoubleParameterCommands"
								  },
								  {
								  	"role": "HistoryDoubleParameterCommand_Parameter_Target",
								  	"entitySet": "DoubleParameters"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryDoubleParameter_MyCommand",
							  	"association": "Self.HistoryDoubleParameter_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryDoubleParameter_MyCommand_Source",
								  	"entitySet": "DoubleParameters"
								  },
								  {
								  	"role": "HistoryDoubleParameter_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryDoubleParameter_Operation",
							  	"association": "Self.HistoryDoubleParameter_Operation",
							  	"end": [
								  {
								  	"role": "HistoryDoubleParameter_Operation_Source",
								  	"entitySet": "DoubleParameters"
								  },
								  {
								  	"role": "HistoryDoubleParameter_Operation_Target",
								  	"entitySet": "Operations"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryDoubleParameterState_MyCommand",
							  	"association": "Self.HistoryDoubleParameterState_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryDoubleParameterState_MyCommand_Source",
								  	"entitySet": "DoubleParameterStates"
								  },
								  {
								  	"role": "HistoryDoubleParameterState_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryDoubleParameterState_Parameter",
							  	"association": "Self.HistoryDoubleParameterState_Parameter",
							  	"end": [
								  {
								  	"role": "HistoryDoubleParameterState_Parameter_Source",
								  	"entitySet": "DoubleParameterStates"
								  },
								  {
								  	"role": "HistoryDoubleParameterState_Parameter_Target",
								  	"entitySet": "DoubleParameters"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryDoubleStepFormulaCommand_CommandInstance",
							  	"association": "Self.HistoryDoubleStepFormulaCommand_CommandInstance",
							  	"end": [
								  {
								  	"role": "HistoryDoubleStepFormulaCommand_CommandInstance_Source",
								  	"entitySet": "DoubleStepFormulaCommands"
								  },
								  {
								  	"role": "HistoryDoubleStepFormulaCommand_CommandInstance_Target",
								  	"entitySet": "CommandInstances"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryDoubleStepFormulaCommand_MyCommand",
							  	"association": "Self.HistoryDoubleStepFormulaCommand_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryDoubleStepFormulaCommand_MyCommand_Source",
								  	"entitySet": "DoubleStepFormulaCommands"
								  },
								  {
								  	"role": "HistoryDoubleStepFormulaCommand_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryDoubleStepFormulaCommand_StepFormula",
							  	"association": "Self.HistoryDoubleStepFormulaCommand_StepFormula",
							  	"end": [
								  {
								  	"role": "HistoryDoubleStepFormulaCommand_StepFormula_Source",
								  	"entitySet": "DoubleStepFormulaCommands"
								  },
								  {
								  	"role": "HistoryDoubleStepFormulaCommand_StepFormula_Target",
								  	"entitySet": "DoubleStepFormulae"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryDoubleStepFormula_MyCommand",
							  	"association": "Self.HistoryDoubleStepFormula_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryDoubleStepFormula_MyCommand_Source",
								  	"entitySet": "DoubleStepFormulae"
								  },
								  {
								  	"role": "HistoryDoubleStepFormula_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryDoubleStepFormula_Parameter",
							  	"association": "Self.HistoryDoubleStepFormula_Parameter",
							  	"end": [
								  {
								  	"role": "HistoryDoubleStepFormula_Parameter_Source",
								  	"entitySet": "DoubleStepFormulae"
								  },
								  {
								  	"role": "HistoryDoubleStepFormula_Parameter_Target",
								  	"entitySet": "DoubleParameters"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryDoubleStepFormulaState_MyCommand",
							  	"association": "Self.HistoryDoubleStepFormulaState_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryDoubleStepFormulaState_MyCommand_Source",
								  	"entitySet": "DoubleStepFormulaStates"
								  },
								  {
								  	"role": "HistoryDoubleStepFormulaState_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryDoubleStepFormulaState_StepFormula",
							  	"association": "Self.HistoryDoubleStepFormulaState_StepFormula",
							  	"end": [
								  {
								  	"role": "HistoryDoubleStepFormulaState_StepFormula_Source",
								  	"entitySet": "DoubleStepFormulaStates"
								  },
								  {
								  	"role": "HistoryDoubleStepFormulaState_StepFormula_Target",
								  	"entitySet": "DoubleStepFormulae"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryDoubleStepFormula_Step",
							  	"association": "Self.HistoryDoubleStepFormula_Step",
							  	"end": [
								  {
								  	"role": "HistoryDoubleStepFormula_Step_Source",
								  	"entitySet": "DoubleStepFormulae"
								  },
								  {
								  	"role": "HistoryDoubleStepFormula_Step_Target",
								  	"entitySet": "Steps"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryDoubleStepFormulaValue_MyCommand",
							  	"association": "Self.HistoryDoubleStepFormulaValue_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryDoubleStepFormulaValue_MyCommand_Source",
								  	"entitySet": "DoubleStepFormulaValues"
								  },
								  {
								  	"role": "HistoryDoubleStepFormulaValue_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryDoubleStepFormulaValue_StepFormula",
							  	"association": "Self.HistoryDoubleStepFormulaValue_StepFormula",
							  	"end": [
								  {
								  	"role": "HistoryDoubleStepFormulaValue_StepFormula_Source",
								  	"entitySet": "DoubleStepFormulaValues"
								  },
								  {
								  	"role": "HistoryDoubleStepFormulaValue_StepFormula_Target",
								  	"entitySet": "DoubleStepFormulae"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryDoubleParameterValue_MyCommand",
							  	"association": "Self.HistoryDoubleParameterValue_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryDoubleParameterValue_MyCommand_Source",
								  	"entitySet": "DoubleParameterValues"
								  },
								  {
								  	"role": "HistoryDoubleParameterValue_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryDoubleParameterValue_Parameter",
							  	"association": "Self.HistoryDoubleParameterValue_Parameter",
							  	"end": [
								  {
								  	"role": "HistoryDoubleParameterValue_Parameter_Source",
								  	"entitySet": "DoubleParameterValues"
								  },
								  {
								  	"role": "HistoryDoubleParameterValue_Parameter_Target",
								  	"entitySet": "DoubleParameters"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryIntegerParameterCommand_CommandInstance",
							  	"association": "Self.HistoryIntegerParameterCommand_CommandInstance",
							  	"end": [
								  {
								  	"role": "HistoryIntegerParameterCommand_CommandInstance_Source",
								  	"entitySet": "IntegerParameterCommands"
								  },
								  {
								  	"role": "HistoryIntegerParameterCommand_CommandInstance_Target",
								  	"entitySet": "CommandInstances"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryIntegerParameterCommand_MyCommand",
							  	"association": "Self.HistoryIntegerParameterCommand_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryIntegerParameterCommand_MyCommand_Source",
								  	"entitySet": "IntegerParameterCommands"
								  },
								  {
								  	"role": "HistoryIntegerParameterCommand_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryIntegerParameterCommand_Parameter",
							  	"association": "Self.HistoryIntegerParameterCommand_Parameter",
							  	"end": [
								  {
								  	"role": "HistoryIntegerParameterCommand_Parameter_Source",
								  	"entitySet": "IntegerParameterCommands"
								  },
								  {
								  	"role": "HistoryIntegerParameterCommand_Parameter_Target",
								  	"entitySet": "IntegerParameters"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryIntegerEnumerationCommand_CommandInstance",
							  	"association": "Self.HistoryIntegerEnumerationCommand_CommandInstance",
							  	"end": [
								  {
								  	"role": "HistoryIntegerEnumerationCommand_CommandInstance_Source",
								  	"entitySet": "IntegerEnumerationCommands"
								  },
								  {
								  	"role": "HistoryIntegerEnumerationCommand_CommandInstance_Target",
								  	"entitySet": "CommandInstances"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryIntegerEnumerationCommand_Enumeration",
							  	"association": "Self.HistoryIntegerEnumerationCommand_Enumeration",
							  	"end": [
								  {
								  	"role": "HistoryIntegerEnumerationCommand_Enumeration_Source",
								  	"entitySet": "IntegerEnumerationCommands"
								  },
								  {
								  	"role": "HistoryIntegerEnumerationCommand_Enumeration_Target",
								  	"entitySet": "IntegerEnumerations"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryIntegerEnumerationCommand_MyCommand",
							  	"association": "Self.HistoryIntegerEnumerationCommand_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryIntegerEnumerationCommand_MyCommand_Source",
								  	"entitySet": "IntegerEnumerationCommands"
								  },
								  {
								  	"role": "HistoryIntegerEnumerationCommand_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryIntegerEnumeration_MyCommand",
							  	"association": "Self.HistoryIntegerEnumeration_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryIntegerEnumeration_MyCommand_Source",
								  	"entitySet": "IntegerEnumerations"
								  },
								  {
								  	"role": "HistoryIntegerEnumeration_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryIntegerEnumeration_Parameter",
							  	"association": "Self.HistoryIntegerEnumeration_Parameter",
							  	"end": [
								  {
								  	"role": "HistoryIntegerEnumeration_Parameter_Source",
								  	"entitySet": "IntegerEnumerations"
								  },
								  {
								  	"role": "HistoryIntegerEnumeration_Parameter_Target",
								  	"entitySet": "IntegerParameters"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryIntegerParameter_MyCommand",
							  	"association": "Self.HistoryIntegerParameter_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryIntegerParameter_MyCommand_Source",
								  	"entitySet": "IntegerParameters"
								  },
								  {
								  	"role": "HistoryIntegerParameter_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryIntegerParameter_Operation",
							  	"association": "Self.HistoryIntegerParameter_Operation",
							  	"end": [
								  {
								  	"role": "HistoryIntegerParameter_Operation_Source",
								  	"entitySet": "IntegerParameters"
								  },
								  {
								  	"role": "HistoryIntegerParameter_Operation_Target",
								  	"entitySet": "Operations"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryIntegerParameterState_MyCommand",
							  	"association": "Self.HistoryIntegerParameterState_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryIntegerParameterState_MyCommand_Source",
								  	"entitySet": "IntegerParameterStates"
								  },
								  {
								  	"role": "HistoryIntegerParameterState_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryIntegerParameterState_Parameter",
							  	"association": "Self.HistoryIntegerParameterState_Parameter",
							  	"end": [
								  {
								  	"role": "HistoryIntegerParameterState_Parameter_Source",
								  	"entitySet": "IntegerParameterStates"
								  },
								  {
								  	"role": "HistoryIntegerParameterState_Parameter_Target",
								  	"entitySet": "IntegerParameters"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryIntegerStepFormulaCommand_CommandInstance",
							  	"association": "Self.HistoryIntegerStepFormulaCommand_CommandInstance",
							  	"end": [
								  {
								  	"role": "HistoryIntegerStepFormulaCommand_CommandInstance_Source",
								  	"entitySet": "IntegerStepFormulaCommands"
								  },
								  {
								  	"role": "HistoryIntegerStepFormulaCommand_CommandInstance_Target",
								  	"entitySet": "CommandInstances"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryIntegerStepFormulaCommand_MyCommand",
							  	"association": "Self.HistoryIntegerStepFormulaCommand_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryIntegerStepFormulaCommand_MyCommand_Source",
								  	"entitySet": "IntegerStepFormulaCommands"
								  },
								  {
								  	"role": "HistoryIntegerStepFormulaCommand_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryIntegerStepFormulaCommand_StepFormula",
							  	"association": "Self.HistoryIntegerStepFormulaCommand_StepFormula",
							  	"end": [
								  {
								  	"role": "HistoryIntegerStepFormulaCommand_StepFormula_Source",
								  	"entitySet": "IntegerStepFormulaCommands"
								  },
								  {
								  	"role": "HistoryIntegerStepFormulaCommand_StepFormula_Target",
								  	"entitySet": "IntegerStepFormulae"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryIntegerStepFormula_MyCommand",
							  	"association": "Self.HistoryIntegerStepFormula_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryIntegerStepFormula_MyCommand_Source",
								  	"entitySet": "IntegerStepFormulae"
								  },
								  {
								  	"role": "HistoryIntegerStepFormula_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryIntegerStepFormula_Parameter",
							  	"association": "Self.HistoryIntegerStepFormula_Parameter",
							  	"end": [
								  {
								  	"role": "HistoryIntegerStepFormula_Parameter_Source",
								  	"entitySet": "IntegerStepFormulae"
								  },
								  {
								  	"role": "HistoryIntegerStepFormula_Parameter_Target",
								  	"entitySet": "IntegerParameters"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryIntegerStepFormulaState_MyCommand",
							  	"association": "Self.HistoryIntegerStepFormulaState_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryIntegerStepFormulaState_MyCommand_Source",
								  	"entitySet": "IntegerStepFormulaStates"
								  },
								  {
								  	"role": "HistoryIntegerStepFormulaState_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryIntegerStepFormulaState_StepFormula",
							  	"association": "Self.HistoryIntegerStepFormulaState_StepFormula",
							  	"end": [
								  {
								  	"role": "HistoryIntegerStepFormulaState_StepFormula_Source",
								  	"entitySet": "IntegerStepFormulaStates"
								  },
								  {
								  	"role": "HistoryIntegerStepFormulaState_StepFormula_Target",
								  	"entitySet": "IntegerStepFormulae"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryIntegerStepFormula_Step",
							  	"association": "Self.HistoryIntegerStepFormula_Step",
							  	"end": [
								  {
								  	"role": "HistoryIntegerStepFormula_Step_Source",
								  	"entitySet": "IntegerStepFormulae"
								  },
								  {
								  	"role": "HistoryIntegerStepFormula_Step_Target",
								  	"entitySet": "Steps"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryIntegerStepFormulaValue_MyCommand",
							  	"association": "Self.HistoryIntegerStepFormulaValue_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryIntegerStepFormulaValue_MyCommand_Source",
								  	"entitySet": "IntegerStepFormulaValues"
								  },
								  {
								  	"role": "HistoryIntegerStepFormulaValue_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryIntegerStepFormulaValue_StepFormula",
							  	"association": "Self.HistoryIntegerStepFormulaValue_StepFormula",
							  	"end": [
								  {
								  	"role": "HistoryIntegerStepFormulaValue_StepFormula_Source",
								  	"entitySet": "IntegerStepFormulaValues"
								  },
								  {
								  	"role": "HistoryIntegerStepFormulaValue_StepFormula_Target",
								  	"entitySet": "IntegerStepFormulae"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryIntegerParameterValue_MyCommand",
							  	"association": "Self.HistoryIntegerParameterValue_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryIntegerParameterValue_MyCommand_Source",
								  	"entitySet": "IntegerParameterValues"
								  },
								  {
								  	"role": "HistoryIntegerParameterValue_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryIntegerParameterValue_Parameter",
							  	"association": "Self.HistoryIntegerParameterValue_Parameter",
							  	"end": [
								  {
								  	"role": "HistoryIntegerParameterValue_Parameter_Source",
								  	"entitySet": "IntegerParameterValues"
								  },
								  {
								  	"role": "HistoryIntegerParameterValue_Parameter_Target",
								  	"entitySet": "IntegerParameters"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryOperation_MyCommand",
							  	"association": "Self.HistoryOperation_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryOperation_MyCommand_Source",
								  	"entitySet": "Operations"
								  },
								  {
								  	"role": "HistoryOperation_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryReportCommand_CommandInstance",
							  	"association": "Self.HistoryReportCommand_CommandInstance",
							  	"end": [
								  {
								  	"role": "HistoryReportCommand_CommandInstance_Source",
								  	"entitySet": "ReportCommands"
								  },
								  {
								  	"role": "HistoryReportCommand_CommandInstance_Target",
								  	"entitySet": "CommandInstances"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryReportCommand_MyCommand",
							  	"association": "Self.HistoryReportCommand_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryReportCommand_MyCommand_Source",
								  	"entitySet": "ReportCommands"
								  },
								  {
								  	"role": "HistoryReportCommand_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryReportCommand_Parameter",
							  	"association": "Self.HistoryReportCommand_Parameter",
							  	"end": [
								  {
								  	"role": "HistoryReportCommand_Parameter_Source",
								  	"entitySet": "ReportCommands"
								  },
								  {
								  	"role": "HistoryReportCommand_Parameter_Target",
								  	"entitySet": "Reports"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryReport_MyCommand",
							  	"association": "Self.HistoryReport_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryReport_MyCommand_Source",
								  	"entitySet": "Reports"
								  },
								  {
								  	"role": "HistoryReport_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryReport_Operation",
							  	"association": "Self.HistoryReport_Operation",
							  	"end": [
								  {
								  	"role": "HistoryReport_Operation_Source",
								  	"entitySet": "Reports"
								  },
								  {
								  	"role": "HistoryReport_Operation_Target",
								  	"entitySet": "Operations"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryReportState_MyCommand",
							  	"association": "Self.HistoryReportState_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryReportState_MyCommand_Source",
								  	"entitySet": "ReportStates"
								  },
								  {
								  	"role": "HistoryReportState_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryReportState_Parameter",
							  	"association": "Self.HistoryReportState_Parameter",
							  	"end": [
								  {
								  	"role": "HistoryReportState_Parameter_Source",
								  	"entitySet": "ReportStates"
								  },
								  {
								  	"role": "HistoryReportState_Parameter_Target",
								  	"entitySet": "Reports"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryStepReportCommand_CommandInstance",
							  	"association": "Self.HistoryStepReportCommand_CommandInstance",
							  	"end": [
								  {
								  	"role": "HistoryStepReportCommand_CommandInstance_Source",
								  	"entitySet": "StepReportCommands"
								  },
								  {
								  	"role": "HistoryStepReportCommand_CommandInstance_Target",
								  	"entitySet": "CommandInstances"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryStepReportCommand_MyCommand",
							  	"association": "Self.HistoryStepReportCommand_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryStepReportCommand_MyCommand_Source",
								  	"entitySet": "StepReportCommands"
								  },
								  {
								  	"role": "HistoryStepReportCommand_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryStepReportCommand_StepFormula",
							  	"association": "Self.HistoryStepReportCommand_StepFormula",
							  	"end": [
								  {
								  	"role": "HistoryStepReportCommand_StepFormula_Source",
								  	"entitySet": "StepReportCommands"
								  },
								  {
								  	"role": "HistoryStepReportCommand_StepFormula_Target",
								  	"entitySet": "StepReports"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryStepReport_MyCommand",
							  	"association": "Self.HistoryStepReport_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryStepReport_MyCommand_Source",
								  	"entitySet": "StepReports"
								  },
								  {
								  	"role": "HistoryStepReport_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryStepReport_Parameter",
							  	"association": "Self.HistoryStepReport_Parameter",
							  	"end": [
								  {
								  	"role": "HistoryStepReport_Parameter_Source",
								  	"entitySet": "StepReports"
								  },
								  {
								  	"role": "HistoryStepReport_Parameter_Target",
								  	"entitySet": "Reports"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryStepReportState_MyCommand",
							  	"association": "Self.HistoryStepReportState_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryStepReportState_MyCommand_Source",
								  	"entitySet": "StepReportStates"
								  },
								  {
								  	"role": "HistoryStepReportState_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryStepReportState_StepFormula",
							  	"association": "Self.HistoryStepReportState_StepFormula",
							  	"end": [
								  {
								  	"role": "HistoryStepReportState_StepFormula_Source",
								  	"entitySet": "StepReportStates"
								  },
								  {
								  	"role": "HistoryStepReportState_StepFormula_Target",
								  	"entitySet": "StepReports"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryStepReport_Step",
							  	"association": "Self.HistoryStepReport_Step",
							  	"end": [
								  {
								  	"role": "HistoryStepReport_Step_Source",
								  	"entitySet": "StepReports"
								  },
								  {
								  	"role": "HistoryStepReport_Step_Target",
								  	"entitySet": "Steps"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryStepReportValue_MyCommand",
							  	"association": "Self.HistoryStepReportValue_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryStepReportValue_MyCommand_Source",
								  	"entitySet": "StepReportValues"
								  },
								  {
								  	"role": "HistoryStepReportValue_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryStepReportValue_StepFormula",
							  	"association": "Self.HistoryStepReportValue_StepFormula",
							  	"end": [
								  {
								  	"role": "HistoryStepReportValue_StepFormula_Source",
								  	"entitySet": "StepReportValues"
								  },
								  {
								  	"role": "HistoryStepReportValue_StepFormula_Target",
								  	"entitySet": "StepReports"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryReportValue_MyCommand",
							  	"association": "Self.HistoryReportValue_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryReportValue_MyCommand_Source",
								  	"entitySet": "ReportValues"
								  },
								  {
								  	"role": "HistoryReportValue_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryReportValue_Parameter",
							  	"association": "Self.HistoryReportValue_Parameter",
							  	"end": [
								  {
								  	"role": "HistoryReportValue_Parameter_Source",
								  	"entitySet": "ReportValues"
								  },
								  {
								  	"role": "HistoryReportValue_Parameter_Target",
								  	"entitySet": "Reports"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryStringParameterCommand_CommandInstance",
							  	"association": "Self.HistoryStringParameterCommand_CommandInstance",
							  	"end": [
								  {
								  	"role": "HistoryStringParameterCommand_CommandInstance_Source",
								  	"entitySet": "StringParameterCommands"
								  },
								  {
								  	"role": "HistoryStringParameterCommand_CommandInstance_Target",
								  	"entitySet": "CommandInstances"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryStringParameterCommand_MyCommand",
							  	"association": "Self.HistoryStringParameterCommand_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryStringParameterCommand_MyCommand_Source",
								  	"entitySet": "StringParameterCommands"
								  },
								  {
								  	"role": "HistoryStringParameterCommand_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryStringParameterCommand_Parameter",
							  	"association": "Self.HistoryStringParameterCommand_Parameter",
							  	"end": [
								  {
								  	"role": "HistoryStringParameterCommand_Parameter_Source",
								  	"entitySet": "StringParameterCommands"
								  },
								  {
								  	"role": "HistoryStringParameterCommand_Parameter_Target",
								  	"entitySet": "StringParameters"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryStringParameter_MyCommand",
							  	"association": "Self.HistoryStringParameter_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryStringParameter_MyCommand_Source",
								  	"entitySet": "StringParameters"
								  },
								  {
								  	"role": "HistoryStringParameter_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryStringParameter_Operation",
							  	"association": "Self.HistoryStringParameter_Operation",
							  	"end": [
								  {
								  	"role": "HistoryStringParameter_Operation_Source",
								  	"entitySet": "StringParameters"
								  },
								  {
								  	"role": "HistoryStringParameter_Operation_Target",
								  	"entitySet": "Operations"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryStringParameterState_MyCommand",
							  	"association": "Self.HistoryStringParameterState_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryStringParameterState_MyCommand_Source",
								  	"entitySet": "StringParameterStates"
								  },
								  {
								  	"role": "HistoryStringParameterState_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryStringParameterState_Parameter",
							  	"association": "Self.HistoryStringParameterState_Parameter",
							  	"end": [
								  {
								  	"role": "HistoryStringParameterState_Parameter_Source",
								  	"entitySet": "StringParameterStates"
								  },
								  {
								  	"role": "HistoryStringParameterState_Parameter_Target",
								  	"entitySet": "StringParameters"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryStringStepFormulaCommand_CommandInstance",
							  	"association": "Self.HistoryStringStepFormulaCommand_CommandInstance",
							  	"end": [
								  {
								  	"role": "HistoryStringStepFormulaCommand_CommandInstance_Source",
								  	"entitySet": "StringStepFormulaCommands"
								  },
								  {
								  	"role": "HistoryStringStepFormulaCommand_CommandInstance_Target",
								  	"entitySet": "CommandInstances"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryStringStepFormulaCommand_MyCommand",
							  	"association": "Self.HistoryStringStepFormulaCommand_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryStringStepFormulaCommand_MyCommand_Source",
								  	"entitySet": "StringStepFormulaCommands"
								  },
								  {
								  	"role": "HistoryStringStepFormulaCommand_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryStringStepFormulaCommand_StepFormula",
							  	"association": "Self.HistoryStringStepFormulaCommand_StepFormula",
							  	"end": [
								  {
								  	"role": "HistoryStringStepFormulaCommand_StepFormula_Source",
								  	"entitySet": "StringStepFormulaCommands"
								  },
								  {
								  	"role": "HistoryStringStepFormulaCommand_StepFormula_Target",
								  	"entitySet": "StringStepFormulae"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryStringStepFormula_MyCommand",
							  	"association": "Self.HistoryStringStepFormula_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryStringStepFormula_MyCommand_Source",
								  	"entitySet": "StringStepFormulae"
								  },
								  {
								  	"role": "HistoryStringStepFormula_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryStringStepFormula_Parameter",
							  	"association": "Self.HistoryStringStepFormula_Parameter",
							  	"end": [
								  {
								  	"role": "HistoryStringStepFormula_Parameter_Source",
								  	"entitySet": "StringStepFormulae"
								  },
								  {
								  	"role": "HistoryStringStepFormula_Parameter_Target",
								  	"entitySet": "StringParameters"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryStringStepFormulaState_MyCommand",
							  	"association": "Self.HistoryStringStepFormulaState_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryStringStepFormulaState_MyCommand_Source",
								  	"entitySet": "StringStepFormulaStates"
								  },
								  {
								  	"role": "HistoryStringStepFormulaState_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryStringStepFormulaState_StepFormula",
							  	"association": "Self.HistoryStringStepFormulaState_StepFormula",
							  	"end": [
								  {
								  	"role": "HistoryStringStepFormulaState_StepFormula_Source",
								  	"entitySet": "StringStepFormulaStates"
								  },
								  {
								  	"role": "HistoryStringStepFormulaState_StepFormula_Target",
								  	"entitySet": "StringStepFormulae"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryStringStepFormula_Step",
							  	"association": "Self.HistoryStringStepFormula_Step",
							  	"end": [
								  {
								  	"role": "HistoryStringStepFormula_Step_Source",
								  	"entitySet": "StringStepFormulae"
								  },
								  {
								  	"role": "HistoryStringStepFormula_Step_Target",
								  	"entitySet": "Steps"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryStringStepFormulaValue_MyCommand",
							  	"association": "Self.HistoryStringStepFormulaValue_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryStringStepFormulaValue_MyCommand_Source",
								  	"entitySet": "StringStepFormulaValues"
								  },
								  {
								  	"role": "HistoryStringStepFormulaValue_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryStringStepFormulaValue_StepFormula",
							  	"association": "Self.HistoryStringStepFormulaValue_StepFormula",
							  	"end": [
								  {
								  	"role": "HistoryStringStepFormulaValue_StepFormula_Source",
								  	"entitySet": "StringStepFormulaValues"
								  },
								  {
								  	"role": "HistoryStringStepFormulaValue_StepFormula_Target",
								  	"entitySet": "StringStepFormulae"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryStringParameterValue_MyCommand",
							  	"association": "Self.HistoryStringParameterValue_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryStringParameterValue_MyCommand_Source",
								  	"entitySet": "StringParameterValues"
								  },
								  {
								  	"role": "HistoryStringParameterValue_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryStringParameterValue_Parameter",
							  	"association": "Self.HistoryStringParameterValue_Parameter",
							  	"end": [
								  {
								  	"role": "HistoryStringParameterValue_Parameter_Source",
								  	"entitySet": "StringParameterValues"
								  },
								  {
								  	"role": "HistoryStringParameterValue_Parameter_Target",
								  	"entitySet": "StringParameters"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryUnit_Alarms",
							  	"association": "Self.HistoryUnit_Alarms",
							  	"end": [
								  {
								  	"role": "HistoryUnit_Alarms_Source",
								  	"entitySet": "Units"
								  },
								  {
								  	"role": "HistoryUnit_Alarms_Target",
								  	"entitySet": "Alarms"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryBoolParameterNodeCommand_CommandInstance",
							  	"association": "Self.HistoryBoolParameterNodeCommand_CommandInstance",
							  	"end": [
								  {
								  	"role": "HistoryBoolParameterNodeCommand_CommandInstance_Source",
								  	"entitySet": "BoolParameterNodeCommands"
								  },
								  {
								  	"role": "HistoryBoolParameterNodeCommand_CommandInstance_Target",
								  	"entitySet": "CommandInstances"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryBoolParameterNodeCommand_MyCommand",
							  	"association": "Self.HistoryBoolParameterNodeCommand_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryBoolParameterNodeCommand_MyCommand_Source",
								  	"entitySet": "BoolParameterNodeCommands"
								  },
								  {
								  	"role": "HistoryBoolParameterNodeCommand_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryBoolParameterNodeCommand_UnitNode",
							  	"association": "Self.HistoryBoolParameterNodeCommand_UnitNode",
							  	"end": [
								  {
								  	"role": "HistoryBoolParameterNodeCommand_UnitNode_Source",
								  	"entitySet": "BoolParameterNodeCommands"
								  },
								  {
								  	"role": "HistoryBoolParameterNodeCommand_UnitNode_Target",
								  	"entitySet": "BoolParameterNodes"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryBoolParameterNode_MyCommand",
							  	"association": "Self.HistoryBoolParameterNode_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryBoolParameterNode_MyCommand_Source",
								  	"entitySet": "BoolParameterNodes"
								  },
								  {
								  	"role": "HistoryBoolParameterNode_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryBoolParameterNodeState_MyCommand",
							  	"association": "Self.HistoryBoolParameterNodeState_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryBoolParameterNodeState_MyCommand_Source",
								  	"entitySet": "BoolParameterNodeStates"
								  },
								  {
								  	"role": "HistoryBoolParameterNodeState_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryBoolParameterNodeState_UnitNode",
							  	"association": "Self.HistoryBoolParameterNodeState_UnitNode",
							  	"end": [
								  {
								  	"role": "HistoryBoolParameterNodeState_UnitNode_Source",
								  	"entitySet": "BoolParameterNodeStates"
								  },
								  {
								  	"role": "HistoryBoolParameterNodeState_UnitNode_Target",
								  	"entitySet": "BoolParameterNodes"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryBoolParameterNode_Unit",
							  	"association": "Self.HistoryBoolParameterNode_Unit",
							  	"end": [
								  {
								  	"role": "HistoryBoolParameterNode_Unit_Source",
								  	"entitySet": "BoolParameterNodes"
								  },
								  {
								  	"role": "HistoryBoolParameterNode_Unit_Target",
								  	"entitySet": "Units"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryBoolParameterNodeValue_MyCommand",
							  	"association": "Self.HistoryBoolParameterNodeValue_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryBoolParameterNodeValue_MyCommand_Source",
								  	"entitySet": "BoolParameterNodeValues"
								  },
								  {
								  	"role": "HistoryBoolParameterNodeValue_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryBoolParameterNodeValue_UnitNode",
							  	"association": "Self.HistoryBoolParameterNodeValue_UnitNode",
							  	"end": [
								  {
								  	"role": "HistoryBoolParameterNodeValue_UnitNode_Source",
								  	"entitySet": "BoolParameterNodeValues"
								  },
								  {
								  	"role": "HistoryBoolParameterNodeValue_UnitNode_Target",
								  	"entitySet": "BoolParameterNodes"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryCommandNodeCommand_CommandInstance",
							  	"association": "Self.HistoryCommandNodeCommand_CommandInstance",
							  	"end": [
								  {
								  	"role": "HistoryCommandNodeCommand_CommandInstance_Source",
								  	"entitySet": "CommandNodeCommands"
								  },
								  {
								  	"role": "HistoryCommandNodeCommand_CommandInstance_Target",
								  	"entitySet": "CommandInstances"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryCommandNodeCommand_MyCommand",
							  	"association": "Self.HistoryCommandNodeCommand_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryCommandNodeCommand_MyCommand_Source",
								  	"entitySet": "CommandNodeCommands"
								  },
								  {
								  	"role": "HistoryCommandNodeCommand_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryCommandNodeCommand_UnitNode",
							  	"association": "Self.HistoryCommandNodeCommand_UnitNode",
							  	"end": [
								  {
								  	"role": "HistoryCommandNodeCommand_UnitNode_Source",
								  	"entitySet": "CommandNodeCommands"
								  },
								  {
								  	"role": "HistoryCommandNodeCommand_UnitNode_Target",
								  	"entitySet": "CommandNodes"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryCommandNode_MyCommand",
							  	"association": "Self.HistoryCommandNode_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryCommandNode_MyCommand_Source",
								  	"entitySet": "CommandNodes"
								  },
								  {
								  	"role": "HistoryCommandNode_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryCommandNodeState_MyCommand",
							  	"association": "Self.HistoryCommandNodeState_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryCommandNodeState_MyCommand_Source",
								  	"entitySet": "CommandNodeStates"
								  },
								  {
								  	"role": "HistoryCommandNodeState_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryCommandNodeState_UnitNode",
							  	"association": "Self.HistoryCommandNodeState_UnitNode",
							  	"end": [
								  {
								  	"role": "HistoryCommandNodeState_UnitNode_Source",
								  	"entitySet": "CommandNodeStates"
								  },
								  {
								  	"role": "HistoryCommandNodeState_UnitNode_Target",
								  	"entitySet": "CommandNodes"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryCommandNode_Unit",
							  	"association": "Self.HistoryCommandNode_Unit",
							  	"end": [
								  {
								  	"role": "HistoryCommandNode_Unit_Source",
								  	"entitySet": "CommandNodes"
								  },
								  {
								  	"role": "HistoryCommandNode_Unit_Target",
								  	"entitySet": "Units"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryCommandNodeValue_MyCommand",
							  	"association": "Self.HistoryCommandNodeValue_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryCommandNodeValue_MyCommand_Source",
								  	"entitySet": "CommandNodeValues"
								  },
								  {
								  	"role": "HistoryCommandNodeValue_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryCommandNodeValue_UnitNode",
							  	"association": "Self.HistoryCommandNodeValue_UnitNode",
							  	"end": [
								  {
								  	"role": "HistoryCommandNodeValue_UnitNode_Source",
								  	"entitySet": "CommandNodeValues"
								  },
								  {
								  	"role": "HistoryCommandNodeValue_UnitNode_Target",
								  	"entitySet": "CommandNodes"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryUnitCommand_CommandInstance",
							  	"association": "Self.HistoryUnitCommand_CommandInstance",
							  	"end": [
								  {
								  	"role": "HistoryUnitCommand_CommandInstance_Source",
								  	"entitySet": "UnitCommands"
								  },
								  {
								  	"role": "HistoryUnitCommand_CommandInstance_Target",
								  	"entitySet": "CommandInstances"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryUnitCommand_MyCommand",
							  	"association": "Self.HistoryUnitCommand_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryUnitCommand_MyCommand_Source",
								  	"entitySet": "UnitCommands"
								  },
								  {
								  	"role": "HistoryUnitCommand_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryUnitCommand_Unit",
							  	"association": "Self.HistoryUnitCommand_Unit",
							  	"end": [
								  {
								  	"role": "HistoryUnitCommand_Unit_Source",
								  	"entitySet": "UnitCommands"
								  },
								  {
								  	"role": "HistoryUnitCommand_Unit_Target",
								  	"entitySet": "Units"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryDataLogNodeCommand_CommandInstance",
							  	"association": "Self.HistoryDataLogNodeCommand_CommandInstance",
							  	"end": [
								  {
								  	"role": "HistoryDataLogNodeCommand_CommandInstance_Source",
								  	"entitySet": "DataLogNodeCommands"
								  },
								  {
								  	"role": "HistoryDataLogNodeCommand_CommandInstance_Target",
								  	"entitySet": "CommandInstances"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryDataLogNodeCommand_MyCommand",
							  	"association": "Self.HistoryDataLogNodeCommand_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryDataLogNodeCommand_MyCommand_Source",
								  	"entitySet": "DataLogNodeCommands"
								  },
								  {
								  	"role": "HistoryDataLogNodeCommand_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryDataLogNodeCommand_UnitNode",
							  	"association": "Self.HistoryDataLogNodeCommand_UnitNode",
							  	"end": [
								  {
								  	"role": "HistoryDataLogNodeCommand_UnitNode_Source",
								  	"entitySet": "DataLogNodeCommands"
								  },
								  {
								  	"role": "HistoryDataLogNodeCommand_UnitNode_Target",
								  	"entitySet": "DataLogNodes"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryDataLogNode_MyCommand",
							  	"association": "Self.HistoryDataLogNode_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryDataLogNode_MyCommand_Source",
								  	"entitySet": "DataLogNodes"
								  },
								  {
								  	"role": "HistoryDataLogNode_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryDataLogNodeState_MyCommand",
							  	"association": "Self.HistoryDataLogNodeState_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryDataLogNodeState_MyCommand_Source",
								  	"entitySet": "DataLogNodeStates"
								  },
								  {
								  	"role": "HistoryDataLogNodeState_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryDataLogNodeState_UnitNode",
							  	"association": "Self.HistoryDataLogNodeState_UnitNode",
							  	"end": [
								  {
								  	"role": "HistoryDataLogNodeState_UnitNode_Source",
								  	"entitySet": "DataLogNodeStates"
								  },
								  {
								  	"role": "HistoryDataLogNodeState_UnitNode_Target",
								  	"entitySet": "DataLogNodes"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryDataLogNode_Unit",
							  	"association": "Self.HistoryDataLogNode_Unit",
							  	"end": [
								  {
								  	"role": "HistoryDataLogNode_Unit_Source",
								  	"entitySet": "DataLogNodes"
								  },
								  {
								  	"role": "HistoryDataLogNode_Unit_Target",
								  	"entitySet": "Units"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryDataLogNodeValue_MyCommand",
							  	"association": "Self.HistoryDataLogNodeValue_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryDataLogNodeValue_MyCommand_Source",
								  	"entitySet": "DataLogNodeValues"
								  },
								  {
								  	"role": "HistoryDataLogNodeValue_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryDataLogNodeValue_UnitNode",
							  	"association": "Self.HistoryDataLogNodeValue_UnitNode",
							  	"end": [
								  {
								  	"role": "HistoryDataLogNodeValue_UnitNode_Source",
								  	"entitySet": "DataLogNodeValues"
								  },
								  {
								  	"role": "HistoryDataLogNodeValue_UnitNode_Target",
								  	"entitySet": "DataLogNodes"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryDeviceDisplay_Device",
							  	"association": "Self.HistoryDeviceDisplay_Device",
							  	"end": [
								  {
								  	"role": "HistoryDeviceDisplay_Device_Source",
								  	"entitySet": "DeviceDisplays"
								  },
								  {
								  	"role": "HistoryDeviceDisplay_Device_Target",
								  	"entitySet": "Devices"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryDeviceDisplay_MyCommand",
							  	"association": "Self.HistoryDeviceDisplay_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryDeviceDisplay_MyCommand_Source",
								  	"entitySet": "DeviceDisplays"
								  },
								  {
								  	"role": "HistoryDeviceDisplay_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryDevice_MyCommand",
							  	"association": "Self.HistoryDevice_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryDevice_MyCommand_Source",
								  	"entitySet": "Devices"
								  },
								  {
								  	"role": "HistoryDevice_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryAlarmSeverity_Alarms",
							  	"association": "Self.HistoryAlarmSeverity_Alarms",
							  	"end": [
								  {
								  	"role": "HistoryAlarmSeverity_Alarms_Source",
								  	"entitySet": "AlarmSeverities"
								  },
								  {
								  	"role": "HistoryAlarmSeverity_Alarms_Target",
								  	"entitySet": "Alarms"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryAlarmSeverityCommand_AlarmSeverity",
							  	"association": "Self.HistoryAlarmSeverityCommand_AlarmSeverity",
							  	"end": [
								  {
								  	"role": "HistoryAlarmSeverityCommand_AlarmSeverity_Source",
								  	"entitySet": "AlarmSeverityCommands"
								  },
								  {
								  	"role": "HistoryAlarmSeverityCommand_AlarmSeverity_Target",
								  	"entitySet": "AlarmSeverities"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryAlarmSeverityCommand_CommandInstance",
							  	"association": "Self.HistoryAlarmSeverityCommand_CommandInstance",
							  	"end": [
								  {
								  	"role": "HistoryAlarmSeverityCommand_CommandInstance_Source",
								  	"entitySet": "AlarmSeverityCommands"
								  },
								  {
								  	"role": "HistoryAlarmSeverityCommand_CommandInstance_Target",
								  	"entitySet": "CommandInstances"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryAlarmSeverityCommand_MyCommand",
							  	"association": "Self.HistoryAlarmSeverityCommand_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryAlarmSeverityCommand_MyCommand_Source",
								  	"entitySet": "AlarmSeverityCommands"
								  },
								  {
								  	"role": "HistoryAlarmSeverityCommand_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryAlarmSeverity_MyCommand",
							  	"association": "Self.HistoryAlarmSeverity_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryAlarmSeverity_MyCommand_Source",
								  	"entitySet": "AlarmSeverities"
								  },
								  {
								  	"role": "HistoryAlarmSeverity_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryAlarmSeverity_Site",
							  	"association": "Self.HistoryAlarmSeverity_Site",
							  	"end": [
								  {
								  	"role": "HistoryAlarmSeverity_Site_Source",
								  	"entitySet": "AlarmSeverities"
								  },
								  {
								  	"role": "HistoryAlarmSeverity_Site_Target",
								  	"entitySet": "Sites"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryClearance_MyCommand",
							  	"association": "Self.HistoryClearance_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryClearance_MyCommand_Source",
								  	"entitySet": "Clearances"
								  },
								  {
								  	"role": "HistoryClearance_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryClearance_Site",
							  	"association": "Self.HistoryClearance_Site",
							  	"end": [
								  {
								  	"role": "HistoryClearance_Site_Source",
								  	"entitySet": "Clearances"
								  },
								  {
								  	"role": "HistoryClearance_Site_Target",
								  	"entitySet": "Sites"
								  }
							  	]
							  },
							  {
							  	"name": "HistorySiteCommand_CommandInstance",
							  	"association": "Self.HistorySiteCommand_CommandInstance",
							  	"end": [
								  {
								  	"role": "HistorySiteCommand_CommandInstance_Source",
								  	"entitySet": "SiteCommands"
								  },
								  {
								  	"role": "HistorySiteCommand_CommandInstance_Target",
								  	"entitySet": "CommandInstances"
								  }
							  	]
							  },
							  {
							  	"name": "HistorySiteCommand_MyCommand",
							  	"association": "Self.HistorySiteCommand_MyCommand",
							  	"end": [
								  {
								  	"role": "HistorySiteCommand_MyCommand_Source",
								  	"entitySet": "SiteCommands"
								  },
								  {
								  	"role": "HistorySiteCommand_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistorySiteCommand_Site",
							  	"association": "Self.HistorySiteCommand_Site",
							  	"end": [
								  {
								  	"role": "HistorySiteCommand_Site_Source",
								  	"entitySet": "SiteCommands"
								  },
								  {
								  	"role": "HistorySiteCommand_Site_Target",
								  	"entitySet": "Sites"
								  }
							  	]
							  },
							  {
							  	"name": "HistorySite_Devices",
							  	"association": "Self.HistorySite_Devices",
							  	"end": [
								  {
								  	"role": "HistorySite_Devices_Source",
								  	"entitySet": "Sites"
								  },
								  {
								  	"role": "HistorySite_Devices_Target",
								  	"entitySet": "Devices"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryApplicationCommand_Application",
							  	"association": "Self.HistoryApplicationCommand_Application",
							  	"end": [
								  {
								  	"role": "HistoryApplicationCommand_Application_Source",
								  	"entitySet": "ApplicationCommands"
								  },
								  {
								  	"role": "HistoryApplicationCommand_Application_Target",
								  	"entitySet": "Applications"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryApplicationCommand_CommandInstance",
							  	"association": "Self.HistoryApplicationCommand_CommandInstance",
							  	"end": [
								  {
								  	"role": "HistoryApplicationCommand_CommandInstance_Source",
								  	"entitySet": "ApplicationCommands"
								  },
								  {
								  	"role": "HistoryApplicationCommand_CommandInstance_Target",
								  	"entitySet": "CommandInstances"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryApplicationCommand_MyCommand",
							  	"association": "Self.HistoryApplicationCommand_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryApplicationCommand_MyCommand_Source",
								  	"entitySet": "ApplicationCommands"
								  },
								  {
								  	"role": "HistoryApplicationCommand_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryApplication_Enterprises",
							  	"association": "Self.HistoryApplication_Enterprises",
							  	"end": [
								  {
								  	"role": "HistoryApplication_Enterprises_Source",
								  	"entitySet": "Applications"
								  },
								  {
								  	"role": "HistoryApplication_Enterprises_Target",
								  	"entitySet": "Enterprises"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryApplication_MyCommand",
							  	"association": "Self.HistoryApplication_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryApplication_MyCommand_Source",
								  	"entitySet": "Applications"
								  },
								  {
								  	"role": "HistoryApplication_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryEnterpriseCommand_CommandInstance",
							  	"association": "Self.HistoryEnterpriseCommand_CommandInstance",
							  	"end": [
								  {
								  	"role": "HistoryEnterpriseCommand_CommandInstance_Source",
								  	"entitySet": "EnterpriseCommands"
								  },
								  {
								  	"role": "HistoryEnterpriseCommand_CommandInstance_Target",
								  	"entitySet": "CommandInstances"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryEnterpriseCommand_Enterprise",
							  	"association": "Self.HistoryEnterpriseCommand_Enterprise",
							  	"end": [
								  {
								  	"role": "HistoryEnterpriseCommand_Enterprise_Source",
								  	"entitySet": "EnterpriseCommands"
								  },
								  {
								  	"role": "HistoryEnterpriseCommand_Enterprise_Target",
								  	"entitySet": "Enterprises"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryEnterpriseCommand_MyCommand",
							  	"association": "Self.HistoryEnterpriseCommand_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryEnterpriseCommand_MyCommand_Source",
								  	"entitySet": "EnterpriseCommands"
								  },
								  {
								  	"role": "HistoryEnterpriseCommand_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryEnterprise_MyCommand",
							  	"association": "Self.HistoryEnterprise_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryEnterprise_MyCommand_Source",
								  	"entitySet": "Enterprises"
								  },
								  {
								  	"role": "HistoryEnterprise_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryEnterprise_Sites",
							  	"association": "Self.HistoryEnterprise_Sites",
							  	"end": [
								  {
								  	"role": "HistoryEnterprise_Sites_Source",
								  	"entitySet": "Enterprises"
								  },
								  {
								  	"role": "HistoryEnterprise_Sites_Target",
								  	"entitySet": "Sites"
								  }
							  	]
							  },
							  {
							  	"name": "HistorySite_MyCommand",
							  	"association": "Self.HistorySite_MyCommand",
							  	"end": [
								  {
								  	"role": "HistorySite_MyCommand_Source",
								  	"entitySet": "Sites"
								  },
								  {
								  	"role": "HistorySite_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistorySite_Zones",
							  	"association": "Self.HistorySite_Zones",
							  	"end": [
								  {
								  	"role": "HistorySite_Zones_Source",
								  	"entitySet": "Sites"
								  },
								  {
								  	"role": "HistorySite_Zones_Target",
								  	"entitySet": "Zones"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryDeviceInstance_Device",
							  	"association": "Self.HistoryDeviceInstance_Device",
							  	"end": [
								  {
								  	"role": "HistoryDeviceInstance_Device_Source",
								  	"entitySet": "DeviceInstances"
								  },
								  {
								  	"role": "HistoryDeviceInstance_Device_Target",
								  	"entitySet": "Devices"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryDeviceInstanceDisplay_DeviceInstance",
							  	"association": "Self.HistoryDeviceInstanceDisplay_DeviceInstance",
							  	"end": [
								  {
								  	"role": "HistoryDeviceInstanceDisplay_DeviceInstance_Source",
								  	"entitySet": "DeviceInstanceDisplays"
								  },
								  {
								  	"role": "HistoryDeviceInstanceDisplay_DeviceInstance_Target",
								  	"entitySet": "DeviceInstances"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryDeviceInstanceDisplay_MyCommand",
							  	"association": "Self.HistoryDeviceInstanceDisplay_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryDeviceInstanceDisplay_MyCommand_Source",
								  	"entitySet": "DeviceInstanceDisplays"
								  },
								  {
								  	"role": "HistoryDeviceInstanceDisplay_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryDeviceInstanceTag_DeviceInstance",
							  	"association": "Self.HistoryDeviceInstanceTag_DeviceInstance",
							  	"end": [
								  {
								  	"role": "HistoryDeviceInstanceTag_DeviceInstance_Source",
								  	"entitySet": "DeviceInstanceTags"
								  },
								  {
								  	"role": "HistoryDeviceInstanceTag_DeviceInstance_Target",
								  	"entitySet": "DeviceInstances"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryDeviceInstanceTag_MyCommand",
							  	"association": "Self.HistoryDeviceInstanceTag_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryDeviceInstanceTag_MyCommand_Source",
								  	"entitySet": "DeviceInstanceTags"
								  },
								  {
								  	"role": "HistoryDeviceInstanceTag_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryDeviceInstance_MyCommand",
							  	"association": "Self.HistoryDeviceInstance_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryDeviceInstance_MyCommand_Source",
								  	"entitySet": "DeviceInstances"
								  },
								  {
								  	"role": "HistoryDeviceInstance_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryDeviceInstance_Unit",
							  	"association": "Self.HistoryDeviceInstance_Unit",
							  	"end": [
								  {
								  	"role": "HistoryDeviceInstance_Unit_Source",
								  	"entitySet": "DeviceInstances"
								  },
								  {
								  	"role": "HistoryDeviceInstance_Unit_Target",
								  	"entitySet": "Units"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryDoubleParameterNodeCommand_CommandInstance",
							  	"association": "Self.HistoryDoubleParameterNodeCommand_CommandInstance",
							  	"end": [
								  {
								  	"role": "HistoryDoubleParameterNodeCommand_CommandInstance_Source",
								  	"entitySet": "DoubleParameterNodeCommands"
								  },
								  {
								  	"role": "HistoryDoubleParameterNodeCommand_CommandInstance_Target",
								  	"entitySet": "CommandInstances"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryDoubleParameterNodeCommand_MyCommand",
							  	"association": "Self.HistoryDoubleParameterNodeCommand_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryDoubleParameterNodeCommand_MyCommand_Source",
								  	"entitySet": "DoubleParameterNodeCommands"
								  },
								  {
								  	"role": "HistoryDoubleParameterNodeCommand_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryDoubleParameterNodeCommand_UnitNode",
							  	"association": "Self.HistoryDoubleParameterNodeCommand_UnitNode",
							  	"end": [
								  {
								  	"role": "HistoryDoubleParameterNodeCommand_UnitNode_Source",
								  	"entitySet": "DoubleParameterNodeCommands"
								  },
								  {
								  	"role": "HistoryDoubleParameterNodeCommand_UnitNode_Target",
								  	"entitySet": "DoubleParameterNodes"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryDoubleParameterNode_MyCommand",
							  	"association": "Self.HistoryDoubleParameterNode_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryDoubleParameterNode_MyCommand_Source",
								  	"entitySet": "DoubleParameterNodes"
								  },
								  {
								  	"role": "HistoryDoubleParameterNode_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryDoubleParameterNodeState_MyCommand",
							  	"association": "Self.HistoryDoubleParameterNodeState_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryDoubleParameterNodeState_MyCommand_Source",
								  	"entitySet": "DoubleParameterNodeStates"
								  },
								  {
								  	"role": "HistoryDoubleParameterNodeState_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryDoubleParameterNodeState_UnitNode",
							  	"association": "Self.HistoryDoubleParameterNodeState_UnitNode",
							  	"end": [
								  {
								  	"role": "HistoryDoubleParameterNodeState_UnitNode_Source",
								  	"entitySet": "DoubleParameterNodeStates"
								  },
								  {
								  	"role": "HistoryDoubleParameterNodeState_UnitNode_Target",
								  	"entitySet": "DoubleParameterNodes"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryDoubleParameterNode_Unit",
							  	"association": "Self.HistoryDoubleParameterNode_Unit",
							  	"end": [
								  {
								  	"role": "HistoryDoubleParameterNode_Unit_Source",
								  	"entitySet": "DoubleParameterNodes"
								  },
								  {
								  	"role": "HistoryDoubleParameterNode_Unit_Target",
								  	"entitySet": "Units"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryDoubleParameterNodeValue_MyCommand",
							  	"association": "Self.HistoryDoubleParameterNodeValue_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryDoubleParameterNodeValue_MyCommand_Source",
								  	"entitySet": "DoubleParameterNodeValues"
								  },
								  {
								  	"role": "HistoryDoubleParameterNodeValue_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryDoubleParameterNodeValue_UnitNode",
							  	"association": "Self.HistoryDoubleParameterNodeValue_UnitNode",
							  	"end": [
								  {
								  	"role": "HistoryDoubleParameterNodeValue_UnitNode_Source",
								  	"entitySet": "DoubleParameterNodeValues"
								  },
								  {
								  	"role": "HistoryDoubleParameterNodeValue_UnitNode_Target",
								  	"entitySet": "DoubleParameterNodes"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryIntegerParameterNodeCommand_CommandInstance",
							  	"association": "Self.HistoryIntegerParameterNodeCommand_CommandInstance",
							  	"end": [
								  {
								  	"role": "HistoryIntegerParameterNodeCommand_CommandInstance_Source",
								  	"entitySet": "IntegerParameterNodeCommands"
								  },
								  {
								  	"role": "HistoryIntegerParameterNodeCommand_CommandInstance_Target",
								  	"entitySet": "CommandInstances"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryIntegerParameterNodeCommand_MyCommand",
							  	"association": "Self.HistoryIntegerParameterNodeCommand_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryIntegerParameterNodeCommand_MyCommand_Source",
								  	"entitySet": "IntegerParameterNodeCommands"
								  },
								  {
								  	"role": "HistoryIntegerParameterNodeCommand_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryIntegerParameterNodeCommand_UnitNode",
							  	"association": "Self.HistoryIntegerParameterNodeCommand_UnitNode",
							  	"end": [
								  {
								  	"role": "HistoryIntegerParameterNodeCommand_UnitNode_Source",
								  	"entitySet": "IntegerParameterNodeCommands"
								  },
								  {
								  	"role": "HistoryIntegerParameterNodeCommand_UnitNode_Target",
								  	"entitySet": "IntegerParameterNodes"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryIntegerParameterNode_MyCommand",
							  	"association": "Self.HistoryIntegerParameterNode_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryIntegerParameterNode_MyCommand_Source",
								  	"entitySet": "IntegerParameterNodes"
								  },
								  {
								  	"role": "HistoryIntegerParameterNode_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryIntegerParameterNodeState_MyCommand",
							  	"association": "Self.HistoryIntegerParameterNodeState_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryIntegerParameterNodeState_MyCommand_Source",
								  	"entitySet": "IntegerParameterNodeStates"
								  },
								  {
								  	"role": "HistoryIntegerParameterNodeState_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryIntegerParameterNodeState_UnitNode",
							  	"association": "Self.HistoryIntegerParameterNodeState_UnitNode",
							  	"end": [
								  {
								  	"role": "HistoryIntegerParameterNodeState_UnitNode_Source",
								  	"entitySet": "IntegerParameterNodeStates"
								  },
								  {
								  	"role": "HistoryIntegerParameterNodeState_UnitNode_Target",
								  	"entitySet": "IntegerParameterNodes"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryIntegerParameterNode_Unit",
							  	"association": "Self.HistoryIntegerParameterNode_Unit",
							  	"end": [
								  {
								  	"role": "HistoryIntegerParameterNode_Unit_Source",
								  	"entitySet": "IntegerParameterNodes"
								  },
								  {
								  	"role": "HistoryIntegerParameterNode_Unit_Target",
								  	"entitySet": "Units"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryIntegerParameterNodeValue_MyCommand",
							  	"association": "Self.HistoryIntegerParameterNodeValue_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryIntegerParameterNodeValue_MyCommand_Source",
								  	"entitySet": "IntegerParameterNodeValues"
								  },
								  {
								  	"role": "HistoryIntegerParameterNodeValue_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryIntegerParameterNodeValue_UnitNode",
							  	"association": "Self.HistoryIntegerParameterNodeValue_UnitNode",
							  	"end": [
								  {
								  	"role": "HistoryIntegerParameterNodeValue_UnitNode_Source",
								  	"entitySet": "IntegerParameterNodeValues"
								  },
								  {
								  	"role": "HistoryIntegerParameterNodeValue_UnitNode_Target",
								  	"entitySet": "IntegerParameterNodes"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryUnitInterface_MyCommand",
							  	"association": "Self.HistoryUnitInterface_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryUnitInterface_MyCommand_Source",
								  	"entitySet": "UnitInterfaces"
								  },
								  {
								  	"role": "HistoryUnitInterface_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryUnitInterface_Unit",
							  	"association": "Self.HistoryUnitInterface_Unit",
							  	"end": [
								  {
								  	"role": "HistoryUnitInterface_Unit_Source",
								  	"entitySet": "UnitInterfaces"
								  },
								  {
								  	"role": "HistoryUnitInterface_Unit_Target",
								  	"entitySet": "Units"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryUnit_MyCommand",
							  	"association": "Self.HistoryUnit_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryUnit_MyCommand_Source",
								  	"entitySet": "Units"
								  },
								  {
								  	"role": "HistoryUnit_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryNodePageCommand_CommandInstance",
							  	"association": "Self.HistoryNodePageCommand_CommandInstance",
							  	"end": [
								  {
								  	"role": "HistoryNodePageCommand_CommandInstance_Source",
								  	"entitySet": "NodePageCommands"
								  },
								  {
								  	"role": "HistoryNodePageCommand_CommandInstance_Target",
								  	"entitySet": "CommandInstances"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryNodePageCommand_MyCommand",
							  	"association": "Self.HistoryNodePageCommand_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryNodePageCommand_MyCommand_Source",
								  	"entitySet": "NodePageCommands"
								  },
								  {
								  	"role": "HistoryNodePageCommand_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryNodePageCommand_NodePage",
							  	"association": "Self.HistoryNodePageCommand_NodePage",
							  	"end": [
								  {
								  	"role": "HistoryNodePageCommand_NodePage_Source",
								  	"entitySet": "NodePageCommands"
								  },
								  {
								  	"role": "HistoryNodePageCommand_NodePage_Target",
								  	"entitySet": "NodePages"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryNodePage_MyCommand",
							  	"association": "Self.HistoryNodePage_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryNodePage_MyCommand_Source",
								  	"entitySet": "NodePages"
								  },
								  {
								  	"role": "HistoryNodePage_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryNodePageItemCommand_CommandInstance",
							  	"association": "Self.HistoryNodePageItemCommand_CommandInstance",
							  	"end": [
								  {
								  	"role": "HistoryNodePageItemCommand_CommandInstance_Source",
								  	"entitySet": "NodePageItemCommands"
								  },
								  {
								  	"role": "HistoryNodePageItemCommand_CommandInstance_Target",
								  	"entitySet": "CommandInstances"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryNodePageItemCommand_MyCommand",
							  	"association": "Self.HistoryNodePageItemCommand_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryNodePageItemCommand_MyCommand_Source",
								  	"entitySet": "NodePageItemCommands"
								  },
								  {
								  	"role": "HistoryNodePageItemCommand_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryNodePageItemCommand_NodePageItem",
							  	"association": "Self.HistoryNodePageItemCommand_NodePageItem",
							  	"end": [
								  {
								  	"role": "HistoryNodePageItemCommand_NodePageItem_Source",
								  	"entitySet": "NodePageItemCommands"
								  },
								  {
								  	"role": "HistoryNodePageItemCommand_NodePageItem_Target",
								  	"entitySet": "NodePageItems"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryNodePageItem_MyCommand",
							  	"association": "Self.HistoryNodePageItem_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryNodePageItem_MyCommand_Source",
								  	"entitySet": "NodePageItems"
								  },
								  {
								  	"role": "HistoryNodePageItem_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryNodePageItem_NodePage",
							  	"association": "Self.HistoryNodePageItem_NodePage",
							  	"end": [
								  {
								  	"role": "HistoryNodePageItem_NodePage_Source",
								  	"entitySet": "NodePageItems"
								  },
								  {
								  	"role": "HistoryNodePageItem_NodePage_Target",
								  	"entitySet": "NodePages"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryNodePageItemState_MyCommand",
							  	"association": "Self.HistoryNodePageItemState_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryNodePageItemState_MyCommand_Source",
								  	"entitySet": "NodePageItemStates"
								  },
								  {
								  	"role": "HistoryNodePageItemState_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryNodePageItemState_NodePageItem",
							  	"association": "Self.HistoryNodePageItemState_NodePageItem",
							  	"end": [
								  {
								  	"role": "HistoryNodePageItemState_NodePageItem_Source",
								  	"entitySet": "NodePageItemStates"
								  },
								  {
								  	"role": "HistoryNodePageItemState_NodePageItem_Target",
								  	"entitySet": "NodePageItems"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryNodePage_Unit",
							  	"association": "Self.HistoryNodePage_Unit",
							  	"end": [
								  {
								  	"role": "HistoryNodePage_Unit_Source",
								  	"entitySet": "NodePages"
								  },
								  {
								  	"role": "HistoryNodePage_Unit_Target",
								  	"entitySet": "Units"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryUnit_Operations",
							  	"association": "Self.HistoryUnit_Operations",
							  	"end": [
								  {
								  	"role": "HistoryUnit_Operations_Source",
								  	"entitySet": "Units"
								  },
								  {
								  	"role": "HistoryUnit_Operations_Target",
								  	"entitySet": "Operations"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryReportNodeCommand_CommandInstance",
							  	"association": "Self.HistoryReportNodeCommand_CommandInstance",
							  	"end": [
								  {
								  	"role": "HistoryReportNodeCommand_CommandInstance_Source",
								  	"entitySet": "ReportNodeCommands"
								  },
								  {
								  	"role": "HistoryReportNodeCommand_CommandInstance_Target",
								  	"entitySet": "CommandInstances"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryReportNodeCommand_MyCommand",
							  	"association": "Self.HistoryReportNodeCommand_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryReportNodeCommand_MyCommand_Source",
								  	"entitySet": "ReportNodeCommands"
								  },
								  {
								  	"role": "HistoryReportNodeCommand_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryReportNodeCommand_UnitNode",
							  	"association": "Self.HistoryReportNodeCommand_UnitNode",
							  	"end": [
								  {
								  	"role": "HistoryReportNodeCommand_UnitNode_Source",
								  	"entitySet": "ReportNodeCommands"
								  },
								  {
								  	"role": "HistoryReportNodeCommand_UnitNode_Target",
								  	"entitySet": "ReportNodes"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryReportNode_MyCommand",
							  	"association": "Self.HistoryReportNode_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryReportNode_MyCommand_Source",
								  	"entitySet": "ReportNodes"
								  },
								  {
								  	"role": "HistoryReportNode_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryReportNodeState_MyCommand",
							  	"association": "Self.HistoryReportNodeState_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryReportNodeState_MyCommand_Source",
								  	"entitySet": "ReportNodeStates"
								  },
								  {
								  	"role": "HistoryReportNodeState_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryReportNodeState_UnitNode",
							  	"association": "Self.HistoryReportNodeState_UnitNode",
							  	"end": [
								  {
								  	"role": "HistoryReportNodeState_UnitNode_Source",
								  	"entitySet": "ReportNodeStates"
								  },
								  {
								  	"role": "HistoryReportNodeState_UnitNode_Target",
								  	"entitySet": "ReportNodes"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryReportNode_Unit",
							  	"association": "Self.HistoryReportNode_Unit",
							  	"end": [
								  {
								  	"role": "HistoryReportNode_Unit_Source",
								  	"entitySet": "ReportNodes"
								  },
								  {
								  	"role": "HistoryReportNode_Unit_Target",
								  	"entitySet": "Units"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryReportNodeValue_MyCommand",
							  	"association": "Self.HistoryReportNodeValue_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryReportNodeValue_MyCommand_Source",
								  	"entitySet": "ReportNodeValues"
								  },
								  {
								  	"role": "HistoryReportNodeValue_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryReportNodeValue_UnitNode",
							  	"association": "Self.HistoryReportNodeValue_UnitNode",
							  	"end": [
								  {
								  	"role": "HistoryReportNodeValue_UnitNode_Source",
								  	"entitySet": "ReportNodeValues"
								  },
								  {
								  	"role": "HistoryReportNodeValue_UnitNode_Target",
								  	"entitySet": "ReportNodes"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryStateNodeCommand_CommandInstance",
							  	"association": "Self.HistoryStateNodeCommand_CommandInstance",
							  	"end": [
								  {
								  	"role": "HistoryStateNodeCommand_CommandInstance_Source",
								  	"entitySet": "StateNodeCommands"
								  },
								  {
								  	"role": "HistoryStateNodeCommand_CommandInstance_Target",
								  	"entitySet": "CommandInstances"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryStateNodeCommand_MyCommand",
							  	"association": "Self.HistoryStateNodeCommand_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryStateNodeCommand_MyCommand_Source",
								  	"entitySet": "StateNodeCommands"
								  },
								  {
								  	"role": "HistoryStateNodeCommand_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryStateNodeCommand_UnitNode",
							  	"association": "Self.HistoryStateNodeCommand_UnitNode",
							  	"end": [
								  {
								  	"role": "HistoryStateNodeCommand_UnitNode_Source",
								  	"entitySet": "StateNodeCommands"
								  },
								  {
								  	"role": "HistoryStateNodeCommand_UnitNode_Target",
								  	"entitySet": "StateNodes"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryStateNode_MyCommand",
							  	"association": "Self.HistoryStateNode_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryStateNode_MyCommand_Source",
								  	"entitySet": "StateNodes"
								  },
								  {
								  	"role": "HistoryStateNode_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryStateNodeState_MyCommand",
							  	"association": "Self.HistoryStateNodeState_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryStateNodeState_MyCommand_Source",
								  	"entitySet": "StateNodeStates"
								  },
								  {
								  	"role": "HistoryStateNodeState_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryStateNodeState_UnitNode",
							  	"association": "Self.HistoryStateNodeState_UnitNode",
							  	"end": [
								  {
								  	"role": "HistoryStateNodeState_UnitNode_Source",
								  	"entitySet": "StateNodeStates"
								  },
								  {
								  	"role": "HistoryStateNodeState_UnitNode_Target",
								  	"entitySet": "StateNodes"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryStateNode_Unit",
							  	"association": "Self.HistoryStateNode_Unit",
							  	"end": [
								  {
								  	"role": "HistoryStateNode_Unit_Source",
								  	"entitySet": "StateNodes"
								  },
								  {
								  	"role": "HistoryStateNode_Unit_Target",
								  	"entitySet": "Units"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryStateNodeValue_MyCommand",
							  	"association": "Self.HistoryStateNodeValue_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryStateNodeValue_MyCommand_Source",
								  	"entitySet": "StateNodeValues"
								  },
								  {
								  	"role": "HistoryStateNodeValue_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryStateNodeValue_UnitNode",
							  	"association": "Self.HistoryStateNodeValue_UnitNode",
							  	"end": [
								  {
								  	"role": "HistoryStateNodeValue_UnitNode_Source",
								  	"entitySet": "StateNodeValues"
								  },
								  {
								  	"role": "HistoryStateNodeValue_UnitNode_Target",
								  	"entitySet": "StateNodes"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryUnitState_MyCommand",
							  	"association": "Self.HistoryUnitState_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryUnitState_MyCommand_Source",
								  	"entitySet": "UnitStates"
								  },
								  {
								  	"role": "HistoryUnitState_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryUnitState_Unit",
							  	"association": "Self.HistoryUnitState_Unit",
							  	"end": [
								  {
								  	"role": "HistoryUnitState_Unit_Source",
								  	"entitySet": "UnitStates"
								  },
								  {
								  	"role": "HistoryUnitState_Unit_Target",
								  	"entitySet": "Units"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryStringParameterNodeCommand_CommandInstance",
							  	"association": "Self.HistoryStringParameterNodeCommand_CommandInstance",
							  	"end": [
								  {
								  	"role": "HistoryStringParameterNodeCommand_CommandInstance_Source",
								  	"entitySet": "StringParameterNodeCommands"
								  },
								  {
								  	"role": "HistoryStringParameterNodeCommand_CommandInstance_Target",
								  	"entitySet": "CommandInstances"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryStringParameterNodeCommand_MyCommand",
							  	"association": "Self.HistoryStringParameterNodeCommand_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryStringParameterNodeCommand_MyCommand_Source",
								  	"entitySet": "StringParameterNodeCommands"
								  },
								  {
								  	"role": "HistoryStringParameterNodeCommand_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryStringParameterNodeCommand_UnitNode",
							  	"association": "Self.HistoryStringParameterNodeCommand_UnitNode",
							  	"end": [
								  {
								  	"role": "HistoryStringParameterNodeCommand_UnitNode_Source",
								  	"entitySet": "StringParameterNodeCommands"
								  },
								  {
								  	"role": "HistoryStringParameterNodeCommand_UnitNode_Target",
								  	"entitySet": "StringParameterNodes"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryStringParameterNode_MyCommand",
							  	"association": "Self.HistoryStringParameterNode_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryStringParameterNode_MyCommand_Source",
								  	"entitySet": "StringParameterNodes"
								  },
								  {
								  	"role": "HistoryStringParameterNode_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryStringParameterNodeState_MyCommand",
							  	"association": "Self.HistoryStringParameterNodeState_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryStringParameterNodeState_MyCommand_Source",
								  	"entitySet": "StringParameterNodeStates"
								  },
								  {
								  	"role": "HistoryStringParameterNodeState_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryStringParameterNodeState_UnitNode",
							  	"association": "Self.HistoryStringParameterNodeState_UnitNode",
							  	"end": [
								  {
								  	"role": "HistoryStringParameterNodeState_UnitNode_Source",
								  	"entitySet": "StringParameterNodeStates"
								  },
								  {
								  	"role": "HistoryStringParameterNodeState_UnitNode_Target",
								  	"entitySet": "StringParameterNodes"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryStringParameterNode_Unit",
							  	"association": "Self.HistoryStringParameterNode_Unit",
							  	"end": [
								  {
								  	"role": "HistoryStringParameterNode_Unit_Source",
								  	"entitySet": "StringParameterNodes"
								  },
								  {
								  	"role": "HistoryStringParameterNode_Unit_Target",
								  	"entitySet": "Units"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryStringParameterNodeValue_MyCommand",
							  	"association": "Self.HistoryStringParameterNodeValue_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryStringParameterNodeValue_MyCommand_Source",
								  	"entitySet": "StringParameterNodeValues"
								  },
								  {
								  	"role": "HistoryStringParameterNodeValue_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryStringParameterNodeValue_UnitNode",
							  	"association": "Self.HistoryStringParameterNodeValue_UnitNode",
							  	"end": [
								  {
								  	"role": "HistoryStringParameterNodeValue_UnitNode_Source",
								  	"entitySet": "StringParameterNodeValues"
								  },
								  {
								  	"role": "HistoryStringParameterNodeValue_UnitNode_Target",
								  	"entitySet": "StringParameterNodes"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryUnit_Zone",
							  	"association": "Self.HistoryUnit_Zone",
							  	"end": [
								  {
								  	"role": "HistoryUnit_Zone_Source",
								  	"entitySet": "Units"
								  },
								  {
								  	"role": "HistoryUnit_Zone_Target",
								  	"entitySet": "Zones"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryBoolParameterState_MyCommand",
							  	"association": "Self.HistoryBoolParameterState_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryBoolParameterState_MyCommand_Source",
								  	"entitySet": "BoolParameterStates"
								  },
								  {
								  	"role": "HistoryBoolParameterState_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryBoolParameterState_Parameter",
							  	"association": "Self.HistoryBoolParameterState_Parameter",
							  	"end": [
								  {
								  	"role": "HistoryBoolParameterState_Parameter_Source",
								  	"entitySet": "BoolParameterStates"
								  },
								  {
								  	"role": "HistoryBoolParameterState_Parameter_Target",
								  	"entitySet": "BoolParameters"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryBoolParameterValue_MyCommand",
							  	"association": "Self.HistoryBoolParameterValue_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryBoolParameterValue_MyCommand_Source",
								  	"entitySet": "BoolParameterValues"
								  },
								  {
								  	"role": "HistoryBoolParameterValue_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryBoolParameterValue_Parameter",
							  	"association": "Self.HistoryBoolParameterValue_Parameter",
							  	"end": [
								  {
								  	"role": "HistoryBoolParameterValue_Parameter_Source",
								  	"entitySet": "BoolParameterValues"
								  },
								  {
								  	"role": "HistoryBoolParameterValue_Parameter_Target",
								  	"entitySet": "BoolParameters"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryBoolStepFormula_Parameter",
							  	"association": "Self.HistoryBoolStepFormula_Parameter",
							  	"end": [
								  {
								  	"role": "HistoryBoolStepFormula_Parameter_Source",
								  	"entitySet": "BoolStepFormulae"
								  },
								  {
								  	"role": "HistoryBoolStepFormula_Parameter_Target",
								  	"entitySet": "BoolParameters"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryBoolStepFormulaState_MyCommand",
							  	"association": "Self.HistoryBoolStepFormulaState_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryBoolStepFormulaState_MyCommand_Source",
								  	"entitySet": "BoolStepFormulaStates"
								  },
								  {
								  	"role": "HistoryBoolStepFormulaState_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryBoolStepFormulaState_StepFormula",
							  	"association": "Self.HistoryBoolStepFormulaState_StepFormula",
							  	"end": [
								  {
								  	"role": "HistoryBoolStepFormulaState_StepFormula_Source",
								  	"entitySet": "BoolStepFormulaStates"
								  },
								  {
								  	"role": "HistoryBoolStepFormulaState_StepFormula_Target",
								  	"entitySet": "BoolStepFormulae"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryBoolStepFormula_Step",
							  	"association": "Self.HistoryBoolStepFormula_Step",
							  	"end": [
								  {
								  	"role": "HistoryBoolStepFormula_Step_Source",
								  	"entitySet": "BoolStepFormulae"
								  },
								  {
								  	"role": "HistoryBoolStepFormula_Step_Target",
								  	"entitySet": "Steps"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryBoolStepFormulaValue_MyCommand",
							  	"association": "Self.HistoryBoolStepFormulaValue_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryBoolStepFormulaValue_MyCommand_Source",
								  	"entitySet": "BoolStepFormulaValues"
								  },
								  {
								  	"role": "HistoryBoolStepFormulaValue_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryBoolStepFormulaValue_StepFormula",
							  	"association": "Self.HistoryBoolStepFormulaValue_StepFormula",
							  	"end": [
								  {
								  	"role": "HistoryBoolStepFormulaValue_StepFormula_Source",
								  	"entitySet": "BoolStepFormulaValues"
								  },
								  {
								  	"role": "HistoryBoolStepFormulaValue_StepFormula_Target",
								  	"entitySet": "BoolStepFormulae"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryStepCommand_CommandInstance",
							  	"association": "Self.HistoryStepCommand_CommandInstance",
							  	"end": [
								  {
								  	"role": "HistoryStepCommand_CommandInstance_Source",
								  	"entitySet": "StepCommands"
								  },
								  {
								  	"role": "HistoryStepCommand_CommandInstance_Target",
								  	"entitySet": "CommandInstances"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryStepCommand_MyCommand",
							  	"association": "Self.HistoryStepCommand_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryStepCommand_MyCommand_Source",
								  	"entitySet": "StepCommands"
								  },
								  {
								  	"role": "HistoryStepCommand_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryStepCommand_Step",
							  	"association": "Self.HistoryStepCommand_Step",
							  	"end": [
								  {
								  	"role": "HistoryStepCommand_Step_Source",
								  	"entitySet": "StepCommands"
								  },
								  {
								  	"role": "HistoryStepCommand_Step_Target",
								  	"entitySet": "Steps"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryStep_MyCommand",
							  	"association": "Self.HistoryStep_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryStep_MyCommand_Source",
								  	"entitySet": "Steps"
								  },
								  {
								  	"role": "HistoryStep_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryStep_Operation",
							  	"association": "Self.HistoryStep_Operation",
							  	"end": [
								  {
								  	"role": "HistoryStep_Operation_Source",
								  	"entitySet": "Steps"
								  },
								  {
								  	"role": "HistoryStep_Operation_Target",
								  	"entitySet": "Operations"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryStepState_MyCommand",
							  	"association": "Self.HistoryStepState_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryStepState_MyCommand_Source",
								  	"entitySet": "StepStates"
								  },
								  {
								  	"role": "HistoryStepState_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryStepState_Step",
							  	"association": "Self.HistoryStepState_Step",
							  	"end": [
								  {
								  	"role": "HistoryStepState_Step_Source",
								  	"entitySet": "StepStates"
								  },
								  {
								  	"role": "HistoryStepState_Step_Target",
								  	"entitySet": "Steps"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryStep_UnitProcedure",
							  	"association": "Self.HistoryStep_UnitProcedure",
							  	"end": [
								  {
								  	"role": "HistoryStep_UnitProcedure_Source",
								  	"entitySet": "Steps"
								  },
								  {
								  	"role": "HistoryStep_UnitProcedure_Target",
								  	"entitySet": "UnitProcedures"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryUnitProcedure_Unit",
							  	"association": "Self.HistoryUnitProcedure_Unit",
							  	"end": [
								  {
								  	"role": "HistoryUnitProcedure_Unit_Source",
								  	"entitySet": "UnitProcedures"
								  },
								  {
								  	"role": "HistoryUnitProcedure_Unit_Target",
								  	"entitySet": "Units"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryBatch_Zone",
							  	"association": "Self.HistoryBatch_Zone",
							  	"end": [
								  {
								  	"role": "HistoryBatch_Zone_Source",
								  	"entitySet": "Batches"
								  },
								  {
								  	"role": "HistoryBatch_Zone_Target",
								  	"entitySet": "Zones"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryCommandClearance_MyCommand",
							  	"association": "Self.HistoryCommandClearance_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryCommandClearance_MyCommand_Source",
								  	"entitySet": "CommandClearances"
								  },
								  {
								  	"role": "HistoryCommandClearance_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryCommandClearance_Zone",
							  	"association": "Self.HistoryCommandClearance_Zone",
							  	"end": [
								  {
								  	"role": "HistoryCommandClearance_Zone_Source",
								  	"entitySet": "CommandClearances"
								  },
								  {
								  	"role": "HistoryCommandClearance_Zone_Target",
								  	"entitySet": "Zones"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryZoneCommand_CommandInstance",
							  	"association": "Self.HistoryZoneCommand_CommandInstance",
							  	"end": [
								  {
								  	"role": "HistoryZoneCommand_CommandInstance_Source",
								  	"entitySet": "ZoneCommands"
								  },
								  {
								  	"role": "HistoryZoneCommand_CommandInstance_Target",
								  	"entitySet": "CommandInstances"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryZoneCommand_MyCommand",
							  	"association": "Self.HistoryZoneCommand_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryZoneCommand_MyCommand_Source",
								  	"entitySet": "ZoneCommands"
								  },
								  {
								  	"role": "HistoryZoneCommand_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryZoneCommand_Zone",
							  	"association": "Self.HistoryZoneCommand_Zone",
							  	"end": [
								  {
								  	"role": "HistoryZoneCommand_Zone_Source",
								  	"entitySet": "ZoneCommands"
								  },
								  {
								  	"role": "HistoryZoneCommand_Zone_Target",
								  	"entitySet": "Zones"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryZone_MyCommand",
							  	"association": "Self.HistoryZone_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryZone_MyCommand_Source",
								  	"entitySet": "Zones"
								  },
								  {
								  	"role": "HistoryZone_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryZoneClearance_MyCommand",
							  	"association": "Self.HistoryZoneClearance_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryZoneClearance_MyCommand_Source",
								  	"entitySet": "ZoneClearances"
								  },
								  {
								  	"role": "HistoryZoneClearance_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryZoneClearance_Signatures",
							  	"association": "Self.HistoryZoneClearance_Signatures",
							  	"end": [
								  {
								  	"role": "HistoryZoneClearance_Signatures_Source",
								  	"entitySet": "ZoneClearances"
								  },
								  {
								  	"role": "HistoryZoneClearance_Signatures_Target",
								  	"entitySet": "Signatures"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryZoneClearance_Zone",
							  	"association": "Self.HistoryZoneClearance_Zone",
							  	"end": [
								  {
								  	"role": "HistoryZoneClearance_Zone_Source",
								  	"entitySet": "ZoneClearances"
								  },
								  {
								  	"role": "HistoryZoneClearance_Zone_Target",
								  	"entitySet": "Zones"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryGroup_Zone",
							  	"association": "Self.HistoryGroup_Zone",
							  	"end": [
								  {
								  	"role": "HistoryGroup_Zone_Source",
								  	"entitySet": "Groups"
								  },
								  {
								  	"role": "HistoryGroup_Zone_Target",
								  	"entitySet": "Zones"
								  }
							  	]
							  },
							  {
							  	"name": "HistorySignature_Group",
							  	"association": "Self.HistorySignature_Group",
							  	"end": [
								  {
								  	"role": "HistorySignature_Group_Source",
								  	"entitySet": "Signatures"
								  },
								  {
								  	"role": "HistorySignature_Group_Target",
								  	"entitySet": "Groups"
								  }
							  	]
							  },
							  {
							  	"name": "HistorySignature_MyCommand",
							  	"association": "Self.HistorySignature_MyCommand",
							  	"end": [
								  {
								  	"role": "HistorySignature_MyCommand_Source",
								  	"entitySet": "Signatures"
								  },
								  {
								  	"role": "HistorySignature_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryCommandInstanceSignature_Signature",
							  	"association": "Self.HistoryCommandInstanceSignature_Signature",
							  	"end": [
								  {
								  	"role": "HistoryCommandInstanceSignature_Signature_Source",
								  	"entitySet": "CommandInstanceSignatures"
								  },
								  {
								  	"role": "HistoryCommandInstanceSignature_Signature_Target",
								  	"entitySet": "Signatures"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryCommandInstanceValue_Command",
							  	"association": "Self.HistoryCommandInstanceValue_Command",
							  	"end": [
								  {
								  	"role": "HistoryCommandInstanceValue_Command_Source",
								  	"entitySet": "CommandInstanceValues"
								  },
								  {
								  	"role": "HistoryCommandInstanceValue_Command_Target",
								  	"entitySet": "CommandInstances"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryCommandInstanceValue_MyCommand",
							  	"association": "Self.HistoryCommandInstanceValue_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryCommandInstanceValue_MyCommand_Source",
								  	"entitySet": "CommandInstanceValues"
								  },
								  {
								  	"role": "HistoryCommandInstanceValue_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "AlarmOccurrence_MyCommand",
							  	"association": "Self.AlarmOccurrence_MyCommand",
							  	"end": [
								  {
								  	"role": "AlarmOccurrence_MyCommand_Source",
								  	"entitySet": "AlarmOccurrences"
								  },
								  {
								  	"role": "AlarmOccurrence_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryAlarm_Commands",
							  	"association": "Self.HistoryAlarm_Commands",
							  	"end": [
								  {
								  	"role": "HistoryAlarm_Commands_Source",
								  	"entitySet": "Alarms"
								  },
								  {
								  	"role": "HistoryAlarm_Commands_Target",
								  	"entitySet": "AlarmCommands"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryAlarm_MyCommand",
							  	"association": "Self.HistoryAlarm_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryAlarm_MyCommand_Source",
								  	"entitySet": "Alarms"
								  },
								  {
								  	"role": "HistoryAlarm_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryAlarmValue_Alarm",
							  	"association": "Self.HistoryAlarmValue_Alarm",
							  	"end": [
								  {
								  	"role": "HistoryAlarmValue_Alarm_Source",
								  	"entitySet": "AlarmValues"
								  },
								  {
								  	"role": "HistoryAlarmValue_Alarm_Target",
								  	"entitySet": "Alarms"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryAlarmValueCommand_AlarmValue",
							  	"association": "Self.HistoryAlarmValueCommand_AlarmValue",
							  	"end": [
								  {
								  	"role": "HistoryAlarmValueCommand_AlarmValue_Source",
								  	"entitySet": "AlarmValueCommands"
								  },
								  {
								  	"role": "HistoryAlarmValueCommand_AlarmValue_Target",
								  	"entitySet": "AlarmValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryAlarmValueCommand_CommandInstance",
							  	"association": "Self.HistoryAlarmValueCommand_CommandInstance",
							  	"end": [
								  {
								  	"role": "HistoryAlarmValueCommand_CommandInstance_Source",
								  	"entitySet": "AlarmValueCommands"
								  },
								  {
								  	"role": "HistoryAlarmValueCommand_CommandInstance_Target",
								  	"entitySet": "CommandInstances"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryAlarmValueCommand_MyCommand",
							  	"association": "Self.HistoryAlarmValueCommand_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryAlarmValueCommand_MyCommand_Source",
								  	"entitySet": "AlarmValueCommands"
								  },
								  {
								  	"role": "HistoryAlarmValueCommand_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryAlarmValue_MyCommand",
							  	"association": "Self.HistoryAlarmValue_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryAlarmValue_MyCommand_Source",
								  	"entitySet": "AlarmValues"
								  },
								  {
								  	"role": "HistoryAlarmValue_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryAlarmValueValue_AlarmValue",
							  	"association": "Self.HistoryAlarmValueValue_AlarmValue",
							  	"end": [
								  {
								  	"role": "HistoryAlarmValueValue_AlarmValue_Source",
								  	"entitySet": "AlarmValueValues"
								  },
								  {
								  	"role": "HistoryAlarmValueValue_AlarmValue_Target",
								  	"entitySet": "AlarmValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryAlarmValueValue_MyCommand",
							  	"association": "Self.HistoryAlarmValueValue_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryAlarmValueValue_MyCommand_Source",
								  	"entitySet": "AlarmValueValues"
								  },
								  {
								  	"role": "HistoryAlarmValueValue_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryAlarmCommand_CommandInstance",
							  	"association": "Self.HistoryAlarmCommand_CommandInstance",
							  	"end": [
								  {
								  	"role": "HistoryAlarmCommand_CommandInstance_Source",
								  	"entitySet": "AlarmCommands"
								  },
								  {
								  	"role": "HistoryAlarmCommand_CommandInstance_Target",
								  	"entitySet": "CommandInstances"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryAlarmCommand_MyCommand",
							  	"association": "Self.HistoryAlarmCommand_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryAlarmCommand_MyCommand_Source",
								  	"entitySet": "AlarmCommands"
								  },
								  {
								  	"role": "HistoryAlarmCommand_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryClearanceCommand_Clearance",
							  	"association": "Self.HistoryClearanceCommand_Clearance",
							  	"end": [
								  {
								  	"role": "HistoryClearanceCommand_Clearance_Source",
								  	"entitySet": "ClearanceCommands"
								  },
								  {
								  	"role": "HistoryClearanceCommand_Clearance_Target",
								  	"entitySet": "Clearances"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryClearanceCommand_CommandInstance",
							  	"association": "Self.HistoryClearanceCommand_CommandInstance",
							  	"end": [
								  {
								  	"role": "HistoryClearanceCommand_CommandInstance_Source",
								  	"entitySet": "ClearanceCommands"
								  },
								  {
								  	"role": "HistoryClearanceCommand_CommandInstance_Target",
								  	"entitySet": "CommandInstances"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryClearanceCommand_MyCommand",
							  	"association": "Self.HistoryClearanceCommand_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryClearanceCommand_MyCommand_Source",
								  	"entitySet": "ClearanceCommands"
								  },
								  {
								  	"role": "HistoryClearanceCommand_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryCommandClearanceCommand_CommandClearance",
							  	"association": "Self.HistoryCommandClearanceCommand_CommandClearance",
							  	"end": [
								  {
								  	"role": "HistoryCommandClearanceCommand_CommandClearance_Source",
								  	"entitySet": "CommandClearanceCommands"
								  },
								  {
								  	"role": "HistoryCommandClearanceCommand_CommandClearance_Target",
								  	"entitySet": "CommandClearances"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryCommandClearanceCommand_CommandInstance",
							  	"association": "Self.HistoryCommandClearanceCommand_CommandInstance",
							  	"end": [
								  {
								  	"role": "HistoryCommandClearanceCommand_CommandInstance_Source",
								  	"entitySet": "CommandClearanceCommands"
								  },
								  {
								  	"role": "HistoryCommandClearanceCommand_CommandInstance_Target",
								  	"entitySet": "CommandInstances"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryCommandClearanceCommand_MyCommand",
							  	"association": "Self.HistoryCommandClearanceCommand_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryCommandClearanceCommand_MyCommand_Source",
								  	"entitySet": "CommandClearanceCommands"
								  },
								  {
								  	"role": "HistoryCommandClearanceCommand_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryDeviceCommand_CommandInstance",
							  	"association": "Self.HistoryDeviceCommand_CommandInstance",
							  	"end": [
								  {
								  	"role": "HistoryDeviceCommand_CommandInstance_Source",
								  	"entitySet": "DeviceCommands"
								  },
								  {
								  	"role": "HistoryDeviceCommand_CommandInstance_Target",
								  	"entitySet": "CommandInstances"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryDeviceCommand_Device",
							  	"association": "Self.HistoryDeviceCommand_Device",
							  	"end": [
								  {
								  	"role": "HistoryDeviceCommand_Device_Source",
								  	"entitySet": "DeviceCommands"
								  },
								  {
								  	"role": "HistoryDeviceCommand_Device_Target",
								  	"entitySet": "Devices"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryDeviceCommand_MyCommand",
							  	"association": "Self.HistoryDeviceCommand_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryDeviceCommand_MyCommand_Source",
								  	"entitySet": "DeviceCommands"
								  },
								  {
								  	"role": "HistoryDeviceCommand_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryDeviceDisplayCommand_CommandInstance",
							  	"association": "Self.HistoryDeviceDisplayCommand_CommandInstance",
							  	"end": [
								  {
								  	"role": "HistoryDeviceDisplayCommand_CommandInstance_Source",
								  	"entitySet": "DeviceDisplayCommands"
								  },
								  {
								  	"role": "HistoryDeviceDisplayCommand_CommandInstance_Target",
								  	"entitySet": "CommandInstances"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryDeviceDisplayCommand_DeviceDisplay",
							  	"association": "Self.HistoryDeviceDisplayCommand_DeviceDisplay",
							  	"end": [
								  {
								  	"role": "HistoryDeviceDisplayCommand_DeviceDisplay_Source",
								  	"entitySet": "DeviceDisplayCommands"
								  },
								  {
								  	"role": "HistoryDeviceDisplayCommand_DeviceDisplay_Target",
								  	"entitySet": "DeviceDisplays"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryDeviceDisplayCommand_MyCommand",
							  	"association": "Self.HistoryDeviceDisplayCommand_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryDeviceDisplayCommand_MyCommand_Source",
								  	"entitySet": "DeviceDisplayCommands"
								  },
								  {
								  	"role": "HistoryDeviceDisplayCommand_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryDeviceInstanceCommand_CommandInstance",
							  	"association": "Self.HistoryDeviceInstanceCommand_CommandInstance",
							  	"end": [
								  {
								  	"role": "HistoryDeviceInstanceCommand_CommandInstance_Source",
								  	"entitySet": "DeviceInstanceCommands"
								  },
								  {
								  	"role": "HistoryDeviceInstanceCommand_CommandInstance_Target",
								  	"entitySet": "CommandInstances"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryDeviceInstanceCommand_DeviceInstance",
							  	"association": "Self.HistoryDeviceInstanceCommand_DeviceInstance",
							  	"end": [
								  {
								  	"role": "HistoryDeviceInstanceCommand_DeviceInstance_Source",
								  	"entitySet": "DeviceInstanceCommands"
								  },
								  {
								  	"role": "HistoryDeviceInstanceCommand_DeviceInstance_Target",
								  	"entitySet": "DeviceInstances"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryDeviceInstanceCommand_MyCommand",
							  	"association": "Self.HistoryDeviceInstanceCommand_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryDeviceInstanceCommand_MyCommand_Source",
								  	"entitySet": "DeviceInstanceCommands"
								  },
								  {
								  	"role": "HistoryDeviceInstanceCommand_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryDeviceInstanceDisplayCommand_CommandInstance",
							  	"association": "Self.HistoryDeviceInstanceDisplayCommand_CommandInstance",
							  	"end": [
								  {
								  	"role": "HistoryDeviceInstanceDisplayCommand_CommandInstance_Source",
								  	"entitySet": "DeviceInstanceDisplayCommands"
								  },
								  {
								  	"role": "HistoryDeviceInstanceDisplayCommand_CommandInstance_Target",
								  	"entitySet": "CommandInstances"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryDeviceInstanceDisplayCommand_DeviceInstanceDisplay",
							  	"association": "Self.HistoryDeviceInstanceDisplayCommand_DeviceInstanceDisplay",
							  	"end": [
								  {
								  	"role": "HistoryDeviceInstanceDisplayCommand_DeviceInstanceDisplay_Source",
								  	"entitySet": "DeviceInstanceDisplayCommands"
								  },
								  {
								  	"role": "HistoryDeviceInstanceDisplayCommand_DeviceInstanceDisplay_Target",
								  	"entitySet": "DeviceInstanceDisplays"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryDeviceInstanceDisplayCommand_MyCommand",
							  	"association": "Self.HistoryDeviceInstanceDisplayCommand_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryDeviceInstanceDisplayCommand_MyCommand_Source",
								  	"entitySet": "DeviceInstanceDisplayCommands"
								  },
								  {
								  	"role": "HistoryDeviceInstanceDisplayCommand_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryDeviceInstanceTagCommand_CommandInstance",
							  	"association": "Self.HistoryDeviceInstanceTagCommand_CommandInstance",
							  	"end": [
								  {
								  	"role": "HistoryDeviceInstanceTagCommand_CommandInstance_Source",
								  	"entitySet": "DeviceInstanceTagCommands"
								  },
								  {
								  	"role": "HistoryDeviceInstanceTagCommand_CommandInstance_Target",
								  	"entitySet": "CommandInstances"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryDeviceInstanceTagCommand_DeviceInstanceTag",
							  	"association": "Self.HistoryDeviceInstanceTagCommand_DeviceInstanceTag",
							  	"end": [
								  {
								  	"role": "HistoryDeviceInstanceTagCommand_DeviceInstanceTag_Source",
								  	"entitySet": "DeviceInstanceTagCommands"
								  },
								  {
								  	"role": "HistoryDeviceInstanceTagCommand_DeviceInstanceTag_Target",
								  	"entitySet": "DeviceInstanceTags"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryDeviceInstanceTagCommand_MyCommand",
							  	"association": "Self.HistoryDeviceInstanceTagCommand_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryDeviceInstanceTagCommand_MyCommand_Source",
								  	"entitySet": "DeviceInstanceTagCommands"
								  },
								  {
								  	"role": "HistoryDeviceInstanceTagCommand_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryGroupCommand_CommandInstance",
							  	"association": "Self.HistoryGroupCommand_CommandInstance",
							  	"end": [
								  {
								  	"role": "HistoryGroupCommand_CommandInstance_Source",
								  	"entitySet": "GroupCommands"
								  },
								  {
								  	"role": "HistoryGroupCommand_CommandInstance_Target",
								  	"entitySet": "CommandInstances"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryGroupCommand_Group",
							  	"association": "Self.HistoryGroupCommand_Group",
							  	"end": [
								  {
								  	"role": "HistoryGroupCommand_Group_Source",
								  	"entitySet": "GroupCommands"
								  },
								  {
								  	"role": "HistoryGroupCommand_Group_Target",
								  	"entitySet": "Groups"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryGroupCommand_MyCommand",
							  	"association": "Self.HistoryGroupCommand_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryGroupCommand_MyCommand_Source",
								  	"entitySet": "GroupCommands"
								  },
								  {
								  	"role": "HistoryGroupCommand_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistorySignatureCommand_CommandInstance",
							  	"association": "Self.HistorySignatureCommand_CommandInstance",
							  	"end": [
								  {
								  	"role": "HistorySignatureCommand_CommandInstance_Source",
								  	"entitySet": "SignatureCommands"
								  },
								  {
								  	"role": "HistorySignatureCommand_CommandInstance_Target",
								  	"entitySet": "CommandInstances"
								  }
							  	]
							  },
							  {
							  	"name": "HistorySignatureCommand_MyCommand",
							  	"association": "Self.HistorySignatureCommand_MyCommand",
							  	"end": [
								  {
								  	"role": "HistorySignatureCommand_MyCommand_Source",
								  	"entitySet": "SignatureCommands"
								  },
								  {
								  	"role": "HistorySignatureCommand_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistorySignatureCommand_Signature",
							  	"association": "Self.HistorySignatureCommand_Signature",
							  	"end": [
								  {
								  	"role": "HistorySignatureCommand_Signature_Source",
								  	"entitySet": "SignatureCommands"
								  },
								  {
								  	"role": "HistorySignatureCommand_Signature_Target",
								  	"entitySet": "Signatures"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryZoneClearanceCommand_CommandInstance",
							  	"association": "Self.HistoryZoneClearanceCommand_CommandInstance",
							  	"end": [
								  {
								  	"role": "HistoryZoneClearanceCommand_CommandInstance_Source",
								  	"entitySet": "ZoneClearanceCommands"
								  },
								  {
								  	"role": "HistoryZoneClearanceCommand_CommandInstance_Target",
								  	"entitySet": "CommandInstances"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryZoneClearanceCommand_MyCommand",
							  	"association": "Self.HistoryZoneClearanceCommand_MyCommand",
							  	"end": [
								  {
								  	"role": "HistoryZoneClearanceCommand_MyCommand_Source",
								  	"entitySet": "ZoneClearanceCommands"
								  },
								  {
								  	"role": "HistoryZoneClearanceCommand_MyCommand_Target",
								  	"entitySet": "CommandInstanceValues"
								  }
							  	]
							  },
							  {
							  	"name": "HistoryZoneClearanceCommand_ZoneClearance",
							  	"association": "Self.HistoryZoneClearanceCommand_ZoneClearance",
							  	"end": [
								  {
								  	"role": "HistoryZoneClearanceCommand_ZoneClearance_Source",
								  	"entitySet": "ZoneClearanceCommands"
								  },
								  {
								  	"role": "HistoryZoneClearanceCommand_ZoneClearance_Target",
								  	"entitySet": "ZoneClearances"
								  }
							  	]
							  }
							]
						},
						"entityType": [
						  {
						  	"name": "HistoryAlarmCommand",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Database.HistoryAlarmCommand, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "CommandInstanceId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "AlarmId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "IsCurrent",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"relationship": "Self.HistoryAlarm_Commands",
							  	"fromRole": "HistoryAlarm_Commands_Target",
							  	"toRole": "HistoryAlarm_Commands_Source"
							  },
							  {
							  	"name": "CommandInstance",
							  	"relationship": "Self.HistoryAlarmCommand_CommandInstance",
							  	"fromRole": "HistoryAlarmCommand_CommandInstance_Source",
							  	"toRole": "HistoryAlarmCommand_CommandInstance_Target"
							  },
							  {
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryAlarmCommand_MyCommand",
							  	"fromRole": "HistoryAlarmCommand_MyCommand_Source",
							  	"toRole": "HistoryAlarmCommand_MyCommand_Target"
							  }
						  	],
						  	"IdProperty": "Id",
						  	"Of": null,
						  	"commonName": "HistoryAlarmCommand",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryAlarm",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Database.HistoryAlarm, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "IsAcknowledged",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ConfigurationId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
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
							  	"name": "ConfigurationParentType",
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
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"name": "AlarmOccurrences",
							  	"relationship": "Self.AlarmOccurrence_Alarm",
							  	"fromRole": "AlarmOccurrence_Alarm_Target",
							  	"toRole": "AlarmOccurrence_Alarm_Source"
							  },
							  {
							  	"name": "AlarmSeverity",
							  	"relationship": "Self.HistoryAlarmSeverity_Alarms",
							  	"fromRole": "HistoryAlarmSeverity_Alarms_Target",
							  	"toRole": "HistoryAlarmSeverity_Alarms_Source"
							  },
							  {
							  	"name": "Commands",
							  	"relationship": "Self.HistoryAlarm_Commands",
							  	"fromRole": "HistoryAlarm_Commands_Source",
							  	"toRole": "HistoryAlarm_Commands_Target"
							  },
							  {
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryAlarm_MyCommand",
							  	"fromRole": "HistoryAlarm_MyCommand_Source",
							  	"toRole": "HistoryAlarm_MyCommand_Target"
							  },
							  {
							  	"name": "Unit",
							  	"relationship": "Self.HistoryUnit_Alarms",
							  	"fromRole": "HistoryUnit_Alarms_Target",
							  	"toRole": "HistoryUnit_Alarms_Source"
							  },
							  {
							  	"name": "Values",
							  	"relationship": "Self.HistoryAlarmValue_Alarm",
							  	"fromRole": "HistoryAlarmValue_Alarm_Target",
							  	"toRole": "HistoryAlarmValue_Alarm_Source"
							  }
						  	],
						  	"IdProperty": null,
						  	"Of": "RuntimeAlarm",
						  	"commonName": "HistoryAlarm",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "AlarmOccurrence",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Database.AlarmOccurrence, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "Active",
							  	"type": "Edm.DateTime"
							  },
							  {
							  	"name": "Complete",
							  	"type": "Edm.DateTime"
							  },
							  {
							  	"name": "Acknowledged",
							  	"type": "Edm.DateTime"
							  },
							  {
							  	"name": "AlarmId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "IsCurrent",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"relationship": "Self.AlarmOccurrence_Alarm",
							  	"fromRole": "AlarmOccurrence_Alarm_Source",
							  	"toRole": "AlarmOccurrence_Alarm_Target"
							  },
							  {
							  	"name": "MyCommand",
							  	"relationship": "Self.AlarmOccurrence_MyCommand",
							  	"fromRole": "AlarmOccurrence_MyCommand_Source",
							  	"toRole": "AlarmOccurrence_MyCommand_Target"
							  }
						  	],
						  	"IdProperty": "Id",
						  	"Of": null,
						  	"commonName": "AlarmOccurrence",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryCommandInstanceValue",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Security.HistoryCommandInstanceValue, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "CommandId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
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
							  	"name": "ConfigurationParentType",
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
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"relationship": "Self.HistoryCommandInstanceValue_Command",
							  	"fromRole": "HistoryCommandInstanceValue_Command_Source",
							  	"toRole": "HistoryCommandInstanceValue_Command_Target"
							  },
							  {
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryCommandInstanceValue_MyCommand",
							  	"fromRole": "HistoryCommandInstanceValue_MyCommand_Source",
							  	"toRole": "HistoryCommandInstanceValue_MyCommand_Target"
							  }
						  	],
						  	"IdProperty": "Id",
						  	"Of": "RuntimeCommandInstanceValue",
						  	"commonName": "HistoryCommandInstanceValue",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryCommandInstance",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Security.HistoryCommandInstance, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "Type",
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
							  	"name": "Error",
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
							  	"name": "RuntimeId",
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
							  	"name": "ConfigurationParentType",
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
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"relationship": "Self.HistoryCommandInstance_Command",
							  	"fromRole": "HistoryCommandInstance_Command_Source",
							  	"toRole": "HistoryCommandInstance_Command_Target"
							  },
							  {
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryCommandInstance_MyCommand",
							  	"fromRole": "HistoryCommandInstance_MyCommand_Source",
							  	"toRole": "HistoryCommandInstance_MyCommand_Target"
							  },
							  {
							  	"name": "Signatures",
							  	"relationship": "Self.HistoryCommandInstanceSignature_Command",
							  	"fromRole": "HistoryCommandInstanceSignature_Command_Target",
							  	"toRole": "HistoryCommandInstanceSignature_Command_Source"
							  },
							  {
							  	"name": "Values",
							  	"relationship": "Self.HistoryCommandInstanceValue_Command",
							  	"fromRole": "HistoryCommandInstanceValue_Command_Target",
							  	"toRole": "HistoryCommandInstanceValue_Command_Source"
							  }
						  	],
						  	"IdProperty": "Id",
						  	"Of": "RuntimeCommandInstance",
						  	"commonName": "HistoryCommandInstance",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryCommand",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Security.HistoryCommand, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "RuntimeId",
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
							  	"name": "ConfigurationParentType",
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
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"name": "CommandInstances",
							  	"relationship": "Self.HistoryCommandInstance_Command",
							  	"fromRole": "HistoryCommandInstance_Command_Target",
							  	"toRole": "HistoryCommandInstance_Command_Source"
							  },
							  {
							  	"name": "Commands",
							  	"relationship": "Self.HistoryCommandCommand_Command",
							  	"fromRole": "HistoryCommandCommand_Command_Target",
							  	"toRole": "HistoryCommandCommand_Command_Source"
							  },
							  {
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryCommand_MyCommand",
							  	"fromRole": "HistoryCommand_MyCommand_Source",
							  	"toRole": "HistoryCommand_MyCommand_Target"
							  }
						  	],
						  	"IdProperty": null,
						  	"Of": "RuntimeCommand",
						  	"commonName": "HistoryCommand",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryCommandCommand",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Security.HistoryCommandCommand, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "CommandInstanceId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "CommandId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "IsCurrent",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"relationship": "Self.HistoryCommandCommand_Command",
							  	"fromRole": "HistoryCommandCommand_Command_Source",
							  	"toRole": "HistoryCommandCommand_Command_Target"
							  },
							  {
							  	"name": "CommandInstance",
							  	"relationship": "Self.HistoryCommandCommand_CommandInstance",
							  	"fromRole": "HistoryCommandCommand_CommandInstance_Source",
							  	"toRole": "HistoryCommandCommand_CommandInstance_Target"
							  },
							  {
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryCommandCommand_MyCommand",
							  	"fromRole": "HistoryCommandCommand_MyCommand_Source",
							  	"toRole": "HistoryCommandCommand_MyCommand_Target"
							  }
						  	],
						  	"IdProperty": "Id",
						  	"Of": null,
						  	"commonName": "HistoryCommandCommand",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryCommandInstanceSignature",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Security.HistoryCommandInstanceSignature, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "Group",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Result",
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
							  	"name": "UserName",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "IsComplete",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
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
							  	"name": "ConfigurationId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
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
							  	"name": "ConfigurationParentType",
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
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"relationship": "Self.HistoryCommandInstanceSignature_Command",
							  	"fromRole": "HistoryCommandInstanceSignature_Command_Source",
							  	"toRole": "HistoryCommandInstanceSignature_Command_Target"
							  },
							  {
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryCommandInstanceSignature_MyCommand",
							  	"fromRole": "HistoryCommandInstanceSignature_MyCommand_Source",
							  	"toRole": "HistoryCommandInstanceSignature_MyCommand_Target"
							  },
							  {
							  	"name": "Signature",
							  	"relationship": "Self.HistoryCommandInstanceSignature_Signature",
							  	"fromRole": "HistoryCommandInstanceSignature_Signature_Source",
							  	"toRole": "HistoryCommandInstanceSignature_Signature_Target"
							  }
						  	],
						  	"IdProperty": "Id",
						  	"Of": "RuntimeCommandInstanceSignature",
						  	"commonName": "HistoryCommandInstanceSignature",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistorySignature",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Security.HistorySignature, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "ConfigurationId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
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
							  	"name": "ConfigurationParentType",
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
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"name": "Group",
							  	"relationship": "Self.HistorySignature_Group",
							  	"fromRole": "HistorySignature_Group_Source",
							  	"toRole": "HistorySignature_Group_Target"
							  },
							  {
							  	"name": "MyCommand",
							  	"relationship": "Self.HistorySignature_MyCommand",
							  	"fromRole": "HistorySignature_MyCommand_Source",
							  	"toRole": "HistorySignature_MyCommand_Target"
							  },
							  {
							  	"name": "ZoneClearance",
							  	"relationship": "Self.HistoryZoneClearance_Signatures",
							  	"fromRole": "HistoryZoneClearance_Signatures_Target",
							  	"toRole": "HistoryZoneClearance_Signatures_Source"
							  }
						  	],
						  	"IdProperty": null,
						  	"Of": "RuntimeSignature",
						  	"commonName": "HistorySignature",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryGroup",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Security.HistoryGroup, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "ConfigurationId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
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
							  	"name": "ConfigurationParentType",
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
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryGroup_MyCommand",
							  	"fromRole": "HistoryGroup_MyCommand_Source",
							  	"toRole": "HistoryGroup_MyCommand_Target"
							  },
							  {
							  	"name": "Signatures",
							  	"relationship": "Self.HistorySignature_Group",
							  	"fromRole": "HistorySignature_Group_Target",
							  	"toRole": "HistorySignature_Group_Source"
							  },
							  {
							  	"name": "Zone",
							  	"relationship": "Self.HistoryGroup_Zone",
							  	"fromRole": "HistoryGroup_Zone_Source",
							  	"toRole": "HistoryGroup_Zone_Target"
							  }
						  	],
						  	"IdProperty": null,
						  	"Of": "RuntimeGroup",
						  	"commonName": "HistoryGroup",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryZone",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Equipment.HistoryZone, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "RuntimeId",
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
							  	"name": "ConfigurationParentType",
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
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"relationship": "Self.HistoryBatch_Zone",
							  	"fromRole": "HistoryBatch_Zone_Target",
							  	"toRole": "HistoryBatch_Zone_Source"
							  },
							  {
							  	"name": "CommandClearances",
							  	"relationship": "Self.HistoryCommandClearance_Zone",
							  	"fromRole": "HistoryCommandClearance_Zone_Target",
							  	"toRole": "HistoryCommandClearance_Zone_Source"
							  },
							  {
							  	"name": "Commands",
							  	"relationship": "Self.HistoryZoneCommand_Zone",
							  	"fromRole": "HistoryZoneCommand_Zone_Target",
							  	"toRole": "HistoryZoneCommand_Zone_Source"
							  },
							  {
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryZone_MyCommand",
							  	"fromRole": "HistoryZone_MyCommand_Source",
							  	"toRole": "HistoryZone_MyCommand_Target"
							  },
							  {
							  	"name": "Site",
							  	"relationship": "Self.HistorySite_Zones",
							  	"fromRole": "HistorySite_Zones_Target",
							  	"toRole": "HistorySite_Zones_Source"
							  },
							  {
							  	"name": "Units",
							  	"relationship": "Self.HistoryUnit_Zone",
							  	"fromRole": "HistoryUnit_Zone_Target",
							  	"toRole": "HistoryUnit_Zone_Source"
							  },
							  {
							  	"name": "ZoneClearances",
							  	"relationship": "Self.HistoryZoneClearance_Zone",
							  	"fromRole": "HistoryZoneClearance_Zone_Target",
							  	"toRole": "HistoryZoneClearance_Zone_Source"
							  }
						  	],
						  	"IdProperty": null,
						  	"Of": "RuntimeZone",
						  	"commonName": "HistoryZone",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryBatch",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Batches.HistoryBatch, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "RuntimeId",
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
							  	"name": "ConfigurationParentType",
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
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"relationship": "Self.HistoryBatchCommand_Batch",
							  	"fromRole": "HistoryBatchCommand_Batch_Target",
							  	"toRole": "HistoryBatchCommand_Batch_Source"
							  },
							  {
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryBatch_MyCommand",
							  	"fromRole": "HistoryBatch_MyCommand_Source",
							  	"toRole": "HistoryBatch_MyCommand_Target"
							  },
							  {
							  	"name": "States",
							  	"relationship": "Self.HistoryBatchState_Batch",
							  	"fromRole": "HistoryBatchState_Batch_Target",
							  	"toRole": "HistoryBatchState_Batch_Source"
							  },
							  {
							  	"name": "UnitProcedures",
							  	"relationship": "Self.HistoryUnitProcedure_Batch",
							  	"fromRole": "HistoryUnitProcedure_Batch_Target",
							  	"toRole": "HistoryUnitProcedure_Batch_Source"
							  },
							  {
							  	"name": "Zone",
							  	"relationship": "Self.HistoryBatch_Zone",
							  	"fromRole": "HistoryBatch_Zone_Source",
							  	"toRole": "HistoryBatch_Zone_Target"
							  }
						  	],
						  	"IdProperty": null,
						  	"Of": "Batch",
						  	"commonName": "HistoryBatch",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryBatchCommand",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Batches.HistoryBatchCommand, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "CommandInstanceId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "BatchId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "IsCurrent",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"name": "Batch",
							  	"relationship": "Self.HistoryBatchCommand_Batch",
							  	"fromRole": "HistoryBatchCommand_Batch_Source",
							  	"toRole": "HistoryBatchCommand_Batch_Target"
							  },
							  {
							  	"name": "CommandInstance",
							  	"relationship": "Self.HistoryBatchCommand_CommandInstance",
							  	"fromRole": "HistoryBatchCommand_CommandInstance_Source",
							  	"toRole": "HistoryBatchCommand_CommandInstance_Target"
							  },
							  {
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryBatchCommand_MyCommand",
							  	"fromRole": "HistoryBatchCommand_MyCommand_Source",
							  	"toRole": "HistoryBatchCommand_MyCommand_Target"
							  }
						  	],
						  	"IdProperty": "Id",
						  	"Of": null,
						  	"commonName": "HistoryBatchCommand",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryBatchState",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Batches.HistoryBatchState, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "State",
							  	"type": "Edm.Self.BatchState",
							  	"nullable": "false"
							  },
							  {
							  	"name": "BatchId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "IsCurrent",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"name": "Batch",
							  	"relationship": "Self.HistoryBatchState_Batch",
							  	"fromRole": "HistoryBatchState_Batch_Source",
							  	"toRole": "HistoryBatchState_Batch_Target"
							  },
							  {
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryBatchState_MyCommand",
							  	"fromRole": "HistoryBatchState_MyCommand_Source",
							  	"toRole": "HistoryBatchState_MyCommand_Target"
							  }
						  	],
						  	"IdProperty": "Id",
						  	"Of": null,
						  	"commonName": "HistoryBatchState",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryUnitProcedure",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Batches.HistoryUnitProcedure, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "Started",
							  	"type": "Edm.DateTime"
							  },
							  {
							  	"name": "Completed",
							  	"type": "Edm.DateTime"
							  },
							  {
							  	"name": "ConfigurationId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
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
							  	"name": "ConfigurationParentType",
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
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"name": "Batch",
							  	"relationship": "Self.HistoryUnitProcedure_Batch",
							  	"fromRole": "HistoryUnitProcedure_Batch_Source",
							  	"toRole": "HistoryUnitProcedure_Batch_Target"
							  },
							  {
							  	"name": "Commands",
							  	"relationship": "Self.HistoryUnitProcedureCommand_UnitProcedure",
							  	"fromRole": "HistoryUnitProcedureCommand_UnitProcedure_Target",
							  	"toRole": "HistoryUnitProcedureCommand_UnitProcedure_Source"
							  },
							  {
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryUnitProcedure_MyCommand",
							  	"fromRole": "HistoryUnitProcedure_MyCommand_Source",
							  	"toRole": "HistoryUnitProcedure_MyCommand_Target"
							  },
							  {
							  	"name": "States",
							  	"relationship": "Self.HistoryUnitProcedureState_UnitProcedure",
							  	"fromRole": "HistoryUnitProcedureState_UnitProcedure_Target",
							  	"toRole": "HistoryUnitProcedureState_UnitProcedure_Source"
							  },
							  {
							  	"name": "Steps",
							  	"relationship": "Self.HistoryStep_UnitProcedure",
							  	"fromRole": "HistoryStep_UnitProcedure_Target",
							  	"toRole": "HistoryStep_UnitProcedure_Source"
							  },
							  {
							  	"name": "Unit",
							  	"relationship": "Self.HistoryUnitProcedure_Unit",
							  	"fromRole": "HistoryUnitProcedure_Unit_Source",
							  	"toRole": "HistoryUnitProcedure_Unit_Target"
							  }
						  	],
						  	"IdProperty": null,
						  	"Of": "RuntimeUnitProcedure",
						  	"commonName": "HistoryUnitProcedure",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryUnitProcedureCommand",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Batches.HistoryUnitProcedureCommand, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "CommandInstanceId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UnitProcedureId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "IsCurrent",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"name": "CommandInstance",
							  	"relationship": "Self.HistoryUnitProcedureCommand_CommandInstance",
							  	"fromRole": "HistoryUnitProcedureCommand_CommandInstance_Source",
							  	"toRole": "HistoryUnitProcedureCommand_CommandInstance_Target"
							  },
							  {
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryUnitProcedureCommand_MyCommand",
							  	"fromRole": "HistoryUnitProcedureCommand_MyCommand_Source",
							  	"toRole": "HistoryUnitProcedureCommand_MyCommand_Target"
							  },
							  {
							  	"name": "UnitProcedure",
							  	"relationship": "Self.HistoryUnitProcedureCommand_UnitProcedure",
							  	"fromRole": "HistoryUnitProcedureCommand_UnitProcedure_Source",
							  	"toRole": "HistoryUnitProcedureCommand_UnitProcedure_Target"
							  }
						  	],
						  	"IdProperty": "Id",
						  	"Of": null,
						  	"commonName": "HistoryUnitProcedureCommand",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryUnitProcedureState",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Batches.HistoryUnitProcedureState, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "State",
							  	"type": "Edm.Self.UnitProcedureState",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UnitProcedureId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "IsCurrent",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryUnitProcedureState_MyCommand",
							  	"fromRole": "HistoryUnitProcedureState_MyCommand_Source",
							  	"toRole": "HistoryUnitProcedureState_MyCommand_Target"
							  },
							  {
							  	"name": "UnitProcedure",
							  	"relationship": "Self.HistoryUnitProcedureState_UnitProcedure",
							  	"fromRole": "HistoryUnitProcedureState_UnitProcedure_Source",
							  	"toRole": "HistoryUnitProcedureState_UnitProcedure_Target"
							  }
						  	],
						  	"IdProperty": "Id",
						  	"Of": null,
						  	"commonName": "HistoryUnitProcedureState",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryStep",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Batches.HistoryStep, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "Started",
							  	"type": "Edm.DateTime"
							  },
							  {
							  	"name": "Completed",
							  	"type": "Edm.DateTime"
							  },
							  {
							  	"name": "OperationId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
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
							  	"name": "ConfigurationParentType",
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
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"relationship": "Self.HistoryBoolStepFormula_Step",
							  	"fromRole": "HistoryBoolStepFormula_Step_Target",
							  	"toRole": "HistoryBoolStepFormula_Step_Source"
							  },
							  {
							  	"name": "Commands",
							  	"relationship": "Self.HistoryStepCommand_Step",
							  	"fromRole": "HistoryStepCommand_Step_Target",
							  	"toRole": "HistoryStepCommand_Step_Source"
							  },
							  {
							  	"name": "DoubleStepFormulae",
							  	"relationship": "Self.HistoryDoubleStepFormula_Step",
							  	"fromRole": "HistoryDoubleStepFormula_Step_Target",
							  	"toRole": "HistoryDoubleStepFormula_Step_Source"
							  },
							  {
							  	"name": "IntegerStepFormulae",
							  	"relationship": "Self.HistoryIntegerStepFormula_Step",
							  	"fromRole": "HistoryIntegerStepFormula_Step_Target",
							  	"toRole": "HistoryIntegerStepFormula_Step_Source"
							  },
							  {
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryStep_MyCommand",
							  	"fromRole": "HistoryStep_MyCommand_Source",
							  	"toRole": "HistoryStep_MyCommand_Target"
							  },
							  {
							  	"name": "Operation",
							  	"relationship": "Self.HistoryStep_Operation",
							  	"fromRole": "HistoryStep_Operation_Source",
							  	"toRole": "HistoryStep_Operation_Target"
							  },
							  {
							  	"name": "States",
							  	"relationship": "Self.HistoryStepState_Step",
							  	"fromRole": "HistoryStepState_Step_Target",
							  	"toRole": "HistoryStepState_Step_Source"
							  },
							  {
							  	"name": "StepReports",
							  	"relationship": "Self.HistoryStepReport_Step",
							  	"fromRole": "HistoryStepReport_Step_Target",
							  	"toRole": "HistoryStepReport_Step_Source"
							  },
							  {
							  	"name": "StringStepFormulae",
							  	"relationship": "Self.HistoryStringStepFormula_Step",
							  	"fromRole": "HistoryStringStepFormula_Step_Target",
							  	"toRole": "HistoryStringStepFormula_Step_Source"
							  },
							  {
							  	"name": "UnitProcedure",
							  	"relationship": "Self.HistoryStep_UnitProcedure",
							  	"fromRole": "HistoryStep_UnitProcedure_Source",
							  	"toRole": "HistoryStep_UnitProcedure_Target"
							  }
						  	],
						  	"IdProperty": null,
						  	"Of": "Step",
						  	"commonName": "HistoryStep",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryBoolStepFormula",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Batches.Formulae.HistoryBoolStepFormula, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "Index",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "NodeId",
							  	"type": "Edm.Int32"
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
							  	"name": "RuntimeId",
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
							  	"name": "ConfigurationParentType",
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
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"relationship": "Self.HistoryBoolStepFormulaCommand_StepFormula",
							  	"fromRole": "HistoryBoolStepFormulaCommand_StepFormula_Target",
							  	"toRole": "HistoryBoolStepFormulaCommand_StepFormula_Source"
							  },
							  {
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryBoolStepFormula_MyCommand",
							  	"fromRole": "HistoryBoolStepFormula_MyCommand_Source",
							  	"toRole": "HistoryBoolStepFormula_MyCommand_Target"
							  },
							  {
							  	"name": "Parameter",
							  	"relationship": "Self.HistoryBoolStepFormula_Parameter",
							  	"fromRole": "HistoryBoolStepFormula_Parameter_Source",
							  	"toRole": "HistoryBoolStepFormula_Parameter_Target"
							  },
							  {
							  	"name": "States",
							  	"relationship": "Self.HistoryBoolStepFormulaState_StepFormula",
							  	"fromRole": "HistoryBoolStepFormulaState_StepFormula_Target",
							  	"toRole": "HistoryBoolStepFormulaState_StepFormula_Source"
							  },
							  {
							  	"name": "Step",
							  	"relationship": "Self.HistoryBoolStepFormula_Step",
							  	"fromRole": "HistoryBoolStepFormula_Step_Source",
							  	"toRole": "HistoryBoolStepFormula_Step_Target"
							  },
							  {
							  	"name": "Values",
							  	"relationship": "Self.HistoryBoolStepFormulaValue_StepFormula",
							  	"fromRole": "HistoryBoolStepFormulaValue_StepFormula_Target",
							  	"toRole": "HistoryBoolStepFormulaValue_StepFormula_Source"
							  }
						  	],
						  	"IdProperty": null,
						  	"Of": "BoolStepFormula",
						  	"commonName": "HistoryBoolStepFormula",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryBoolStepFormulaCommand",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Batches.Formulae.HistoryBoolStepFormulaCommand, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "CommandInstanceId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "StepFormulaId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "IsCurrent",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"name": "CommandInstance",
							  	"relationship": "Self.HistoryBoolStepFormulaCommand_CommandInstance",
							  	"fromRole": "HistoryBoolStepFormulaCommand_CommandInstance_Source",
							  	"toRole": "HistoryBoolStepFormulaCommand_CommandInstance_Target"
							  },
							  {
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryBoolStepFormulaCommand_MyCommand",
							  	"fromRole": "HistoryBoolStepFormulaCommand_MyCommand_Source",
							  	"toRole": "HistoryBoolStepFormulaCommand_MyCommand_Target"
							  },
							  {
							  	"name": "StepFormula",
							  	"relationship": "Self.HistoryBoolStepFormulaCommand_StepFormula",
							  	"fromRole": "HistoryBoolStepFormulaCommand_StepFormula_Source",
							  	"toRole": "HistoryBoolStepFormulaCommand_StepFormula_Target"
							  }
						  	],
						  	"IdProperty": "Id",
						  	"Of": null,
						  	"commonName": "HistoryBoolStepFormulaCommand",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryBoolParameter",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Equipment.Parameters.HistoryBoolParameter, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "Index",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "NodeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ConfigurationId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
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
							  	"name": "ConfigurationParentType",
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
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"relationship": "Self.HistoryBoolParameterCommand_Parameter",
							  	"fromRole": "HistoryBoolParameterCommand_Parameter_Target",
							  	"toRole": "HistoryBoolParameterCommand_Parameter_Source"
							  },
							  {
							  	"name": "Enumerations",
							  	"relationship": "Self.HistoryBoolEnumeration_Parameter",
							  	"fromRole": "HistoryBoolEnumeration_Parameter_Target",
							  	"toRole": "HistoryBoolEnumeration_Parameter_Source"
							  },
							  {
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryBoolParameter_MyCommand",
							  	"fromRole": "HistoryBoolParameter_MyCommand_Source",
							  	"toRole": "HistoryBoolParameter_MyCommand_Target"
							  },
							  {
							  	"name": "Operation",
							  	"relationship": "Self.HistoryOperation_BoolParameters",
							  	"fromRole": "HistoryOperation_BoolParameters_Target",
							  	"toRole": "HistoryOperation_BoolParameters_Source"
							  },
							  {
							  	"name": "States",
							  	"relationship": "Self.HistoryBoolParameterState_Parameter",
							  	"fromRole": "HistoryBoolParameterState_Parameter_Target",
							  	"toRole": "HistoryBoolParameterState_Parameter_Source"
							  },
							  {
							  	"name": "StepFormulae",
							  	"relationship": "Self.HistoryBoolStepFormula_Parameter",
							  	"fromRole": "HistoryBoolStepFormula_Parameter_Target",
							  	"toRole": "HistoryBoolStepFormula_Parameter_Source"
							  },
							  {
							  	"name": "Values",
							  	"relationship": "Self.HistoryBoolParameterValue_Parameter",
							  	"fromRole": "HistoryBoolParameterValue_Parameter_Target",
							  	"toRole": "HistoryBoolParameterValue_Parameter_Source"
							  }
						  	],
						  	"IdProperty": null,
						  	"Of": "RuntimeBoolParameter",
						  	"commonName": "HistoryBoolParameter",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryBoolParameterCommand",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Equipment.Parameters.HistoryBoolParameterCommand, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "CommandInstanceId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ParameterId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "IsCurrent",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"name": "CommandInstance",
							  	"relationship": "Self.HistoryBoolParameterCommand_CommandInstance",
							  	"fromRole": "HistoryBoolParameterCommand_CommandInstance_Source",
							  	"toRole": "HistoryBoolParameterCommand_CommandInstance_Target"
							  },
							  {
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryBoolParameterCommand_MyCommand",
							  	"fromRole": "HistoryBoolParameterCommand_MyCommand_Source",
							  	"toRole": "HistoryBoolParameterCommand_MyCommand_Target"
							  },
							  {
							  	"name": "Parameter",
							  	"relationship": "Self.HistoryBoolParameterCommand_Parameter",
							  	"fromRole": "HistoryBoolParameterCommand_Parameter_Source",
							  	"toRole": "HistoryBoolParameterCommand_Parameter_Target"
							  }
						  	],
						  	"IdProperty": "Id",
						  	"Of": null,
						  	"commonName": "HistoryBoolParameterCommand",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryBoolEnumeration",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Equipment.Parameters.Enumerations.HistoryBoolEnumeration, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "Value",
							  	"type": "Edm.Boolean"
							  },
							  {
							  	"name": "ParameterId",
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
							  	"name": "RuntimeId",
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
							  	"name": "ConfigurationParentType",
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
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"relationship": "Self.HistoryBoolEnumerationCommand_Enumeration",
							  	"fromRole": "HistoryBoolEnumerationCommand_Enumeration_Target",
							  	"toRole": "HistoryBoolEnumerationCommand_Enumeration_Source"
							  },
							  {
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryBoolEnumeration_MyCommand",
							  	"fromRole": "HistoryBoolEnumeration_MyCommand_Source",
							  	"toRole": "HistoryBoolEnumeration_MyCommand_Target"
							  },
							  {
							  	"name": "Parameter",
							  	"relationship": "Self.HistoryBoolEnumeration_Parameter",
							  	"fromRole": "HistoryBoolEnumeration_Parameter_Source",
							  	"toRole": "HistoryBoolEnumeration_Parameter_Target"
							  }
						  	],
						  	"IdProperty": null,
						  	"Of": "RuntimeBoolEnumeration",
						  	"commonName": "HistoryBoolEnumeration",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryBoolEnumerationCommand",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Equipment.Parameters.Enumerations.HistoryBoolEnumerationCommand, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "CommandInstanceId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "EnumerationId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "IsCurrent",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"name": "CommandInstance",
							  	"relationship": "Self.HistoryBoolEnumerationCommand_CommandInstance",
							  	"fromRole": "HistoryBoolEnumerationCommand_CommandInstance_Source",
							  	"toRole": "HistoryBoolEnumerationCommand_CommandInstance_Target"
							  },
							  {
							  	"name": "Enumeration",
							  	"relationship": "Self.HistoryBoolEnumerationCommand_Enumeration",
							  	"fromRole": "HistoryBoolEnumerationCommand_Enumeration_Source",
							  	"toRole": "HistoryBoolEnumerationCommand_Enumeration_Target"
							  },
							  {
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryBoolEnumerationCommand_MyCommand",
							  	"fromRole": "HistoryBoolEnumerationCommand_MyCommand_Source",
							  	"toRole": "HistoryBoolEnumerationCommand_MyCommand_Target"
							  }
						  	],
						  	"IdProperty": "Id",
						  	"Of": null,
						  	"commonName": "HistoryBoolEnumerationCommand",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryOperation",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Equipment.HistoryOperation, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "RuntimeId",
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
							  	"name": "ConfigurationParentType",
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
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"relationship": "Self.HistoryOperation_BoolParameters",
							  	"fromRole": "HistoryOperation_BoolParameters_Source",
							  	"toRole": "HistoryOperation_BoolParameters_Target"
							  },
							  {
							  	"name": "Commands",
							  	"relationship": "Self.HistoryOperationCommand_Operation",
							  	"fromRole": "HistoryOperationCommand_Operation_Target",
							  	"toRole": "HistoryOperationCommand_Operation_Source"
							  },
							  {
							  	"name": "DoubleParameters",
							  	"relationship": "Self.HistoryDoubleParameter_Operation",
							  	"fromRole": "HistoryDoubleParameter_Operation_Target",
							  	"toRole": "HistoryDoubleParameter_Operation_Source"
							  },
							  {
							  	"name": "IntegerParameters",
							  	"relationship": "Self.HistoryIntegerParameter_Operation",
							  	"fromRole": "HistoryIntegerParameter_Operation_Target",
							  	"toRole": "HistoryIntegerParameter_Operation_Source"
							  },
							  {
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryOperation_MyCommand",
							  	"fromRole": "HistoryOperation_MyCommand_Source",
							  	"toRole": "HistoryOperation_MyCommand_Target"
							  },
							  {
							  	"name": "Reports",
							  	"relationship": "Self.HistoryReport_Operation",
							  	"fromRole": "HistoryReport_Operation_Target",
							  	"toRole": "HistoryReport_Operation_Source"
							  },
							  {
							  	"name": "Steps",
							  	"relationship": "Self.HistoryStep_Operation",
							  	"fromRole": "HistoryStep_Operation_Target",
							  	"toRole": "HistoryStep_Operation_Source"
							  },
							  {
							  	"name": "StringParameters",
							  	"relationship": "Self.HistoryStringParameter_Operation",
							  	"fromRole": "HistoryStringParameter_Operation_Target",
							  	"toRole": "HistoryStringParameter_Operation_Source"
							  },
							  {
							  	"name": "Unit",
							  	"relationship": "Self.HistoryUnit_Operations",
							  	"fromRole": "HistoryUnit_Operations_Target",
							  	"toRole": "HistoryUnit_Operations_Source"
							  }
						  	],
						  	"IdProperty": null,
						  	"Of": "RuntimeOperation",
						  	"commonName": "HistoryOperation",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryOperationCommand",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Equipment.HistoryOperationCommand, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "CommandInstanceId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "OperationId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "IsCurrent",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"name": "CommandInstance",
							  	"relationship": "Self.HistoryOperationCommand_CommandInstance",
							  	"fromRole": "HistoryOperationCommand_CommandInstance_Source",
							  	"toRole": "HistoryOperationCommand_CommandInstance_Target"
							  },
							  {
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryOperationCommand_MyCommand",
							  	"fromRole": "HistoryOperationCommand_MyCommand_Source",
							  	"toRole": "HistoryOperationCommand_MyCommand_Target"
							  },
							  {
							  	"name": "Operation",
							  	"relationship": "Self.HistoryOperationCommand_Operation",
							  	"fromRole": "HistoryOperationCommand_Operation_Source",
							  	"toRole": "HistoryOperationCommand_Operation_Target"
							  }
						  	],
						  	"IdProperty": "Id",
						  	"Of": null,
						  	"commonName": "HistoryOperationCommand",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryDoubleParameter",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Equipment.Parameters.HistoryDoubleParameter, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "Index",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "NodeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ConfigurationId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
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
							  	"name": "ConfigurationParentType",
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
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"relationship": "Self.HistoryDoubleParameterCommand_Parameter",
							  	"fromRole": "HistoryDoubleParameterCommand_Parameter_Target",
							  	"toRole": "HistoryDoubleParameterCommand_Parameter_Source"
							  },
							  {
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryDoubleParameter_MyCommand",
							  	"fromRole": "HistoryDoubleParameter_MyCommand_Source",
							  	"toRole": "HistoryDoubleParameter_MyCommand_Target"
							  },
							  {
							  	"name": "Operation",
							  	"relationship": "Self.HistoryDoubleParameter_Operation",
							  	"fromRole": "HistoryDoubleParameter_Operation_Source",
							  	"toRole": "HistoryDoubleParameter_Operation_Target"
							  },
							  {
							  	"name": "States",
							  	"relationship": "Self.HistoryDoubleParameterState_Parameter",
							  	"fromRole": "HistoryDoubleParameterState_Parameter_Target",
							  	"toRole": "HistoryDoubleParameterState_Parameter_Source"
							  },
							  {
							  	"name": "StepFormulae",
							  	"relationship": "Self.HistoryDoubleStepFormula_Parameter",
							  	"fromRole": "HistoryDoubleStepFormula_Parameter_Target",
							  	"toRole": "HistoryDoubleStepFormula_Parameter_Source"
							  },
							  {
							  	"name": "Values",
							  	"relationship": "Self.HistoryDoubleParameterValue_Parameter",
							  	"fromRole": "HistoryDoubleParameterValue_Parameter_Target",
							  	"toRole": "HistoryDoubleParameterValue_Parameter_Source"
							  }
						  	],
						  	"IdProperty": null,
						  	"Of": "RuntimeDoubleParameter",
						  	"commonName": "HistoryDoubleParameter",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryDoubleParameterCommand",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Equipment.Parameters.HistoryDoubleParameterCommand, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "CommandInstanceId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ParameterId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "IsCurrent",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"name": "CommandInstance",
							  	"relationship": "Self.HistoryDoubleParameterCommand_CommandInstance",
							  	"fromRole": "HistoryDoubleParameterCommand_CommandInstance_Source",
							  	"toRole": "HistoryDoubleParameterCommand_CommandInstance_Target"
							  },
							  {
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryDoubleParameterCommand_MyCommand",
							  	"fromRole": "HistoryDoubleParameterCommand_MyCommand_Source",
							  	"toRole": "HistoryDoubleParameterCommand_MyCommand_Target"
							  },
							  {
							  	"name": "Parameter",
							  	"relationship": "Self.HistoryDoubleParameterCommand_Parameter",
							  	"fromRole": "HistoryDoubleParameterCommand_Parameter_Source",
							  	"toRole": "HistoryDoubleParameterCommand_Parameter_Target"
							  }
						  	],
						  	"IdProperty": "Id",
						  	"Of": null,
						  	"commonName": "HistoryDoubleParameterCommand",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryDoubleParameterState",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Equipment.Parameters.HistoryDoubleParameterState, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "ParameterId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "IsCurrent",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryDoubleParameterState_MyCommand",
							  	"fromRole": "HistoryDoubleParameterState_MyCommand_Source",
							  	"toRole": "HistoryDoubleParameterState_MyCommand_Target"
							  },
							  {
							  	"name": "Parameter",
							  	"relationship": "Self.HistoryDoubleParameterState_Parameter",
							  	"fromRole": "HistoryDoubleParameterState_Parameter_Source",
							  	"toRole": "HistoryDoubleParameterState_Parameter_Target"
							  }
						  	],
						  	"IdProperty": "Id",
						  	"Of": null,
						  	"commonName": "HistoryDoubleParameterState",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryDoubleStepFormula",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Batches.Formulae.HistoryDoubleStepFormula, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "Index",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "NodeId",
							  	"type": "Edm.Int32"
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
							  	"name": "RuntimeId",
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
							  	"name": "ConfigurationParentType",
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
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"relationship": "Self.HistoryDoubleStepFormulaCommand_StepFormula",
							  	"fromRole": "HistoryDoubleStepFormulaCommand_StepFormula_Target",
							  	"toRole": "HistoryDoubleStepFormulaCommand_StepFormula_Source"
							  },
							  {
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryDoubleStepFormula_MyCommand",
							  	"fromRole": "HistoryDoubleStepFormula_MyCommand_Source",
							  	"toRole": "HistoryDoubleStepFormula_MyCommand_Target"
							  },
							  {
							  	"name": "Parameter",
							  	"relationship": "Self.HistoryDoubleStepFormula_Parameter",
							  	"fromRole": "HistoryDoubleStepFormula_Parameter_Source",
							  	"toRole": "HistoryDoubleStepFormula_Parameter_Target"
							  },
							  {
							  	"name": "States",
							  	"relationship": "Self.HistoryDoubleStepFormulaState_StepFormula",
							  	"fromRole": "HistoryDoubleStepFormulaState_StepFormula_Target",
							  	"toRole": "HistoryDoubleStepFormulaState_StepFormula_Source"
							  },
							  {
							  	"name": "Step",
							  	"relationship": "Self.HistoryDoubleStepFormula_Step",
							  	"fromRole": "HistoryDoubleStepFormula_Step_Source",
							  	"toRole": "HistoryDoubleStepFormula_Step_Target"
							  },
							  {
							  	"name": "Values",
							  	"relationship": "Self.HistoryDoubleStepFormulaValue_StepFormula",
							  	"fromRole": "HistoryDoubleStepFormulaValue_StepFormula_Target",
							  	"toRole": "HistoryDoubleStepFormulaValue_StepFormula_Source"
							  }
						  	],
						  	"IdProperty": null,
						  	"Of": "DoubleStepFormula",
						  	"commonName": "HistoryDoubleStepFormula",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryDoubleStepFormulaCommand",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Batches.Formulae.HistoryDoubleStepFormulaCommand, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "CommandInstanceId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "StepFormulaId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "IsCurrent",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"name": "CommandInstance",
							  	"relationship": "Self.HistoryDoubleStepFormulaCommand_CommandInstance",
							  	"fromRole": "HistoryDoubleStepFormulaCommand_CommandInstance_Source",
							  	"toRole": "HistoryDoubleStepFormulaCommand_CommandInstance_Target"
							  },
							  {
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryDoubleStepFormulaCommand_MyCommand",
							  	"fromRole": "HistoryDoubleStepFormulaCommand_MyCommand_Source",
							  	"toRole": "HistoryDoubleStepFormulaCommand_MyCommand_Target"
							  },
							  {
							  	"name": "StepFormula",
							  	"relationship": "Self.HistoryDoubleStepFormulaCommand_StepFormula",
							  	"fromRole": "HistoryDoubleStepFormulaCommand_StepFormula_Source",
							  	"toRole": "HistoryDoubleStepFormulaCommand_StepFormula_Target"
							  }
						  	],
						  	"IdProperty": "Id",
						  	"Of": null,
						  	"commonName": "HistoryDoubleStepFormulaCommand",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryDoubleStepFormulaState",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Batches.Formulae.HistoryDoubleStepFormulaState, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "StepFormulaId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "IsCurrent",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryDoubleStepFormulaState_MyCommand",
							  	"fromRole": "HistoryDoubleStepFormulaState_MyCommand_Source",
							  	"toRole": "HistoryDoubleStepFormulaState_MyCommand_Target"
							  },
							  {
							  	"name": "StepFormula",
							  	"relationship": "Self.HistoryDoubleStepFormulaState_StepFormula",
							  	"fromRole": "HistoryDoubleStepFormulaState_StepFormula_Source",
							  	"toRole": "HistoryDoubleStepFormulaState_StepFormula_Target"
							  }
						  	],
						  	"IdProperty": "Id",
						  	"Of": null,
						  	"commonName": "HistoryDoubleStepFormulaState",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryDoubleStepFormulaValue",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Batches.Formulae.HistoryDoubleStepFormulaValue, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "Value",
							  	"type": "Edm.Double",
							  	"nullable": "false"
							  },
							  {
							  	"name": "StepFormulaId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "IsCurrent",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryDoubleStepFormulaValue_MyCommand",
							  	"fromRole": "HistoryDoubleStepFormulaValue_MyCommand_Source",
							  	"toRole": "HistoryDoubleStepFormulaValue_MyCommand_Target"
							  },
							  {
							  	"name": "StepFormula",
							  	"relationship": "Self.HistoryDoubleStepFormulaValue_StepFormula",
							  	"fromRole": "HistoryDoubleStepFormulaValue_StepFormula_Source",
							  	"toRole": "HistoryDoubleStepFormulaValue_StepFormula_Target"
							  }
						  	],
						  	"IdProperty": "Id",
						  	"Of": null,
						  	"commonName": "HistoryDoubleStepFormulaValue",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryDoubleParameterValue",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Equipment.Parameters.HistoryDoubleParameterValue, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "Value",
							  	"type": "Edm.Double"
							  },
							  {
							  	"name": "ParameterId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "IsCurrent",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryDoubleParameterValue_MyCommand",
							  	"fromRole": "HistoryDoubleParameterValue_MyCommand_Source",
							  	"toRole": "HistoryDoubleParameterValue_MyCommand_Target"
							  },
							  {
							  	"name": "Parameter",
							  	"relationship": "Self.HistoryDoubleParameterValue_Parameter",
							  	"fromRole": "HistoryDoubleParameterValue_Parameter_Source",
							  	"toRole": "HistoryDoubleParameterValue_Parameter_Target"
							  }
						  	],
						  	"IdProperty": "Id",
						  	"Of": null,
						  	"commonName": "HistoryDoubleParameterValue",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryIntegerParameter",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Equipment.Parameters.HistoryIntegerParameter, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "Index",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "NodeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ConfigurationId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
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
							  	"name": "ConfigurationParentType",
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
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"relationship": "Self.HistoryIntegerParameterCommand_Parameter",
							  	"fromRole": "HistoryIntegerParameterCommand_Parameter_Target",
							  	"toRole": "HistoryIntegerParameterCommand_Parameter_Source"
							  },
							  {
							  	"name": "Enumerations",
							  	"relationship": "Self.HistoryIntegerEnumeration_Parameter",
							  	"fromRole": "HistoryIntegerEnumeration_Parameter_Target",
							  	"toRole": "HistoryIntegerEnumeration_Parameter_Source"
							  },
							  {
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryIntegerParameter_MyCommand",
							  	"fromRole": "HistoryIntegerParameter_MyCommand_Source",
							  	"toRole": "HistoryIntegerParameter_MyCommand_Target"
							  },
							  {
							  	"name": "Operation",
							  	"relationship": "Self.HistoryIntegerParameter_Operation",
							  	"fromRole": "HistoryIntegerParameter_Operation_Source",
							  	"toRole": "HistoryIntegerParameter_Operation_Target"
							  },
							  {
							  	"name": "States",
							  	"relationship": "Self.HistoryIntegerParameterState_Parameter",
							  	"fromRole": "HistoryIntegerParameterState_Parameter_Target",
							  	"toRole": "HistoryIntegerParameterState_Parameter_Source"
							  },
							  {
							  	"name": "StepFormulae",
							  	"relationship": "Self.HistoryIntegerStepFormula_Parameter",
							  	"fromRole": "HistoryIntegerStepFormula_Parameter_Target",
							  	"toRole": "HistoryIntegerStepFormula_Parameter_Source"
							  },
							  {
							  	"name": "Values",
							  	"relationship": "Self.HistoryIntegerParameterValue_Parameter",
							  	"fromRole": "HistoryIntegerParameterValue_Parameter_Target",
							  	"toRole": "HistoryIntegerParameterValue_Parameter_Source"
							  }
						  	],
						  	"IdProperty": null,
						  	"Of": "RuntimeIntegerParameter",
						  	"commonName": "HistoryIntegerParameter",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryIntegerParameterCommand",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Equipment.Parameters.HistoryIntegerParameterCommand, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "CommandInstanceId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ParameterId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "IsCurrent",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"name": "CommandInstance",
							  	"relationship": "Self.HistoryIntegerParameterCommand_CommandInstance",
							  	"fromRole": "HistoryIntegerParameterCommand_CommandInstance_Source",
							  	"toRole": "HistoryIntegerParameterCommand_CommandInstance_Target"
							  },
							  {
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryIntegerParameterCommand_MyCommand",
							  	"fromRole": "HistoryIntegerParameterCommand_MyCommand_Source",
							  	"toRole": "HistoryIntegerParameterCommand_MyCommand_Target"
							  },
							  {
							  	"name": "Parameter",
							  	"relationship": "Self.HistoryIntegerParameterCommand_Parameter",
							  	"fromRole": "HistoryIntegerParameterCommand_Parameter_Source",
							  	"toRole": "HistoryIntegerParameterCommand_Parameter_Target"
							  }
						  	],
						  	"IdProperty": "Id",
						  	"Of": null,
						  	"commonName": "HistoryIntegerParameterCommand",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryIntegerEnumeration",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Equipment.Parameters.Enumerations.HistoryIntegerEnumeration, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "Value",
							  	"type": "Edm.Int32"
							  },
							  {
							  	"name": "ParameterId",
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
							  	"name": "RuntimeId",
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
							  	"name": "ConfigurationParentType",
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
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"relationship": "Self.HistoryIntegerEnumerationCommand_Enumeration",
							  	"fromRole": "HistoryIntegerEnumerationCommand_Enumeration_Target",
							  	"toRole": "HistoryIntegerEnumerationCommand_Enumeration_Source"
							  },
							  {
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryIntegerEnumeration_MyCommand",
							  	"fromRole": "HistoryIntegerEnumeration_MyCommand_Source",
							  	"toRole": "HistoryIntegerEnumeration_MyCommand_Target"
							  },
							  {
							  	"name": "Parameter",
							  	"relationship": "Self.HistoryIntegerEnumeration_Parameter",
							  	"fromRole": "HistoryIntegerEnumeration_Parameter_Source",
							  	"toRole": "HistoryIntegerEnumeration_Parameter_Target"
							  }
						  	],
						  	"IdProperty": null,
						  	"Of": "RuntimeIntegerEnumeration",
						  	"commonName": "HistoryIntegerEnumeration",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryIntegerEnumerationCommand",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Equipment.Parameters.Enumerations.HistoryIntegerEnumerationCommand, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "CommandInstanceId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "EnumerationId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "IsCurrent",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"name": "CommandInstance",
							  	"relationship": "Self.HistoryIntegerEnumerationCommand_CommandInstance",
							  	"fromRole": "HistoryIntegerEnumerationCommand_CommandInstance_Source",
							  	"toRole": "HistoryIntegerEnumerationCommand_CommandInstance_Target"
							  },
							  {
							  	"name": "Enumeration",
							  	"relationship": "Self.HistoryIntegerEnumerationCommand_Enumeration",
							  	"fromRole": "HistoryIntegerEnumerationCommand_Enumeration_Source",
							  	"toRole": "HistoryIntegerEnumerationCommand_Enumeration_Target"
							  },
							  {
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryIntegerEnumerationCommand_MyCommand",
							  	"fromRole": "HistoryIntegerEnumerationCommand_MyCommand_Source",
							  	"toRole": "HistoryIntegerEnumerationCommand_MyCommand_Target"
							  }
						  	],
						  	"IdProperty": "Id",
						  	"Of": null,
						  	"commonName": "HistoryIntegerEnumerationCommand",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryIntegerParameterState",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Equipment.Parameters.HistoryIntegerParameterState, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "ParameterId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "IsCurrent",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryIntegerParameterState_MyCommand",
							  	"fromRole": "HistoryIntegerParameterState_MyCommand_Source",
							  	"toRole": "HistoryIntegerParameterState_MyCommand_Target"
							  },
							  {
							  	"name": "Parameter",
							  	"relationship": "Self.HistoryIntegerParameterState_Parameter",
							  	"fromRole": "HistoryIntegerParameterState_Parameter_Source",
							  	"toRole": "HistoryIntegerParameterState_Parameter_Target"
							  }
						  	],
						  	"IdProperty": "Id",
						  	"Of": null,
						  	"commonName": "HistoryIntegerParameterState",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryIntegerStepFormula",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Batches.Formulae.HistoryIntegerStepFormula, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "Index",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "NodeId",
							  	"type": "Edm.Int32"
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
							  	"name": "RuntimeId",
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
							  	"name": "ConfigurationParentType",
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
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"relationship": "Self.HistoryIntegerStepFormulaCommand_StepFormula",
							  	"fromRole": "HistoryIntegerStepFormulaCommand_StepFormula_Target",
							  	"toRole": "HistoryIntegerStepFormulaCommand_StepFormula_Source"
							  },
							  {
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryIntegerStepFormula_MyCommand",
							  	"fromRole": "HistoryIntegerStepFormula_MyCommand_Source",
							  	"toRole": "HistoryIntegerStepFormula_MyCommand_Target"
							  },
							  {
							  	"name": "Parameter",
							  	"relationship": "Self.HistoryIntegerStepFormula_Parameter",
							  	"fromRole": "HistoryIntegerStepFormula_Parameter_Source",
							  	"toRole": "HistoryIntegerStepFormula_Parameter_Target"
							  },
							  {
							  	"name": "States",
							  	"relationship": "Self.HistoryIntegerStepFormulaState_StepFormula",
							  	"fromRole": "HistoryIntegerStepFormulaState_StepFormula_Target",
							  	"toRole": "HistoryIntegerStepFormulaState_StepFormula_Source"
							  },
							  {
							  	"name": "Step",
							  	"relationship": "Self.HistoryIntegerStepFormula_Step",
							  	"fromRole": "HistoryIntegerStepFormula_Step_Source",
							  	"toRole": "HistoryIntegerStepFormula_Step_Target"
							  },
							  {
							  	"name": "Values",
							  	"relationship": "Self.HistoryIntegerStepFormulaValue_StepFormula",
							  	"fromRole": "HistoryIntegerStepFormulaValue_StepFormula_Target",
							  	"toRole": "HistoryIntegerStepFormulaValue_StepFormula_Source"
							  }
						  	],
						  	"IdProperty": null,
						  	"Of": "IntegerStepFormula",
						  	"commonName": "HistoryIntegerStepFormula",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryIntegerStepFormulaCommand",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Batches.Formulae.HistoryIntegerStepFormulaCommand, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "CommandInstanceId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "StepFormulaId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "IsCurrent",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"name": "CommandInstance",
							  	"relationship": "Self.HistoryIntegerStepFormulaCommand_CommandInstance",
							  	"fromRole": "HistoryIntegerStepFormulaCommand_CommandInstance_Source",
							  	"toRole": "HistoryIntegerStepFormulaCommand_CommandInstance_Target"
							  },
							  {
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryIntegerStepFormulaCommand_MyCommand",
							  	"fromRole": "HistoryIntegerStepFormulaCommand_MyCommand_Source",
							  	"toRole": "HistoryIntegerStepFormulaCommand_MyCommand_Target"
							  },
							  {
							  	"name": "StepFormula",
							  	"relationship": "Self.HistoryIntegerStepFormulaCommand_StepFormula",
							  	"fromRole": "HistoryIntegerStepFormulaCommand_StepFormula_Source",
							  	"toRole": "HistoryIntegerStepFormulaCommand_StepFormula_Target"
							  }
						  	],
						  	"IdProperty": "Id",
						  	"Of": null,
						  	"commonName": "HistoryIntegerStepFormulaCommand",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryIntegerStepFormulaState",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Batches.Formulae.HistoryIntegerStepFormulaState, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "StepFormulaId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "IsCurrent",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryIntegerStepFormulaState_MyCommand",
							  	"fromRole": "HistoryIntegerStepFormulaState_MyCommand_Source",
							  	"toRole": "HistoryIntegerStepFormulaState_MyCommand_Target"
							  },
							  {
							  	"name": "StepFormula",
							  	"relationship": "Self.HistoryIntegerStepFormulaState_StepFormula",
							  	"fromRole": "HistoryIntegerStepFormulaState_StepFormula_Source",
							  	"toRole": "HistoryIntegerStepFormulaState_StepFormula_Target"
							  }
						  	],
						  	"IdProperty": "Id",
						  	"Of": null,
						  	"commonName": "HistoryIntegerStepFormulaState",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryIntegerStepFormulaValue",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Batches.Formulae.HistoryIntegerStepFormulaValue, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "Value",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "StepFormulaId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "IsCurrent",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryIntegerStepFormulaValue_MyCommand",
							  	"fromRole": "HistoryIntegerStepFormulaValue_MyCommand_Source",
							  	"toRole": "HistoryIntegerStepFormulaValue_MyCommand_Target"
							  },
							  {
							  	"name": "StepFormula",
							  	"relationship": "Self.HistoryIntegerStepFormulaValue_StepFormula",
							  	"fromRole": "HistoryIntegerStepFormulaValue_StepFormula_Source",
							  	"toRole": "HistoryIntegerStepFormulaValue_StepFormula_Target"
							  }
						  	],
						  	"IdProperty": "Id",
						  	"Of": null,
						  	"commonName": "HistoryIntegerStepFormulaValue",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryIntegerParameterValue",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Equipment.Parameters.HistoryIntegerParameterValue, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "Value",
							  	"type": "Edm.Int32"
							  },
							  {
							  	"name": "ParameterId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "IsCurrent",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryIntegerParameterValue_MyCommand",
							  	"fromRole": "HistoryIntegerParameterValue_MyCommand_Source",
							  	"toRole": "HistoryIntegerParameterValue_MyCommand_Target"
							  },
							  {
							  	"name": "Parameter",
							  	"relationship": "Self.HistoryIntegerParameterValue_Parameter",
							  	"fromRole": "HistoryIntegerParameterValue_Parameter_Source",
							  	"toRole": "HistoryIntegerParameterValue_Parameter_Target"
							  }
						  	],
						  	"IdProperty": "Id",
						  	"Of": null,
						  	"commonName": "HistoryIntegerParameterValue",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryReport",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Equipment.Parameters.HistoryReport, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "Index",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "NodeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ConfigurationId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
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
							  	"name": "ConfigurationParentType",
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
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"relationship": "Self.HistoryReportCommand_Parameter",
							  	"fromRole": "HistoryReportCommand_Parameter_Target",
							  	"toRole": "HistoryReportCommand_Parameter_Source"
							  },
							  {
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryReport_MyCommand",
							  	"fromRole": "HistoryReport_MyCommand_Source",
							  	"toRole": "HistoryReport_MyCommand_Target"
							  },
							  {
							  	"name": "Operation",
							  	"relationship": "Self.HistoryReport_Operation",
							  	"fromRole": "HistoryReport_Operation_Source",
							  	"toRole": "HistoryReport_Operation_Target"
							  },
							  {
							  	"name": "States",
							  	"relationship": "Self.HistoryReportState_Parameter",
							  	"fromRole": "HistoryReportState_Parameter_Target",
							  	"toRole": "HistoryReportState_Parameter_Source"
							  },
							  {
							  	"name": "StepFormulae",
							  	"relationship": "Self.HistoryStepReport_Parameter",
							  	"fromRole": "HistoryStepReport_Parameter_Target",
							  	"toRole": "HistoryStepReport_Parameter_Source"
							  },
							  {
							  	"name": "Values",
							  	"relationship": "Self.HistoryReportValue_Parameter",
							  	"fromRole": "HistoryReportValue_Parameter_Target",
							  	"toRole": "HistoryReportValue_Parameter_Source"
							  }
						  	],
						  	"IdProperty": null,
						  	"Of": "RuntimeReport",
						  	"commonName": "HistoryReport",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryReportCommand",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Equipment.Parameters.HistoryReportCommand, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "CommandInstanceId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ParameterId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "IsCurrent",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"name": "CommandInstance",
							  	"relationship": "Self.HistoryReportCommand_CommandInstance",
							  	"fromRole": "HistoryReportCommand_CommandInstance_Source",
							  	"toRole": "HistoryReportCommand_CommandInstance_Target"
							  },
							  {
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryReportCommand_MyCommand",
							  	"fromRole": "HistoryReportCommand_MyCommand_Source",
							  	"toRole": "HistoryReportCommand_MyCommand_Target"
							  },
							  {
							  	"name": "Parameter",
							  	"relationship": "Self.HistoryReportCommand_Parameter",
							  	"fromRole": "HistoryReportCommand_Parameter_Source",
							  	"toRole": "HistoryReportCommand_Parameter_Target"
							  }
						  	],
						  	"IdProperty": "Id",
						  	"Of": null,
						  	"commonName": "HistoryReportCommand",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryReportState",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Equipment.Parameters.HistoryReportState, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "ParameterId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "IsCurrent",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryReportState_MyCommand",
							  	"fromRole": "HistoryReportState_MyCommand_Source",
							  	"toRole": "HistoryReportState_MyCommand_Target"
							  },
							  {
							  	"name": "Parameter",
							  	"relationship": "Self.HistoryReportState_Parameter",
							  	"fromRole": "HistoryReportState_Parameter_Source",
							  	"toRole": "HistoryReportState_Parameter_Target"
							  }
						  	],
						  	"IdProperty": "Id",
						  	"Of": null,
						  	"commonName": "HistoryReportState",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryStepReport",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Batches.Formulae.HistoryStepReport, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "Index",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "NodeId",
							  	"type": "Edm.Int32"
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
							  	"name": "RuntimeId",
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
							  	"name": "ConfigurationParentType",
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
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"relationship": "Self.HistoryStepReportCommand_StepFormula",
							  	"fromRole": "HistoryStepReportCommand_StepFormula_Target",
							  	"toRole": "HistoryStepReportCommand_StepFormula_Source"
							  },
							  {
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryStepReport_MyCommand",
							  	"fromRole": "HistoryStepReport_MyCommand_Source",
							  	"toRole": "HistoryStepReport_MyCommand_Target"
							  },
							  {
							  	"name": "Parameter",
							  	"relationship": "Self.HistoryStepReport_Parameter",
							  	"fromRole": "HistoryStepReport_Parameter_Source",
							  	"toRole": "HistoryStepReport_Parameter_Target"
							  },
							  {
							  	"name": "States",
							  	"relationship": "Self.HistoryStepReportState_StepFormula",
							  	"fromRole": "HistoryStepReportState_StepFormula_Target",
							  	"toRole": "HistoryStepReportState_StepFormula_Source"
							  },
							  {
							  	"name": "Step",
							  	"relationship": "Self.HistoryStepReport_Step",
							  	"fromRole": "HistoryStepReport_Step_Source",
							  	"toRole": "HistoryStepReport_Step_Target"
							  },
							  {
							  	"name": "Values",
							  	"relationship": "Self.HistoryStepReportValue_StepFormula",
							  	"fromRole": "HistoryStepReportValue_StepFormula_Target",
							  	"toRole": "HistoryStepReportValue_StepFormula_Source"
							  }
						  	],
						  	"IdProperty": null,
						  	"Of": "StepReport",
						  	"commonName": "HistoryStepReport",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryStepReportCommand",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Batches.Formulae.HistoryStepReportCommand, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "CommandInstanceId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "StepFormulaId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "IsCurrent",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"name": "CommandInstance",
							  	"relationship": "Self.HistoryStepReportCommand_CommandInstance",
							  	"fromRole": "HistoryStepReportCommand_CommandInstance_Source",
							  	"toRole": "HistoryStepReportCommand_CommandInstance_Target"
							  },
							  {
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryStepReportCommand_MyCommand",
							  	"fromRole": "HistoryStepReportCommand_MyCommand_Source",
							  	"toRole": "HistoryStepReportCommand_MyCommand_Target"
							  },
							  {
							  	"name": "StepFormula",
							  	"relationship": "Self.HistoryStepReportCommand_StepFormula",
							  	"fromRole": "HistoryStepReportCommand_StepFormula_Source",
							  	"toRole": "HistoryStepReportCommand_StepFormula_Target"
							  }
						  	],
						  	"IdProperty": "Id",
						  	"Of": null,
						  	"commonName": "HistoryStepReportCommand",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryStepReportState",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Batches.Formulae.HistoryStepReportState, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "StepFormulaId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "IsCurrent",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryStepReportState_MyCommand",
							  	"fromRole": "HistoryStepReportState_MyCommand_Source",
							  	"toRole": "HistoryStepReportState_MyCommand_Target"
							  },
							  {
							  	"name": "StepFormula",
							  	"relationship": "Self.HistoryStepReportState_StepFormula",
							  	"fromRole": "HistoryStepReportState_StepFormula_Source",
							  	"toRole": "HistoryStepReportState_StepFormula_Target"
							  }
						  	],
						  	"IdProperty": "Id",
						  	"Of": null,
						  	"commonName": "HistoryStepReportState",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryStepReportValue",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Batches.Formulae.HistoryStepReportValue, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "Value",
							  	"type": "Edm.Double",
							  	"nullable": "false"
							  },
							  {
							  	"name": "StepFormulaId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "IsCurrent",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryStepReportValue_MyCommand",
							  	"fromRole": "HistoryStepReportValue_MyCommand_Source",
							  	"toRole": "HistoryStepReportValue_MyCommand_Target"
							  },
							  {
							  	"name": "StepFormula",
							  	"relationship": "Self.HistoryStepReportValue_StepFormula",
							  	"fromRole": "HistoryStepReportValue_StepFormula_Source",
							  	"toRole": "HistoryStepReportValue_StepFormula_Target"
							  }
						  	],
						  	"IdProperty": "Id",
						  	"Of": null,
						  	"commonName": "HistoryStepReportValue",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryReportValue",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Equipment.Parameters.HistoryReportValue, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "Value",
							  	"type": "Edm.Double"
							  },
							  {
							  	"name": "ParameterId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "IsCurrent",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryReportValue_MyCommand",
							  	"fromRole": "HistoryReportValue_MyCommand_Source",
							  	"toRole": "HistoryReportValue_MyCommand_Target"
							  },
							  {
							  	"name": "Parameter",
							  	"relationship": "Self.HistoryReportValue_Parameter",
							  	"fromRole": "HistoryReportValue_Parameter_Source",
							  	"toRole": "HistoryReportValue_Parameter_Target"
							  }
						  	],
						  	"IdProperty": "Id",
						  	"Of": null,
						  	"commonName": "HistoryReportValue",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryStringParameter",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Equipment.Parameters.HistoryStringParameter, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "Index",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "NodeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ConfigurationId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
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
							  	"name": "ConfigurationParentType",
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
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"relationship": "Self.HistoryStringParameterCommand_Parameter",
							  	"fromRole": "HistoryStringParameterCommand_Parameter_Target",
							  	"toRole": "HistoryStringParameterCommand_Parameter_Source"
							  },
							  {
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryStringParameter_MyCommand",
							  	"fromRole": "HistoryStringParameter_MyCommand_Source",
							  	"toRole": "HistoryStringParameter_MyCommand_Target"
							  },
							  {
							  	"name": "Operation",
							  	"relationship": "Self.HistoryStringParameter_Operation",
							  	"fromRole": "HistoryStringParameter_Operation_Source",
							  	"toRole": "HistoryStringParameter_Operation_Target"
							  },
							  {
							  	"name": "States",
							  	"relationship": "Self.HistoryStringParameterState_Parameter",
							  	"fromRole": "HistoryStringParameterState_Parameter_Target",
							  	"toRole": "HistoryStringParameterState_Parameter_Source"
							  },
							  {
							  	"name": "StepFormulae",
							  	"relationship": "Self.HistoryStringStepFormula_Parameter",
							  	"fromRole": "HistoryStringStepFormula_Parameter_Target",
							  	"toRole": "HistoryStringStepFormula_Parameter_Source"
							  },
							  {
							  	"name": "Values",
							  	"relationship": "Self.HistoryStringParameterValue_Parameter",
							  	"fromRole": "HistoryStringParameterValue_Parameter_Target",
							  	"toRole": "HistoryStringParameterValue_Parameter_Source"
							  }
						  	],
						  	"IdProperty": null,
						  	"Of": "RuntimeStringParameter",
						  	"commonName": "HistoryStringParameter",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryStringParameterCommand",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Equipment.Parameters.HistoryStringParameterCommand, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "CommandInstanceId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ParameterId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "IsCurrent",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"name": "CommandInstance",
							  	"relationship": "Self.HistoryStringParameterCommand_CommandInstance",
							  	"fromRole": "HistoryStringParameterCommand_CommandInstance_Source",
							  	"toRole": "HistoryStringParameterCommand_CommandInstance_Target"
							  },
							  {
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryStringParameterCommand_MyCommand",
							  	"fromRole": "HistoryStringParameterCommand_MyCommand_Source",
							  	"toRole": "HistoryStringParameterCommand_MyCommand_Target"
							  },
							  {
							  	"name": "Parameter",
							  	"relationship": "Self.HistoryStringParameterCommand_Parameter",
							  	"fromRole": "HistoryStringParameterCommand_Parameter_Source",
							  	"toRole": "HistoryStringParameterCommand_Parameter_Target"
							  }
						  	],
						  	"IdProperty": "Id",
						  	"Of": null,
						  	"commonName": "HistoryStringParameterCommand",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryStringParameterState",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Equipment.Parameters.HistoryStringParameterState, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "ParameterId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "IsCurrent",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryStringParameterState_MyCommand",
							  	"fromRole": "HistoryStringParameterState_MyCommand_Source",
							  	"toRole": "HistoryStringParameterState_MyCommand_Target"
							  },
							  {
							  	"name": "Parameter",
							  	"relationship": "Self.HistoryStringParameterState_Parameter",
							  	"fromRole": "HistoryStringParameterState_Parameter_Source",
							  	"toRole": "HistoryStringParameterState_Parameter_Target"
							  }
						  	],
						  	"IdProperty": "Id",
						  	"Of": null,
						  	"commonName": "HistoryStringParameterState",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryStringStepFormula",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Batches.Formulae.HistoryStringStepFormula, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "Index",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "NodeId",
							  	"type": "Edm.Int32"
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
							  	"name": "RuntimeId",
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
							  	"name": "ConfigurationParentType",
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
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"relationship": "Self.HistoryStringStepFormulaCommand_StepFormula",
							  	"fromRole": "HistoryStringStepFormulaCommand_StepFormula_Target",
							  	"toRole": "HistoryStringStepFormulaCommand_StepFormula_Source"
							  },
							  {
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryStringStepFormula_MyCommand",
							  	"fromRole": "HistoryStringStepFormula_MyCommand_Source",
							  	"toRole": "HistoryStringStepFormula_MyCommand_Target"
							  },
							  {
							  	"name": "Parameter",
							  	"relationship": "Self.HistoryStringStepFormula_Parameter",
							  	"fromRole": "HistoryStringStepFormula_Parameter_Source",
							  	"toRole": "HistoryStringStepFormula_Parameter_Target"
							  },
							  {
							  	"name": "States",
							  	"relationship": "Self.HistoryStringStepFormulaState_StepFormula",
							  	"fromRole": "HistoryStringStepFormulaState_StepFormula_Target",
							  	"toRole": "HistoryStringStepFormulaState_StepFormula_Source"
							  },
							  {
							  	"name": "Step",
							  	"relationship": "Self.HistoryStringStepFormula_Step",
							  	"fromRole": "HistoryStringStepFormula_Step_Source",
							  	"toRole": "HistoryStringStepFormula_Step_Target"
							  },
							  {
							  	"name": "Values",
							  	"relationship": "Self.HistoryStringStepFormulaValue_StepFormula",
							  	"fromRole": "HistoryStringStepFormulaValue_StepFormula_Target",
							  	"toRole": "HistoryStringStepFormulaValue_StepFormula_Source"
							  }
						  	],
						  	"IdProperty": null,
						  	"Of": "StringStepFormula",
						  	"commonName": "HistoryStringStepFormula",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryStringStepFormulaCommand",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Batches.Formulae.HistoryStringStepFormulaCommand, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "CommandInstanceId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "StepFormulaId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "IsCurrent",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"name": "CommandInstance",
							  	"relationship": "Self.HistoryStringStepFormulaCommand_CommandInstance",
							  	"fromRole": "HistoryStringStepFormulaCommand_CommandInstance_Source",
							  	"toRole": "HistoryStringStepFormulaCommand_CommandInstance_Target"
							  },
							  {
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryStringStepFormulaCommand_MyCommand",
							  	"fromRole": "HistoryStringStepFormulaCommand_MyCommand_Source",
							  	"toRole": "HistoryStringStepFormulaCommand_MyCommand_Target"
							  },
							  {
							  	"name": "StepFormula",
							  	"relationship": "Self.HistoryStringStepFormulaCommand_StepFormula",
							  	"fromRole": "HistoryStringStepFormulaCommand_StepFormula_Source",
							  	"toRole": "HistoryStringStepFormulaCommand_StepFormula_Target"
							  }
						  	],
						  	"IdProperty": "Id",
						  	"Of": null,
						  	"commonName": "HistoryStringStepFormulaCommand",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryStringStepFormulaState",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Batches.Formulae.HistoryStringStepFormulaState, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "StepFormulaId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "IsCurrent",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryStringStepFormulaState_MyCommand",
							  	"fromRole": "HistoryStringStepFormulaState_MyCommand_Source",
							  	"toRole": "HistoryStringStepFormulaState_MyCommand_Target"
							  },
							  {
							  	"name": "StepFormula",
							  	"relationship": "Self.HistoryStringStepFormulaState_StepFormula",
							  	"fromRole": "HistoryStringStepFormulaState_StepFormula_Source",
							  	"toRole": "HistoryStringStepFormulaState_StepFormula_Target"
							  }
						  	],
						  	"IdProperty": "Id",
						  	"Of": null,
						  	"commonName": "HistoryStringStepFormulaState",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryStringStepFormulaValue",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Batches.Formulae.HistoryStringStepFormulaValue, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "Value",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "StepFormulaId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "IsCurrent",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryStringStepFormulaValue_MyCommand",
							  	"fromRole": "HistoryStringStepFormulaValue_MyCommand_Source",
							  	"toRole": "HistoryStringStepFormulaValue_MyCommand_Target"
							  },
							  {
							  	"name": "StepFormula",
							  	"relationship": "Self.HistoryStringStepFormulaValue_StepFormula",
							  	"fromRole": "HistoryStringStepFormulaValue_StepFormula_Source",
							  	"toRole": "HistoryStringStepFormulaValue_StepFormula_Target"
							  }
						  	],
						  	"IdProperty": "Id",
						  	"Of": null,
						  	"commonName": "HistoryStringStepFormulaValue",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryStringParameterValue",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Equipment.Parameters.HistoryStringParameterValue, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "Value",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "ParameterId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "IsCurrent",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryStringParameterValue_MyCommand",
							  	"fromRole": "HistoryStringParameterValue_MyCommand_Source",
							  	"toRole": "HistoryStringParameterValue_MyCommand_Target"
							  },
							  {
							  	"name": "Parameter",
							  	"relationship": "Self.HistoryStringParameterValue_Parameter",
							  	"fromRole": "HistoryStringParameterValue_Parameter_Source",
							  	"toRole": "HistoryStringParameterValue_Parameter_Target"
							  }
						  	],
						  	"IdProperty": "Id",
						  	"Of": null,
						  	"commonName": "HistoryStringParameterValue",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryUnit",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Equipment.HistoryUnit, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "ConfigurationId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
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
							  	"name": "ConfigurationParentType",
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
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"relationship": "Self.HistoryUnit_Alarms",
							  	"fromRole": "HistoryUnit_Alarms_Source",
							  	"toRole": "HistoryUnit_Alarms_Target"
							  },
							  {
							  	"name": "BoolParameterNodes",
							  	"relationship": "Self.HistoryBoolParameterNode_Unit",
							  	"fromRole": "HistoryBoolParameterNode_Unit_Target",
							  	"toRole": "HistoryBoolParameterNode_Unit_Source"
							  },
							  {
							  	"name": "CommandNodes",
							  	"relationship": "Self.HistoryCommandNode_Unit",
							  	"fromRole": "HistoryCommandNode_Unit_Target",
							  	"toRole": "HistoryCommandNode_Unit_Source"
							  },
							  {
							  	"name": "Commands",
							  	"relationship": "Self.HistoryUnitCommand_Unit",
							  	"fromRole": "HistoryUnitCommand_Unit_Target",
							  	"toRole": "HistoryUnitCommand_Unit_Source"
							  },
							  {
							  	"name": "DataLogNodes",
							  	"relationship": "Self.HistoryDataLogNode_Unit",
							  	"fromRole": "HistoryDataLogNode_Unit_Target",
							  	"toRole": "HistoryDataLogNode_Unit_Source"
							  },
							  {
							  	"name": "DeviceInstances",
							  	"relationship": "Self.HistoryDeviceInstance_Unit",
							  	"fromRole": "HistoryDeviceInstance_Unit_Target",
							  	"toRole": "HistoryDeviceInstance_Unit_Source"
							  },
							  {
							  	"name": "DoubleParameterNodes",
							  	"relationship": "Self.HistoryDoubleParameterNode_Unit",
							  	"fromRole": "HistoryDoubleParameterNode_Unit_Target",
							  	"toRole": "HistoryDoubleParameterNode_Unit_Source"
							  },
							  {
							  	"name": "IntegerParameterNodes",
							  	"relationship": "Self.HistoryIntegerParameterNode_Unit",
							  	"fromRole": "HistoryIntegerParameterNode_Unit_Target",
							  	"toRole": "HistoryIntegerParameterNode_Unit_Source"
							  },
							  {
							  	"name": "Interfaces",
							  	"relationship": "Self.HistoryUnitInterface_Unit",
							  	"fromRole": "HistoryUnitInterface_Unit_Target",
							  	"toRole": "HistoryUnitInterface_Unit_Source"
							  },
							  {
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryUnit_MyCommand",
							  	"fromRole": "HistoryUnit_MyCommand_Source",
							  	"toRole": "HistoryUnit_MyCommand_Target"
							  },
							  {
							  	"name": "NodePages",
							  	"relationship": "Self.HistoryNodePage_Unit",
							  	"fromRole": "HistoryNodePage_Unit_Target",
							  	"toRole": "HistoryNodePage_Unit_Source"
							  },
							  {
							  	"name": "Operations",
							  	"relationship": "Self.HistoryUnit_Operations",
							  	"fromRole": "HistoryUnit_Operations_Source",
							  	"toRole": "HistoryUnit_Operations_Target"
							  },
							  {
							  	"name": "ReportNodes",
							  	"relationship": "Self.HistoryReportNode_Unit",
							  	"fromRole": "HistoryReportNode_Unit_Target",
							  	"toRole": "HistoryReportNode_Unit_Source"
							  },
							  {
							  	"name": "StateNodes",
							  	"relationship": "Self.HistoryStateNode_Unit",
							  	"fromRole": "HistoryStateNode_Unit_Target",
							  	"toRole": "HistoryStateNode_Unit_Source"
							  },
							  {
							  	"name": "States",
							  	"relationship": "Self.HistoryUnitState_Unit",
							  	"fromRole": "HistoryUnitState_Unit_Target",
							  	"toRole": "HistoryUnitState_Unit_Source"
							  },
							  {
							  	"name": "StringParameterNodes",
							  	"relationship": "Self.HistoryStringParameterNode_Unit",
							  	"fromRole": "HistoryStringParameterNode_Unit_Target",
							  	"toRole": "HistoryStringParameterNode_Unit_Source"
							  },
							  {
							  	"name": "UnitProcedures",
							  	"relationship": "Self.HistoryUnitProcedure_Unit",
							  	"fromRole": "HistoryUnitProcedure_Unit_Target",
							  	"toRole": "HistoryUnitProcedure_Unit_Source"
							  },
							  {
							  	"name": "Zone",
							  	"relationship": "Self.HistoryUnit_Zone",
							  	"fromRole": "HistoryUnit_Zone_Source",
							  	"toRole": "HistoryUnit_Zone_Target"
							  }
						  	],
						  	"IdProperty": null,
						  	"Of": "RuntimeUnit",
						  	"commonName": "HistoryUnit",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryBoolParameterNode",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Equipment.Nodes.HistoryBoolParameterNode, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "Index",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "NodeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ConfigurationId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
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
							  	"name": "ConfigurationParentType",
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
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"relationship": "Self.HistoryBoolParameterNodeCommand_UnitNode",
							  	"fromRole": "HistoryBoolParameterNodeCommand_UnitNode_Target",
							  	"toRole": "HistoryBoolParameterNodeCommand_UnitNode_Source"
							  },
							  {
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryBoolParameterNode_MyCommand",
							  	"fromRole": "HistoryBoolParameterNode_MyCommand_Source",
							  	"toRole": "HistoryBoolParameterNode_MyCommand_Target"
							  },
							  {
							  	"name": "States",
							  	"relationship": "Self.HistoryBoolParameterNodeState_UnitNode",
							  	"fromRole": "HistoryBoolParameterNodeState_UnitNode_Target",
							  	"toRole": "HistoryBoolParameterNodeState_UnitNode_Source"
							  },
							  {
							  	"name": "Unit",
							  	"relationship": "Self.HistoryBoolParameterNode_Unit",
							  	"fromRole": "HistoryBoolParameterNode_Unit_Source",
							  	"toRole": "HistoryBoolParameterNode_Unit_Target"
							  },
							  {
							  	"name": "Values",
							  	"relationship": "Self.HistoryBoolParameterNodeValue_UnitNode",
							  	"fromRole": "HistoryBoolParameterNodeValue_UnitNode_Target",
							  	"toRole": "HistoryBoolParameterNodeValue_UnitNode_Source"
							  }
						  	],
						  	"IdProperty": null,
						  	"Of": "RuntimeBoolParameterNode",
						  	"commonName": "HistoryBoolParameterNode",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryBoolParameterNodeCommand",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Equipment.Nodes.HistoryBoolParameterNodeCommand, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "CommandInstanceId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UnitNodeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "IsCurrent",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"name": "CommandInstance",
							  	"relationship": "Self.HistoryBoolParameterNodeCommand_CommandInstance",
							  	"fromRole": "HistoryBoolParameterNodeCommand_CommandInstance_Source",
							  	"toRole": "HistoryBoolParameterNodeCommand_CommandInstance_Target"
							  },
							  {
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryBoolParameterNodeCommand_MyCommand",
							  	"fromRole": "HistoryBoolParameterNodeCommand_MyCommand_Source",
							  	"toRole": "HistoryBoolParameterNodeCommand_MyCommand_Target"
							  },
							  {
							  	"name": "UnitNode",
							  	"relationship": "Self.HistoryBoolParameterNodeCommand_UnitNode",
							  	"fromRole": "HistoryBoolParameterNodeCommand_UnitNode_Source",
							  	"toRole": "HistoryBoolParameterNodeCommand_UnitNode_Target"
							  }
						  	],
						  	"IdProperty": "Id",
						  	"Of": null,
						  	"commonName": "HistoryBoolParameterNodeCommand",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryBoolParameterNodeState",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Equipment.Nodes.HistoryBoolParameterNodeState, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "UnitNodeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "IsCurrent",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryBoolParameterNodeState_MyCommand",
							  	"fromRole": "HistoryBoolParameterNodeState_MyCommand_Source",
							  	"toRole": "HistoryBoolParameterNodeState_MyCommand_Target"
							  },
							  {
							  	"name": "UnitNode",
							  	"relationship": "Self.HistoryBoolParameterNodeState_UnitNode",
							  	"fromRole": "HistoryBoolParameterNodeState_UnitNode_Source",
							  	"toRole": "HistoryBoolParameterNodeState_UnitNode_Target"
							  }
						  	],
						  	"IdProperty": "Id",
						  	"Of": null,
						  	"commonName": "HistoryBoolParameterNodeState",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryBoolParameterNodeValue",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Equipment.Nodes.HistoryBoolParameterNodeValue, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "Value",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UnitNodeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "IsCurrent",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryBoolParameterNodeValue_MyCommand",
							  	"fromRole": "HistoryBoolParameterNodeValue_MyCommand_Source",
							  	"toRole": "HistoryBoolParameterNodeValue_MyCommand_Target"
							  },
							  {
							  	"name": "UnitNode",
							  	"relationship": "Self.HistoryBoolParameterNodeValue_UnitNode",
							  	"fromRole": "HistoryBoolParameterNodeValue_UnitNode_Source",
							  	"toRole": "HistoryBoolParameterNodeValue_UnitNode_Target"
							  }
						  	],
						  	"IdProperty": "Id",
						  	"Of": null,
						  	"commonName": "HistoryBoolParameterNodeValue",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryCommandNode",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Equipment.Nodes.HistoryCommandNode, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "Index",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "NodeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ConfigurationId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
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
							  	"name": "ConfigurationParentType",
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
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"relationship": "Self.HistoryCommandNodeCommand_UnitNode",
							  	"fromRole": "HistoryCommandNodeCommand_UnitNode_Target",
							  	"toRole": "HistoryCommandNodeCommand_UnitNode_Source"
							  },
							  {
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryCommandNode_MyCommand",
							  	"fromRole": "HistoryCommandNode_MyCommand_Source",
							  	"toRole": "HistoryCommandNode_MyCommand_Target"
							  },
							  {
							  	"name": "States",
							  	"relationship": "Self.HistoryCommandNodeState_UnitNode",
							  	"fromRole": "HistoryCommandNodeState_UnitNode_Target",
							  	"toRole": "HistoryCommandNodeState_UnitNode_Source"
							  },
							  {
							  	"name": "Unit",
							  	"relationship": "Self.HistoryCommandNode_Unit",
							  	"fromRole": "HistoryCommandNode_Unit_Source",
							  	"toRole": "HistoryCommandNode_Unit_Target"
							  },
							  {
							  	"name": "Values",
							  	"relationship": "Self.HistoryCommandNodeValue_UnitNode",
							  	"fromRole": "HistoryCommandNodeValue_UnitNode_Target",
							  	"toRole": "HistoryCommandNodeValue_UnitNode_Source"
							  }
						  	],
						  	"IdProperty": null,
						  	"Of": "RuntimeCommandNode",
						  	"commonName": "HistoryCommandNode",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryCommandNodeCommand",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Equipment.Nodes.HistoryCommandNodeCommand, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "CommandInstanceId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UnitNodeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "IsCurrent",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"name": "CommandInstance",
							  	"relationship": "Self.HistoryCommandNodeCommand_CommandInstance",
							  	"fromRole": "HistoryCommandNodeCommand_CommandInstance_Source",
							  	"toRole": "HistoryCommandNodeCommand_CommandInstance_Target"
							  },
							  {
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryCommandNodeCommand_MyCommand",
							  	"fromRole": "HistoryCommandNodeCommand_MyCommand_Source",
							  	"toRole": "HistoryCommandNodeCommand_MyCommand_Target"
							  },
							  {
							  	"name": "UnitNode",
							  	"relationship": "Self.HistoryCommandNodeCommand_UnitNode",
							  	"fromRole": "HistoryCommandNodeCommand_UnitNode_Source",
							  	"toRole": "HistoryCommandNodeCommand_UnitNode_Target"
							  }
						  	],
						  	"IdProperty": "Id",
						  	"Of": null,
						  	"commonName": "HistoryCommandNodeCommand",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryCommandNodeState",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Equipment.Nodes.HistoryCommandNodeState, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "UnitNodeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "IsCurrent",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryCommandNodeState_MyCommand",
							  	"fromRole": "HistoryCommandNodeState_MyCommand_Source",
							  	"toRole": "HistoryCommandNodeState_MyCommand_Target"
							  },
							  {
							  	"name": "UnitNode",
							  	"relationship": "Self.HistoryCommandNodeState_UnitNode",
							  	"fromRole": "HistoryCommandNodeState_UnitNode_Source",
							  	"toRole": "HistoryCommandNodeState_UnitNode_Target"
							  }
						  	],
						  	"IdProperty": "Id",
						  	"Of": null,
						  	"commonName": "HistoryCommandNodeState",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryCommandNodeValue",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Equipment.Nodes.HistoryCommandNodeValue, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "Value",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UnitNodeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "IsCurrent",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryCommandNodeValue_MyCommand",
							  	"fromRole": "HistoryCommandNodeValue_MyCommand_Source",
							  	"toRole": "HistoryCommandNodeValue_MyCommand_Target"
							  },
							  {
							  	"name": "UnitNode",
							  	"relationship": "Self.HistoryCommandNodeValue_UnitNode",
							  	"fromRole": "HistoryCommandNodeValue_UnitNode_Source",
							  	"toRole": "HistoryCommandNodeValue_UnitNode_Target"
							  }
						  	],
						  	"IdProperty": "Id",
						  	"Of": null,
						  	"commonName": "HistoryCommandNodeValue",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryUnitCommand",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Equipment.HistoryUnitCommand, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "CommandInstanceId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UnitId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "IsCurrent",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"name": "CommandInstance",
							  	"relationship": "Self.HistoryUnitCommand_CommandInstance",
							  	"fromRole": "HistoryUnitCommand_CommandInstance_Source",
							  	"toRole": "HistoryUnitCommand_CommandInstance_Target"
							  },
							  {
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryUnitCommand_MyCommand",
							  	"fromRole": "HistoryUnitCommand_MyCommand_Source",
							  	"toRole": "HistoryUnitCommand_MyCommand_Target"
							  },
							  {
							  	"name": "Unit",
							  	"relationship": "Self.HistoryUnitCommand_Unit",
							  	"fromRole": "HistoryUnitCommand_Unit_Source",
							  	"toRole": "HistoryUnitCommand_Unit_Target"
							  }
						  	],
						  	"IdProperty": "Id",
						  	"Of": null,
						  	"commonName": "HistoryUnitCommand",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryDataLogNode",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Equipment.Nodes.HistoryDataLogNode, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "Index",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "NodeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ConfigurationId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
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
							  	"name": "ConfigurationParentType",
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
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"relationship": "Self.HistoryDataLogNodeCommand_UnitNode",
							  	"fromRole": "HistoryDataLogNodeCommand_UnitNode_Target",
							  	"toRole": "HistoryDataLogNodeCommand_UnitNode_Source"
							  },
							  {
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryDataLogNode_MyCommand",
							  	"fromRole": "HistoryDataLogNode_MyCommand_Source",
							  	"toRole": "HistoryDataLogNode_MyCommand_Target"
							  },
							  {
							  	"name": "States",
							  	"relationship": "Self.HistoryDataLogNodeState_UnitNode",
							  	"fromRole": "HistoryDataLogNodeState_UnitNode_Target",
							  	"toRole": "HistoryDataLogNodeState_UnitNode_Source"
							  },
							  {
							  	"name": "Unit",
							  	"relationship": "Self.HistoryDataLogNode_Unit",
							  	"fromRole": "HistoryDataLogNode_Unit_Source",
							  	"toRole": "HistoryDataLogNode_Unit_Target"
							  },
							  {
							  	"name": "Values",
							  	"relationship": "Self.HistoryDataLogNodeValue_UnitNode",
							  	"fromRole": "HistoryDataLogNodeValue_UnitNode_Target",
							  	"toRole": "HistoryDataLogNodeValue_UnitNode_Source"
							  }
						  	],
						  	"IdProperty": null,
						  	"Of": "RuntimeDataLogNode",
						  	"commonName": "HistoryDataLogNode",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryDataLogNodeCommand",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Equipment.Nodes.HistoryDataLogNodeCommand, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "CommandInstanceId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UnitNodeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "IsCurrent",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"name": "CommandInstance",
							  	"relationship": "Self.HistoryDataLogNodeCommand_CommandInstance",
							  	"fromRole": "HistoryDataLogNodeCommand_CommandInstance_Source",
							  	"toRole": "HistoryDataLogNodeCommand_CommandInstance_Target"
							  },
							  {
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryDataLogNodeCommand_MyCommand",
							  	"fromRole": "HistoryDataLogNodeCommand_MyCommand_Source",
							  	"toRole": "HistoryDataLogNodeCommand_MyCommand_Target"
							  },
							  {
							  	"name": "UnitNode",
							  	"relationship": "Self.HistoryDataLogNodeCommand_UnitNode",
							  	"fromRole": "HistoryDataLogNodeCommand_UnitNode_Source",
							  	"toRole": "HistoryDataLogNodeCommand_UnitNode_Target"
							  }
						  	],
						  	"IdProperty": "Id",
						  	"Of": null,
						  	"commonName": "HistoryDataLogNodeCommand",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryDataLogNodeState",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Equipment.Nodes.HistoryDataLogNodeState, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "UnitNodeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "IsCurrent",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryDataLogNodeState_MyCommand",
							  	"fromRole": "HistoryDataLogNodeState_MyCommand_Source",
							  	"toRole": "HistoryDataLogNodeState_MyCommand_Target"
							  },
							  {
							  	"name": "UnitNode",
							  	"relationship": "Self.HistoryDataLogNodeState_UnitNode",
							  	"fromRole": "HistoryDataLogNodeState_UnitNode_Source",
							  	"toRole": "HistoryDataLogNodeState_UnitNode_Target"
							  }
						  	],
						  	"IdProperty": "Id",
						  	"Of": null,
						  	"commonName": "HistoryDataLogNodeState",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryDataLogNodeValue",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Equipment.Nodes.HistoryDataLogNodeValue, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "Value",
							  	"type": "Edm.Double"
							  },
							  {
							  	"name": "UnitNodeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "IsCurrent",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryDataLogNodeValue_MyCommand",
							  	"fromRole": "HistoryDataLogNodeValue_MyCommand_Source",
							  	"toRole": "HistoryDataLogNodeValue_MyCommand_Target"
							  },
							  {
							  	"name": "UnitNode",
							  	"relationship": "Self.HistoryDataLogNodeValue_UnitNode",
							  	"fromRole": "HistoryDataLogNodeValue_UnitNode_Source",
							  	"toRole": "HistoryDataLogNodeValue_UnitNode_Target"
							  }
						  	],
						  	"IdProperty": "Id",
						  	"Of": null,
						  	"commonName": "HistoryDataLogNodeValue",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryDeviceInstance",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Equipment.Devices.HistoryDeviceInstance, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "ConfigurationId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
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
							  	"name": "ConfigurationParentType",
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
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"name": "Device",
							  	"relationship": "Self.HistoryDeviceInstance_Device",
							  	"fromRole": "HistoryDeviceInstance_Device_Source",
							  	"toRole": "HistoryDeviceInstance_Device_Target"
							  },
							  {
							  	"name": "DeviceInstanceDisplays",
							  	"relationship": "Self.HistoryDeviceInstanceDisplay_DeviceInstance",
							  	"fromRole": "HistoryDeviceInstanceDisplay_DeviceInstance_Target",
							  	"toRole": "HistoryDeviceInstanceDisplay_DeviceInstance_Source"
							  },
							  {
							  	"name": "DeviceInstanceTags",
							  	"relationship": "Self.HistoryDeviceInstanceTag_DeviceInstance",
							  	"fromRole": "HistoryDeviceInstanceTag_DeviceInstance_Target",
							  	"toRole": "HistoryDeviceInstanceTag_DeviceInstance_Source"
							  },
							  {
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryDeviceInstance_MyCommand",
							  	"fromRole": "HistoryDeviceInstance_MyCommand_Source",
							  	"toRole": "HistoryDeviceInstance_MyCommand_Target"
							  },
							  {
							  	"name": "Unit",
							  	"relationship": "Self.HistoryDeviceInstance_Unit",
							  	"fromRole": "HistoryDeviceInstance_Unit_Source",
							  	"toRole": "HistoryDeviceInstance_Unit_Target"
							  }
						  	],
						  	"IdProperty": null,
						  	"Of": "RuntimeDeviceInstance",
						  	"commonName": "HistoryDeviceInstance",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryDevice",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Equipment.Devices.HistoryDevice, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "RuntimeId",
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
							  	"name": "ConfigurationParentType",
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
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"name": "DeviceDisplays",
							  	"relationship": "Self.HistoryDeviceDisplay_Device",
							  	"fromRole": "HistoryDeviceDisplay_Device_Target",
							  	"toRole": "HistoryDeviceDisplay_Device_Source"
							  },
							  {
							  	"name": "DeviceInstances",
							  	"relationship": "Self.HistoryDeviceInstance_Device",
							  	"fromRole": "HistoryDeviceInstance_Device_Target",
							  	"toRole": "HistoryDeviceInstance_Device_Source"
							  },
							  {
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryDevice_MyCommand",
							  	"fromRole": "HistoryDevice_MyCommand_Source",
							  	"toRole": "HistoryDevice_MyCommand_Target"
							  },
							  {
							  	"name": "Site",
							  	"relationship": "Self.HistorySite_Devices",
							  	"fromRole": "HistorySite_Devices_Target",
							  	"toRole": "HistorySite_Devices_Source"
							  }
						  	],
						  	"IdProperty": null,
						  	"Of": "RuntimeDevice",
						  	"commonName": "HistoryDevice",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryDeviceDisplay",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Equipment.Devices.HistoryDeviceDisplay, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "ConfigurationId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
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
							  	"name": "ConfigurationParentType",
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
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"name": "Device",
							  	"relationship": "Self.HistoryDeviceDisplay_Device",
							  	"fromRole": "HistoryDeviceDisplay_Device_Source",
							  	"toRole": "HistoryDeviceDisplay_Device_Target"
							  },
							  {
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryDeviceDisplay_MyCommand",
							  	"fromRole": "HistoryDeviceDisplay_MyCommand_Source",
							  	"toRole": "HistoryDeviceDisplay_MyCommand_Target"
							  }
						  	],
						  	"IdProperty": null,
						  	"Of": "RuntimeDeviceDisplay",
						  	"commonName": "HistoryDeviceDisplay",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistorySite",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Organisation.HistorySite, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "RuntimeId",
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
							  	"name": "ConfigurationParentType",
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
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"relationship": "Self.HistoryAlarmSeverity_Site",
							  	"fromRole": "HistoryAlarmSeverity_Site_Target",
							  	"toRole": "HistoryAlarmSeverity_Site_Source"
							  },
							  {
							  	"name": "Clearances",
							  	"relationship": "Self.HistoryClearance_Site",
							  	"fromRole": "HistoryClearance_Site_Target",
							  	"toRole": "HistoryClearance_Site_Source"
							  },
							  {
							  	"name": "Commands",
							  	"relationship": "Self.HistorySiteCommand_Site",
							  	"fromRole": "HistorySiteCommand_Site_Target",
							  	"toRole": "HistorySiteCommand_Site_Source"
							  },
							  {
							  	"name": "Devices",
							  	"relationship": "Self.HistorySite_Devices",
							  	"fromRole": "HistorySite_Devices_Source",
							  	"toRole": "HistorySite_Devices_Target"
							  },
							  {
							  	"name": "Enterprise",
							  	"relationship": "Self.HistoryEnterprise_Sites",
							  	"fromRole": "HistoryEnterprise_Sites_Target",
							  	"toRole": "HistoryEnterprise_Sites_Source"
							  },
							  {
							  	"name": "MyCommand",
							  	"relationship": "Self.HistorySite_MyCommand",
							  	"fromRole": "HistorySite_MyCommand_Source",
							  	"toRole": "HistorySite_MyCommand_Target"
							  },
							  {
							  	"name": "Zones",
							  	"relationship": "Self.HistorySite_Zones",
							  	"fromRole": "HistorySite_Zones_Source",
							  	"toRole": "HistorySite_Zones_Target"
							  }
						  	],
						  	"IdProperty": null,
						  	"Of": "RuntimeSite",
						  	"commonName": "HistorySite",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryAlarmSeverity",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Database.HistoryAlarmSeverity, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "RuntimeId",
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
							  	"name": "ConfigurationParentType",
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
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"relationship": "Self.HistoryAlarmSeverity_Alarms",
							  	"fromRole": "HistoryAlarmSeverity_Alarms_Source",
							  	"toRole": "HistoryAlarmSeverity_Alarms_Target"
							  },
							  {
							  	"name": "Commands",
							  	"relationship": "Self.HistoryAlarmSeverityCommand_AlarmSeverity",
							  	"fromRole": "HistoryAlarmSeverityCommand_AlarmSeverity_Target",
							  	"toRole": "HistoryAlarmSeverityCommand_AlarmSeverity_Source"
							  },
							  {
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryAlarmSeverity_MyCommand",
							  	"fromRole": "HistoryAlarmSeverity_MyCommand_Source",
							  	"toRole": "HistoryAlarmSeverity_MyCommand_Target"
							  },
							  {
							  	"name": "Site",
							  	"relationship": "Self.HistoryAlarmSeverity_Site",
							  	"fromRole": "HistoryAlarmSeverity_Site_Source",
							  	"toRole": "HistoryAlarmSeverity_Site_Target"
							  }
						  	],
						  	"IdProperty": null,
						  	"Of": "RuntimeAlarmSeverity",
						  	"commonName": "HistoryAlarmSeverity",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryAlarmSeverityCommand",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Database.HistoryAlarmSeverityCommand, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "CommandInstanceId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "AlarmSeverityId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "IsCurrent",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"relationship": "Self.HistoryAlarmSeverityCommand_AlarmSeverity",
							  	"fromRole": "HistoryAlarmSeverityCommand_AlarmSeverity_Source",
							  	"toRole": "HistoryAlarmSeverityCommand_AlarmSeverity_Target"
							  },
							  {
							  	"name": "CommandInstance",
							  	"relationship": "Self.HistoryAlarmSeverityCommand_CommandInstance",
							  	"fromRole": "HistoryAlarmSeverityCommand_CommandInstance_Source",
							  	"toRole": "HistoryAlarmSeverityCommand_CommandInstance_Target"
							  },
							  {
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryAlarmSeverityCommand_MyCommand",
							  	"fromRole": "HistoryAlarmSeverityCommand_MyCommand_Source",
							  	"toRole": "HistoryAlarmSeverityCommand_MyCommand_Target"
							  }
						  	],
						  	"IdProperty": "Id",
						  	"Of": null,
						  	"commonName": "HistoryAlarmSeverityCommand",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryClearance",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Security.HistoryClearance, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "RuntimeId",
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
							  	"name": "ConfigurationParentType",
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
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryClearance_MyCommand",
							  	"fromRole": "HistoryClearance_MyCommand_Source",
							  	"toRole": "HistoryClearance_MyCommand_Target"
							  },
							  {
							  	"name": "Site",
							  	"relationship": "Self.HistoryClearance_Site",
							  	"fromRole": "HistoryClearance_Site_Source",
							  	"toRole": "HistoryClearance_Site_Target"
							  }
						  	],
						  	"IdProperty": null,
						  	"Of": "RuntimeClearance",
						  	"commonName": "HistoryClearance",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistorySiteCommand",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Organisation.HistorySiteCommand, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "CommandInstanceId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "SiteId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "IsCurrent",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"name": "CommandInstance",
							  	"relationship": "Self.HistorySiteCommand_CommandInstance",
							  	"fromRole": "HistorySiteCommand_CommandInstance_Source",
							  	"toRole": "HistorySiteCommand_CommandInstance_Target"
							  },
							  {
							  	"name": "MyCommand",
							  	"relationship": "Self.HistorySiteCommand_MyCommand",
							  	"fromRole": "HistorySiteCommand_MyCommand_Source",
							  	"toRole": "HistorySiteCommand_MyCommand_Target"
							  },
							  {
							  	"name": "Site",
							  	"relationship": "Self.HistorySiteCommand_Site",
							  	"fromRole": "HistorySiteCommand_Site_Source",
							  	"toRole": "HistorySiteCommand_Site_Target"
							  }
						  	],
						  	"IdProperty": "Id",
						  	"Of": null,
						  	"commonName": "HistorySiteCommand",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryEnterprise",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Organisation.HistoryEnterprise, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "RuntimeId",
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
							  	"name": "ConfigurationParentType",
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
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"relationship": "Self.HistoryApplication_Enterprises",
							  	"fromRole": "HistoryApplication_Enterprises_Target",
							  	"toRole": "HistoryApplication_Enterprises_Source"
							  },
							  {
							  	"name": "Commands",
							  	"relationship": "Self.HistoryEnterpriseCommand_Enterprise",
							  	"fromRole": "HistoryEnterpriseCommand_Enterprise_Target",
							  	"toRole": "HistoryEnterpriseCommand_Enterprise_Source"
							  },
							  {
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryEnterprise_MyCommand",
							  	"fromRole": "HistoryEnterprise_MyCommand_Source",
							  	"toRole": "HistoryEnterprise_MyCommand_Target"
							  },
							  {
							  	"name": "Sites",
							  	"relationship": "Self.HistoryEnterprise_Sites",
							  	"fromRole": "HistoryEnterprise_Sites_Source",
							  	"toRole": "HistoryEnterprise_Sites_Target"
							  }
						  	],
						  	"IdProperty": null,
						  	"Of": "RuntimeEnterprise",
						  	"commonName": "HistoryEnterprise",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryApplication",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Sys.HistoryApplication, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "RuntimeId",
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
							  	"name": "ConfigurationParentType",
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
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"relationship": "Self.HistoryApplicationCommand_Application",
							  	"fromRole": "HistoryApplicationCommand_Application_Target",
							  	"toRole": "HistoryApplicationCommand_Application_Source"
							  },
							  {
							  	"name": "Enterprises",
							  	"relationship": "Self.HistoryApplication_Enterprises",
							  	"fromRole": "HistoryApplication_Enterprises_Source",
							  	"toRole": "HistoryApplication_Enterprises_Target"
							  },
							  {
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryApplication_MyCommand",
							  	"fromRole": "HistoryApplication_MyCommand_Source",
							  	"toRole": "HistoryApplication_MyCommand_Target"
							  }
						  	],
						  	"IdProperty": null,
						  	"Of": "RuntimeApplication",
						  	"commonName": "HistoryApplication",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryApplicationCommand",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Sys.HistoryApplicationCommand, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "CommandInstanceId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ApplicationId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "IsCurrent",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"relationship": "Self.HistoryApplicationCommand_Application",
							  	"fromRole": "HistoryApplicationCommand_Application_Source",
							  	"toRole": "HistoryApplicationCommand_Application_Target"
							  },
							  {
							  	"name": "CommandInstance",
							  	"relationship": "Self.HistoryApplicationCommand_CommandInstance",
							  	"fromRole": "HistoryApplicationCommand_CommandInstance_Source",
							  	"toRole": "HistoryApplicationCommand_CommandInstance_Target"
							  },
							  {
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryApplicationCommand_MyCommand",
							  	"fromRole": "HistoryApplicationCommand_MyCommand_Source",
							  	"toRole": "HistoryApplicationCommand_MyCommand_Target"
							  }
						  	],
						  	"IdProperty": "Id",
						  	"Of": null,
						  	"commonName": "HistoryApplicationCommand",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryEnterpriseCommand",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Organisation.HistoryEnterpriseCommand, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "CommandInstanceId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "EnterpriseId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "IsCurrent",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"name": "CommandInstance",
							  	"relationship": "Self.HistoryEnterpriseCommand_CommandInstance",
							  	"fromRole": "HistoryEnterpriseCommand_CommandInstance_Source",
							  	"toRole": "HistoryEnterpriseCommand_CommandInstance_Target"
							  },
							  {
							  	"name": "Enterprise",
							  	"relationship": "Self.HistoryEnterpriseCommand_Enterprise",
							  	"fromRole": "HistoryEnterpriseCommand_Enterprise_Source",
							  	"toRole": "HistoryEnterpriseCommand_Enterprise_Target"
							  },
							  {
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryEnterpriseCommand_MyCommand",
							  	"fromRole": "HistoryEnterpriseCommand_MyCommand_Source",
							  	"toRole": "HistoryEnterpriseCommand_MyCommand_Target"
							  }
						  	],
						  	"IdProperty": "Id",
						  	"Of": null,
						  	"commonName": "HistoryEnterpriseCommand",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryDeviceInstanceDisplay",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Equipment.Devices.HistoryDeviceInstanceDisplay, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "ConfigurationId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
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
							  	"name": "ConfigurationParentType",
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
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"name": "DeviceInstance",
							  	"relationship": "Self.HistoryDeviceInstanceDisplay_DeviceInstance",
							  	"fromRole": "HistoryDeviceInstanceDisplay_DeviceInstance_Source",
							  	"toRole": "HistoryDeviceInstanceDisplay_DeviceInstance_Target"
							  },
							  {
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryDeviceInstanceDisplay_MyCommand",
							  	"fromRole": "HistoryDeviceInstanceDisplay_MyCommand_Source",
							  	"toRole": "HistoryDeviceInstanceDisplay_MyCommand_Target"
							  }
						  	],
						  	"IdProperty": null,
						  	"Of": "RuntimeDeviceInstanceDisplay",
						  	"commonName": "HistoryDeviceInstanceDisplay",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryDeviceInstanceTag",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Equipment.Devices.HistoryDeviceInstanceTag, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "ConfigurationId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
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
							  	"name": "ConfigurationParentType",
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
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"name": "DeviceInstance",
							  	"relationship": "Self.HistoryDeviceInstanceTag_DeviceInstance",
							  	"fromRole": "HistoryDeviceInstanceTag_DeviceInstance_Source",
							  	"toRole": "HistoryDeviceInstanceTag_DeviceInstance_Target"
							  },
							  {
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryDeviceInstanceTag_MyCommand",
							  	"fromRole": "HistoryDeviceInstanceTag_MyCommand_Source",
							  	"toRole": "HistoryDeviceInstanceTag_MyCommand_Target"
							  }
						  	],
						  	"IdProperty": null,
						  	"Of": "RuntimeDeviceInstanceTag",
						  	"commonName": "HistoryDeviceInstanceTag",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryDoubleParameterNode",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Equipment.Nodes.HistoryDoubleParameterNode, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "Index",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "NodeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ConfigurationId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
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
							  	"name": "ConfigurationParentType",
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
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"relationship": "Self.HistoryDoubleParameterNodeCommand_UnitNode",
							  	"fromRole": "HistoryDoubleParameterNodeCommand_UnitNode_Target",
							  	"toRole": "HistoryDoubleParameterNodeCommand_UnitNode_Source"
							  },
							  {
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryDoubleParameterNode_MyCommand",
							  	"fromRole": "HistoryDoubleParameterNode_MyCommand_Source",
							  	"toRole": "HistoryDoubleParameterNode_MyCommand_Target"
							  },
							  {
							  	"name": "States",
							  	"relationship": "Self.HistoryDoubleParameterNodeState_UnitNode",
							  	"fromRole": "HistoryDoubleParameterNodeState_UnitNode_Target",
							  	"toRole": "HistoryDoubleParameterNodeState_UnitNode_Source"
							  },
							  {
							  	"name": "Unit",
							  	"relationship": "Self.HistoryDoubleParameterNode_Unit",
							  	"fromRole": "HistoryDoubleParameterNode_Unit_Source",
							  	"toRole": "HistoryDoubleParameterNode_Unit_Target"
							  },
							  {
							  	"name": "Values",
							  	"relationship": "Self.HistoryDoubleParameterNodeValue_UnitNode",
							  	"fromRole": "HistoryDoubleParameterNodeValue_UnitNode_Target",
							  	"toRole": "HistoryDoubleParameterNodeValue_UnitNode_Source"
							  }
						  	],
						  	"IdProperty": null,
						  	"Of": "RuntimeDoubleParameterNode",
						  	"commonName": "HistoryDoubleParameterNode",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryDoubleParameterNodeCommand",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Equipment.Nodes.HistoryDoubleParameterNodeCommand, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "CommandInstanceId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UnitNodeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "IsCurrent",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"name": "CommandInstance",
							  	"relationship": "Self.HistoryDoubleParameterNodeCommand_CommandInstance",
							  	"fromRole": "HistoryDoubleParameterNodeCommand_CommandInstance_Source",
							  	"toRole": "HistoryDoubleParameterNodeCommand_CommandInstance_Target"
							  },
							  {
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryDoubleParameterNodeCommand_MyCommand",
							  	"fromRole": "HistoryDoubleParameterNodeCommand_MyCommand_Source",
							  	"toRole": "HistoryDoubleParameterNodeCommand_MyCommand_Target"
							  },
							  {
							  	"name": "UnitNode",
							  	"relationship": "Self.HistoryDoubleParameterNodeCommand_UnitNode",
							  	"fromRole": "HistoryDoubleParameterNodeCommand_UnitNode_Source",
							  	"toRole": "HistoryDoubleParameterNodeCommand_UnitNode_Target"
							  }
						  	],
						  	"IdProperty": "Id",
						  	"Of": null,
						  	"commonName": "HistoryDoubleParameterNodeCommand",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryDoubleParameterNodeState",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Equipment.Nodes.HistoryDoubleParameterNodeState, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "UnitNodeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "IsCurrent",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryDoubleParameterNodeState_MyCommand",
							  	"fromRole": "HistoryDoubleParameterNodeState_MyCommand_Source",
							  	"toRole": "HistoryDoubleParameterNodeState_MyCommand_Target"
							  },
							  {
							  	"name": "UnitNode",
							  	"relationship": "Self.HistoryDoubleParameterNodeState_UnitNode",
							  	"fromRole": "HistoryDoubleParameterNodeState_UnitNode_Source",
							  	"toRole": "HistoryDoubleParameterNodeState_UnitNode_Target"
							  }
						  	],
						  	"IdProperty": "Id",
						  	"Of": null,
						  	"commonName": "HistoryDoubleParameterNodeState",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryDoubleParameterNodeValue",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Equipment.Nodes.HistoryDoubleParameterNodeValue, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "Value",
							  	"type": "Edm.Double",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UnitNodeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "IsCurrent",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryDoubleParameterNodeValue_MyCommand",
							  	"fromRole": "HistoryDoubleParameterNodeValue_MyCommand_Source",
							  	"toRole": "HistoryDoubleParameterNodeValue_MyCommand_Target"
							  },
							  {
							  	"name": "UnitNode",
							  	"relationship": "Self.HistoryDoubleParameterNodeValue_UnitNode",
							  	"fromRole": "HistoryDoubleParameterNodeValue_UnitNode_Source",
							  	"toRole": "HistoryDoubleParameterNodeValue_UnitNode_Target"
							  }
						  	],
						  	"IdProperty": "Id",
						  	"Of": null,
						  	"commonName": "HistoryDoubleParameterNodeValue",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryIntegerParameterNode",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Equipment.Nodes.HistoryIntegerParameterNode, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "Index",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "NodeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ConfigurationId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
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
							  	"name": "ConfigurationParentType",
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
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"relationship": "Self.HistoryIntegerParameterNodeCommand_UnitNode",
							  	"fromRole": "HistoryIntegerParameterNodeCommand_UnitNode_Target",
							  	"toRole": "HistoryIntegerParameterNodeCommand_UnitNode_Source"
							  },
							  {
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryIntegerParameterNode_MyCommand",
							  	"fromRole": "HistoryIntegerParameterNode_MyCommand_Source",
							  	"toRole": "HistoryIntegerParameterNode_MyCommand_Target"
							  },
							  {
							  	"name": "States",
							  	"relationship": "Self.HistoryIntegerParameterNodeState_UnitNode",
							  	"fromRole": "HistoryIntegerParameterNodeState_UnitNode_Target",
							  	"toRole": "HistoryIntegerParameterNodeState_UnitNode_Source"
							  },
							  {
							  	"name": "Unit",
							  	"relationship": "Self.HistoryIntegerParameterNode_Unit",
							  	"fromRole": "HistoryIntegerParameterNode_Unit_Source",
							  	"toRole": "HistoryIntegerParameterNode_Unit_Target"
							  },
							  {
							  	"name": "Values",
							  	"relationship": "Self.HistoryIntegerParameterNodeValue_UnitNode",
							  	"fromRole": "HistoryIntegerParameterNodeValue_UnitNode_Target",
							  	"toRole": "HistoryIntegerParameterNodeValue_UnitNode_Source"
							  }
						  	],
						  	"IdProperty": null,
						  	"Of": "RuntimeIntegerParameterNode",
						  	"commonName": "HistoryIntegerParameterNode",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryIntegerParameterNodeCommand",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Equipment.Nodes.HistoryIntegerParameterNodeCommand, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "CommandInstanceId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UnitNodeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "IsCurrent",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"name": "CommandInstance",
							  	"relationship": "Self.HistoryIntegerParameterNodeCommand_CommandInstance",
							  	"fromRole": "HistoryIntegerParameterNodeCommand_CommandInstance_Source",
							  	"toRole": "HistoryIntegerParameterNodeCommand_CommandInstance_Target"
							  },
							  {
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryIntegerParameterNodeCommand_MyCommand",
							  	"fromRole": "HistoryIntegerParameterNodeCommand_MyCommand_Source",
							  	"toRole": "HistoryIntegerParameterNodeCommand_MyCommand_Target"
							  },
							  {
							  	"name": "UnitNode",
							  	"relationship": "Self.HistoryIntegerParameterNodeCommand_UnitNode",
							  	"fromRole": "HistoryIntegerParameterNodeCommand_UnitNode_Source",
							  	"toRole": "HistoryIntegerParameterNodeCommand_UnitNode_Target"
							  }
						  	],
						  	"IdProperty": "Id",
						  	"Of": null,
						  	"commonName": "HistoryIntegerParameterNodeCommand",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryIntegerParameterNodeState",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Equipment.Nodes.HistoryIntegerParameterNodeState, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "UnitNodeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "IsCurrent",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryIntegerParameterNodeState_MyCommand",
							  	"fromRole": "HistoryIntegerParameterNodeState_MyCommand_Source",
							  	"toRole": "HistoryIntegerParameterNodeState_MyCommand_Target"
							  },
							  {
							  	"name": "UnitNode",
							  	"relationship": "Self.HistoryIntegerParameterNodeState_UnitNode",
							  	"fromRole": "HistoryIntegerParameterNodeState_UnitNode_Source",
							  	"toRole": "HistoryIntegerParameterNodeState_UnitNode_Target"
							  }
						  	],
						  	"IdProperty": "Id",
						  	"Of": null,
						  	"commonName": "HistoryIntegerParameterNodeState",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryIntegerParameterNodeValue",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Equipment.Nodes.HistoryIntegerParameterNodeValue, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "Value",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UnitNodeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "IsCurrent",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryIntegerParameterNodeValue_MyCommand",
							  	"fromRole": "HistoryIntegerParameterNodeValue_MyCommand_Source",
							  	"toRole": "HistoryIntegerParameterNodeValue_MyCommand_Target"
							  },
							  {
							  	"name": "UnitNode",
							  	"relationship": "Self.HistoryIntegerParameterNodeValue_UnitNode",
							  	"fromRole": "HistoryIntegerParameterNodeValue_UnitNode_Source",
							  	"toRole": "HistoryIntegerParameterNodeValue_UnitNode_Target"
							  }
						  	],
						  	"IdProperty": "Id",
						  	"Of": null,
						  	"commonName": "HistoryIntegerParameterNodeValue",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryUnitInterface",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Equipment.HistoryUnitInterface, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "UnitId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "IsCurrent",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryUnitInterface_MyCommand",
							  	"fromRole": "HistoryUnitInterface_MyCommand_Source",
							  	"toRole": "HistoryUnitInterface_MyCommand_Target"
							  },
							  {
							  	"name": "Unit",
							  	"relationship": "Self.HistoryUnitInterface_Unit",
							  	"fromRole": "HistoryUnitInterface_Unit_Source",
							  	"toRole": "HistoryUnitInterface_Unit_Target"
							  }
						  	],
						  	"IdProperty": "Id",
						  	"Of": null,
						  	"commonName": "HistoryUnitInterface",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryNodePage",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Equipment.NodePages.HistoryNodePage, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "RuntimeId",
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
							  	"name": "ConfigurationParentType",
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
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"relationship": "Self.HistoryNodePageCommand_NodePage",
							  	"fromRole": "HistoryNodePageCommand_NodePage_Target",
							  	"toRole": "HistoryNodePageCommand_NodePage_Source"
							  },
							  {
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryNodePage_MyCommand",
							  	"fromRole": "HistoryNodePage_MyCommand_Source",
							  	"toRole": "HistoryNodePage_MyCommand_Target"
							  },
							  {
							  	"name": "NodePageItems",
							  	"relationship": "Self.HistoryNodePageItem_NodePage",
							  	"fromRole": "HistoryNodePageItem_NodePage_Target",
							  	"toRole": "HistoryNodePageItem_NodePage_Source"
							  },
							  {
							  	"name": "Unit",
							  	"relationship": "Self.HistoryNodePage_Unit",
							  	"fromRole": "HistoryNodePage_Unit_Source",
							  	"toRole": "HistoryNodePage_Unit_Target"
							  }
						  	],
						  	"IdProperty": null,
						  	"Of": "RuntimeNodePage",
						  	"commonName": "HistoryNodePage",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryNodePageCommand",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Equipment.NodePages.HistoryNodePageCommand, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "CommandInstanceId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "NodePageId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "IsCurrent",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"name": "CommandInstance",
							  	"relationship": "Self.HistoryNodePageCommand_CommandInstance",
							  	"fromRole": "HistoryNodePageCommand_CommandInstance_Source",
							  	"toRole": "HistoryNodePageCommand_CommandInstance_Target"
							  },
							  {
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryNodePageCommand_MyCommand",
							  	"fromRole": "HistoryNodePageCommand_MyCommand_Source",
							  	"toRole": "HistoryNodePageCommand_MyCommand_Target"
							  },
							  {
							  	"name": "NodePage",
							  	"relationship": "Self.HistoryNodePageCommand_NodePage",
							  	"fromRole": "HistoryNodePageCommand_NodePage_Source",
							  	"toRole": "HistoryNodePageCommand_NodePage_Target"
							  }
						  	],
						  	"IdProperty": "Id",
						  	"Of": null,
						  	"commonName": "HistoryNodePageCommand",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryNodePageItem",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Equipment.NodePages.HistoryNodePageItem, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "Index",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "NodeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ConfigurationId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
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
							  	"name": "ConfigurationParentType",
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
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"relationship": "Self.HistoryNodePageItemCommand_NodePageItem",
							  	"fromRole": "HistoryNodePageItemCommand_NodePageItem_Target",
							  	"toRole": "HistoryNodePageItemCommand_NodePageItem_Source"
							  },
							  {
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryNodePageItem_MyCommand",
							  	"fromRole": "HistoryNodePageItem_MyCommand_Source",
							  	"toRole": "HistoryNodePageItem_MyCommand_Target"
							  },
							  {
							  	"name": "NodePage",
							  	"relationship": "Self.HistoryNodePageItem_NodePage",
							  	"fromRole": "HistoryNodePageItem_NodePage_Source",
							  	"toRole": "HistoryNodePageItem_NodePage_Target"
							  },
							  {
							  	"name": "States",
							  	"relationship": "Self.HistoryNodePageItemState_NodePageItem",
							  	"fromRole": "HistoryNodePageItemState_NodePageItem_Target",
							  	"toRole": "HistoryNodePageItemState_NodePageItem_Source"
							  }
						  	],
						  	"IdProperty": null,
						  	"Of": "RuntimeNodePageItem",
						  	"commonName": "HistoryNodePageItem",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryNodePageItemCommand",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Equipment.NodePages.HistoryNodePageItemCommand, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "CommandInstanceId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "NodePageItemId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "IsCurrent",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"name": "CommandInstance",
							  	"relationship": "Self.HistoryNodePageItemCommand_CommandInstance",
							  	"fromRole": "HistoryNodePageItemCommand_CommandInstance_Source",
							  	"toRole": "HistoryNodePageItemCommand_CommandInstance_Target"
							  },
							  {
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryNodePageItemCommand_MyCommand",
							  	"fromRole": "HistoryNodePageItemCommand_MyCommand_Source",
							  	"toRole": "HistoryNodePageItemCommand_MyCommand_Target"
							  },
							  {
							  	"name": "NodePageItem",
							  	"relationship": "Self.HistoryNodePageItemCommand_NodePageItem",
							  	"fromRole": "HistoryNodePageItemCommand_NodePageItem_Source",
							  	"toRole": "HistoryNodePageItemCommand_NodePageItem_Target"
							  }
						  	],
						  	"IdProperty": "Id",
						  	"Of": null,
						  	"commonName": "HistoryNodePageItemCommand",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryNodePageItemState",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Equipment.NodePages.HistoryNodePageItemState, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "NodePageItemId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "IsCurrent",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryNodePageItemState_MyCommand",
							  	"fromRole": "HistoryNodePageItemState_MyCommand_Source",
							  	"toRole": "HistoryNodePageItemState_MyCommand_Target"
							  },
							  {
							  	"name": "NodePageItem",
							  	"relationship": "Self.HistoryNodePageItemState_NodePageItem",
							  	"fromRole": "HistoryNodePageItemState_NodePageItem_Source",
							  	"toRole": "HistoryNodePageItemState_NodePageItem_Target"
							  }
						  	],
						  	"IdProperty": "Id",
						  	"Of": null,
						  	"commonName": "HistoryNodePageItemState",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryReportNode",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Equipment.Nodes.HistoryReportNode, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "Index",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "NodeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ConfigurationId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
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
							  	"name": "ConfigurationParentType",
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
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"relationship": "Self.HistoryReportNodeCommand_UnitNode",
							  	"fromRole": "HistoryReportNodeCommand_UnitNode_Target",
							  	"toRole": "HistoryReportNodeCommand_UnitNode_Source"
							  },
							  {
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryReportNode_MyCommand",
							  	"fromRole": "HistoryReportNode_MyCommand_Source",
							  	"toRole": "HistoryReportNode_MyCommand_Target"
							  },
							  {
							  	"name": "States",
							  	"relationship": "Self.HistoryReportNodeState_UnitNode",
							  	"fromRole": "HistoryReportNodeState_UnitNode_Target",
							  	"toRole": "HistoryReportNodeState_UnitNode_Source"
							  },
							  {
							  	"name": "Unit",
							  	"relationship": "Self.HistoryReportNode_Unit",
							  	"fromRole": "HistoryReportNode_Unit_Source",
							  	"toRole": "HistoryReportNode_Unit_Target"
							  },
							  {
							  	"name": "Values",
							  	"relationship": "Self.HistoryReportNodeValue_UnitNode",
							  	"fromRole": "HistoryReportNodeValue_UnitNode_Target",
							  	"toRole": "HistoryReportNodeValue_UnitNode_Source"
							  }
						  	],
						  	"IdProperty": null,
						  	"Of": "RuntimeReportNode",
						  	"commonName": "HistoryReportNode",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryReportNodeCommand",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Equipment.Nodes.HistoryReportNodeCommand, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "CommandInstanceId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UnitNodeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "IsCurrent",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"name": "CommandInstance",
							  	"relationship": "Self.HistoryReportNodeCommand_CommandInstance",
							  	"fromRole": "HistoryReportNodeCommand_CommandInstance_Source",
							  	"toRole": "HistoryReportNodeCommand_CommandInstance_Target"
							  },
							  {
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryReportNodeCommand_MyCommand",
							  	"fromRole": "HistoryReportNodeCommand_MyCommand_Source",
							  	"toRole": "HistoryReportNodeCommand_MyCommand_Target"
							  },
							  {
							  	"name": "UnitNode",
							  	"relationship": "Self.HistoryReportNodeCommand_UnitNode",
							  	"fromRole": "HistoryReportNodeCommand_UnitNode_Source",
							  	"toRole": "HistoryReportNodeCommand_UnitNode_Target"
							  }
						  	],
						  	"IdProperty": "Id",
						  	"Of": null,
						  	"commonName": "HistoryReportNodeCommand",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryReportNodeState",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Equipment.Nodes.HistoryReportNodeState, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "UnitNodeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "IsCurrent",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryReportNodeState_MyCommand",
							  	"fromRole": "HistoryReportNodeState_MyCommand_Source",
							  	"toRole": "HistoryReportNodeState_MyCommand_Target"
							  },
							  {
							  	"name": "UnitNode",
							  	"relationship": "Self.HistoryReportNodeState_UnitNode",
							  	"fromRole": "HistoryReportNodeState_UnitNode_Source",
							  	"toRole": "HistoryReportNodeState_UnitNode_Target"
							  }
						  	],
						  	"IdProperty": "Id",
						  	"Of": null,
						  	"commonName": "HistoryReportNodeState",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryReportNodeValue",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Equipment.Nodes.HistoryReportNodeValue, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "Value",
							  	"type": "Edm.Double",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UnitNodeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "IsCurrent",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryReportNodeValue_MyCommand",
							  	"fromRole": "HistoryReportNodeValue_MyCommand_Source",
							  	"toRole": "HistoryReportNodeValue_MyCommand_Target"
							  },
							  {
							  	"name": "UnitNode",
							  	"relationship": "Self.HistoryReportNodeValue_UnitNode",
							  	"fromRole": "HistoryReportNodeValue_UnitNode_Source",
							  	"toRole": "HistoryReportNodeValue_UnitNode_Target"
							  }
						  	],
						  	"IdProperty": "Id",
						  	"Of": null,
						  	"commonName": "HistoryReportNodeValue",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryStateNode",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Equipment.Nodes.HistoryStateNode, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "Index",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "NodeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ConfigurationId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
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
							  	"name": "ConfigurationParentType",
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
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"relationship": "Self.HistoryStateNodeCommand_UnitNode",
							  	"fromRole": "HistoryStateNodeCommand_UnitNode_Target",
							  	"toRole": "HistoryStateNodeCommand_UnitNode_Source"
							  },
							  {
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryStateNode_MyCommand",
							  	"fromRole": "HistoryStateNode_MyCommand_Source",
							  	"toRole": "HistoryStateNode_MyCommand_Target"
							  },
							  {
							  	"name": "States",
							  	"relationship": "Self.HistoryStateNodeState_UnitNode",
							  	"fromRole": "HistoryStateNodeState_UnitNode_Target",
							  	"toRole": "HistoryStateNodeState_UnitNode_Source"
							  },
							  {
							  	"name": "Unit",
							  	"relationship": "Self.HistoryStateNode_Unit",
							  	"fromRole": "HistoryStateNode_Unit_Source",
							  	"toRole": "HistoryStateNode_Unit_Target"
							  },
							  {
							  	"name": "Values",
							  	"relationship": "Self.HistoryStateNodeValue_UnitNode",
							  	"fromRole": "HistoryStateNodeValue_UnitNode_Target",
							  	"toRole": "HistoryStateNodeValue_UnitNode_Source"
							  }
						  	],
						  	"IdProperty": null,
						  	"Of": "RuntimeStateNode",
						  	"commonName": "HistoryStateNode",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryStateNodeCommand",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Equipment.Nodes.HistoryStateNodeCommand, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "CommandInstanceId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UnitNodeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "IsCurrent",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"name": "CommandInstance",
							  	"relationship": "Self.HistoryStateNodeCommand_CommandInstance",
							  	"fromRole": "HistoryStateNodeCommand_CommandInstance_Source",
							  	"toRole": "HistoryStateNodeCommand_CommandInstance_Target"
							  },
							  {
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryStateNodeCommand_MyCommand",
							  	"fromRole": "HistoryStateNodeCommand_MyCommand_Source",
							  	"toRole": "HistoryStateNodeCommand_MyCommand_Target"
							  },
							  {
							  	"name": "UnitNode",
							  	"relationship": "Self.HistoryStateNodeCommand_UnitNode",
							  	"fromRole": "HistoryStateNodeCommand_UnitNode_Source",
							  	"toRole": "HistoryStateNodeCommand_UnitNode_Target"
							  }
						  	],
						  	"IdProperty": "Id",
						  	"Of": null,
						  	"commonName": "HistoryStateNodeCommand",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryStateNodeState",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Equipment.Nodes.HistoryStateNodeState, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "UnitNodeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "IsCurrent",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryStateNodeState_MyCommand",
							  	"fromRole": "HistoryStateNodeState_MyCommand_Source",
							  	"toRole": "HistoryStateNodeState_MyCommand_Target"
							  },
							  {
							  	"name": "UnitNode",
							  	"relationship": "Self.HistoryStateNodeState_UnitNode",
							  	"fromRole": "HistoryStateNodeState_UnitNode_Source",
							  	"toRole": "HistoryStateNodeState_UnitNode_Target"
							  }
						  	],
						  	"IdProperty": "Id",
						  	"Of": null,
						  	"commonName": "HistoryStateNodeState",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryStateNodeValue",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Equipment.Nodes.HistoryStateNodeValue, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "Value",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UnitNodeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "IsCurrent",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryStateNodeValue_MyCommand",
							  	"fromRole": "HistoryStateNodeValue_MyCommand_Source",
							  	"toRole": "HistoryStateNodeValue_MyCommand_Target"
							  },
							  {
							  	"name": "UnitNode",
							  	"relationship": "Self.HistoryStateNodeValue_UnitNode",
							  	"fromRole": "HistoryStateNodeValue_UnitNode_Source",
							  	"toRole": "HistoryStateNodeValue_UnitNode_Target"
							  }
						  	],
						  	"IdProperty": "Id",
						  	"Of": null,
						  	"commonName": "HistoryStateNodeValue",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryUnitState",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Equipment.HistoryUnitState, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "State",
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
							  	"name": "UnitId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "IsCurrent",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryUnitState_MyCommand",
							  	"fromRole": "HistoryUnitState_MyCommand_Source",
							  	"toRole": "HistoryUnitState_MyCommand_Target"
							  },
							  {
							  	"name": "Unit",
							  	"relationship": "Self.HistoryUnitState_Unit",
							  	"fromRole": "HistoryUnitState_Unit_Source",
							  	"toRole": "HistoryUnitState_Unit_Target"
							  }
						  	],
						  	"IdProperty": "Id",
						  	"Of": null,
						  	"commonName": "HistoryUnitState",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryStringParameterNode",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Equipment.Nodes.HistoryStringParameterNode, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "Index",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "NodeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ConfigurationId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
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
							  	"name": "ConfigurationParentType",
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
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"relationship": "Self.HistoryStringParameterNodeCommand_UnitNode",
							  	"fromRole": "HistoryStringParameterNodeCommand_UnitNode_Target",
							  	"toRole": "HistoryStringParameterNodeCommand_UnitNode_Source"
							  },
							  {
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryStringParameterNode_MyCommand",
							  	"fromRole": "HistoryStringParameterNode_MyCommand_Source",
							  	"toRole": "HistoryStringParameterNode_MyCommand_Target"
							  },
							  {
							  	"name": "States",
							  	"relationship": "Self.HistoryStringParameterNodeState_UnitNode",
							  	"fromRole": "HistoryStringParameterNodeState_UnitNode_Target",
							  	"toRole": "HistoryStringParameterNodeState_UnitNode_Source"
							  },
							  {
							  	"name": "Unit",
							  	"relationship": "Self.HistoryStringParameterNode_Unit",
							  	"fromRole": "HistoryStringParameterNode_Unit_Source",
							  	"toRole": "HistoryStringParameterNode_Unit_Target"
							  },
							  {
							  	"name": "Values",
							  	"relationship": "Self.HistoryStringParameterNodeValue_UnitNode",
							  	"fromRole": "HistoryStringParameterNodeValue_UnitNode_Target",
							  	"toRole": "HistoryStringParameterNodeValue_UnitNode_Source"
							  }
						  	],
						  	"IdProperty": null,
						  	"Of": "RuntimeStringParameterNode",
						  	"commonName": "HistoryStringParameterNode",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryStringParameterNodeCommand",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Equipment.Nodes.HistoryStringParameterNodeCommand, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "CommandInstanceId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UnitNodeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "IsCurrent",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"name": "CommandInstance",
							  	"relationship": "Self.HistoryStringParameterNodeCommand_CommandInstance",
							  	"fromRole": "HistoryStringParameterNodeCommand_CommandInstance_Source",
							  	"toRole": "HistoryStringParameterNodeCommand_CommandInstance_Target"
							  },
							  {
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryStringParameterNodeCommand_MyCommand",
							  	"fromRole": "HistoryStringParameterNodeCommand_MyCommand_Source",
							  	"toRole": "HistoryStringParameterNodeCommand_MyCommand_Target"
							  },
							  {
							  	"name": "UnitNode",
							  	"relationship": "Self.HistoryStringParameterNodeCommand_UnitNode",
							  	"fromRole": "HistoryStringParameterNodeCommand_UnitNode_Source",
							  	"toRole": "HistoryStringParameterNodeCommand_UnitNode_Target"
							  }
						  	],
						  	"IdProperty": "Id",
						  	"Of": null,
						  	"commonName": "HistoryStringParameterNodeCommand",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryStringParameterNodeState",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Equipment.Nodes.HistoryStringParameterNodeState, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "UnitNodeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "IsCurrent",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryStringParameterNodeState_MyCommand",
							  	"fromRole": "HistoryStringParameterNodeState_MyCommand_Source",
							  	"toRole": "HistoryStringParameterNodeState_MyCommand_Target"
							  },
							  {
							  	"name": "UnitNode",
							  	"relationship": "Self.HistoryStringParameterNodeState_UnitNode",
							  	"fromRole": "HistoryStringParameterNodeState_UnitNode_Source",
							  	"toRole": "HistoryStringParameterNodeState_UnitNode_Target"
							  }
						  	],
						  	"IdProperty": "Id",
						  	"Of": null,
						  	"commonName": "HistoryStringParameterNodeState",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryStringParameterNodeValue",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Equipment.Nodes.HistoryStringParameterNodeValue, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "Value",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "UnitNodeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "IsCurrent",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryStringParameterNodeValue_MyCommand",
							  	"fromRole": "HistoryStringParameterNodeValue_MyCommand_Source",
							  	"toRole": "HistoryStringParameterNodeValue_MyCommand_Target"
							  },
							  {
							  	"name": "UnitNode",
							  	"relationship": "Self.HistoryStringParameterNodeValue_UnitNode",
							  	"fromRole": "HistoryStringParameterNodeValue_UnitNode_Source",
							  	"toRole": "HistoryStringParameterNodeValue_UnitNode_Target"
							  }
						  	],
						  	"IdProperty": "Id",
						  	"Of": null,
						  	"commonName": "HistoryStringParameterNodeValue",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryBoolParameterState",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Equipment.Parameters.HistoryBoolParameterState, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "ParameterId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "IsCurrent",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryBoolParameterState_MyCommand",
							  	"fromRole": "HistoryBoolParameterState_MyCommand_Source",
							  	"toRole": "HistoryBoolParameterState_MyCommand_Target"
							  },
							  {
							  	"name": "Parameter",
							  	"relationship": "Self.HistoryBoolParameterState_Parameter",
							  	"fromRole": "HistoryBoolParameterState_Parameter_Source",
							  	"toRole": "HistoryBoolParameterState_Parameter_Target"
							  }
						  	],
						  	"IdProperty": "Id",
						  	"Of": null,
						  	"commonName": "HistoryBoolParameterState",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryBoolParameterValue",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Equipment.Parameters.HistoryBoolParameterValue, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "Value",
							  	"type": "Edm.Boolean"
							  },
							  {
							  	"name": "ParameterId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "IsCurrent",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryBoolParameterValue_MyCommand",
							  	"fromRole": "HistoryBoolParameterValue_MyCommand_Source",
							  	"toRole": "HistoryBoolParameterValue_MyCommand_Target"
							  },
							  {
							  	"name": "Parameter",
							  	"relationship": "Self.HistoryBoolParameterValue_Parameter",
							  	"fromRole": "HistoryBoolParameterValue_Parameter_Source",
							  	"toRole": "HistoryBoolParameterValue_Parameter_Target"
							  }
						  	],
						  	"IdProperty": "Id",
						  	"Of": null,
						  	"commonName": "HistoryBoolParameterValue",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryBoolStepFormulaState",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Batches.Formulae.HistoryBoolStepFormulaState, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "StepFormulaId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "IsCurrent",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryBoolStepFormulaState_MyCommand",
							  	"fromRole": "HistoryBoolStepFormulaState_MyCommand_Source",
							  	"toRole": "HistoryBoolStepFormulaState_MyCommand_Target"
							  },
							  {
							  	"name": "StepFormula",
							  	"relationship": "Self.HistoryBoolStepFormulaState_StepFormula",
							  	"fromRole": "HistoryBoolStepFormulaState_StepFormula_Source",
							  	"toRole": "HistoryBoolStepFormulaState_StepFormula_Target"
							  }
						  	],
						  	"IdProperty": "Id",
						  	"Of": null,
						  	"commonName": "HistoryBoolStepFormulaState",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryBoolStepFormulaValue",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Batches.Formulae.HistoryBoolStepFormulaValue, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "Value",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "StepFormulaId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "IsCurrent",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryBoolStepFormulaValue_MyCommand",
							  	"fromRole": "HistoryBoolStepFormulaValue_MyCommand_Source",
							  	"toRole": "HistoryBoolStepFormulaValue_MyCommand_Target"
							  },
							  {
							  	"name": "StepFormula",
							  	"relationship": "Self.HistoryBoolStepFormulaValue_StepFormula",
							  	"fromRole": "HistoryBoolStepFormulaValue_StepFormula_Source",
							  	"toRole": "HistoryBoolStepFormulaValue_StepFormula_Target"
							  }
						  	],
						  	"IdProperty": "Id",
						  	"Of": null,
						  	"commonName": "HistoryBoolStepFormulaValue",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryStepCommand",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Batches.HistoryStepCommand, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "CommandInstanceId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "StepId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "IsCurrent",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"name": "CommandInstance",
							  	"relationship": "Self.HistoryStepCommand_CommandInstance",
							  	"fromRole": "HistoryStepCommand_CommandInstance_Source",
							  	"toRole": "HistoryStepCommand_CommandInstance_Target"
							  },
							  {
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryStepCommand_MyCommand",
							  	"fromRole": "HistoryStepCommand_MyCommand_Source",
							  	"toRole": "HistoryStepCommand_MyCommand_Target"
							  },
							  {
							  	"name": "Step",
							  	"relationship": "Self.HistoryStepCommand_Step",
							  	"fromRole": "HistoryStepCommand_Step_Source",
							  	"toRole": "HistoryStepCommand_Step_Target"
							  }
						  	],
						  	"IdProperty": "Id",
						  	"Of": null,
						  	"commonName": "HistoryStepCommand",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryStepState",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Batches.HistoryStepState, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "StepStateId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "State",
							  	"type": "Edm.Self.StepState",
							  	"nullable": "false"
							  },
							  {
							  	"name": "StepId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "IsCurrent",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryStepState_MyCommand",
							  	"fromRole": "HistoryStepState_MyCommand_Source",
							  	"toRole": "HistoryStepState_MyCommand_Target"
							  },
							  {
							  	"name": "Step",
							  	"relationship": "Self.HistoryStepState_Step",
							  	"fromRole": "HistoryStepState_Step_Source",
							  	"toRole": "HistoryStepState_Step_Target"
							  }
						  	],
						  	"IdProperty": "Id",
						  	"Of": null,
						  	"commonName": "HistoryStepState",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryCommandClearance",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Security.HistoryCommandClearance, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "ConfigurationId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
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
							  	"name": "ConfigurationParentType",
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
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryCommandClearance_MyCommand",
							  	"fromRole": "HistoryCommandClearance_MyCommand_Source",
							  	"toRole": "HistoryCommandClearance_MyCommand_Target"
							  },
							  {
							  	"name": "Zone",
							  	"relationship": "Self.HistoryCommandClearance_Zone",
							  	"fromRole": "HistoryCommandClearance_Zone_Source",
							  	"toRole": "HistoryCommandClearance_Zone_Target"
							  }
						  	],
						  	"IdProperty": null,
						  	"Of": "RuntimeCommandClearance",
						  	"commonName": "HistoryCommandClearance",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryZoneCommand",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Equipment.HistoryZoneCommand, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "CommandInstanceId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ZoneId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "IsCurrent",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"name": "CommandInstance",
							  	"relationship": "Self.HistoryZoneCommand_CommandInstance",
							  	"fromRole": "HistoryZoneCommand_CommandInstance_Source",
							  	"toRole": "HistoryZoneCommand_CommandInstance_Target"
							  },
							  {
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryZoneCommand_MyCommand",
							  	"fromRole": "HistoryZoneCommand_MyCommand_Source",
							  	"toRole": "HistoryZoneCommand_MyCommand_Target"
							  },
							  {
							  	"name": "Zone",
							  	"relationship": "Self.HistoryZoneCommand_Zone",
							  	"fromRole": "HistoryZoneCommand_Zone_Source",
							  	"toRole": "HistoryZoneCommand_Zone_Target"
							  }
						  	],
						  	"IdProperty": "Id",
						  	"Of": null,
						  	"commonName": "HistoryZoneCommand",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryZoneClearance",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Security.HistoryZoneClearance, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "ConfigurationId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
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
							  	"name": "ConfigurationParentType",
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
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryZoneClearance_MyCommand",
							  	"fromRole": "HistoryZoneClearance_MyCommand_Source",
							  	"toRole": "HistoryZoneClearance_MyCommand_Target"
							  },
							  {
							  	"name": "Signatures",
							  	"relationship": "Self.HistoryZoneClearance_Signatures",
							  	"fromRole": "HistoryZoneClearance_Signatures_Source",
							  	"toRole": "HistoryZoneClearance_Signatures_Target"
							  },
							  {
							  	"name": "Zone",
							  	"relationship": "Self.HistoryZoneClearance_Zone",
							  	"fromRole": "HistoryZoneClearance_Zone_Source",
							  	"toRole": "HistoryZoneClearance_Zone_Target"
							  }
						  	],
						  	"IdProperty": null,
						  	"Of": "RuntimeZoneClearance",
						  	"commonName": "HistoryZoneClearance",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryAlarmValue",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Database.HistoryAlarmValue, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "AlarmId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ConfigurationId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
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
							  	"name": "ConfigurationParentType",
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
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"relationship": "Self.HistoryAlarmValue_Alarm",
							  	"fromRole": "HistoryAlarmValue_Alarm_Source",
							  	"toRole": "HistoryAlarmValue_Alarm_Target"
							  },
							  {
							  	"name": "Commands",
							  	"relationship": "Self.HistoryAlarmValueCommand_AlarmValue",
							  	"fromRole": "HistoryAlarmValueCommand_AlarmValue_Target",
							  	"toRole": "HistoryAlarmValueCommand_AlarmValue_Source"
							  },
							  {
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryAlarmValue_MyCommand",
							  	"fromRole": "HistoryAlarmValue_MyCommand_Source",
							  	"toRole": "HistoryAlarmValue_MyCommand_Target"
							  },
							  {
							  	"name": "Values",
							  	"relationship": "Self.HistoryAlarmValueValue_AlarmValue",
							  	"fromRole": "HistoryAlarmValueValue_AlarmValue_Target",
							  	"toRole": "HistoryAlarmValueValue_AlarmValue_Source"
							  }
						  	],
						  	"IdProperty": null,
						  	"Of": "RuntimeAlarmValue",
						  	"commonName": "HistoryAlarmValue",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryAlarmValueCommand",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Database.HistoryAlarmValueCommand, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "CommandInstanceId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "AlarmValueId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "IsCurrent",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"name": "AlarmValue",
							  	"relationship": "Self.HistoryAlarmValueCommand_AlarmValue",
							  	"fromRole": "HistoryAlarmValueCommand_AlarmValue_Source",
							  	"toRole": "HistoryAlarmValueCommand_AlarmValue_Target"
							  },
							  {
							  	"name": "CommandInstance",
							  	"relationship": "Self.HistoryAlarmValueCommand_CommandInstance",
							  	"fromRole": "HistoryAlarmValueCommand_CommandInstance_Source",
							  	"toRole": "HistoryAlarmValueCommand_CommandInstance_Target"
							  },
							  {
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryAlarmValueCommand_MyCommand",
							  	"fromRole": "HistoryAlarmValueCommand_MyCommand_Source",
							  	"toRole": "HistoryAlarmValueCommand_MyCommand_Target"
							  }
						  	],
						  	"IdProperty": "Id",
						  	"Of": null,
						  	"commonName": "HistoryAlarmValueCommand",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryAlarmValueValue",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Database.HistoryAlarmValueValue, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "Value",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "AlarmValueId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "IsCurrent",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"name": "AlarmValue",
							  	"relationship": "Self.HistoryAlarmValueValue_AlarmValue",
							  	"fromRole": "HistoryAlarmValueValue_AlarmValue_Source",
							  	"toRole": "HistoryAlarmValueValue_AlarmValue_Target"
							  },
							  {
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryAlarmValueValue_MyCommand",
							  	"fromRole": "HistoryAlarmValueValue_MyCommand_Source",
							  	"toRole": "HistoryAlarmValueValue_MyCommand_Target"
							  }
						  	],
						  	"IdProperty": "Id",
						  	"Of": null,
						  	"commonName": "HistoryAlarmValueValue",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryClearanceCommand",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Security.HistoryClearanceCommand, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "CommandInstanceId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ClearanceId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "IsCurrent",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"relationship": "Self.HistoryClearanceCommand_Clearance",
							  	"fromRole": "HistoryClearanceCommand_Clearance_Source",
							  	"toRole": "HistoryClearanceCommand_Clearance_Target"
							  },
							  {
							  	"name": "CommandInstance",
							  	"relationship": "Self.HistoryClearanceCommand_CommandInstance",
							  	"fromRole": "HistoryClearanceCommand_CommandInstance_Source",
							  	"toRole": "HistoryClearanceCommand_CommandInstance_Target"
							  },
							  {
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryClearanceCommand_MyCommand",
							  	"fromRole": "HistoryClearanceCommand_MyCommand_Source",
							  	"toRole": "HistoryClearanceCommand_MyCommand_Target"
							  }
						  	],
						  	"IdProperty": "Id",
						  	"Of": null,
						  	"commonName": "HistoryClearanceCommand",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryCommandClearanceCommand",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Security.HistoryCommandClearanceCommand, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "CommandInstanceId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "CommandClearanceId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "IsCurrent",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"name": "CommandClearance",
							  	"relationship": "Self.HistoryCommandClearanceCommand_CommandClearance",
							  	"fromRole": "HistoryCommandClearanceCommand_CommandClearance_Source",
							  	"toRole": "HistoryCommandClearanceCommand_CommandClearance_Target"
							  },
							  {
							  	"name": "CommandInstance",
							  	"relationship": "Self.HistoryCommandClearanceCommand_CommandInstance",
							  	"fromRole": "HistoryCommandClearanceCommand_CommandInstance_Source",
							  	"toRole": "HistoryCommandClearanceCommand_CommandInstance_Target"
							  },
							  {
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryCommandClearanceCommand_MyCommand",
							  	"fromRole": "HistoryCommandClearanceCommand_MyCommand_Source",
							  	"toRole": "HistoryCommandClearanceCommand_MyCommand_Target"
							  }
						  	],
						  	"IdProperty": "Id",
						  	"Of": null,
						  	"commonName": "HistoryCommandClearanceCommand",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryDeviceCommand",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Equipment.Devices.HistoryDeviceCommand, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "CommandInstanceId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "DeviceId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "IsCurrent",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"name": "CommandInstance",
							  	"relationship": "Self.HistoryDeviceCommand_CommandInstance",
							  	"fromRole": "HistoryDeviceCommand_CommandInstance_Source",
							  	"toRole": "HistoryDeviceCommand_CommandInstance_Target"
							  },
							  {
							  	"name": "Device",
							  	"relationship": "Self.HistoryDeviceCommand_Device",
							  	"fromRole": "HistoryDeviceCommand_Device_Source",
							  	"toRole": "HistoryDeviceCommand_Device_Target"
							  },
							  {
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryDeviceCommand_MyCommand",
							  	"fromRole": "HistoryDeviceCommand_MyCommand_Source",
							  	"toRole": "HistoryDeviceCommand_MyCommand_Target"
							  }
						  	],
						  	"IdProperty": "Id",
						  	"Of": null,
						  	"commonName": "HistoryDeviceCommand",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryDeviceDisplayCommand",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Equipment.Devices.HistoryDeviceDisplayCommand, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "CommandInstanceId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "DeviceDisplayId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "IsCurrent",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"name": "CommandInstance",
							  	"relationship": "Self.HistoryDeviceDisplayCommand_CommandInstance",
							  	"fromRole": "HistoryDeviceDisplayCommand_CommandInstance_Source",
							  	"toRole": "HistoryDeviceDisplayCommand_CommandInstance_Target"
							  },
							  {
							  	"name": "DeviceDisplay",
							  	"relationship": "Self.HistoryDeviceDisplayCommand_DeviceDisplay",
							  	"fromRole": "HistoryDeviceDisplayCommand_DeviceDisplay_Source",
							  	"toRole": "HistoryDeviceDisplayCommand_DeviceDisplay_Target"
							  },
							  {
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryDeviceDisplayCommand_MyCommand",
							  	"fromRole": "HistoryDeviceDisplayCommand_MyCommand_Source",
							  	"toRole": "HistoryDeviceDisplayCommand_MyCommand_Target"
							  }
						  	],
						  	"IdProperty": "Id",
						  	"Of": null,
						  	"commonName": "HistoryDeviceDisplayCommand",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryDeviceInstanceCommand",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Equipment.Devices.HistoryDeviceInstanceCommand, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "CommandInstanceId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "DeviceInstanceId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "IsCurrent",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"name": "CommandInstance",
							  	"relationship": "Self.HistoryDeviceInstanceCommand_CommandInstance",
							  	"fromRole": "HistoryDeviceInstanceCommand_CommandInstance_Source",
							  	"toRole": "HistoryDeviceInstanceCommand_CommandInstance_Target"
							  },
							  {
							  	"name": "DeviceInstance",
							  	"relationship": "Self.HistoryDeviceInstanceCommand_DeviceInstance",
							  	"fromRole": "HistoryDeviceInstanceCommand_DeviceInstance_Source",
							  	"toRole": "HistoryDeviceInstanceCommand_DeviceInstance_Target"
							  },
							  {
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryDeviceInstanceCommand_MyCommand",
							  	"fromRole": "HistoryDeviceInstanceCommand_MyCommand_Source",
							  	"toRole": "HistoryDeviceInstanceCommand_MyCommand_Target"
							  }
						  	],
						  	"IdProperty": "Id",
						  	"Of": null,
						  	"commonName": "HistoryDeviceInstanceCommand",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryDeviceInstanceDisplayCommand",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Equipment.Devices.HistoryDeviceInstanceDisplayCommand, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "CommandInstanceId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "DeviceInstanceDisplayId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "IsCurrent",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"name": "CommandInstance",
							  	"relationship": "Self.HistoryDeviceInstanceDisplayCommand_CommandInstance",
							  	"fromRole": "HistoryDeviceInstanceDisplayCommand_CommandInstance_Source",
							  	"toRole": "HistoryDeviceInstanceDisplayCommand_CommandInstance_Target"
							  },
							  {
							  	"name": "DeviceInstanceDisplay",
							  	"relationship": "Self.HistoryDeviceInstanceDisplayCommand_DeviceInstanceDisplay",
							  	"fromRole": "HistoryDeviceInstanceDisplayCommand_DeviceInstanceDisplay_Source",
							  	"toRole": "HistoryDeviceInstanceDisplayCommand_DeviceInstanceDisplay_Target"
							  },
							  {
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryDeviceInstanceDisplayCommand_MyCommand",
							  	"fromRole": "HistoryDeviceInstanceDisplayCommand_MyCommand_Source",
							  	"toRole": "HistoryDeviceInstanceDisplayCommand_MyCommand_Target"
							  }
						  	],
						  	"IdProperty": "Id",
						  	"Of": null,
						  	"commonName": "HistoryDeviceInstanceDisplayCommand",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryDeviceInstanceTagCommand",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Equipment.Devices.HistoryDeviceInstanceTagCommand, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "CommandInstanceId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "DeviceInstanceTagId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "IsCurrent",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"name": "CommandInstance",
							  	"relationship": "Self.HistoryDeviceInstanceTagCommand_CommandInstance",
							  	"fromRole": "HistoryDeviceInstanceTagCommand_CommandInstance_Source",
							  	"toRole": "HistoryDeviceInstanceTagCommand_CommandInstance_Target"
							  },
							  {
							  	"name": "DeviceInstanceTag",
							  	"relationship": "Self.HistoryDeviceInstanceTagCommand_DeviceInstanceTag",
							  	"fromRole": "HistoryDeviceInstanceTagCommand_DeviceInstanceTag_Source",
							  	"toRole": "HistoryDeviceInstanceTagCommand_DeviceInstanceTag_Target"
							  },
							  {
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryDeviceInstanceTagCommand_MyCommand",
							  	"fromRole": "HistoryDeviceInstanceTagCommand_MyCommand_Source",
							  	"toRole": "HistoryDeviceInstanceTagCommand_MyCommand_Target"
							  }
						  	],
						  	"IdProperty": "Id",
						  	"Of": null,
						  	"commonName": "HistoryDeviceInstanceTagCommand",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryGroupCommand",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Security.HistoryGroupCommand, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "CommandInstanceId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "GroupId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "IsCurrent",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"name": "CommandInstance",
							  	"relationship": "Self.HistoryGroupCommand_CommandInstance",
							  	"fromRole": "HistoryGroupCommand_CommandInstance_Source",
							  	"toRole": "HistoryGroupCommand_CommandInstance_Target"
							  },
							  {
							  	"name": "Group",
							  	"relationship": "Self.HistoryGroupCommand_Group",
							  	"fromRole": "HistoryGroupCommand_Group_Source",
							  	"toRole": "HistoryGroupCommand_Group_Target"
							  },
							  {
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryGroupCommand_MyCommand",
							  	"fromRole": "HistoryGroupCommand_MyCommand_Source",
							  	"toRole": "HistoryGroupCommand_MyCommand_Target"
							  }
						  	],
						  	"IdProperty": "Id",
						  	"Of": null,
						  	"commonName": "HistoryGroupCommand",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistorySignatureCommand",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Security.HistorySignatureCommand, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "CommandInstanceId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "SignatureId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "IsCurrent",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"name": "CommandInstance",
							  	"relationship": "Self.HistorySignatureCommand_CommandInstance",
							  	"fromRole": "HistorySignatureCommand_CommandInstance_Source",
							  	"toRole": "HistorySignatureCommand_CommandInstance_Target"
							  },
							  {
							  	"name": "MyCommand",
							  	"relationship": "Self.HistorySignatureCommand_MyCommand",
							  	"fromRole": "HistorySignatureCommand_MyCommand_Source",
							  	"toRole": "HistorySignatureCommand_MyCommand_Target"
							  },
							  {
							  	"name": "Signature",
							  	"relationship": "Self.HistorySignatureCommand_Signature",
							  	"fromRole": "HistorySignatureCommand_Signature_Source",
							  	"toRole": "HistorySignatureCommand_Signature_Target"
							  }
						  	],
						  	"IdProperty": "Id",
						  	"Of": null,
						  	"commonName": "HistorySignatureCommand",
						  	"flexibleRelations": []
						  },
						  {
						  	"name": "HistoryZoneClearanceCommand",
						  	"customannotation:ClrType": "SiGyl.Models.Areas.History.Security.HistoryZoneClearanceCommand, SiGyl.Models.Areas.History, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
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
							  	"name": "CommandInstanceId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ZoneClearanceId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RuntimeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "IsCurrent",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "MyCommandId",
							  	"type": "Edm.Int32"
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
							  	"name": "CommandInstance",
							  	"relationship": "Self.HistoryZoneClearanceCommand_CommandInstance",
							  	"fromRole": "HistoryZoneClearanceCommand_CommandInstance_Source",
							  	"toRole": "HistoryZoneClearanceCommand_CommandInstance_Target"
							  },
							  {
							  	"name": "MyCommand",
							  	"relationship": "Self.HistoryZoneClearanceCommand_MyCommand",
							  	"fromRole": "HistoryZoneClearanceCommand_MyCommand_Source",
							  	"toRole": "HistoryZoneClearanceCommand_MyCommand_Target"
							  },
							  {
							  	"name": "ZoneClearance",
							  	"relationship": "Self.HistoryZoneClearanceCommand_ZoneClearance",
							  	"fromRole": "HistoryZoneClearanceCommand_ZoneClearance_Source",
							  	"toRole": "HistoryZoneClearanceCommand_ZoneClearance_Target"
							  }
						  	],
						  	"IdProperty": "Id",
						  	"Of": null,
						  	"commonName": "HistoryZoneClearanceCommand",
						  	"flexibleRelations": []
						  }
						]
					}
				}
			}
		};

	});

}).call(this);
