import StorageService from '@/services/storage/StorageService'
import SetupService from '@/services/setup/SetupService'
import EmitService from '@/services/emit/EmitService'
import StatusService from '@/services/status/StatusService'

export default class Services {

  history: any[]

  setup: SetupService | any
  storage: StorageService | any
  emit: EmitService | any
  status: StatusService | any


  constructor(options: any) {
    this.history = []
    
    this.storage = new StorageService()
    this.setup = new SetupService(options)
    this.emit = new EmitService(options.PORTS)
    this.status = new StatusService()
    
    

  }

}

