import { BabyLogService } from '../../application/babyLogs/BabyLog.service';
import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import InputLogDto from '../../application/babyLogs/dto/inputLogDto';

@Controller('babyLogs')
export class BabyLogController {
  constructor(private readonly babyLogService: BabyLogService) {}

  @Post()
  addLog(@Body() logInfo: InputLogDto) {
    const result = this.babyLogService.addLog(logInfo);
    return result;
  }

  @Get(':target')
  getLogsByTarget(
    @Param('target') target: string,
    @Query('searchDate') searchDate: string,
  ) {
    const searchData = this.babyLogService.getLogsByTarget(target, searchDate);
    return searchData;
  }
}
