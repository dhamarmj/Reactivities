using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Application.Activities;
using Domain;
using Microsoft.AspNetCore.Mvc;


namespace API.Controllers
{
    public class ActivitiesController : BaseAPIController
    {

        [HttpGet]
        public async Task<ActionResult> GetActivities()
        {
            var result = await Mediator.Send(new List.Query());
            return HandleResult(result);
        }
        [HttpGet("{id}")]
        public async Task<ActionResult> GetActivity(Guid id)
        {
            var result = await Mediator.Send(new Details.Query { Id = id });
            return HandleResult(result);
        }

        [HttpPost]
        public async Task<IActionResult> CreateACtivity(Activity activity)
        {
            return HandleResult(await Mediator.Send(new Create.Command { Activity = activity })); ;
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateActivity(Guid id, Activity activity)
        {
            activity.Id = id;
            return HandleResult(await Mediator.Send(new Update.Command { Activity = activity }));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteActivity(Guid id)
        {
            return HandleResult(await Mediator.Send(new Delete.Command { Id = id }));
        }


    }
}